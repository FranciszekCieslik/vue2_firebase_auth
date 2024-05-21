<template>
  <div style="display: flex">
    <div v-for="(val, key) in tags" :key="key" style="padding: 10px">
      <b-dropdown
        :text="key"
        :id="'dropdown-' + key"
        class="m-2"
        variant="outline-dark"
      >
        <b-dropdown-item
          :id="'deopdown-item-' + el"
          v-for="el in val"
          @click="select(el)"
          :key="el"
          >{{ el }}
          <b-icon
            v-if="isSelected(el)"
            icon="check-circle-fill"
            variant="dark"
          ></b-icon>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import { getProducts, getUserProducts } from "@/firestore";

export default {
  data() {
    return {
      tags: null,
      selectedTag: [],
    };
  },
  async created() {
    try {
      var products = await getProducts();
      var indexes = await getUserProducts();
      products = products.filter((product) => {
        return !indexes.includes(product.index);
      });
      var tags = [];
      products.forEach((element) => {
        tags.push(element.tag);
      });

      const combinedTags = tags.reduce((acc, currentTag) => {
        Object.entries(currentTag).forEach(([key, value]) => {
          if (!acc[key]) {
            acc[key] = new Set();
          }
          acc[key].add(value);
        });
        return acc;
      }, {});

      for (const key in combinedTags) {
        combinedTags[key] = Array.from(combinedTags[key]);
      }
      combinedTags.colour = [...new Set(combinedTags.colour.flat())];
      combinedTags.style = [...new Set(combinedTags.style.flat())];

      this.tags = combinedTags;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  methods: {
    select(el) {
      var selected = this.selectedTag;
      if (selected.includes(el)) {
        selected = selected.filter((tag) => tag !== el);
      } else {
        selected.push(el);
      }
      this.selectedTag = selected;
      this.$emit("send-data", selected);
    },

    isSelected(el) {
      if (this.selectedTag.includes(el)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
