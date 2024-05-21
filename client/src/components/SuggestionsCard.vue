<template>
  <div>
    <filterBlock @send-data="handleData"/>
  <div style="display: flex">
    <b-card-group
      v-for="product in products"
      :key="product.name"
      style="margin: 20px; flex-wrap: nowrap"
    >
      <ProductCard
        :name="product.name"
        :index="product.index"
        :url="product.url"
        :img="product.img"
        :tag="product.tag"
      />
    </b-card-group>
  </div>
  </div>
</template>

<script>
import filterBlock from "./items/filterBlock.vue";
import ProductCard from "./items/ProductCard.vue";
import { getProducts, getUserProducts } from "@/firestore";

export default {
  components: {
    ProductCard,
    filterBlock,
  },

  data() {
    return {
      products: null
    };
  },

  async created() {
    await this.importProducts();
  },

  methods: {
    async importProducts() {
      try {
        const products = await getProducts();
        var indexes = await getUserProducts();
        this.products = products.filter((product) => {
          return !indexes.includes(product.index);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async handleData(data) {
      var selectedTags = await data;
      await this.importProducts();
      var products = this.products;
      var filteredProducts = products.filter((product) => {
        var tagList = Object.values(product.tag);
        tagList = tagList.reduce((acc, val) => acc.concat(val), []);
        return selectedTags.some((element) => tagList.includes(element));
      });

      if (filteredProducts.length == 0) {
        await this.importProducts();
      } else {
        this.products = filteredProducts;
      }
    }
  },
};
</script>
