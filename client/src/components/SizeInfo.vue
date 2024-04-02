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
import SizeForm from './SizeForm.vue';
var form = SizeForm.data().form;

export default {
  name: "SizeInfo",
  props: ["isVisable"],

  data() {
    return {
      form: form,
      sizes: [],
    };
  },
  created() {
    this.sizes = Object.keys(this.form);
    if (localStorage.getItem("LookLoomUserSizes")) {
      this.form = JSON.parse(localStorage.getItem("LookLoomUserSizes"));
    }
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
