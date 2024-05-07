<template>
  <div>
    <NaviBar />
    <div class="space">
      <b-card
        bg-variant="dark"
        header="User Informations"
        text-variant="white"
        class="text-center"
      >
        <p>User name: {{ user_name }}</p>
        <p>E-mail: {{ user_email }}</p>

        <b-button @click="deleteAccount" variant="danger">
          <b-icon icon="trash" aria-hidden="true" />
          DELETE ACCOUNT
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import {deleteAppUser} from '@/firestore';
import { logout_google } from '@/auth/googleauth';
import NaviBar from "@/components/items/NaviBar.vue";

export default {
  name: "HomeView",
  components: {
    NaviBar,
  },

  data() {
    return {
      user_email: "",
      user_name: "",
    };
  },

  created() {
    const user = JSON.parse(localStorage.getItem("LookLoomUser"));
    this.user_name = user.name;
    this.user_email = user.email;
  },

  methods: {
    deleteAccount() {
      deleteAppUser();
      logout_google(); 
    },
  },
};
</script>

<style>
.space {
  margin: 10%;
  margin-inline: 20%;
}
</style>
