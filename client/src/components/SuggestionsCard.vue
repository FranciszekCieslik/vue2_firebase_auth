<template>
  <div>
    <b-card-group>
      <ProductCard
        name="Test"
        index="1"
        url=""
        img="https://img01.ztat.net/article/spp-media-p1/778f6ac62eb647788c0d59c466c8d2b1/8728a1b0d0c04bbca9d34bcc1016d507.jpg?imwidth=300"
        description="Informacje i opis..."
      />
     <ProductCard
        name="Test2"
        index="2"
        url=""
        img="https://img01.ztat.net/article/spp-media-p1/778f6ac62eb647788c0d59c466c8d2b1/8728a1b0d0c04bbca9d34bcc1016d507.jpg?imwidth=300"
        description="Informacje i opis..."
      />
    </b-card-group>
  </div>
</template>

<script>
import ProductCard from "./items/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>
