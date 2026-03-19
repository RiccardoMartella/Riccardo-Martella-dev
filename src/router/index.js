import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'
import Hub from '../views/Hub.vue'
import Introduction from '../views/Introduction.vue'

const pages = [
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

const hmDocPages = [
  { path: 'overview', name: 'hm-docs-overview', component: () => import('@/views/hm-docs/Overview.vue') },
  { path: 'folder-structure', name: 'hm-docs-folder-structure', component: () => import('@/views/hm-docs/FolderStructure.vue') },
  { path: 'required-tags', name: 'hm-docs-required-tags', component: () => import('@/views/hm-docs/RequiredTags.vue') },
  { path: 'how-it-works', name: 'hm-docs-how-it-works', component: () => import('@/views/hm-docs/HowItWorks.vue') },
  { path: 'homing-missile-script', name: 'hm-docs-homing-missile-script', component: () => import('@/views/hm-docs/HomingMissileScript.vue') },
  { path: 'missile-launcher', name: 'hm-docs-missile-launcher', component: () => import('@/views/hm-docs/MissileLauncherScript.vue') },
  { path: 'launcher-controller', name: 'hm-docs-launcher-controller', component: () => import('@/views/hm-docs/LauncherControllerScript.vue') },
  { path: 'player-controller', name: 'hm-docs-player-controller', component: () => import('@/views/hm-docs/PlayerControllerScript.vue') },
  { path: 'hud-controller', name: 'hm-docs-hud-controller', component: () => import('@/views/hm-docs/HUDControllerScript.vue') },
  { path: 'target-utility', name: 'hm-docs-target-utility', component: () => import('@/views/hm-docs/TargetUtilityScripts.vue') },
  { path: 'hud-reference', name: 'hm-docs-hud-reference', component: () => import('@/views/hm-docs/HUDReference.vue') },
  { path: 'integration', name: 'hm-docs-integration', component: () => import('@/views/hm-docs/Integration.vue') },
  { path: 'scriptableobject-config', name: 'hm-docs-scriptableobject-config', component: () => import('@/views/hm-docs/ScriptableObjectConfig.vue') },
  { path: 'setup-checklist', name: 'hm-docs-setup-checklist', component: () => import('@/views/hm-docs/SetupChecklist.vue') },
  { path: 'demo-scenes', name: 'hm-docs-demo-scenes', component: () => import('@/views/hm-docs/DemoScenes.vue') },
  { path: 'technical-notes', name: 'hm-docs-technical-notes', component: () => import('@/views/hm-docs/TechnicalNotes.vue') },
  { path: 'launcher-weapons-material', name: 'hm-docs-launcher-weapons-material', component: () => import('@/views/hm-docs/LauncherWeaponsMaterial.vue') },
]

function generateRoutes() {
  const routes = []

  // Hub (new home)
  routes.push({ path: '/', name: 'hub', component: Hub, meta: { locale: 'en' } })
  routes.push({ path: '/it', name: 'hub-it', component: Hub, meta: { locale: 'it' } })

  // Assembly Station intro (was '/')
  routes.push({ path: '/assembly-station', name: 'assembly-station', component: Introduction, meta: { locale: 'en' } })
  routes.push({ path: '/it/assembly-station', name: 'assembly-station-it', component: Introduction, meta: { locale: 'it' } })

  // Homing Missile intro
  routes.push({ path: '/homing-missile', name: 'homing-missile', component: () => import('@/views/HomingMissileIntro.vue'), meta: { locale: 'en' } })
  routes.push({ path: '/it/homing-missile', name: 'homing-missile-it', component: () => import('@/views/HomingMissileIntro.vue'), meta: { locale: 'it' } })

  // Homing Missile specific pages
  routes.push({ path: '/homing-missile/contacts', name: 'hm-contacts', component: () => import('@/views/HMContacts.vue'), meta: { locale: 'en' } })
  routes.push({ path: '/it/homing-missile/contacts', name: 'hm-contacts-it', component: () => import('@/views/HMContacts.vue'), meta: { locale: 'it' } })
  routes.push({ path: '/homing-missile/report-bug', name: 'hm-report-bug', component: () => import('@/views/HMReportBug.vue'), meta: { locale: 'en' } })
  routes.push({ path: '/it/homing-missile/report-bug', name: 'hm-report-bug-it', component: () => import('@/views/HMReportBug.vue'), meta: { locale: 'it' } })
  routes.push({ path: '/homing-missile/pricing', name: 'hm-pricing', component: () => import('@/views/HMPricing.vue'), meta: { locale: 'en' } })
  routes.push({ path: '/it/homing-missile/pricing', name: 'hm-pricing-it', component: () => import('@/views/HMPricing.vue'), meta: { locale: 'it' } })
  routes.push({ path: '/homing-missile/licenses', name: 'hm-licenses', component: () => import('@/views/HMLicenses.vue'), meta: { locale: 'en' } })
  routes.push({ path: '/it/homing-missile/licenses', name: 'hm-licenses-it', component: () => import('@/views/HMLicenses.vue'), meta: { locale: 'it' } })
  routes.push({ path: '/homing-missile/privacy', name: 'hm-privacy', component: () => import('@/views/HMPrivacy.vue'), meta: { locale: 'en' } })
  routes.push({ path: '/it/homing-missile/privacy', name: 'hm-privacy-it', component: () => import('@/views/HMPrivacy.vue'), meta: { locale: 'it' } })
  routes.push({ path: '/homing-missile/cookie-policy', name: 'hm-cookie-policy', component: () => import('@/views/HMCookiePolicy.vue'), meta: { locale: 'en' } })
  routes.push({ path: '/it/homing-missile/cookie-policy', name: 'hm-cookie-policy-it', component: () => import('@/views/HMCookiePolicy.vue'), meta: { locale: 'it' } })

  // Shared pages (contacts, pricing, etc.)
  for (const page of pages) {
    routes.push({ path: page.path, name: page.name, component: page.component, meta: { locale: 'en' } })
    routes.push({ path: `/it${page.path}`, name: `${page.name}-it`, component: page.component, meta: { locale: 'it' } })
  }

  // Assembly Station docs (EN)
  const docComponent = () => import('@/views/DocContainer.vue')
  routes.push({
    path: '/assembly-station/docs',
    component: docComponent,
    meta: { locale: 'en' },
    children: [
      { path: '', redirect: '/assembly-station/docs/installation' },
      ...docPages.map(p => ({ path: p.path, name: p.name, component: p.component, meta: { locale: 'en' } }))
    ]
  })
  // Assembly Station docs (IT)
  routes.push({
    path: '/it/assembly-station/docs',
    component: docComponent,
    meta: { locale: 'it' },
    children: [
      { path: '', redirect: '/it/assembly-station/docs/installation' },
      ...docPages.map(p => ({ path: p.path, name: `${p.name}-it`, component: p.component, meta: { locale: 'it' } }))
    ]
  })

  // Redirects from old /docs paths
  routes.push({ path: '/docs', redirect: '/assembly-station/docs' })
  routes.push({ path: '/docs/:page+', redirect: to => `/assembly-station/docs/${Array.isArray(to.params.page) ? to.params.page.join('/') : to.params.page}` })
  routes.push({ path: '/it/docs', redirect: '/it/assembly-station/docs' })
  routes.push({ path: '/it/docs/:page+', redirect: to => `/it/assembly-station/docs/${Array.isArray(to.params.page) ? to.params.page.join('/') : to.params.page}` })

  // Homing Missile docs (EN)
  const hmDocComponent = () => import('@/views/HMDocContainer.vue')
  routes.push({
    path: '/homing-missile/docs',
    component: hmDocComponent,
    meta: { locale: 'en' },
    children: [
      { path: '', redirect: '/homing-missile/docs/overview' },
      ...hmDocPages.map(p => ({ path: p.path, name: p.name, component: p.component, meta: { locale: 'en' } }))
    ]
  })
  // Homing Missile docs (IT)
  routes.push({
    path: '/it/homing-missile/docs',
    component: hmDocComponent,
    meta: { locale: 'it' },
    children: [
      { path: '', redirect: '/it/homing-missile/docs/overview' },
      ...hmDocPages.map(p => ({ path: p.path, name: `${p.name}-it`, component: p.component, meta: { locale: 'it' } }))
    ]
  })

  // Single-language pages
  routes.push({ path: '/rocket', name: 'rocket', component: () => import('@/views/Rocket.vue'), meta: { locale: 'en' } })

  // Catch-all
  routes.push({ path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFound.vue') })

  return routes
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generateRoutes(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  const locale = to.meta?.locale || (to.path.startsWith('/it') ? 'it' : 'en')
  i18n.global.locale.value = locale
  document.documentElement.lang = locale
})

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
