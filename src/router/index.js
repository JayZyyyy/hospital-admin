import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // ↓路由地址
    path: '/',
    // ↓路由名称（唯一值），在路由跳转时能用到
    name: '',
    // ↓路由渲染组件
    redirect: {
      name: 'home'
    }
    // ↓首页
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
