import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetail from '../views/PostDetail.vue'

// 路由配置（供你后续扩展）
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail
  },
  // 可以添加更多路由：
  // { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  // { path: '/archive', name: 'Archive', component: () => import('../views/Archive.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
