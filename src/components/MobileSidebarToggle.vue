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
      
      <!-- New Video Tutorials Link -->
      <div class="mobile-tutorial-link-container">
        <RouterLink :to="$route.path.includes('/it') ? '/it/tutorials' : '/tutorials'" 
                  class="mobile-tutorial-link" 
                  @click="toggleSidebar">
          <i class="bi bi-play-circle-fill me-2"></i>
          {{ $route.path.includes('/it') ? 'Video Tutorial' : 'Video Tutorials' }}
        </RouterLink>
      </div>
      
      <ul class="mobile-sidebar-list">
        <template v-if="isItalian">
          <!-- Italian links -->
          <li><RouterLink to="/it/docs/installation" class="sidebar-link" @click="hideMobileSidebar">1 - Installazione</RouterLink></li>
          <li><RouterLink to="/it/docs/fbx-guide" class="sidebar-link" @click="hideMobileSidebar">2 - Guida FBX e Materiali</RouterLink></li>
          <li><RouterLink to="/it/docs/prefabs" class="sidebar-link" @click="hideMobileSidebar">3 - Posizionare i Prefab</RouterLink></li>
          <li><RouterLink to="/it/docs/descriptions" class="sidebar-link" @click="hideMobileSidebar">4 - Aggiungere Descrizioni e Immagini</RouterLink></li>
          <li><RouterLink to="/it/docs/buttons" class="sidebar-link" @click="hideMobileSidebar">5 - Pulsanti e Categorie</RouterLink></li>
          <li><RouterLink to="/it/docs/categories" class="sidebar-link" @click="hideMobileSidebar">6 - Tag/Categorie/Gruppi</RouterLink></li>
          <li><RouterLink to="/it/docs/resources" class="sidebar-link" @click="hideMobileSidebar">7 - Risorse</RouterLink></li>
          <li><RouterLink to="/it/docs/effects" class="sidebar-link" @click="hideMobileSidebar">8 - Effetti Sonori & Visivi</RouterLink></li>
          <li><RouterLink to="/it/docs/saves" class="sidebar-link" @click="hideMobileSidebar">9 - Salvataggi</RouterLink></li>
          <li><RouterLink to="/it/docs/known-issues" class="sidebar-link" @click="hideMobileSidebar">10 - Problemi Noti</RouterLink></li>
          <li><RouterLink to="/it/beta" class="beta-mobile-link" @click="hideMobileSidebar">
            <span class="beta-mobile-badge">BETA</span> Funzionalità Beta
          </RouterLink></li>
        </template>
        <template v-else>
          <!-- English links -->
          <li><RouterLink to="/docs/installation" class="sidebar-link" @click="hideMobileSidebar">1 - Get Started</RouterLink></li>
          <li><RouterLink to="/docs/fbx-guide" class="sidebar-link" @click="hideMobileSidebar">2 - FBX and Materials Guide</RouterLink></li>
          <li><RouterLink to="/docs/prefabs" class="sidebar-link" @click="hideMobileSidebar">3 - Place Prefabs</RouterLink></li>
          <li><RouterLink to="/docs/descriptions" class="sidebar-link" @click="hideMobileSidebar">4 - Add Descriptions and Images</RouterLink></li>
          <li><RouterLink to="/docs/buttons" class="sidebar-link" @click="hideMobileSidebar">5 - Buttons and Categories</RouterLink></li>
          <li><RouterLink to="/docs/categories" class="sidebar-link" @click="hideMobileSidebar">6 - Tags/Categories/Groups</RouterLink></li>
          <li><RouterLink to="/docs/resources" class="sidebar-link" @click="hideMobileSidebar">7 - Resources</RouterLink></li>
          <li><RouterLink to="/docs/effects" class="sidebar-link" @click="hideMobileSidebar">8 - Sound & Visual Effects</RouterLink></li>
          <li><RouterLink to="/docs/saves" class="sidebar-link" @click="hideMobileSidebar">9 - Saves</RouterLink></li>
          <li><RouterLink to="/docs/known-issues" class="sidebar-link" @click="hideMobileSidebar">10 - Known Issues</RouterLink></li>
          <li><RouterLink to="/beta" class="beta-mobile-link" @click="hideMobileSidebar">
            <span class="beta-mobile-badge">BETA</span> Beta Features
          </RouterLink></li>
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
  computed: {
    isItalian() {
      return this.$route.path.includes('/it');
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
  top: 85px; /* Position moved to top instead of bottom */
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