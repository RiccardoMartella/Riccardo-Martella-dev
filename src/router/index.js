import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Pricing from '@/views/Pricing.vue'
import PricingIT from '@/views/PricingIT.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
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
      path: '/it/contacts',
      name: 'contactsIT',
      component: () => import('@/views/ContactsIT.vue')
    },
    {
      path: '/it/report-bug',
      name: 'reportBugIT',
      component: () => import('@/views/ReportBugIT.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/components/Privacy.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/it/pricing',
      name: 'pricing-it',
      component: PricingIT
    },
    // Documentation routes - English
    {
      path: '/docs',
      component: () => import('@/views/DocContainer.vue'),
      children: [
        {
          path: '',
          redirect: '/docs/installation'
        },
        {
          path: 'installation',
          name: 'docsInstallation',
          component: () => import('@/views/docs/en/Installation.vue')
        },
        {
          path: 'fbx-guide',
          name: 'docsFBXGuide',
          component: () => import('@/views/docs/en/FBXGuide.vue')
        },
        {
          path: 'prefabs',
          name: 'docsPrefabs',
          component: () => import('@/views/docs/en/Prefabs.vue')
        },
        {
          path: 'descriptions',
          name: 'docsDescriptions',
          component: () => import('@/views/docs/en/Descriptions.vue')
        },
        {
          path: 'buttons',
          name: 'docsButtons',
          component: () => import('@/views/docs/en/Buttons.vue')
        },
        {
          path: 'categories',
          name: 'docsCategories',
          component: () => import('@/views/docs/en/Categories.vue')
        },
        {
          path: 'resources',
          name: 'docsResources',
          component: () => import('@/views/docs/en/Resources.vue')
        },
        {
          path: 'saves',
          name: 'docsSaves',
          component: () => import('@/views/docs/en/Saves.vue')
        },
        {
          path: 'known-issues',
          name: 'docsKnownIssues',
          component: () => import('@/views/docs/en/KnownIssues.vue')
        }
      ]
    },
    
    // Documentation routes - Italian
    {
      path: '/it/docs',
      component: () => import('@/views/DocContainer.vue'),
      children: [
        {
          path: '',
          redirect: '/it/docs/installation'
        },
        {
          path: 'installation',
          name: 'docsInstallationIT',
          component: () => import('@/views/docs/it/Installation.vue')
        },
        {
          path: 'fbx-guide',
          name: 'docsFBXGuideIT',
          component: () => import('@/views/docs/it/FBXGuide.vue')
        },
        {
          path: 'prefabs',
          name: 'docsPrefabsIT',
          component: () => import('@/views/docs/it/Prefabs.vue')
        },
        {
          path: 'descriptions',
          name: 'docsDescriptionsIT',
          component: () => import('@/views/docs/it/Descriptions.vue')
        },
        {
          path: 'buttons',
          name: 'docsButtonsIT',
          component: () => import('@/views/docs/it/Buttons.vue')
        },
        {
          path: 'categories',
          name: 'docsCategoriesIT',
          component: () => import('@/views/docs/it/Categories.vue')
        },
        {
          path: 'resources',
          name: 'docsResourcesIT',
          component: () => import('@/views/docs/it/Resources.vue')
        },
        {
          path: 'saves',
          name: 'docsSavesIT',
          component: () => import('@/views/docs/it/Saves.vue')
        },
        {
          path: 'known-issues',
          name: 'docsKnownIssuesIT',
          component: () => import('@/views/docs/it/KnownIssues.vue')
        }
      ]
    }
  ]
})

export default router
