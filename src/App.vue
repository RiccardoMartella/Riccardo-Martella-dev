<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
  margin-top: 72px; /* Adjust this value to match your header height */
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 60px; /* Smaller value for mobile */
  }
}
</style>
