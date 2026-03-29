<template>
  <div class="d-md-none hm-mobile-toggle-container">
    <button
      class="hm-mobile-toggle-btn"
      @click="toggleSidebar"
      aria-label="Toggle sidebar navigation"
    >
      <i class="bi" :class="isOpen ? 'bi-x-lg' : 'bi-list'"></i>
    </button>

    <div class="hm-mobile-sidebar" :class="{ 'open': isOpen }">
      <div class="hm-mobile-sidebar-header">
        <h5 class="m-0">{{ $t('hmSidebar.documentation') }}</h5>
        <button class="hm-mobile-close-btn" @click="toggleSidebar" aria-label="Close sidebar">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="hm-mobile-back-link-container">
        <router-link :to="localePath('/')" class="hm-mobile-back-link" @click="hideMobileSidebar">
          <i class="bi bi-arrow-left me-2"></i>
          {{ $t('hmSidebar.backToHub') }}
        </router-link>
      </div>

      <ul class="hm-mobile-sidebar-list">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
            :to="localePath('/homing-missile/docs/' + item.slug)"
            class="hm-mobile-sidebar-link"
            @click="hideMobileSidebar"
          >
            <span class="hm-mobile-sidebar-num">{{ item.number }}</span>
            {{ $t(item.textKey) }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="hm-sidebar-backdrop" v-if="isOpen" @click="toggleSidebar"></div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'

export default {
  name: 'HMMobileSidebarToggle',
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
        { number: '01', slug: 'overview', textKey: 'hmSidebar.items.overview' },
        { number: '02', slug: 'folder-structure', textKey: 'hmSidebar.items.folderStructure' },
        { number: '03', slug: 'required-tags', textKey: 'hmSidebar.items.requiredTags' },
        { number: '04', slug: 'how-it-works', textKey: 'hmSidebar.items.howItWorks' },
        { number: '05', slug: 'homing-missile-script', textKey: 'hmSidebar.items.homingMissileScript' },
        { number: '06', slug: 'missile-launcher', textKey: 'hmSidebar.items.missileLauncherScript' },
        { number: '07', slug: 'launcher-controller', textKey: 'hmSidebar.items.launcherControllerScript' },
        { number: '08', slug: 'player-controller', textKey: 'hmSidebar.items.playerControllerScript' },
        { number: '09', slug: 'hud-controller', textKey: 'hmSidebar.items.hudControllerScript' },
        { number: '10', slug: 'target-utility', textKey: 'hmSidebar.items.targetUtilityScripts' },
        { number: '11', slug: 'hud-reference', textKey: 'hmSidebar.items.hudReference' },
        { number: '12', slug: 'integration', textKey: 'hmSidebar.items.integration' },
        { number: '13', slug: 'scriptableobject-config', textKey: 'hmSidebar.items.scriptableObjectConfig' },
        { number: '14', slug: 'setup-checklist', textKey: 'hmSidebar.items.setupChecklist' },
        { number: '15', slug: 'demo-scenes', textKey: 'hmSidebar.items.demoScenes' },
        { number: '16', slug: 'technical-notes', textKey: 'hmSidebar.items.technicalNotes' },
        { number: '17', slug: 'launcher-weapons-material', textKey: 'hmSidebar.items.launcherWeaponsMaterial' },
        { number: '18', slug: 'included-models', textKey: 'hmSidebar.items.includedModels' },
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
.hm-mobile-toggle-container {
  position: relative;
  z-index: 1030;
}

.hm-mobile-toggle-btn {
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
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  background: rgba(13, 21, 32, 0.95);
  border: 1px solid rgba(85, 195, 235, 0.3);
  color: #55C3EB;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hm-mobile-toggle-btn:hover {
  background: rgba(85, 195, 235, 0.15);
  border-color: rgba(85, 195, 235, 0.5);
}

.hm-mobile-sidebar {
  position: fixed;
  top: 0;
  left: -100%;
  width: 85%;
  max-width: 340px;
  height: 100vh;
  background: rgba(13, 21, 32, 0.98);
  z-index: 1050;
  transition: left 0.3s ease;
  padding: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(85, 195, 235, 0.1);
}

.hm-mobile-sidebar.open {
  left: 0;
}

.hm-mobile-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(85, 195, 235, 0.12);
}

.hm-mobile-sidebar-header h5 {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(85, 195, 235, 0.7);
}

.hm-mobile-close-btn {
  background: none;
  border: none;
  color: rgba(225, 235, 242, 0.5);
  font-size: 1rem;
  cursor: pointer;
  padding: 4px;
}

.hm-mobile-close-btn:hover {
  color: #55C3EB;
}

.hm-mobile-back-link-container {
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(85, 195, 235, 0.08);
}

.hm-mobile-back-link {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(225, 235, 242, 0.4);
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.hm-mobile-back-link:hover {
  color: rgba(85, 195, 235, 0.7);
  background: rgba(85, 195, 235, 0.05);
}

.hm-mobile-sidebar-list {
  list-style: none;
  padding: 0 0 80px 0;
  margin: 0;
  overflow-y: auto;
  flex-grow: 1;
}

.hm-mobile-sidebar-list li {
  margin-bottom: 2px;
}

.hm-mobile-sidebar-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.65rem 0.75rem;
  text-decoration: none;
  color: rgba(225, 235, 242, 0.55);
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.hm-mobile-sidebar-link:hover,
.hm-mobile-sidebar-link:active {
  background: rgba(85, 195, 235, 0.08);
  color: rgba(85, 195, 235, 0.9);
}

.hm-mobile-sidebar-link.router-link-active {
  background: rgba(85, 195, 235, 0.15);
  color: #55C3EB;
  border-left: 2px solid #55C3EB;
}

.hm-mobile-sidebar-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(85, 195, 235, 0.5);
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.hm-mobile-sidebar-link.router-link-active .hm-mobile-sidebar-num {
  color: #55C3EB;
}

.hm-sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1045;
}
</style>
