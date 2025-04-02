import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Pricing from '@/views/Pricing.vue'
import PricingIT from '@/views/PricingIT.vue'
import Privacy from '@/views/Privacy.vue'
import PrivacyIT from '@/views/PrivacyIT.vue'
import CookiePolicy from '@/views/CookiePolicy.vue'
import CookiePolicyIT from '@/views/CookiePolicyIT.vue'
import Versions from '@/views/Versions.vue'
import VersionsIT from '@/views/VersionsIT.vue'
import Licenses from '@/views/Licenses.vue'
import LicensesIT from '@/views/LicensesIT.vue'

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
      component: Privacy
    },
    {
      path: '/it/privacy',
      name: 'privacy-it',
      component: PrivacyIT
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
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: () => import('../views/Tutorials.vue')
    },
    {
      path: '/it/tutorials',
      name: 'TutorialsIT',
      component: () => import('../views/TutorialsIT.vue')
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
          path: 'effects',
          name: 'docsEffects',
          component: () => import('@/views/docs/en/Effects.vue')
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
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('@/views/docs/en/Settings.vue')
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
          path: 'effects',
          name: 'docsEffectsIT',
          component: () => import('@/views/docs/it/Effects.vue')
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
        },
        {
          path: 'settings',
          name: 'settingsIT',
          component: () => import('@/views/docs/it/Settings.vue')
        }
      ]
    },
    
    // Cookie Policy routes
    {
      path: '/cookie-policy',
      name: 'CookiePolicy',
      component: CookiePolicy
    },
    {
      path: '/it/cookie-policy',
      name: 'CookiePolicyIT',
      component: CookiePolicyIT
    },
    
    // Versions routes
    {
      path: '/versions',
      name: 'versions',
      component: Versions
    },
    {
      path: '/it/versions',
      name: 'versions-it',
      component: VersionsIT
    },
    
    // Licenses routes
    {
      path: '/licenses',
      name: 'licenses',
      component: Licenses
    },
    {
      path: '/it/licenses',
      name: 'licenses-it',
      component: LicensesIT
    },
    
    // Beta routes
    {
      path: '/beta',
      name: 'beta',
      component: () => import('@/views/Beta.vue')
    },
    {
      path: '/it/beta',
      name: 'beta-it',
      component: () => import('@/views/BetaIT.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } 
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
