import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Props2FormaView from '@/views/Props2FormaView.vue'
import Props3FormaView from '@/views/Props3FormaView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Props2Forma',
      name: 'Props2Forma',
      component: Props2FormaView
    },
    {
      path: '/Props3Forma',
      name: 'Props3Forma',
      component: Props3FormaView
    }
  ]
})

export default router
