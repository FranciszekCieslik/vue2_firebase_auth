<template>
  <div style="display: inline-flex">
    <div class="radio">
      <input
        type="radio"
        name="some-radio"
        :value="name"
        @change="handleRadioChange"
        :checked="selectedOption === name"
      />
      <label>{{ name }}</label>
    </div>
  </div>
</template>

<script>
import { getUserSex, updateUserSex } from "@/firestore";

export default {
  props: {
    name: String,
    color: String,
  },
  data() {
    return {
      selectedOption: null,
    };
  },

  async created() {
    var selected = await getUserSex();
    this.selectedOption = selected;
  },

  methods: {
    async handleRadioChange(event) {
      this.selectedOption = event.target.value;
      await updateUserSex(this.selectedOption);
    },
  },
};
</script>

<style>
.radio {
  display: flex;
  align-items: center;
  margin: 1rem;
}

.radio label {
  margin-left: 0.5rem;
  padding:0;
  align-items: center;
}
</style>
