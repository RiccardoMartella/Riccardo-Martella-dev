import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../views/Introduction.vue'
import HomeEN from '@/views/HomeEN.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/homeEn',
      name: 'homeEn',
      component: HomeEN
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/Contacts.vue')
    },
    {
      path: '/it',
      name: 'introductionIT',
      component: () => import('@/views/IntroductionIT.vue')
    },
    {
      path: '/it/documentation',
      name: 'homeIT',
      component: () => import('@/views/HomeIT.vue')
    },
    {
      path: '/it/contacts',
      name: 'contactsIT',
      component: () => import('@/views/ContactsIT.vue')
    }
  ]
})

export default router
