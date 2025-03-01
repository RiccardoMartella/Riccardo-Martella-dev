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
          <li><a href="#installazione" class="sidebar-link" @click="toggleSidebar">1 - Installazione</a></li>
          <li><a href="#FBX" class="sidebar-link" @click="toggleSidebar">2 - Guida FBX e Materiali</a></li>
          <li><a href="#Prefab" class="sidebar-link" @click="toggleSidebar">3 - Posizionare i Prefab</a></li>
          <li><a href="#Descrizione" class="sidebar-link" @click="toggleSidebar">4 - Aggiungere Descrizioni e Immagini</a></li>
          <li><a href="#Pulsanti" class="sidebar-link" @click="toggleSidebar">5 - Pulsanti e Categorie</a></li>
          <li><a href="#Categorie" class="sidebar-link" @click="toggleSidebar">6 - Tag/Categorie/Gruppi</a></li>
          <li><a href="#Risorse" class="sidebar-link" @click="toggleSidebar">7 - Risorse</a></li>
          <li><a href="#Save" class="sidebar-link" @click="toggleSidebar">8 - Salvataggi</a></li>
          <li><a href="#Bug" class="sidebar-link" @click="toggleSidebar">9 - Problemi Noti</a></li>
        </template>
        <template v-else>
          <!-- English links -->
          <li><a href="#installazione" class="sidebar-link" @click="toggleSidebar">1 - Get Start</a></li>
          <li><a href="#FBX" class="sidebar-link" @click="toggleSidebar">2 - FBX and Materials Guide</a></li>
          <li><a href="#Prefab" class="sidebar-link" @click="toggleSidebar">3 - Place Prefabs</a></li>
          <li><a href="#Descrizione" class="sidebar-link" @click="toggleSidebar">4 - Add Descriptions and Images</a></li>
          <li><a href="#Pulsanti" class="sidebar-link" @click="toggleSidebar">5 - Buttons and Categories</a></li>
          <li><a href="#Categorie" class="sidebar-link" @click="toggleSidebar">6 - Tags/Categories/Groups</a></li>
          <li><a href="#Risorse" class="sidebar-link" @click="toggleSidebar">7 - Resources</a></li>
          <li><a href="#Save" class="sidebar-link" @click="toggleSidebar">8 - Saves</a></li>
          <li><a href="#Bug" class="sidebar-link" @click="toggleSidebar">9 - Known Issues</a></li>
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
      // Prevent body scrolling when sidebar is open
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
