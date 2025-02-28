<template>
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar" :class="{'scrolled': isScrolled}">
      <div class="container">
        <a class="navbar-brand" href="#">Assembly Station</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Introduction</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/homeEn" class="nav-link">Documentation</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isScrolled: false,
      lastScrollPosition: 0
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
      // Apply scrolled class when page is scrolled
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
</style>