import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import userManager from '@/service/auth';
import Index from '@/views/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      isAuthenticated: false,
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    meta: {
      isAuthenticated: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const { isAuthenticated } = to.meta;
  if (!isAuthenticated) {
    next();
  } else {
    const user = await userManager.getUser();
    if (!user) {
      userManager.signinRedirect();
    } else {
      next();
    }
  }
});

export default router;
