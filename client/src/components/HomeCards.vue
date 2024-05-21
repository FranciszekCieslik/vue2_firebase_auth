<template>
  <div>
    <div v-if="!user">
      <MainHomeCard/>
    </div>
    <div v-if="user">
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
            @click="setActive('My Wardrobe')"
            :active="activeTab === 'My Wardrobe'"
            >My Wardrobe</b-nav-item
            >
          <b-nav-item
            @click="setActive('Creations')"
            :active="activeTab === 'Creations'"
            >Creations</b-nav-item
          >
        </b-nav>
      </b-card-header>
      <b-card-body class="text-center">
        <SuggestionsCard v-if="activeTab === 'Suggestions'" />
        <MainHomeCard v-if="activeTab === 'Home'" />
        <MyWardrobeCard v-if="activeTab === 'My Wardrobe'" />
      </b-card-body>
    </b-card>
  </div>
  </div>
</template>

<script>
import MainHomeCard from "./items/MainHomeCard.vue";
import SuggestionsCard from "@/components/SuggestionsCard.vue";
import MyWardrobeCard from "@/components/MyWardrobeCard.vue"

export default {
  components: {
    MainHomeCard,
    SuggestionsCard,
    MyWardrobeCard
  },
  
  data() {
    return {
      activeTab: "Home", // Set the default active tab
      user: null,
    };
  },
  created() {
    if (localStorage.getItem("LookLoomUser")) {
      this.user = JSON.parse(localStorage?.getItem("LookLoomUser"));
    }
  },

  methods: {
    setActive(tabName) {
      this.activeTab = tabName; // Update the active tab on click
    },
  },
};
</script>
