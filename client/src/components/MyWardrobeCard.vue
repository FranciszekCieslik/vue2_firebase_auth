<template>
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
</template>

<script>
import ProductCard from "./items/ProductCard.vue";
import { getProducts, getUserProducts } from "@/firestore";

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      products: null,
    };
  },

  async created() {
    try {
      var indexes = await getUserProducts();
      var products = await getProducts();
      this.products = products.filter((product) => {
        return indexes.includes(product.index);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  methods: {},
};
</script>
