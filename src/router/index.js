import { createRouter, createWebHistory } from 'vue-router'

import Introduction from '@/views/Introduction.vue'
import IntroductionIT from '@/views/IntroductionIT.vue'
import Contacts from '@/views/Contacts.vue'
import ContactsIT from '@/views/ContactsIT.vue'

import Installation from '@/views/docs/en/Installation.vue'
import FBXGuide from '@/views/docs/en/FBXGuide.vue'
import Prefabs from '@/views/docs/en/Prefabs.vue'
import Descriptions from '@/views/docs/en/Descriptions.vue'
import Buttons from '@/views/docs/en/Buttons.vue'
import Categories from '@/views/docs/en/Categories.vue'
import Resources from '@/views/docs/en/Resources.vue'
import Saves from '@/views/docs/en/Saves.vue'
import KnownIssues from '@/views/docs/en/KnownIssues.vue'

import InstallationIT from '@/views/docs/it/Installation.vue'
import FBXGuideIT from '@/views/docs/it/FBXGuide.vue'
import PrefabsIT from '@/views/docs/it/Prefabs.vue'
import DescriptionsIT from '@/views/docs/it/Descriptions.vue'
import ButtonsIT from '@/views/docs/it/Buttons.vue'
import CategoriesIT from '@/views/docs/it/Categories.vue'
import ResourcesIT from '@/views/docs/it/Resources.vue'
import SavesIT from '@/views/docs/it/Saves.vue'
import KnownIssuesIT from '@/views/docs/it/KnownIssues.vue'

const routes = [
  // English routes
  {
    path: '/',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/report-bug',
    name: 'ReportBug',
    component: Contacts 
  },
  
  
  {
    path: '/docs/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/docs/fbx-guide',
    name: 'FBXGuide',
    component: FBXGuide
  },
  {
    path: '/docs/prefabs',
    name: 'Prefabs',
    component: Prefabs
  },
  {
    path: '/docs/descriptions',
    name: 'Descriptions',
    component: Descriptions
  },
  {
    path: '/docs/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/docs/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/docs/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/docs/saves',
    name: 'Saves',
    component: Saves
  },
  {
    path: '/docs/known-issues',
    name: 'KnownIssues',
    component: KnownIssues
  },
  
  // Italian routes
  {
    path: '/it',
    name: 'IntroductionIT',
    component: IntroductionIT
  },
  {
    path: '/it/contacts',
    name: 'ContactsIT',
    component: ContactsIT
  },
  {
    path: '/it/report-bug',
    name: 'ReportBugIT',
    component: ContactsIT 
  },
  
  {
    path: '/it/docs/installation',
    name: 'InstallationIT',
    component: InstallationIT
  },
  {
    path: '/it/docs/fbx-guide',
    name: 'FBXGuideIT',
    component: FBXGuideIT
  },
  {
    path: '/it/docs/prefabs',
    name: 'PrefabsIT',
    component: PrefabsIT
  },
  {
    path: '/it/docs/descriptions',
    name: 'DescriptionsIT',
    component: DescriptionsIT
  },
  {
    path: '/it/docs/buttons',
    name: 'ButtonsIT',
    component: ButtonsIT
  },
  {
    path: '/it/docs/categories',
    name: 'CategoriesIT',
    component: CategoriesIT
  },
  {
    path: '/it/docs/resources',
    name: 'ResourcesIT',
    component: ResourcesIT
  },
  {
    path: '/it/docs/saves',
    name: 'SavesIT',
    component: SavesIT
  },
  {
    path: '/it/docs/known-issues',
    name: 'KnownIssuesIT',
    component: KnownIssuesIT
  },
  

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
