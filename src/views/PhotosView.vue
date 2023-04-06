<script>
import TobeContinue from "../components/TobeContinue.vue";
export default {
  components: {
    TobeContinue,
  },
};
</script>

<template>
  <div class="photos">
    <div class="content"></div>
    <p>
      Photos: A photo gallery is a great way to showcase your love story.
      Consider including a mix of candid and posed photos from various stages of
      your relationship, including any special events or trips you've taken
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
