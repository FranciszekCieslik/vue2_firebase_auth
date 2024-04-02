<template>
  <div class="container">
    <div class="aspect-ratio-container">
      <iframe
        class="ytvideo"
        src="https://www.youtube.com/embed/Qa3YhlMU5Tg?si=uDlUOgq4f94hhfX4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
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
