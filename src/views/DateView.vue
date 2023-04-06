<template>
  <div :class="birthday">
    <div :class="candle" @click="setOut()">
      <div class="candle-body"></div>
      <!-- 火焰 -->
      <div class="candle-flame"></div>
      <!-- 烟雾 -->
      <div class="candle-smoke">
        <span class="s0"></span>
        <span class="s1"></span>
        <span class="s2"></span>
        <span class="s3"></span>
        <span class="s4"></span>
        <span class="s5"></span>
        <span class="s6"></span>
        <span class="s7"></span>
        <span class="s8"></span>
        <span class="s9"></span>
      </div>
    </div>
    <div class="pudding">
      <div class="pudding__part">
        <div class="pudding__head"></div>
        <div class="pudding__eye"></div>
        <div class="pudding__mouse"></div>
        <div class="pudding__cream"></div>
        <div class="pudding__cherry"></div>
        <div class="pudding__bottom"></div>
      </div>
      <div class="pudding__sara"></div>
    </div>
    <div class="happyTitle">
      <h1>Happy Birthday to you, my Babe!</h1>
      <h2 class="wish">Make a Wish~~~</h2>
    </div>
    <button @click="toggleLight()" class="toggleLight">{{ btn_text }}</button>
    <audio controls autoplay>
      <source src="../assets/lyq1752416.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style scoped>
button.toggleLight {
  position: absolute;
  bottom: 200px;
  right: 200px;
  width: 100px;
  height: 60px;
  border-radius: 10%;
  background: #ffcb5d;
  border: none;
  box-shadow: #090908 0 0 10px;
  z-index: 999;
}
.birthday.black {
  background: #000;
}
.birthday {
  height: 100vh;
  width: 100vw;
  background: #f8dee9;
}
audio {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.happyTitle {
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
}
.candle {
  position: absolute;
  bottom: 500px;
  left: 0;
  right: 0;
  width: 20px;
  margin: auto;
  z-index: 99;
}
.candle-body {
  width: 20px;
  height: 80px;
  background-color: #e90018;
  border-radius: 0 0 40px 40px/0 0 16px 16px;
  box-shadow: inset 8px 0 12px rgba(0, 0, 0, 0.1), inset -8px 0 12px rgba(0, 0, 0, 0.1);
  position: relative;
}
.candle-body::before {
  content: "";
  position: absolute;
  height: 16px;
  border-radius: 50%;
  background-color: #ef4d65;
  top: -8px;
  left: 0;
  right: 0;
  box-shadow: inset 0 0 20px #e90018, inset 0 0 5px rgba(0, 0, 0, 0.2),
    0 1px rgba(0, 0, 0, 0.05), inset 0 2px 3px rgba(0, 0, 0, 0.4);
}
/* 蜡烛芯 */
.candle-body::after {
  content: "";
  display: block;
  width: 4px;
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: -20px;
  margin: auto;
  background: #fff;
  background-image: linear-gradient(to bottom, #311, #edd3d1 70%, #edd3d1);
  border-radius: 0 0 4px 4px/0 0 2px 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
}
/* 火焰 */
.candle-flame {
  animation: flicker 3s infinite ease-out alternate;
  background-image: radial-gradient(
    ellipse at 5px 10px,
    rgba(75, 95, 124, 0),
    hsla(0, 0%, 100%, 0.5),
    #fff
  );
  border-radius: 37% 37% 34% 34%/70% 70% 33% 33%;
  box-shadow: 0 -8px 8px 4px #fff, 0 -10px 10px 8px #ff0, 0 -10px 0 9px #f00;
  width: 5px;
  height: 10px;
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  top: -24px;
  margin: auto;
  transform-origin: center bottom;
  filter: blur(1px);
}
.out .candle-flame {
  display: none;
}
@keyframes flicker {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1, 0.9) rotate(3deg);
  }
  50% {
    transform: scale(1, 1.2);
  }
  80% {
    transform: scale(0.9, 1.1) rotate(-3deg);
  }
  100% {
    transform: scale(1);
  }
}

