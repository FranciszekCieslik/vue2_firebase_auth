<template>
  <div>
    <b-card bg-variant="light">
      <h4> Eye Color </h4>
      <form>
          <div class="radio-color-container">
            <ColorRadio name="Blue" color="rgb(20, 132, 181)"/> 
            <ColorRadio name="Black" color="rgb(12, 12, 12)" />
            <ColorRadio name="Brown" color="rgb(115, 62, 9)" />
            <ColorRadio name="Green" color="rgb(5, 108, 41)" />
            <ColorRadio name="Grey" color="rgb(67, 82, 82)" />
          </div>
      </form>
        </b-card>
        <hr>
        <b-card bg-variant="light">
          <h4> Skin Tones </h4> 
          <form>
              <div class="radio-color-container">
                <ColorRadio name="" color="rgb(255, 224, 196)"/> 
                <ColorRadio name="" color="rgb(224, 177, 132)" />
                <ColorRadio name="" color="rgb(208, 146, 110)" />
                <ColorRadio name="" color="rgb(190, 114, 60)" />
                <ColorRadio name="" color="rgb(91, 0, 0)" />
            </div>
        </form>
          </b-card>
          <hr>
    <b-card bg-variant="light">
      <h4> Hair Color </h4> 
      <form>
        <div class="radio-color-container">
          <ColorRadio name="" color="rgb(9, 8, 6)"/> 
          <ColorRadio name="" color="rgb(44, 34, 43)" />
          <ColorRadio name="" color="rgb(106, 78, 66)" />
          <ColorRadio name="" color="rgb(222, 188, 153)" />
          <ColorRadio name="" color="rgb(181, 82, 57)" />
        </div>
      </form>
      </b-card>
    </div>
</template>

<script>
import ColorRadio from "@/components/items/ColorRadio.vue";

export default {
  components: {
    ColorRadio
  },
};
</script>

<style>
.radio-color-container{

}

</style>