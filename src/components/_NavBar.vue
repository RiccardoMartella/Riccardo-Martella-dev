<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center" :to="homePath">
        <img src="/images/logo.png" alt="Assembly Station" height="40" class="me-2">
        <span class="logo-text">Assembly Station</span>
      </RouterLink>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink :to="docsPath" class="nav-link">{{ isItalian ? 'Documentazione' : 'Documentation' }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="tutorialsPath" class="nav-link">{{ isItalian ? 'Tutorial' : 'Tutorials' }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="versionsPath" class="nav-link">{{ isItalian ? 'Versioni' : 'Versions' }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="pricingPath" class="nav-link">{{ isItalian ? 'Prezzi' : 'Pricing' }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="betaPath" class="nav-link beta-nav-link beta-pill">{{ isItalian ? 'Prezzi' : 'Pricing' }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="contactPath" class="nav-link">{{ isItalian ? 'Contatti' : 'Contact' }}</RouterLink>
          </li>
        </ul>
        
        <!-- Language Switcher -->
        <div class="nav-language-switcher ms-3">
          <a @click.prevent="switchLanguage(false)" :class="['lang-btn', { 'active': !isItalian }]" href="#" aria-label="English">EN</a>
          <a @click.prevent="switchLanguage(true)" :class="['lang-btn', { 'active': isItalian }]" href="#" aria-label="Italian">IT</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isItalian() {
      return this.$route.path.startsWith('/it');
    },
    homePath() {
      return this.isItalian ? '/it' : '/';
    },
    docsPath() {
      return this.isItalian ? '/it/docs/installation' : '/docs/installation';
    },
    tutorialsPath() {
      return this.isItalian ? '/it/tutorials' : '/tutorials';
    },
    versionsPath() {
      return this.isItalian ? '/it/versions' : '/versions';
    },
    contactPath() {
      return this.isItalian ? '/it/contacts' : '/contacts';
    },
    betaPath() {
      return this.isItalian ? '/it/beta' : '/beta';
    },
    pricingPath() {
      return this.isItalian ? '/it/pricing' : '/pricing';
    }
  },
  methods: {
    switchLanguage(toItalian) {
      if (toItalian === this.isItalian) return;
      
      const currentPath = this.$route.path;
      let newPath;
      
      if (toItalian) {
        newPath = currentPath.startsWith('/it') ? currentPath : `/it${currentPath}`;
      } else {
        newPath = currentPath.startsWith('/it') ? currentPath.substring(3) : currentPath;
      }
      
      // Handle root path
      if (newPath === '' || newPath === '/') {
        newPath = toItalian ? '/it' : '/';
      }
      
      this.$router.push(newPath);
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 70px;
  z-index: 1000;
}

.logo-text {
  font-weight: 600;
  color: #333;
  font-size: 1.2rem;
}

.nav-link {
  font-weight: 500;
  color: #555;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00A3FF;
}

.nav-language-switcher {
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.lang-btn {
  padding: 5px 10px;
  background-color: #f8f9fa;
  color: #495057;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.lang-btn.active {
  background-color: #00A3FF;
  color: white;
}

.lang-btn:hover:not(.active) {
  background-color: #e9ecef;
}

.beta-link {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.beta-pill {
  background-color: #00A3FF;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: pulse-glow 2s infinite alternate;
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 163, 255, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(0, 163, 255, 0); }
}

.nav-text {
  padding-top: 1px;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@media (max-width: 992px) {
  .navbar {
    height: auto;
  }
  
  .beta-link {
    margin: 5px 0;
  }
  
  .nav-language-switcher {
    margin-top: 15px;
    margin-bottom: 10px;
  }
}

.beta-nav-link {
  padding-top: 0.65rem;
  padding-bottom: 0.35rem;
}
</style>
