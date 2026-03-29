<template>
  <div class="hm-doc-container">
    <HMMobileSidebarToggle />
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-lg-3 col-md-4 d-none d-md-block">
          <HMDocSidebar />
        </div>
        <div class="col-lg-9 col-md-8 col-12">
          <div class="hm-content-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="hm-back-to-top"
      aria-label="Back to top"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<script>
import HMDocSidebar from '@/components/HMDocSidebar.vue'
import HMMobileSidebarToggle from '@/components/HMMobileSidebarToggle.vue'
import { useSEO, seoConfigs } from '@/composables/useSEO.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMDocContainer',
  components: { HMDocSidebar, HMMobileSidebarToggle },
  setup() {
    const { locale } = useI18n()
    const seoConfig = seoConfigs.hmDocs[locale.value] || seoConfigs.hmDocs.en
    useSEO(seoConfig)
  },
  data() {
    return { showBackToTop: false }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() { this.showBackToTop = window.scrollY > 300 },
    scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
  }
}
</script>

<style>
@import '@/assets/styles/homing-missile.css';
</style>
