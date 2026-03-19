<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HMHeader from './components/HMHeader.vue'
import HMFooter from './components/HMFooter.vue'
import { useSEO } from './composables/useSEO.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    HMHeader,
    HMFooter
  },
  setup() {
    useSEO()
  },
  computed: {
    currentSection() {
      const path = this.$route.path
      // Hub: exactly / or /it (with optional trailing slash)
      if (path === '/' || path === '/it' || path === '/it/') {
        return 'hub'
      }
      // Homing Missile: starts with /homing-missile or /it/homing-missile
      if (path.startsWith('/homing-missile') || path.startsWith('/it/homing-missile')) {
        return 'homing-missile'
      }
      // Everything else: Assembly Station
      return 'assembly-station'
    }
  }
}
</script>

<template>
  <div class="app" :class="{
    'app--hub': currentSection === 'hub',
    'app--hm': currentSection === 'homing-missile',
    'app--as': currentSection === 'assembly-station'
  }">
    <Header v-if="currentSection === 'assembly-station'" />
    <HMHeader v-else-if="currentSection === 'homing-missile'" />
    <div class="main-content" :class="{
      'main-content--hub': currentSection === 'hub',
      'main-content--hm': currentSection === 'homing-missile'
    }">
      <RouterView />
    </div>
    <Footer v-if="currentSection === 'assembly-station'" />
    <HMFooter v-else-if="currentSection === 'homing-missile'" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(240, 240, 240);
}

.app--hub {
  background-color: #060a10;
}

.app--hm {
  background-color: #060a10;
}

.main-content {
  flex: 1;
  margin-top: 72px;
}

.main-content--hub {
  margin-top: 0;
}

.main-content--hm {
  margin-top: 72px;
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 60px;
  }

  .main-content--hub {
    margin-top: 0;
  }

  .main-content--hm {
    margin-top: 60px;
  }
}
</style>
