import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'
import Introduction from '../views/Introduction.vue'

const pages = [
  { path: '/', name: 'introduction', component: Introduction, eager: true },
  { path: '/contacts', name: 'contacts', component: () => import('@/views/Contacts.vue') },
  { path: '/report-bug', name: 'report-bug', component: () => import('@/views/ReportBug.vue') },
  { path: '/privacy', name: 'privacy', component: () => import('@/views/Privacy.vue') },
  { path: '/pricing', name: 'pricing', component: () => import('@/views/Pricing.vue') },
  { path: '/tutorials', name: 'tutorials', component: () => import('@/views/Tutorials.vue') },
  { path: '/cookie-policy', name: 'cookie-policy', component: () => import('@/views/CookiePolicy.vue') },
  { path: '/versions', name: 'versions', component: () => import('@/views/Versions.vue') },
  { path: '/licenses', name: 'licenses', component: () => import('@/views/Licenses.vue') },
  { path: '/beta', name: 'beta', component: () => import('@/views/Beta.vue') },
  { path: '/demo', name: 'demo', component: () => import('@/views/Demo.vue') },
  // { path: '/discord-giveaway', name: 'discord-giveaway', component: () => import('@/views/DiscordGiveaway.vue') },
]

const docPages = [
  { path: 'installation', name: 'docs-installation', component: () => import('@/views/docs/Installation.vue') },
  { path: 'fbx-guide', name: 'docs-fbx-guide', component: () => import('@/views/docs/FBXGuide.vue') },
  { path: 'prefabs', name: 'docs-prefabs', component: () => import('@/views/docs/Prefabs.vue') },
  { path: 'descriptions', name: 'docs-descriptions', component: () => import('@/views/docs/Descriptions.vue') },
  { path: 'buttons', name: 'docs-buttons', component: () => import('@/views/docs/Buttons.vue') },
  { path: 'categories', name: 'docs-categories', component: () => import('@/views/docs/Categories.vue') },
  { path: 'effects', name: 'docs-effects', component: () => import('@/views/docs/Effects.vue') },
  { path: 'resources', name: 'docs-resources', component: () => import('@/views/docs/Resources.vue') },
  { path: 'saves', name: 'docs-saves', component: () => import('@/views/docs/Saves.vue') },
  { path: 'known-issues', name: 'docs-known-issues', component: () => import('@/views/docs/KnownIssues.vue') },
  { path: 'settings', name: 'docs-settings', component: () => import('@/views/docs/Settings.vue') },
  { path: 'lod-group', name: 'docs-lod-group', component: () => import('@/views/docs/LODGroup.vue') },
  { path: 'block-piece', name: 'docs-block-piece', component: () => import('@/views/docs/BlockPiece.vue') },
]

function generateRoutes() {
  const routes = []

  // Generate EN and IT routes for each page
  for (const page of pages) {
    // EN route
    routes.push({
      path: page.path,
      name: page.name,
      component: page.component,
      meta: { locale: 'en' }
    })
    // IT route
    const itPath = page.path === '/' ? '/it' : `/it${page.path}`
    routes.push({
      path: itPath,
      name: `${page.name}-it`,
      component: page.component,
      meta: { locale: 'it' }
    })
  }

  // Generate EN doc routes
  const docComponent = () => import('@/views/DocContainer.vue')
  routes.push({
    path: '/docs',
    component: docComponent,
    meta: { locale: 'en' },
    children: [
      { path: '', redirect: '/docs/installation' },
      ...docPages.map(p => ({
        path: p.path,
        name: p.name,
        component: p.component,
        meta: { locale: 'en' }
      }))
    ]
  })

  // Generate IT doc routes
  routes.push({
    path: '/it/docs',
    component: docComponent,
    meta: { locale: 'it' },
    children: [
      { path: '', redirect: '/it/docs/installation' },
      ...docPages.map(p => ({
        path: p.path,
        name: `${p.name}-it`,
        component: p.component,
        meta: { locale: 'it' }
      }))
    ]
  })

  // Single-language pages
  routes.push({
    path: '/rocket',
    name: 'rocket',
    component: () => import('@/views/Rocket.vue'),
    meta: { locale: 'en' }
  })

  // Catch-all
  routes.push({
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  })

  return routes
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generateRoutes(),
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

// Sync i18n locale from route and set document lang
router.beforeEach((to) => {
  const locale = to.meta?.locale || (to.path.startsWith('/it') ? 'it' : 'en')
  i18n.global.locale.value = locale
  document.documentElement.lang = locale
})

// Google Analytics - Track page views sui cambi di route
router.afterEach((to) => {
  setTimeout(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: to.path,
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }, 300)
})

export default router
