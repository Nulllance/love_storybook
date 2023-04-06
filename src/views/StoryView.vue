<script>
import TobeContinue from "../components/TobeContinue.vue";
export default {
  components: {
    TobeContinue,
  },
};
</script>

<template>
  <div class="story">
    <div class="content"></div>
    <p>
      Our Story: This section could include a detailed timeline of your
      relationship, including milestones such as your first date, first kiss,
      and when you decided to become exclusive.
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
