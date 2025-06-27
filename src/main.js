import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../src/assets/main.css'
import './assets/global.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/scripts/particle-randomizer.js'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
