<template>
  <div>
    <b-card bg-variant="light">
        <h4>Eye Color</h4> 
        <div class="radio-color-container">
          <ColorRadio name="Blue" color="rgb(20, 132, 181)"/> 
          <ColorRadio name="Black" color="rgb(12, 12, 12)" />
          <ColorRadio name="Brown" color="rgb(115, 62, 9)" />
          <ColorRadio name="Green" color="rgb(5, 108, 41)" />
          <ColorRadio name="Grey" color="rgb(67, 82, 82)" />
        </div>
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