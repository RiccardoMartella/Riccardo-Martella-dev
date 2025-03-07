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
        <h5 class="m-0">{{ $route.path.includes('/it') ? 'Contenuti' : 'Contents' }}</h5>
        <button class="btn btn-close" @click="toggleSidebar" aria-label="Close sidebar"></button>
      </div>
      
      <ul class="mobile-sidebar-list">
        <template v-if="$route.path.includes('/it')">
          <!-- Italian links -->
          <li><RouterLink to="/it/docs/installation" class="sidebar-link" @click="toggleSidebar">1 - Installazione</RouterLink></li>
          <li><RouterLink to="/it/docs/fbx-guide" class="sidebar-link" @click="toggleSidebar">2 - Guida FBX e Materiali</RouterLink></li>
          <li><RouterLink to="/it/docs/prefabs" class="sidebar-link" @click="toggleSidebar">3 - Posizionare i Prefab</RouterLink></li>
          <li><RouterLink to="/it/docs/descriptions" class="sidebar-link" @click="toggleSidebar">4 - Aggiungere Descrizioni e Immagini</RouterLink></li>
          <li><RouterLink to="/it/docs/buttons" class="sidebar-link" @click="toggleSidebar">5 - Pulsanti e Categorie</RouterLink></li>
          <li><RouterLink to="/it/docs/categories" class="sidebar-link" @click="toggleSidebar">6 - Tag/Categorie/Gruppi</RouterLink></li>
          <li><RouterLink to="/it/docs/resources" class="sidebar-link" @click="toggleSidebar">7 - Risorse</RouterLink></li>
          <li><RouterLink to="/it/docs/effects" class="sidebar-link" @click="toggleSidebar">8 - Effetti Sonori & Visivi</RouterLink></li>
          <li><RouterLink to="/it/docs/saves" class="sidebar-link" @click="toggleSidebar">9 - Salvataggi</RouterLink></li>
          <li><RouterLink to="/it/docs/known-issues" class="sidebar-link" @click="toggleSidebar">10 - Problemi Noti</RouterLink></li>
        </template>
        <template v-else>
          <!-- English links -->
          <li><RouterLink to="/docs/installation" class="sidebar-link" @click="toggleSidebar">1 - Get Started</RouterLink></li>
          <li><RouterLink to="/docs/fbx-guide" class="sidebar-link" @click="toggleSidebar">2 - FBX and Materials Guide</RouterLink></li>
          <li><RouterLink to="/docs/prefabs" class="sidebar-link" @click="toggleSidebar">3 - Place Prefabs</RouterLink></li>
          <li><RouterLink to="/docs/descriptions" class="sidebar-link" @click="toggleSidebar">4 - Add Descriptions and Images</RouterLink></li>
          <li><RouterLink to="/docs/buttons" class="sidebar-link" @click="toggleSidebar">5 - Buttons and Categories</RouterLink></li>
          <li><RouterLink to="/docs/categories" class="sidebar-link" @click="toggleSidebar">6 - Tags/Categories/Groups</RouterLink></li>
          <li><RouterLink to="/docs/resources" class="sidebar-link" @click="toggleSidebar">7 - Resources</RouterLink></li>
          <li><RouterLink to="/docs/effects" class="sidebar-link" @click="toggleSidebar">8 - Sound & Visual Effects</RouterLink></li>
          <li><RouterLink to="/docs/saves" class="sidebar-link" @click="toggleSidebar">9 - Saves</RouterLink></li>
          <li><RouterLink to="/docs/known-issues" class="sidebar-link" @click="toggleSidebar">10 - Known Issues</RouterLink></li>
        </template>
      </ul>
    </div>
    
    <div class="sidebar-backdrop" v-if="isOpen" @click="toggleSidebar"></div>
  </div>
</template>

<script>
export default {
  name: 'MobileSidebarToggle',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
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
  bottom: 20px;
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
  padding: 0;
  margin: 0;
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
</style>