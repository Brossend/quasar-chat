import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'users', component: () => import('pages/PageUsers.vue') },
      { path: 'chat', name: 'chat', component: () => import('pages/PageChat.vue') },
      { path: 'auth', name: 'auth', component: () => import('pages/PageAuth.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
