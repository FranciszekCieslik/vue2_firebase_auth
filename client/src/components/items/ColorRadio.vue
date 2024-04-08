<template>
        <div class="color-radio">
          <input
            type="radio"
            name="some-radios"
            :value="name"
            @change="handleRadioChange"
            :checked="selectedOption === name"
          />
          <div class="color-box" :style="{ backgroundColor: color }"></div>
          <label for="radio-blue">{{ name }}</label>
        </div>
  </template>
  
  <script>
  export default {
    props:{
        name: String,
        color: String
    },
    data() {
      return {
        selectedOption: null,
      };
    },
    methods: {
      handleRadioChange(event) {
        this.selectedOption = event.target.value;
      },
    },
  };
  </script>
  
  <style>
  .color-radio {
    display: flex;
    align-items: center;
    margin: 1rem;
  }
  
  .color-box {
    width: 2rem;
    height: 2rem;
    margin-inline: 0.5rem;
  }
  
  .color-radio label {
    margin-left: 0.5rem;
  }
  </style>