<template>
    <b-navbar toggable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand to="/">LookLoom</b-navbar-brand>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-avatar v-if="user" :src="avatarphoto"></b-avatar>
        <b-nav-item-dropdown v-if="user" text="User" right>
          <b-dropdown-item to="/account">Account</b-dropdown-item>
          <b-dropdown-item to="/settings">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Lang" right>
          <template #button-content>
            <b-icon icon="translate" class="h2 mb-0 custom-hover"></b-icon>
          </template>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-button v-if="!user" to="/signin">Sign in</b-button>
        <b-button v-if="user" @click="logout">Sign out</b-button>
      </b-navbar-nav>
    </b-navbar>
</template>
<script>
import { logout_google } from "../auth/googleauth";

export default {
  methods: {
    logout() {
      logout_google(); 
    },
  },
  name: "NaviBar",
  props: {
    msg: String,
  },
  data() {
    return {
      user: null,
      avatarphoto: null,
    };
  },
  created(){
    if(localStorage.getItem("LookLoomUser")){
    this.user = JSON.parse(localStorage?.getItem("LookLoomUser"));
    this.avatarphoto = this.user.photo}
  }
};
</script>

<style>
.custom-hover {
  color: grey;
}

.custom-hover:hover {
  color: lightgrey;
}
</style>
