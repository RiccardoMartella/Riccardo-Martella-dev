<template>
  <div class="sidebar-container">
    <h4 class="sidebar-title">{{ isItalian ? 'Documentazione' : 'Documentation' }}</h4>
    <ul class="sidebar-list">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="baseRoute + item.path" class="sidebar-link">
          <span class="sidebar-number">{{ item.number }}</span>
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
      return this.isItalian ? '/it/docs/' : '/docs/';
    },
    menuItems() {
      return this.isItalian ? [
        { number: "1", title: "Installazione", path: "installation" },
        { number: "2", title: "Guida FBX e Materiali", path: "fbx-guide" },
        { number: "3", title: "Posizionare i Prefab", path: "prefabs" },
        { number: "4", title: "Aggiungere Descrizioni e Immagini", path: "descriptions" },
        { number: "5", title: "Pulsanti e Categorie", path: "buttons" },
        { number: "6", title: "Tag/Categorie/Gruppi", path: "categories" },
        { number: "7", title: "Risorse", path: "resources" },
        { number: "8", title: "Salvataggi", path: "saves" },
        { number: "9", title: "Problemi Noti", path: "known-issues" }
      ] : [
        { number: "1", title: "Get Start", path: "installation" },
        { number: "2", title: "FBX and Materials Guide", path: "fbx-guide" },
        { number: "3", title: "Place Prefabs", path: "prefabs" },
        { number: "4", title: "Add Descriptions and Images", path: "descriptions" },
        { number: "5", title: "Buttons and Categories", path: "buttons" },
        { number: "6", title: "Tags/Categories/Groups", path: "categories" },
        { number: "7", title: "Resources", path: "resources" },
        { number: "8", title: "Saves", path: "saves" },
        { number: "9", title: "Known Issues", path: "known-issues" }
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
</style>
