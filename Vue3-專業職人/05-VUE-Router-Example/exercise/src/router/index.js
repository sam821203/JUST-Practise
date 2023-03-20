import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/Courses",
    name: "Courses",
    component: () => import("../views/Courses/index.vue"),
  },
  {
    path: "/Courses/:id",
    name: "Courses_id",
    component: () => import("../views/Courses/_id.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
