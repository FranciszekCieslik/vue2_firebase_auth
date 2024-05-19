<template>
    <b-card bg-variant="light" header="My Sizes" text-variant="black" class="text-center" v-if="isVisable">
    <div>
      <p v-for="size in sizes" :key="size">{{ size }}: {{ form[size] }}</p>
    </div>
    <b-button variant="info" @click="show">
      <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
      Edit</b-button
    >
  </b-card>
</template>

<script>
import { getUserSizes } from '@/firestore';
import SizeForm from './SizeForm.vue';

export default {
  name: "SizeInfo",
  props: ["isVisable"],

  data() {
    return {
      form: null,
      sizes: [],
    };
  },

  async created() {
    this.form = SizeForm.data().form;
    this.sizes = Object.keys(this.form);
    this.form = await getUserSizes();
  },

  methods: {
    show() {
      this.$emit("show");
    },
  },
};
</script>

<style>
.prompt {
  margin: 30px auto;
  padding: 25px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}
</style>
