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
    component: () => import('@/pages/Home.vue'),
    children: []
  },
  {
    path: '/patientInfo',
    name: 'patientInfo',
    component: () => import('@/pages/PatientInfo.vue')
  },
  {
    path: '/medicineInfo',
    name: 'medicineInfo',
    component: () => import('@/pages/medicineInfo.vue')
  },
  {
    path: '/checkInfo',
    name: 'checkInfo',
    component: () => import('@/pages/Check.vue')
  },
  {
    path: '/dischargeInfo',
    name: 'dischargeInfo',
    component: () => import('@/pages/Discharge.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
