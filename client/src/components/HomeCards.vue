<template>
  <div>
    <b-card no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item @click="setActive('Home')" :active="activeTab === 'Home'"
            >Home</b-nav-item
          >
          <b-nav-item
            @click="setActive('Suggestions')"
            :active="activeTab === 'Suggestions'"
            >Suggestions</b-nav-item
          >
          <b-nav-item
            @click="setActive('Creations')"
            :active="activeTab === 'Creations'"
            >Creations</b-nav-item
          >
          <b-nav-item
            @click="setActive('My Wardrobe')"
            :active="activeTab === 'My Wardrobe'"
            >My Wardrobe</b-nav-item
          >
        </b-nav>
      </b-card-header>
      <b-card-body class="text-center">
        <div class="container">
          <div class="aspect-ratio-container">
            <MainHomeCard v-if="activeTab === 'Home'"/>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import MainHomeCard from "./MainHomeCard.vue";

export default {
  components: {
    MainHomeCard,
  },

  data() {
    return {
      activeTab: 'Suggestions' // Set the default active tab
    };
  },

  methods: {
    setActive(tabName) {
      this.activeTab = tabName; // Update the active tab on click
    }
  }
};
</script>

<style>
.aspect-ratio-container {
  position: relative;
  width: 70%;
}

.aspect-ratio-container:before {
  content: "";
  display: block;
  padding-top: 56.25%; /* This is the aspect ratio (height/width), e.g., for 16:9 aspect ratio, use 56.25% */
}

.aspect-ratio-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  padding: 10%;
}
</style>
