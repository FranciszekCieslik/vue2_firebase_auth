<template>
  <div>
    <b-card bg-variant="light"> 
        <ColorRadio name="Blue" color="blue"/>
        <ColorRadio name="Red" color="red" />
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
