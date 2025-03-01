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
      path: '/report-bug',
      name: 'reportBug',
      component: () => import('@/views/ReportBug.vue')
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
    },
    {
      path: '/it/report-bug',
      name: 'reportBugIT',
      component: () => import('@/views/ReportBugIT.vue')
    }
  ]
})

export default router