.candle-smoke {
  position: absolute;
  left: 50%;
  top: -15px;
  transform-origin: bottom center;
  transform: scale(0.5);
  filter: blur(3px);
  opacity: 0;
}
.out .candle-smoke {
  animation: smokeOut 30s both;
}

@keyframes smokeOut {
  10% {
    opacity: 1;
  }
  0%,
  100% {
    opacity: 0;
  }
}

/* 烟雾元素们 */
.candle-smoke span {
  position: absolute;
  bottom: -9px;
  left: -9px;
  width: 18px;
  height: 18px;
  background-image: radial-gradient(
    closest-side circle,
    rgba(49, 49, 49, 0.75),
    rgba(55, 55, 55, 0.6),
    rgba(81, 81, 81, 0.4),
    rgba(0, 0, 0, 0)
  );
  border-radius: 18px;
  opacity: 0;
}
.candle:not(.out) .candle-smoke span {
  animation: none;
}

/* 烟雾动画 */
@keyframes smokeL {
  0% {
    opacity: 0;
    transform: scale(1) translate(0, 0);
  }
  10% {
    opacity: 0.8;
    transform: scale(1) translate(0, -7px);
  }
  100% {
    opacity: 0;
    transform: scale(5) translate(-4px, -26px);
  }
}

@keyframes smokeR {
  0% {
    opacity: 0;
    transform: scale(1) translate(0, 0);
  }
  10% {
    opacity: 0.8;
    transform: scale(1) translate(0, -7px);
  }
  100% {
    opacity: 0;
    transform: scale(5) translate(4px, -26px);
  }
}

.candle-smoke .s0 {
  animation: smokeL 10s 0s infinite;
}
.candle-smoke .s1 {
  animation: smokeR 10s 1s infinite;
}
.candle-smoke .s2 {
  animation: smokeL 10s 2s infinite;
}
.candle-smoke .s3 {
  animation: smokeR 10s 3s infinite;
}
.candle-smoke .s4 {
  animation: smokeL 10s 4s infinite;
}
.candle-smoke .s5 {
  animation: smokeR 10s 5s infinite;
}
.candle-smoke .s6 {
  animation: smokeL 10s 6s infinite;
}
.candle-smoke .s7 {
  animation: smokeR 10s 7s infinite;
}
.candle-smoke .s8 {
  animation: smokeL 10s 8s infinite;
}
.candle-smoke .s9 {
  animation: smokeR 10s 9s infinite;
}
.dessert {
  position: absolute;
}

