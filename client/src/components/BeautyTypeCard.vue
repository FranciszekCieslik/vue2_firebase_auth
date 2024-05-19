<template>
  <div @click="saveRadio">
    <b-card bg-variant="light">
      <h4>Eye Color</h4>
      <form>
        <div
          class="radio-color-container"
          v-for="eye in eyeColor"
          :key="eye.name"
        >
          <ColorRadio :show="true" :name="eye.name" :color="eye.color" />
        </div>
      </form>
    </b-card>
    <hr />
    <b-card bg-variant="light">
      <h4>Skin Tones</h4>
      <form>
        <div
          class="radio-color-container"
          v-for="skin in skinTones"
          :key="skin.name"
        >
          <ColorRadio :show="false" :name="skin.name" :color="skin.color" />
        </div>
      </form>
    </b-card>
    <hr />
    <b-card bg-variant="light">
      <h4>Hair Color</h4>
      <form>
        <div
          class="radio-color-container"
          v-for="hair in hairColor"
          :key="hair.name"
        >
          <ColorRadio :show="false" :name="hair.name" :color="hair.color" />
        </div>
      </form>
    </b-card>
  </div>
</template>

<script>
import ColorRadio from "@/components/items/ColorRadio.vue";
import {getUserBeauties, updateUserBeauties} from "@/firestore";

export default {
  components: {
    ColorRadio,
  },

  data() {
    return {
      chosenRadio: [],
      eyeColor: [
        { name: "Blue", color: "rgb(20, 132, 181)" },
        { name: "Black", color: "rgb(12, 12, 12)" },
        { name: "Brown", color: "rgb(115, 62, 9)" },
        { name: "Green", color: "rgb(5, 108, 41)" },
        { name: "Grey", color: "rgb(67, 82, 82)" },
      ],
      skinTones: [
        { name: "pale", color: "rgb(255, 224, 196)" },
        { name: "medium beige", color: "rgb(224, 177, 132)" },
        { name: "golden beige", color: "rgb(208, 146, 110)" },
        { name: "olive brown", color: "rgb(190, 114, 60)" },
        { name: "deep brown", color: "rgb(91, 0, 0)" },
      ],
      hairColor: [
        { name: "deep black", color: "rgb(9, 8, 6)" },
        { name: "black", color: "rgb(44, 34, 43)" },
        { name: "brown", color: "rgb(106, 78, 66)" },
        { name: "blond", color: "rgb(222, 188, 153)" },
        { name: "red", color: "rgb(181, 82, 57)" },
      ],
    };
  },

  async beforeCreate() {
    var sortedRadio = await getUserBeauties();
    if (!sortedRadio) {
      this.chosenRadio = [];
    }else{
      this.chosenRadio = sortedRadio;
    }  
    this.checkRadio();
  },
  
  methods: {
    checkRadio() {
      this.chosenRadio.forEach((val)=>{
        var radio = document.querySelector(`input[type="radio"][value="${val}"]`);
        radio.checked = true;
      })
    },

    async saveRadio() {
      this.chosenRadio = [];
      var Radios = document.querySelectorAll('input[type="radio"]:checked');
      Radios.forEach((radio) => {
        this.chosenRadio.push(radio.value);
      });
      await updateUserBeauties(this.chosenRadio);
    },
  },
};
</script>

<style>
.radio-color-container {
  display: contents;
}
</style>
