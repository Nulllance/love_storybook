<script>
import TobeContinue from "../components/TobeContinue.vue";
export default {
  components: {
    TobeContinue,
  },
};
</script>

<template>
  <div class="blog">
    <div class="content"></div>
    <p>
      Blog: A blog can be a great way to share updates about your relationship
      with friends and family. Consider writing posts about your latest
      adventures, how you celebrate special occasions, and other topics that
      your readers may be interested in.
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
