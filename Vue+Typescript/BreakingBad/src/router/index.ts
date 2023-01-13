import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/shared/pages/HomePage.vue";
import AboutPage from "@/shared/pages/AboutPage.vue";
import characterRoute from "@/characters/router/index.js";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About",
      component: AboutPage,
    },

    {
        ...characterRoute,
        path: "/characters",
    },

    //default
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        redirect: () => ({ name: "Home" }),
    },
  ],
});

export default routes;