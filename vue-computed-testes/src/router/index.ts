import { createRouter, createWebHistory } from 'vue-router'
import ComputedArrView from '../views/ComputedArrView.vue'
import ComputedAObjView from '@/views/ComputedAObjView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/arrayUsuarios',
      name: 'home',
      component: ComputedArrView
    },
    {
      path: '/objectUsuario',
      name: 'ComputedObjView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ComputedAObjView
    }
  ]
})

export default router
