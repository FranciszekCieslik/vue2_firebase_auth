<template>
  <div>
    <section v-if="loging" class="prompt">
      <h3>LookLoom</h3>
      <h1>Sign in</h1>
      <a class="button google" @click="google_login">
        <b-icon icon="google" aria-hidden="true"></b-icon>
        Sign in with Google</a
      >
    </section>
    <section v-if="!loging" class="prompt">
      <b-spinner
        style="width: 3rem; height: 3rem"
        label="Large Spinner"
      ></b-spinner>
    </section>
  </div>
</template>

<script>
import { login_google } from "@/auth/googleauth";

export default {
  data() {
    return {
      loging: true,
    };
  },
  methods: {
    google_login() {
      login_google();
      this.loging = false;
    },
  },
};
</script>

<style>
.prompt {
  max-width: 400px;
  margin: 50px auto;
  padding: 25px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

a.button {
  box-sizing: border-box;
  display: block;
  padding: 10px;
  width: 100%;
  border: 2px solid;
  border-radius: 3px;
  background: #000;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: white;
}

a.google {
  background: #4787ed;
}
a.button:hover {
  background-color: #3a70c5;
}

a.button:active {
  border-color: #ff6565;
}

h1 {
  margin: 0 0 20px 0;
  padding: 0 0 5px 0;
  font-size: 24px;
  font-weight: 500;
}

h3 {
  margin-top: 0;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
}

label {
  display: block;
  margin: 0 0 3px 0;
  font-size: 14px;
  font-weight: 500;
}
</style>