.pudding {
  position: absolute;
  width: 150px;
  height: 150px;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
}
.pudding__part {
  position: absolute;
  width: 150px;
  height: 120px;
  background: #f4d37c;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}
.pudding__part:before {
  top: 0;
  right: -10px;
  width: 0;
  height: 0;
  border-left: 10px solid #f4d37c;
  border-top: 120px solid transparent;
  border-bottom: 0 solid transparent;
}
.pudding__part:after {
  top: 0;
  left: -10px;
  width: 0;
  height: 0;
  border-right: 10px solid #f4d37c;
  border-top: 120px solid transparent;
  border-bottom: 0 solid transparent;
}
.pudding__cream {
  position: absolute;
  top: -10px;
  left: 50px;
  width: 45px;
  height: 15px;
  background: #fff3e5;
  border-radius: 50%;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  z-index: 10;
}
.pudding__cream:before {
  top: -8px;
  left: 7px;
  width: 30px;
  height: 15px;
  background: #fff3e5;
  border-radius: 50%;
}
.pudding__cream:after {
  top: -18px;
  left: 15px;
  height: 25px;
  width: 15px;
  background: #fff3e5;
  border-radius: 80% 10% 55% 50%/55% 10% 80% 50%;
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
}
.pudding__cherry {
  position: absolute;
  top: -20px;
  left: 88px;
  width: 25px;
  height: 25px;
  z-index: 10;
  border-radius: 50%;
  background: #eb3939;
}
.pudding__cherry:before {
  top: -8px;
  left: 11px;
  width: 12px;
  height: 17px;
  border-radius: 50%;
  -webkit-transform: rotate(37deg);
  transform: rotate(37deg);
  border-left: 2px solid #323232;
  background: transparent;
}
.pudding__head {
  position: absolute;
  top: -18px;
  width: 150px;
  height: 40px;
  border-radius: 50%;
  background: #834c0e;
}
.pudding__bottom {
  position: absolute;
  bottom: -25px;
  left: -10px;
  width: 170px;
  height: 45px;
  border-radius: 50%;
  background: #f4d37c;
}
.pudding__eye {
  position: absolute;
  width: 55px;
  height: 20px;
  top: 40px;
  left: 44px;
}
.pudding__eye:before,
.pudding__eye:after {
  background: #323232;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
.pudding__eye:before {
  left: 0;
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
}
.pudding__eye:after {
  right: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.pudding__mouse {
  position: absolute;
  width: 20px;
  height: 10px;
  top: 60px;
  left: 63px;
  border-bottom: 2px solid #323232;
  border-radius: 50%;
  background: transparent;
}
.pudding__sara {
  position: absolute;
  bottom: -8px;
  left: -35px;
  width: 220px;
  height: 45px;
  border-radius: 50%;
  z-index: -1;
  background: #d4d2d2;
  overflow: hidden;
}
.pudding__sara:before {
  bottom: 4px;
  left: -7px;
  width: 220px;
  height: 45px;
  border-radius: 50%;
  background: #fff;
}
@-webkit-keyframes skew {
  0% {
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
  5% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }
  10% {
    -webkit-transform: skewX(-4deg);
    transform: skewX(-4deg);
  }
  15% {
    -webkit-transform: skewX(3deg);
    transform: skewX(3deg);
  }
  20% {
    -webkit-transform: skewX(-2deg);
    transform: skewX(-2deg);
  }
  25% {
    -webkit-transform: skewX(0.9deg);
    transform: skewX(0.9deg);
  }
  30% {
    -webkit-transform: skewX(-0.6deg);
    transform: skewX(-0.6deg);
  }
  35% {
    -webkit-transform: skewX(0.3deg);
    transform: skewX(0.3deg);
  }
  40% {
    -webkit-transform: skewX(-0.2deg);
    transform: skewX(-0.2deg);
  }
  45% {
    -webkit-transform: skewX(0.1deg);
    transform: skewX(0.1deg);
  }
  50% {
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
}

@keyframes skew {
  0% {
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
  5% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }
  10% {
    -webkit-transform: skewX(-4deg);
    transform: skewX(-4deg);
  }
  15% {
    -webkit-transform: skewX(3deg);
    transform: skewX(3deg);
  }
  20% {
    -webkit-transform: skewX(-2deg);
    transform: skewX(-2deg);
  }
  25% {
    -webkit-transform: skewX(0.9deg);
    transform: skewX(0.9deg);
  }
  30% {
    -webkit-transform: skewX(-0.6deg);
    transform: skewX(-0.6deg);
  }
  35% {
    -webkit-transform: skewX(0.3deg);
    transform: skewX(0.3deg);
  }
  40% {
    -webkit-transform: skewX(-0.2deg);
    transform: skewX(-0.2deg);
  }
  45% {
    -webkit-transform: skewX(0.1deg);
    transform: skewX(0.1deg);
  }
  50% {
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
}
</style>
<script>
export default {
  data() {
    return {
      candle: "candle",
      btn_text: "turn off",
      birthday: "birthday",
    };
  },
  methods: {
    setOut() {
      if (this.candle == "candle out") {
        this.candle = "candle";
      } else {
        this.candle = "candle out";
      }
      console.log(this.candle);
    },
    toggleLight() {
      if (this.btn_text == "turn off") {
        this.btn_text = "turn on";
        this.birthday = "birthday black";
      } else {
        this.btn_text = "turn off";
        this.birthday = "birthday";
      }
    },
  },
};
</script>
