<template>
  <div class="doc-container">
    <div class="container-fluid mt-4">
      <div class="row">

        <div class="col-lg-3 col-md-4 d-none d-md-block">
          <DocSidebar :isItalian="isItalian" />
        </div>
   
        <MobileSidebarToggle />

        <div class="col-lg-9 col-md-8">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

    <button 
      v-show="showBackToTop" 
      @click="scrollToTop" 
      class="back-to-top-btn me-4"
      aria-label="Back to top"
    >
      <i class="bi bi-arrow-up "></i>
    </button>
  </div>
</template>

<script>
import DocSidebar from '@/components/DocSidebar.vue'
import MobileSidebarToggle from '@/components/MobileSidebarToggle.vue'
import { useSEO, seoConfigs } from '@/composables/useSEO.js'

export default {
  name: 'DocContainer',
  components: {
    DocSidebar,
    MobileSidebarToggle
  },
  data() {
    return {
      showBackToTop: false
    }
  },
  computed: {
    isItalian() {
      return this.$route.path.includes('/it/')
    }
  },
  watch: {
    '$route'(to) {
      // Update SEO when route changes within docs
      this.updateSEO()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.updateSEO()
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    updateSEO() {
      const isItalian = this.$route.path.includes('/it/')
      const seoConfig = isItalian ? seoConfigs.docsIT : seoConfigs.docs
      
      // Customize based on specific doc page
      const path = this.$route.path
      let title = seoConfig.title
      let description = seoConfig.description
      
      if (path.includes('installation')) {
        title = isItalian 
          ? 'Installazione - Assembly Station Documentation'
          : 'Installation - Assembly Station Documentation'
        description = isItalian
          ? 'Guida completa all\'installazione di Assembly Station per Unity. Requisiti di sistema e istruzioni passo-passo.'
          : 'Complete installation guide for Assembly Station Unity asset. System requirements and step-by-step instructions.'
      } else if (path.includes('fbx-guide')) {
        title = isItalian
          ? 'Guida FBX - Assembly Station Documentation'
          : 'FBX Guide - Assembly Station Documentation'
        description = isItalian
          ? 'Come preparare e importare modelli FBX in Assembly Station per Unity.'
          : 'How to prepare and import FBX models into Assembly Station for Unity.'
      } else if (path.includes('prefabs')) {
        title = isItalian
          ? 'Prefabs - Assembly Station Documentation'
          : 'Prefabs - Assembly Station Documentation'
        description = isItalian
          ? 'Creare e gestire prefabs in Assembly Station. Guida completa alla configurazione dei componenti.'
          : 'Create and manage prefabs in Assembly Station. Complete guide to component configuration.'
      }
      
      useSEO({
        ...seoConfig,
        title,
        description,
        url: typeof window !== 'undefined' ? window.location.href : seoConfig.url
      })
    }
  }
}
</script>

<style>
@import '@/assets/styles/enhanced-docs.css';

.doc-container {
  margin-top: 80px;
  padding-bottom: 60px;
  position: relative;
}

.content-wrapper {
  max-width: 100%;
  padding: 0 15px;
}

.back-to-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #00A3FF;
  color: white;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 100;
}

.back-to-top-btn:hover {
  background-color: #0088cc;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.back-to-top-btn i {
  font-size: 1.25rem;
}

@media (max-width: 767.98px) {
  .content-wrapper {
    padding: 0 10px;
  }
  
  .back-to-top-btn {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>
