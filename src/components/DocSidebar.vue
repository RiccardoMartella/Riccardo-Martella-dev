<template>
  <div class="sidebar-container">
    <h4 class="sidebar-title">{{ isItalian ? 'Documentazione' : 'Documentation' }}</h4>
    <ul class="sidebar-list">
      <li><router-link :to="baseRoute + 'installation'" class="sidebar-link">{{ isItalian ? '1 - Installazione' : '1 - Installation' }}</router-link></li>
      <li><router-link :to="baseRoute + 'fbx-guide'" class="sidebar-link">{{ isItalian ? '2 - Guida FBX e Materiali' : '2 - FBX and Materials Guide' }}</router-link></li>
      <li><router-link :to="baseRoute + 'prefabs'" class="sidebar-link">{{ isItalian ? '3 - Posizionare i Prefab' : '3 - Place Prefabs' }}</router-link></li>
      <li><router-link :to="baseRoute + 'descriptions'" class="sidebar-link">{{ isItalian ? '4 - Aggiungere Descrizioni e Immagini' : '4 - Add Descriptions and Images' }}</router-link></li>
      <li><router-link :to="baseRoute + 'buttons'" class="sidebar-link">{{ isItalian ? '5 - Pulsanti e Categorie' : '5 - Buttons and Categories' }}</router-link></li>
      <li><router-link :to="baseRoute + 'categories'" class="sidebar-link">{{ isItalian ? '6 - Tag/Categorie/Gruppi' : '6 - Tags/Categories/Groups' }}</router-link></li>
      <li><router-link :to="baseRoute + 'resources'" class="sidebar-link">{{ isItalian ? '7 - Risorse' : '7 - Resources' }}</router-link></li>
      <li><router-link :to="baseRoute + 'saves'" class="sidebar-link">{{ isItalian ? '8 - Salvataggi' : '8 - Saves' }}</router-link></li>
      <li><router-link :to="baseRoute + 'known-issues'" class="sidebar-link">{{ isItalian ? '9 - Problemi Noti' : '9 - Known Issues' }}</router-link></li>
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
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.sidebar-title {
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.sidebar-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar-list li {
  margin-bottom: 10px;
}

.sidebar-link {
  display: block;
  padding: 6px 10px;
  color: #555;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  background-color: #e6f7ff;
  color: #00A3FF;
}

.sidebar-link.router-link-active {
  background-color: #00A3FF;
  color: white;
  font-weight: 500;
}
</style>
