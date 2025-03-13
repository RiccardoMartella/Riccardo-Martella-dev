<template>
  <div class="sidebar-container">
    <h4 class="sidebar-title">{{ isItalian ? 'Documentazione' : 'Documentation' }}</h4>
    
    <div class="tutorial-link-container">
      <router-link :to="isItalian ? '/it/tutorials#tutorials' : '/tutorials#tutorials'" class="tutorial-link">
        <i class="bi bi-play-circle-fill me-2"></i>
        {{ isItalian ? 'Video Tutorial' : 'Video Tutorials' }}
      </router-link>
    </div>
    
    <ul class="sidebar-list">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="baseRoute + item.path" class="sidebar-link" :class="{'beta-item': item.isBeta}">
          <span class="sidebar-number" v-if="!item.isBeta">{{ item.number }}</span>
          <span class="beta-badge" v-else>BETA</span>
          <span class="sidebar-text">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DocSidebar',
  props: {
    isItalian: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseRoute() {
      return this.isItalian ? '/it/' : '/';
    },
    menuItems() {
      const items = this.isItalian ? [
        { number: "1", title: "Installazione", path: "docs/installation" },
        { number: "2", title: "Guida FBX e Materiali", path: "docs/fbx-guide" },
        { number: "3", title: "Posizionare i Prefab", path: "docs/prefabs" },
        { number: "4", title: "Aggiungere Descrizioni e Immagini", path: "docs/descriptions" },
        { number: "5", title: "Pulsanti e Categorie", path: "docs/buttons" },
        { number: "6", title: "Tag/Categorie/Gruppi", path: "docs/categories" },
        { number: "7", title: "Risorse", path: "docs/resources" },
        { number: "8", title: "Effetti Sonori & Visivi", path: "docs/effects" },
        { number: "9", title: "Salvataggi", path: "docs/saves" },
        { number: "10", title: "Problemi Noti", path: "docs/known-issues" },
        { number: "11", title: "Impostazioni Generali", path: "docs/Settings" },
        { title: "Funzionalità Beta", path: "beta", isBeta: true }
      ] : [
        { number: "1", title: "Get Start", path: "docs/installation" },
        { number: "2", title: "FBX and Materials Guide", path: "docs/fbx-guide" },
        { number: "3", title: "Place Prefabs", path: "docs/prefabs" },
        { number: "4", title: "Add Descriptions and Images", path: "docs/descriptions" },
        { number: "5", title: "Buttons and Categories", path: "docs/buttons" },
        { number: "6", title: "Tags/Categories/Groups", path: "docs/categories" },
        { number: "7", title: "Resources", path: "docs/resources" },
        { number: "8", title: "Sound & Visual Effects", path: "docs/effects" },
        { number: "9", title: "Saves", path: "docs/saves" },
        { number: "10", title: "Known Issues", path: "docs/known-issues" },
        { number: "11", title: "General Settings", path: "docs/Settings" },
        { title: "Beta Features", path: "beta", isBeta: true }
      ];
      
      return items;
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
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.tutorial-link {
  display: flex;
  align-items: center;
  background-color: #00A3FF;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tutorial-link:hover {
  background-color: #0082CC;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 163, 255, 0.3);
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
