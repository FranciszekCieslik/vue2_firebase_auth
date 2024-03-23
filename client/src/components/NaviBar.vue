<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">LookLoom</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-avatar v-if="user" :src="avatarphoto"></b-avatar>
        <b-nav-item-dropdown v-if="user" text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Lang" right>
          <template #button-content>
            <b-icon
              icon="translate"
              class="h2 mb-0"
              style="color: grey"
            ></b-icon>
          </template>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-button v-if="!user" to="/signin">Sign in</b-button>
        <b-button v-if="user" @click="logout">Sign out</b-button>
      </b-navbar-nav>
    </b-navbar>
    <span id="cos"></span>
  </div>
</template>
<script>
import { logout_google } from "../auth/googleauth";
const storage_user = sessionStorage?.getItem('user');
const photo_user = sessionStorage.getItem('photoURL');
setTimeout(console.log,3000,photo_user)
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
      user: storage_user,
      avatarphoto: photo_user
   };
  },
  
};
</script>
