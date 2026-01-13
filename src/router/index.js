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
// import DiscordGiveaway from '@/views/DiscordGiveaway.vue'
// import DiscordGiveawayIT from '@/views/DiscordGiveawayIT.vue'
import Demo from '@/views/Demo.vue'
import DemoIT from '@/views/DemoIT.vue'

// Funzione helper per inviare eventi a Google Analytics
const sendPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: url,
      page_path: url.replace(window.location.origin, '')
    })
  }
}

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
      name: 'report-bug',
      component: () => import('@/views/ReportBug.vue')
    },
    {
      path: '/it',
      name: 'introduction-it',
      component: () => import('@/views/IntroductionIT.vue')
    },
    {
      path: '/it/contacts',
      name: 'contacts-it',
      component: () => import('@/views/ContactsIT.vue')
    },
    {
      path: '/it/report-bug',
      name: 'report-bug-it',
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
      name: 'tutorials',
      component: () => import('../views/Tutorials.vue')
    },
    {
      path: '/it/tutorials',
      name: 'tutorials-it',
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
          name: 'docs-installation',
          component: () => import('@/views/docs/en/Installation.vue')
        },
        {
          path: 'fbx-guide',
          name: 'docs-fbx-guide',
          component: () => import('@/views/docs/en/FBXGuide.vue')
        },
        {
          path: 'prefabs',
          name: 'docs-prefabs',
          component: () => import('@/views/docs/en/Prefabs.vue')
        },
        {
          path: 'descriptions',
          name: 'docs-descriptions',
          component: () => import('@/views/docs/en/Descriptions.vue')
        },
        {
          path: 'buttons',
          name: 'docs-buttons',
          component: () => import('@/views/docs/en/Buttons.vue')
        },
        {
          path: 'categories',
          name: 'docs-categories',
          component: () => import('@/views/docs/en/Categories.vue')
        },
        {
          path: 'effects',
          name: 'docs-effects',
          component: () => import('@/views/docs/en/Effects.vue')
        },
        {
          path: 'resources',
          name: 'docs-resources',
          component: () => import('@/views/docs/en/Resources.vue')
        },
        {
          path: 'saves',
          name: 'docs-saves',
          component: () => import('@/views/docs/en/Saves.vue')
        },
        {
          path: 'known-issues',
          name: 'docs-known-issues',
          component: () => import('@/views/docs/en/KnownIssues.vue')
        },
        {
          path: 'settings',
          name: 'docs-settings',
          component: () => import('@/views/docs/en/Settings.vue')
        },
        {
          path: 'lod-group',
          name: 'docs-lod-group',
          component: () => import('@/views/docs/en/LODGroup.vue')
        },
        {
          path: 'block-piece',
          name: 'docs-block-piece',
          component: () => import('@/views/docs/en/BlockPiece.vue')
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
          name: 'docs-installation-it',
          component: () => import('@/views/docs/it/Installation.vue')
        },
        {
          path: 'fbx-guide',
          name: 'docs-fbx-guide-it',
          component: () => import('@/views/docs/it/FBXGuide.vue')
        },
        {
          path: 'prefabs',
          name: 'docs-prefabs-it',
          component: () => import('@/views/docs/it/Prefabs.vue')
        },
        {
          path: 'descriptions',
          name: 'docs-descriptions-it',
          component: () => import('@/views/docs/it/Descriptions.vue')
        },
        {
          path: 'buttons',
          name: 'docs-buttons-it',
          component: () => import('@/views/docs/it/Buttons.vue')
        },
        {
          path: 'categories',
          name: 'docs-categories-it',
          component: () => import('@/views/docs/it/Categories.vue')
        },
        {
          path: 'resources',
          name: 'docs-resources-it',
          component: () => import('@/views/docs/it/Resources.vue')
        },
        {
          path: 'effects',
          name: 'docs-effects-it',
          component: () => import('@/views/docs/it/Effects.vue')
        },
        {
          path: 'saves',
          name: 'docs-saves-it',
          component: () => import('@/views/docs/it/Saves.vue')
        },
        {
          path: 'known-issues',
          name: 'docs-known-issues-it',
          component: () => import('@/views/docs/it/KnownIssues.vue')
        },
        {
          path: 'settings',
          name: 'docs-settings-it',
          component: () => import('@/views/docs/it/Settings.vue')
        },
        {
          path: 'lod-group',
          name: 'docs-lod-group-it',
          component: () => import('@/views/docs/it/LODGroup.vue')
        },
        {
          path: 'block-piece',
          name: 'docs-block-piece-it',
          component: () => import('@/views/docs/it/BlockPiece.vue')
        }
      ]
    },

    {
      path: '/cookie-policy',
      name: 'cookie-policy',
      component: CookiePolicy
    },
    {
      path: '/it/cookie-policy',
      name: 'cookie-policy-it',
      component: CookiePolicyIT
    },

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

    {
      path: '/beta',
      name: 'beta',
      component: () => import('@/views/Beta.vue')
    },
    {
      path: '/it/beta',
      name: 'beta-it',
      component: () => import('@/views/BetaIT.vue')
    },

    // {
    //   path: '/discord-giveaway',
    //   name: 'discord-giveaway',
    //   component: DiscordGiveaway
    // },
    // {
    //   path: '/it/discord-giveaway',
    //   name: 'discord-giveaway-it',
    //   component: DiscordGiveawayIT
    // },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/it/demo',
      name: 'demo-it',
      component: DemoIT
    },
    
    // 404 - Catch all route (must be last)
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
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

// Google Analytics - Track page views on route change
router.afterEach((to, from) => {
  // Aspetta che il DOM si aggiorni prima di inviare l'evento
  setTimeout(() => {
    const pageTitle = document.title || 'Assembly Station'
    const pageUrl = window.location.href
    sendPageView(pageUrl, pageTitle)
  }, 100)
})

export default router
