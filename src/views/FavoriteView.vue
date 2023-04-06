<script>
import TobeContinue from "../components/TobeContinue.vue";
export default {
  components: {
    TobeContinue,
  },
};
</script>

<template>
  <div class="fav">
    <div class="content"></div>
    <p>
      Our Favorite Things: This section could include a list of your favorite
      restaurants, movies, TV shows, and other things that you enjoy doing
      together.
    </p>
    <TobeContinue></TobeContinue>
  </div>
</template>
<style scoped>
.content {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/bgImg.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
