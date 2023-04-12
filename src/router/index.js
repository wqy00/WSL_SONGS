import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/layout/Layout";

const routes = [
  {
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: "/index",
  children: [
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '首页',
      },
      component: () => import("@/views/index"),
    },
    {
      path: '/mv',
      name: 'mv',
      meta: {
        title: 'MV',
      },
      component: () => import("@/views/mv"),
    },
    {
      path: '/popular',
      name: 'popular',
      meta: {
        title: 'popular',
      },
      component: () => import("@/views/songs/popular"),
    },
    {
      path: '/classic',
      name: 'classic',
      meta: {
        title: 'classic',
      },
      component: () => import("@/views/songs/classic"),
    },
  ]
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
