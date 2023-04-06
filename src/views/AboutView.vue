<template>
  <div class="about">
    <div class="content">
      <div class="headPortraitPlaceHolder loveMe">
        <i :class="head" :style="headStyle"></i>
        <div class="headPortrait headPortrait1" @click="headBeat($event)"></div>
        <div class="headPortrait headPortrait2" @click="headBeat($event)"></div>
      </div>

      <h1 id="welcomeTitle">
        <span>Kathy and Lance's 💗 story book</span>
      </h1>
    </div>
    <h1>About Ours</h1>

    <TobeContinue>
      <section>
        <p>
          This section should provide an introduction to you and your partner, including
          how you met, when you started dating, and any other important details about your
          relationship.
        </p>
      </section>
    </TobeContinue>
  </div>
</template>

<style scoped>
.content {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/bgImg.jpg");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  color: #000;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

.headPortraitPlaceHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.fa-heart {
  color: red;
  z-index: 100;
}

.loveMe .fa-heart {
  position: absolute;
  animation: grow 0.6s linear;
  transform: translate(-50%, -50%) scale(0);
}
@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(5);
    opacity: 0;
  }
}
.headPortrait {
  position: relative;
  width: 6rem;
  cursor: pointer;
  height: 6rem;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #fff;
  margin: 0 20px;
  overflow: hidden;
  transition: all 0.6s ease;
}

.headPortrait1 {
  background-image: url("../assets/headPortrait1.png");
  background-size: cover;
  background-position: center center;
  transform: translateX(20px) rotate(330deg);
  animation: runLeft 2s ease;
}

@keyframes runLeft {
  0% {
    transform: translateX(-200px) rotate(0deg);
  }

  100% {
    transform: translateX(20px) rotate(330deg);
  }
}
.headPortrait2 {
  background-image: url("../assets/headPortrait2.png");
  background-size: cover;
  background-position: center center;
  transform: translateX(-20px) rotate(-390deg);
  animation: runRight 2s ease;
}
@keyframes runRight {
  0% {
    transform: translateX(200px) rotate(0deg);
  }

  100% {
    transform: translateX(-20px) rotate(-390deg);
  }
}

.headPortrait1:hover {
  transform: translateX(30px) rotate(350deg) scale(1.2);
  z-index: 99;
}
.headPortrait2:hover {
  transform: translateX(-30px) rotate(-410deg) scale(1.2);
  z-index: 99;
}
#welcomeTitle {
  font-family: "Poppin", cursive;
  animation: comeOut 1s;
  transition: all 1s;
  transform: scale(0.8);
}

@keyframes comeOut {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(0.8);
  }
}
#welcomeTitle:hover {
  transform: translateY(-10px) scale(1.2);
  cursor: auto;
}
.content span {
  color: rgba(255, 153, 153, 0.91);
  font-family: "Poppin", cursive;
  font-size: 2.5rem;
}
</style>
<script>
import TobeContinue from "../components/TobeContinue.vue";
export default {
  data() {
    return {
      head: "",
      xInside: 0,
      yInside: 0,
      headStyle: {
        top: `${this.yInside}px`,
        left: `${this.xInside}px`,
      },
    };
  },
  components: {
    TobeContinue,
  },
  methods: {
    headBeat(e) {
      const x = e.clientX;
      const y = e.clientY;
      const leftOffset = e.target.offsetLeft;
      const topOffset = e.target.offsetTop;
      console.log(x, y, leftOffset, topOffset);
      this.xInside = x - leftOffset;
      this.yInside = y - topOffset;
      this.head = "fas fa-heart";
      setTimeout(() => {
        this.head = "";
      }, 600);
    },
  },
};
</script>
