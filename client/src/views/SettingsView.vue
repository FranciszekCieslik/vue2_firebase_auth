<template>
  <div>
    <NaviBar msg=""/>
  <div class="prompt">
    <b-button squared variant="outline-danger">
       <b-icon icon="trash" aria-hidden="true" />
      DELETE ACCOUNT
    </b-button>
  </div>
  </div>
</template>

<script>
import NaviBar from "@/components/NaviBar.vue";

export default {
  name: "HomeView",
  components: {
    NaviBar
  }
};

</script>

<style>

</style>