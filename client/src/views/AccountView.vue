<template>
  <div>
    <NaviBar />
    <div style="padding-top: 10%; margin-inline: 2%">
      <b-row style="margin-inline: 5%">
        <b-col>
          <div class="px-3 py-2">
            <h4>Account</h4>
            <hr />
            <ul v-for="link in links" :key="link">
              <li>
                <b-link
                  :id="link"
                  style="color: black"
                  @click="setActive(link)"
                  >{{ views[link] }}</b-link
                >
              </li>
            </ul>
          </div>
        </b-col>
        <b-col cols="9">
          <SizesCard v-if="activeTab === 'mysizes'" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import NaviBar from "@/components/NaviBar.vue";
import SizesCard from "@/components/SizesCard.vue";

export default {
  name: "HomeView",
  components: {
    NaviBar,
    SizesCard,
  },
  data() {
    return {
      views: {
        mysizes: "My Sizes",
        mystyle: "My Style",
        mypref: "My Preferences",
        mybea: "My Beauty Type",
      },
      links: [],
      activeTab: "mysizes",
    };
  },
  created() {
    this.links = Object.keys(this.views);
  },
  
  methods: {
    setActive(tabName) {
      document.getElementById(this.activeTab).style.fontWeight = "";
      this.activeTab = tabName;
      document.getElementById(this.activeTab).style.fontWeight = "bold";
    },
  },
  
  mounted(){
    document.getElementById(this.activeTab).style.fontWeight = "bold";
  }
};
</script>

<style>
ul {
  padding-block: 5%;
}
li:hover {
  font-weight: bolder;
}
</style>
