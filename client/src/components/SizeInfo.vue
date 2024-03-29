<template>
  <b-card bg-variant="light" class="prompt" v-if="isVisable">
    <div>
      <h5 v-for="size in sizes" :key="size">
        {{ size }}: {{ form[size] }}
      </h5>
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
const sizes = Object.keys(form);

export default {
  name: "SizeInfo",
  props: ["isVisable"], 

  data() {
    return {
      form: form,
      sizes: sizes,
    };
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
