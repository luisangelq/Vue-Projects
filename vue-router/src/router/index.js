import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      //redirect to home if some link is not found
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      alias: "/home",
    },
    {
      path: "/session",
      component: () => import("../views/SessionView.vue"),
      children: [
        {
          path: "",
          components: {
            default: () => import("../views/LoginView.vue"),
            register: () => import("../views/RegisterView.vue"),
          },
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/chats",
      name: "chats",
      component: () => import("../views/ChatsView.vue"),
      children: [
        {
          path: ":id",
          component: () => import("../views/ChatView.vue"),
          //props: true,
          props: (route) => ({ id: route.params.id }),
        },
      ],
    },
  ],
});

export default router;
