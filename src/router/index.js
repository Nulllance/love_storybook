import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AboutView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/date",
      name: "date",
      component: () => import("../views/DateView.vue"),
    },
    {
      path: "/story",
      name: "story",
      component: () => import("../views/StoryView.vue"),
    },
    {
      path: "/photos",
      name: "photos",
      component: () => import("../views/PhotosView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/FavoriteView.vue"),
    },
    {
      path: "/advice",
      name: "advice",
      component: () => import("../views/AdviceView.vue"),
    },
  ],
});

export default router;
