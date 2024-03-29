<template>
  <div class="home">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="512"
        img-height="240"
      >
        <b-carousel-slide
          caption="First Slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <NaviBar msg="" />
    <div>
      <iframe class="ytvideo"
      src="https://www.youtube.com/embed/Qa3YhlMU5Tg?si=uDlUOgq4f94hhfX4"
      title="YouTube video player"
      frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>

<script>
// @ is an alias to /src
import NaviBar from "@/components/NaviBar.vue";

export default {
  name: "HomeView",
  components: {
    NaviBar,
  },
};
</script>

<style>
.ytvideo{
  padding: 100px;
  width:100%;
  height:600px;
}
</style>
