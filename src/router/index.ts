import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue";
import Admin from "@/views/Admin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
