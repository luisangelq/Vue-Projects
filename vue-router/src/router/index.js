import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const stage = import.meta.env.DEV;

console.log("stage", stage);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/404",
      component: () => import("../views/404View.vue"),
    },
    {
      //redirect to home if some link is not found
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      alias: "/home",
      meta: {
        requiresAuth: false,
      },
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
      meta: {
        requiresAuth: false,
      },
      children: [
        {
          path: ":id(\\d+)",
          component: () => import("../views/ChatView.vue"),
          //props: true,
          props: (route) => ({ id: route.params.id }),
        },
      ],
    },
  ],
});

if (stage) {
  router.addRoute({
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  });
}

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  console.log(to);
  console.log(from);

  if (to.meta?.requiresAuth) {
    console.log("requiresAuth" + to.path);

    next({ name: "session" });

    return;
  }
  next();
  return;
});

export default router;
