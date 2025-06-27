<script>
import {RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useSEO } from './composables/useSEO.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    // Configura SEO globale di base
    useSEO()
  }
}
</script>

<template>
  <div class="app">
    <Header />
    <div class="main-content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(240, 240, 240);
}

.main-content {
  flex: 1;
  margin-top: 72px; 
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 60px; 
  }
}
</style>
