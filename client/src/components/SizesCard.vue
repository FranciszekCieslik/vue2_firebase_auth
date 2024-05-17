<template>
  <div>
    <SizeInfo :isVisable="isVisable" @show="edit" />
    <SizeForm :isVisable="!isVisable" @show="edit" />
  </div>
</template>

<script>
import SizeInfo from "@/components/SizeInfo.vue";
import SizeForm from "@/components/SizeForm.vue";

export default {
  name: "HomeView",
  components: {
    SizeInfo,
    SizeForm,
  },
  data() {
    return {
      isVisable: true,
    };
  },
  methods: {
    edit() {
      this.isVisable = !this.isVisable;
    },
  },
};
</script>
