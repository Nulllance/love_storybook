<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const isActive = ref("");
const wrapper = ref("wrapper");
const handleScroll = () => {
  if (window.scrollY > 0) {
    isActive.value = "active";
    wrapper.value = "wrapper active";
  } else {
    isActive.value = "";
    wrapper.value = "wrapper";
  }
};
window.addEventListener("scroll", handleScroll);
const iscurrent = ref("current");
let id = 0;
const routerItems = ref([
  { id: id++, name: "About", iscurrent: true },
  { id: id++, name: "Date", iscurrent: false },
  { id: id++, name: "Story", iscurrent: false },
  { id: id++, name: "Photos", iscurrent: false },
  { id: id++, name: "Blog", iscurrent: false },
  { id: id++, name: "Favorite", iscurrent: false },
  { id: id++, name: "Advice", iscurrent: false },
]);
function setCurrentItem(id) {
  routerItems.value.forEach((item) => {
    item.iscurrent = false;
  });
  routerItems.value[id].iscurrent = true;
}
</script>

<template>
  <header>
    <div class="wrapper" :class="wrapper">
      <RouterLink to="/" id="logoPlace">
        <span>Kathy💗Lance</span>
        <span>StoryBook</span>
      </RouterLink>
      <nav>
        <RouterLink
          :to="item.name"
          v-for="item in routerItems"
          :class="{ current: item.iscurrent }"
          @click="setCurrentItem(item.id)"
        >
          {{ item.name }}</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView class="routerView" />
</template>

<style scoped>
@import url(../node_modules/bulma/css/bulma.min.css);
@import url(../node_modules/@fortawesome/fontawesome-free/css/all.min.css);

.wrapper {
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 8px 60px;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;

  z-index: 99;
}
.wrapper.active {
  padding: 2px 60px;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #333;
}
.wrapper.active a span {
  font-size: 1rem;
}
.wrapper a {
  height: 100%;
  text-decoration: none;
  color: #333;
  letter-spacing: 1px;
  text-align: center;
}

.wrapper #logoPlace span {
  display: block;
  font: 1rem sans-serif bold;
  font-family: "Great Vibes", cursive;
  transition: all 0.3s ease-in-out;
}

nav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

nav a {
  font-size: 1rem;
  padding: 0px 15px;
  display: flex;
  color: #eee;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
nav a:hover {
  position: relative;
  color: #eee;
  top: -1px;
}
nav a:focus {
  position: relative;
  top: 0px;
}

nav a.current {
  color: #fff;
  border-radius: 4px;
}

.routerView .content {
  width: 100vw;
  height: 100vh;
}

.routerView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
</style>
