<template>
  <b-container style="max-width: 20rem">
    <b-row class="maincard">
      <b-col style="background-color: whitesmoke; padding: 0">
        <b-card overlay :img-src="img" img-alt="Image" img-top class="mb-2">
          <div class="left-down-container">
            <b-badge variant="light">
              <b-link :href="url" target="_blank" style="color: black">
                <b-icon icon="bag" aria-hidden="true"></b-icon>

                Buy</b-link
              >
            </b-badge>
          </div>
          <div class="square-container" @click="liked">
            <b-icon id="heartIco" v-if="!like" icon="heart" scale="2"></b-icon>
            <b-icon
              v-if="like"
              icon="heart-fill"
              scale="2"
              style="color: red"
            ></b-icon>
          </div>
        </b-card>
        <div>
          <h5 v-b-toggle="'collapse-' + index" class="m-1">{{ name }}</h5>
          <b-collapse :id="'collapse-' + index">
            <b-card> </b-card>
          </b-collapse>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { updateUserProducts } from "@/firestore";
import { getUserProducts } from "@/firestore";

export default {
  props: {
    name: String,
    index: Number,
    url: String,
    img: String,
    tag: [],
  },

  data() {
    return {
      like: false,
    };
  },

  async created(){
    var products = await getUserProducts();
    if(products && products.includes(this.index)){
      this.like = true;
    }
  },

  methods: {
    async liked() {
      this.like = !this.like;
      var products = await getUserProducts();
      if(!products){
        products = []
      }
      if (this.like) {
        if (!products.includes(this.index)) {
          products.push(this.index);
        }
      } else {
        if (products.includes(this.index)) {
          products = products.filter((product) => product !== this.index);
        }
      }
      await updateUserProducts(products);
    },
  },
};
</script>

<style>
.square-container {
  background-color: rgba(240, 255, 255, 0.3);
  width: 40px; /* Adjust width as needed */
  height: 40px; /* Set the height equal to the width */
  position: absolute;
  top: 5%; /* Set 5% from the top */
  right: 0; /* Set 5% from the right */
  display: flex;
  justify-content: center;
  align-items: center;
}

.square-container:hover {
  background-color: rgba(220, 235, 235, 0.9);
}

.left-down-container {
  bottom: 5%;
  left: 2%;
  position: absolute;
  justify-content: left;
  align-items: left;
  visibility: hidden;
}

.maincard:hover .left-down-container {
  visibility: visible;
}
</style>
