<template>
  <div style="display: inline-flex; place-items: center">
    <b-form-checkbox
      id="autofilter"
      v-model="status"
      name="autofilter"
      value="accepted"
      unchecked-value="not_accepted"
      @change="handleCheckboxChange"
    >
      Autofiltr
    </b-form-checkbox>

    <div style="display: flex" v-if="status === `not_accepted`">
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
  </div>
</template>

<script>
import { getProducts, getUserProducts, getUserSex, getUserStyles } from "@/firestore";

export default {
  data() {
    return {
      tags: null,
      selectedTag: [],
      status: "accepted",
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
    async handleCheckboxChange() {
      this.selectedTag = [];
      if (this.status === "accepted") {
        var UserSex = await getUserSex();
        if(UserSex == "male"){
          this.selectedTag.push("men");
        }else
        {
          if(UserSex == "female")
          {
            this.selectedTag.push("women");
          }
        }
        var userStyles = await getUserStyles();
        if (userStyles) {
          userStyles.forEach((el, index, array) => {
            array[index] = el.toLowerCase();
          });
          // Convert userStyles array to a single string
          userStyles = userStyles.join(" ");

          // Iterate over the values of the tags object
          Object.values(this.tags).forEach((tag) => {
            tag.forEach((val)=>{
              if (userStyles.includes(val)) {
                this.selectedTag.push(val);
              }
            })
          });
        }
      }
      this.$emit("send-data", this.selectedTag);
    },
  },
};
</script>

<style></style>
