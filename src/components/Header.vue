<template>
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar" :class="{'scrolled': isScrolled}">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="/src/assets/logo.png" alt="Assembly Station Logo" class="header-logo me-2">
          Assembly Station
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- Main Navigation Links -->
          <ul class="navbar-nav me-auto ms-5">
            <li class="nav-item">
              <RouterLink :to="introPath" class="nav-link">{{ isItalian ? 'Introduzione' : 'Introduction' }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="docPath" class="nav-link">{{ isItalian ? 'Documentazione' : 'Documentation' }}</RouterLink>
            </li>
          </ul>
          
          <!-- Right-aligned Links -->
          <ul class="navbar-nav align-items-center">
            <li class="nav-item">
              <RouterLink :to="bugPath" class="nav-link me-3">{{ isItalian ? 'Segnala Bug' : 'Report Bug' }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="contactPath" class="nav-link me-3">{{ isItalian ? 'Contatti' : 'Contacts' }}</RouterLink>
            </li>
            <li class="nav-item">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  name: "AppHeader",
  components: {
    LanguageSelector
  },
  data() {
    return {
      isScrolled: false,
      lastScrollPosition: 0
    }
  },
  computed: {
    isItalian() {
      return this.$route.path.includes('/it');
    },
    introPath() {
      return this.isItalian ? '/it' : '/';
    },
    docPath() {
      return this.isItalian ? '/it/docs/installation' : '/docs/installation';
    },
    contactPath() {
      return this.isItalian ? '/it/contacts' : '/contacts';
    },
    bugPath() {
      return this.isItalian ? '/it/report-bug' : '/report-bug';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
}
</script>

<style scoped>
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  background-color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 1rem;
}

.custom-navbar.scrolled {
  padding: 0.5rem 1rem;
  background-color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00A3FF;
  transition: all 0.3s ease;
}

.scrolled .navbar-brand {
  font-size: 1.3rem;
}

.navbar-brand:hover {
  color: #4DBEFF;
}

.nav-link {
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
  color: #333333;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  color: #00A3FF !important;
}

.nav-link.router-link-active {
  color: #00A3FF !important;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #00A3FF;
}

.header-logo {
  height: 50px;
  width: auto;
  transition: all 0.3s ease;
}

.scrolled .header-logo {
  height: 28px;
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem 0;
  }
  
  .navbar-nav {
    margin-top: 0.5rem;
  }
}
</style>