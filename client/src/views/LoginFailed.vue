<template>
  <div>
    <section class="prompt">
      <h3>LookLoom</h3>
      <h2>Sign in failed</h2>
      <p class="h1 mb-2"><b-icon icon="bug-fill" style="color: crimson;" aria-hidden="true"></b-icon></p>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    // Use setTimeout to delay the navigation
    setTimeout(() => {
      // Push to the desired route
      this.$router.push('/');
    }, 3000); // Adjust the delay time (in milliseconds) as needed
  }
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

h2 {
  margin: 0 0 20px 0;
  padding: 0 0 5px 0;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: crimson;
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
