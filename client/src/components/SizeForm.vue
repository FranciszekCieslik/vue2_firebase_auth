<template>
  <div>
    <b-card
      bg-variant="light"
      header="My Sizes"
      text-variant="black"
      class="text-center"
      v-if="isVisable"
    >
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          v-for="(size, index) in sizes"
          :key="size"
          :id="'fieldset-horizontal-' + index"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          :label="size"
          :label-for="'input-' + index"
        >
          <b-form-input
            :id="'input-' + index"
            v-model="form[size]"
            type="number"
            :placeholder="conditions[index].placeholder"
            :min="conditions[index].min"
            :max="conditions[index].max"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-button
          @click="show"
          style="margin: 20px"
          type="reset"
          variant="danger"
          >Cancel</b-button
        >
        <b-button type="submit" variant="info">Save</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import router from "@/router";
import { getUserSizes, updateUserSizes } from "@/firestore";

export default {
  name: "SizeForm",
  props: ["isVisable"],

  data() {
    return {
      form: {
        Hight: "",
        Neck: "",
        "Front length": "",
        Shoulder: "",
        Chest: "",
        Waist: "",
        Hip: "",
        "Leg length": "",
        "Foot Size": "",
      },

      sizes: [],

      conditions: [
        { placeholder: "170 cm", min: "100", max: "300" },
        { placeholder: "35 cm", min: "30", max: "46" },
        { placeholder: "60 cm", min: "50", max: "80" },
        { placeholder: "50 cm", min: "30", max: "70" },
        { placeholder: "90 cm", min: "70", max: "130" },
        { placeholder: "80 cm", min: "60", max: "110" },
        { placeholder: "80 cm", min: "60", max: "120" },
        { placeholder: "80 cm", min: "60", max: "100" },
        { placeholder: "38", min: "32", max: "48" },
      ],
    };
  },

  async created() {
    this.sizes = Object.keys(this.form);
    this.form = await getUserSizes();
  },

  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.$emit("show");
      await updateUserSizes(this.form);
      router.go();
    },

    onReset(event) {
      event.preventDefault();
    },

    show() {
      this.$emit("show");
    },
  },
};
</script>

<style>
.prompt {
  margin: 40px;
  padding: 40px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}
</style>
