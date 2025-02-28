import { createRouter, createWebHistory } from 'vue-router'
import HomeEn from '../views/HomeEN.vue'
import Introduction from '../views/Introduction.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Introduction,
    },
    {
      path: '/homeEn',
      name: 'homeEn',
      component: HomeEn,
    },
  ],
})

export default router
