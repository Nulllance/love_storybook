<script>
import TobeContinue from "../components/TobeContinue.vue";
export default {
  components: {
    TobeContinue,
  },
};
</script>

<template>
  <div class="advice">
    <div class="content">
      <h4>
        Advice:If you have any relationship advice that you'd like to share with others,
        consider including a section on your website where you can offer tips and
        insights.
      </h4>
    </div>

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
