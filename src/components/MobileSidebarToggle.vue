<template>
  <div class="d-md-none mobile-toggle-container">
    <button
      class="btn btn-primary mobile-toggle-btn"
      @click="toggleSidebar"
      aria-label="Toggle sidebar navigation"
    >
      <i class="bi" :class="isOpen ? 'bi-x-lg' : 'bi-list'"></i>
    </button>

    <div class="mobile-sidebar" :class="{ 'open': isOpen }">
      <div class="mobile-sidebar-header">
        <h5 class="m-0">{{ $t('sidebar.contents') }}</h5>
        <button class="btn btn-close" @click="toggleSidebar" aria-label="Close sidebar"></button>
      </div>

      <div class="mobile-tutorial-link-container">
        <RouterLink :to="localePath('/tutorials')"
                  class="mobile-tutorial-link"
                  @click="toggleSidebar">
          <i class="bi bi-play-circle-fill me-2"></i>
          {{ $t('sidebar.videoTutorials') }}
        </RouterLink>
      </div>

      <ul class="mobile-sidebar-list">
        <li v-for="(item, index) in menuItems" :key="index">
          <RouterLink
            v-if="!item.isBeta"
            :to="localePath('/' + item.path)"
            class="sidebar-link"
            @click="hideMobileSidebar">
            {{ item.number }} - {{ $t(item.textKey) }}
          </RouterLink>
          <RouterLink
            v-else
            :to="localePath('/' + item.path)"
            class="beta-mobile-link"
            @click="hideMobileSidebar">
            <span class="beta-mobile-badge">BETA</span> {{ $t(item.textKey) }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="sidebar-backdrop" v-if="isOpen" @click="toggleSidebar"></div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'

export default {
  name: 'MobileSidebarToggle',
  setup() {
    const { localePath } = useLocalePath()
    return { localePath }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    menuItems() {
      return [
        { number: "1", textKey: "sidebar.items.installation", path: "docs/installation" },
        { number: "2", textKey: "sidebar.items.fbxGuide", path: "docs/fbx-guide" },
        { number: "3", textKey: "sidebar.items.prefabs", path: "docs/prefabs" },
        { number: "4", textKey: "sidebar.items.descriptions", path: "docs/descriptions" },
        { number: "5", textKey: "sidebar.items.buttons", path: "docs/buttons" },
        { number: "6", textKey: "sidebar.items.categories", path: "docs/categories" },
        { number: "7", textKey: "sidebar.items.resources", path: "docs/resources" },
        { number: "8", textKey: "sidebar.items.effects", path: "docs/effects" },
        { number: "9", textKey: "sidebar.items.saves", path: "docs/saves" },
        { number: "10", textKey: "sidebar.items.knownIssues", path: "docs/known-issues" },
        { number: "11", textKey: "sidebar.items.lodGroup", path: "docs/lod-group" },
        { number: "12", textKey: "sidebar.items.blockPiece", path: "docs/block-piece" },
        { number: "13", textKey: "sidebar.items.settings", path: "docs/settings" },
        { textKey: "sidebar.items.betaFeatures", path: "beta", isBeta: true }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    },
    hideMobileSidebar() {
      this.isOpen = false;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped>
.mobile-toggle-container {
  position: relative;
  z-index: 1030;
}

.mobile-toggle-btn {
  position: fixed;
  top: 85px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1040;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.mobile-sidebar {
  position: fixed;
  top: 0;
  left: -100%;
  width: 85%;
  height: 100vh;
  background: white;
  z-index: 1050;
  transition: all 0.3s ease;
  padding: 1rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  display: flex;
  flex-direction: column;
}

.mobile-sidebar.open {
  left: 0;
}

.mobile-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.mobile-sidebar-list {
  list-style-type: none;
  padding: 0 0 80px 0; /* Add bottom padding to ensure all items are visible */
  margin: 0;
  overflow-y: auto;
  flex-grow: 1;
}

.mobile-sidebar-list li {
  margin-bottom: 0.5rem;
}

.mobile-sidebar-list .sidebar-link {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.mobile-sidebar-list .sidebar-link:hover,
.mobile-sidebar-list .sidebar-link:active {
  background-color: #e6f7ff;
  color: #00A3FF;
}

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1045;
}

.mobile-tutorial-link-container {
  padding: 10px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.mobile-tutorial-link {
  display: flex;
  align-items: center;
  background-color: #00A3FF;
  color: white;
  padding: 12px 15px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  margin: 0 10px;
}

.mobile-tutorial-link:hover,
.mobile-tutorial-link:active {
  background-color: #0082CC;
}

.beta-mobile-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1rem;
  background-color: #e6f7ff;
  border-left: 3px solid #00A3FF;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin-top: 10px;
  margin-bottom: 20px;
}

.beta-mobile-badge {
  background-color: #00A3FF;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
}
</style>
