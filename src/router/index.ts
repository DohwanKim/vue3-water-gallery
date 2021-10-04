import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { getUser, signIn } from '@/service/authService';
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
  const REDIRECT_PATH = 'REDIRECT_PATH';

  if (!isAuthenticated) {
    next();
  } else {
    const user = await getUser();
    console.log(user);
    if (!user) {
      document.cookie = `${REDIRECT_PATH}=${to.path}`;
      signIn();
    } else {
      next();
    }
  }
});

export default router;
