import { createRouter, createWebHistory } from "vue-router";
import FavoriteViewVue from "../views/FavoriteView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path:"/favorite",
      name: "favorite",
      component: FavoriteViewVue,
    },
  ],
});

export default router;
