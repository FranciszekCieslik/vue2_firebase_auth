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
        <SuggestionsCard v-if="activeTab === 'Suggestions'" />
        <MainHomeCard v-if="activeTab === 'Home'" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import MainHomeCard from "./items/MainHomeCard.vue";
import SuggestionsCard from "@/components/SuggestionsCard.vue";

export default {
  components: {
    MainHomeCard,
    SuggestionsCard,
  },

  data() {
    return {
      activeTab: "Home", // Set the default active tab
    };
  },

  methods: {
    setActive(tabName) {
      this.activeTab = tabName; // Update the active tab on click
    },
  },
};
</script>
