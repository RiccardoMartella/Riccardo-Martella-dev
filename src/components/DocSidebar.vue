<template>
  <div class="sidebar-container">
    <h4 class="sidebar-title">{{ $t('sidebar.documentation') }}</h4>

    <div class="tutorial-link-container">
      <h5 class="tutorial-section-title">{{ $t('sidebar.videoTutorials') }}</h5>
      <router-link :to="localePath('/tutorials#tutorials')" class="tutorial-link">
        <i class="bi bi-play-circle-fill me-2"></i>
        {{ $t('sidebar.watchTutorials') }}
      </router-link>
    </div>

    <ul class="sidebar-list">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="localePath('/' + item.path)" class="sidebar-link" :class="{'beta-item': item.isBeta}">
          <span class="sidebar-number" v-if="!item.isBeta">{{ item.number }}</span>
          <span class="beta-badge" v-else>BETA</span>
          <span class="sidebar-text">{{ $t(item.textKey) }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'

export default {
  name: 'DocSidebar',
  setup() {
    const { localePath } = useLocalePath()
    return { localePath }
  },
  computed: {
    menuItems() {
      return [
        { number: "1", textKey: "sidebar.items.installation", path: "assembly-station/docs/installation" },
        { number: "2", textKey: "sidebar.items.fbxGuide", path: "assembly-station/docs/fbx-guide" },
        { number: "3", textKey: "sidebar.items.prefabs", path: "assembly-station/docs/prefabs" },
        { number: "4", textKey: "sidebar.items.descriptions", path: "assembly-station/docs/descriptions" },
        { number: "5", textKey: "sidebar.items.buttons", path: "assembly-station/docs/buttons" },
        { number: "6", textKey: "sidebar.items.categories", path: "assembly-station/docs/categories" },
        { number: "7", textKey: "sidebar.items.resources", path: "assembly-station/docs/resources" },
        { number: "8", textKey: "sidebar.items.effects", path: "assembly-station/docs/effects" },
        { number: "9", textKey: "sidebar.items.saves", path: "assembly-station/docs/saves" },
        { number: "10", textKey: "sidebar.items.knownIssues", path: "assembly-station/docs/known-issues" },
        { number: "11", textKey: "sidebar.items.lodGroup", path: "assembly-station/docs/lod-group" },
        { number: "12", textKey: "sidebar.items.blockPiece", path: "assembly-station/docs/block-piece" },
        { number: "13", textKey: "sidebar.items.settings", path: "assembly-station/docs/settings" },
        { textKey: "sidebar.items.betaFeatures", path: "beta", isBeta: true }
      ]
    }
  }
}
</script>

<style scoped>
.sidebar-container {
  position: sticky;
  top: 90px;
  max-height: calc(100vh - 110px);
  overflow-y: auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

}

.sidebar-container::-webkit-scrollbar {
  display: none;
}

.sidebar-container:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.sidebar-title {
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
}

.tutorial-link-container {
  margin-bottom: 15px;
  padding: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  background: linear-gradient(135deg, #e6f7ff 0%, #f0f9ff 100%);
  border-radius: 10px;
  border-left: 4px solid #00A3FF;
}

.tutorial-section-title {
  margin: 0 0 0.75rem 0;
  color: #00A3FF;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.3px;
}

.tutorial-link {
  display: flex;
  align-items: center;
  background-color: #00A3FF;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 163, 255, 0.25);
}

.tutorial-link:hover {
  background-color: #0082CC;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 163, 255, 0.35);
}

.sidebar-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar-list li {
  margin-bottom: 0.6rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  color: #555;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.sidebar-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #e6f7ff;
  color: #00A3FF;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 10px;
  transition: all 0.2s ease;
}

.sidebar-text {
  flex: 1;
}

.sidebar-link:hover {
  background-color: #e6f7ff;
  color: #00A3FF;
}

.sidebar-link.router-link-active {
  background-color: #00A3FF;
  color: white;
}

.sidebar-link.router-link-active .sidebar-number {
  background-color: white;
}

@media (max-width: 991.98px) {
  .sidebar-container {
    padding: 1rem;
  }

  .sidebar-link {
    padding: 0.6rem 0.8rem;
  }
}
.beta-sidebar-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 15px;
  border-radius: 6px;
  margin-top: 10px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.2s ease;
}

.beta-sidebar-link:hover {
  background-color: #e6f4ff;
}

.beta-sidebar-badge {
  background-color: #00A3FF;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
}

.beta-badge {
  background-color: #00A3FF;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  margin-right: 10px;
  letter-spacing: 0.5px;
}

.beta-item {
  background-color: #e6f7ff;
  border-left: 3px solid #00A3FF;
}

</style>
