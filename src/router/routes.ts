import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'lion-sharing', component: () => import('pages/Post.vue') },
      {
        path: 'lion-sharing/:postId',
        component: () => import('pages/PostDetail.vue'),
      },
      { path: 'lion-vision', component: () => import('pages/AboutUs.vue') },
      { path: 'lion-people', component: () => import('pages/People.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
