<template>
  <div>
    <NaviBar msg="" />
    <div style="padding-top: 10%">
      <b-row style="margin-inline: 15%">
        <b-col>
          <div class="px-3 py-2">
            <h4>Account</h4>
          </div>
        </b-col>
        <b-col cols="9">
          <SizeInfo :isVisable="isVisable" @show="edit" />
          <SizeForm :isVisable="!isVisable" :form="form" @show="edit" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import NaviBar from "@/components/NaviBar.vue";
import SizeInfo from "@/components/SizeInfo.vue";
import SizeForm from "@/components/SizeForm.vue";

export default {
  name: "HomeView",
  components: {
    NaviBar,
    SizeInfo,
    SizeForm,
  },
  data() {
    return {
      isVisable: true,
      form: {
        hight: "",
        front: "",
        shoulder: "",
        chest: "",
        waist: "",
        hip: "",
        leg: "",
        foot: "",
      },
    };
  },
  methods: {
    edit() {
      this.isVisable = !this.isVisable;
    },
  },
};
</script>
