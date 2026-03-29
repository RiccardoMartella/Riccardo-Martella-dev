<template>
  <header>
    <nav
      class="navbar navbar-expand-lg custom-navbar"
      :class="{ scrolled: isScrolled }"
    >
      <div class="container">
        <div class="d-flex align-items-center">
          <router-link
            :to="localePath('/')"
            class="hub-btn me-2"
            :title="$t('header.allAssets')"
          >
            <i class="bi bi-grid-fill"></i>
          </router-link>
          <router-link
            :to="localePath('/assembly-station')"
            class="navbar-brand d-flex align-items-center"
          >
            <img
              src="/images/logo.png"
              alt="Assembly Station Logo"
              class="header-logo me-2"
            />
            Assembly Station
          </router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          :aria-expanded="isNavOpen"
          aria-label="Toggle navigation"
        >
          <i class="bi" :class="isNavOpen ? 'bi-x-lg' : 'bi-list'" style="font-size: 1.3rem; color: white;"></i>
        </button>

        <div class="mobile-nav-backdrop" v-if="isNavOpen" @click="closeNavbar"></div>

        <div class="collapse navbar-collapse" :class="{ show: isNavOpen }" id="navbarNav">
          <ul class="navbar-nav me-auto ms-lg-5">
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/assembly-station')" class="nav-link" @click="closeNavbar">{{ $t('header.introduction') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/assembly-station/docs/installation')" class="nav-link" @click="closeNavbar">{{ $t('header.documentation') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/pricing')" class="nav-link" @click="closeNavbar">{{ $t('header.pricing') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/demo')" class="nav-link" @click="closeNavbar">{{ $t('header.demo') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/beta')" class="nav-link" @click="closeNavbar">
                <span class="beta-pill">BETA</span>
              </RouterLink>
            </li>
          </ul>

          <ul class="navbar-nav align-items-center">
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/report-bug')" class="nav-link" @click="closeNavbar">{{ $t('header.reportBug') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/contacts')" class="nav-link" @click="closeNavbar">{{ $t('header.contacts') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <a href="https://discord.gg/dZ2Veb4eM5" target="_blank" rel="noopener noreferrer" class="nav-link" title="Discord">
                <i class="bi bi-discord" style="font-size: 1.2rem;"></i>
              </a>
            </li>
            <li class="nav-item mx-lg-2">
              <a href="https://youtube.com/@riccardomartella2666?si=LKhiph9HqEq-4CBb" target="_blank" rel="noopener noreferrer" class="nav-link" title="YouTube">
                <i class="bi bi-youtube" style="font-size: 1.2rem;"></i>
              </a>
            </li>
            <li class="nav-item mx-lg-2">
              <a href="https://paypal.me/riccardomartella" target="_blank" class="nav-link" title="Donate">
                <i class="bi bi-heart-fill text-danger" style="font-size: 1.2rem;"></i>
              </a>
            </li>
            <li class="nav-item ms-lg-2">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LanguageSelector from "@/components/LanguageSelector.vue"
import { useLocalePath } from "@/composables/useLocalePath.js"

export default {
  name: "AppHeader",
  components: {
    LanguageSelector,
  },
  setup() {
    const { localePath } = useLocalePath()
    return { localePath }
  },
  data() {
    return {
      isScrolled: false,
      lastScrollPosition: 0,
      isNavOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen;
      document.body.style.overflow = this.isNavOpen ? 'hidden' : '';
    },
    closeNavbar() {
      this.isNavOpen = false;
      document.body.style.overflow = '';
    }
  },
};
</script>

<style scoped>
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  background-color: #00A3FF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 1rem;
}

.custom-navbar.scrolled {
  padding: 0.5rem 1rem;
  background-color: #00A3FF;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hub-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.hub-btn:hover {
  background-color: rgba(255, 255, 255, 0.35);
  color: white;
}

.navbar-brand {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  transition: all 0.3s ease;
}

.navbar-brand:hover,
.navbar-brand:focus,
.navbar-brand:visited,
.navbar-brand:active {
  color: #E6F3FF;
  text-decoration: none;
}

.scrolled .navbar-brand {
  font-size: 1.3rem;
}

.nav-link {
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
  color: white;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
}

.nav-link:hover {
  color: #E6F3FF !important;
}

.nav-link.router-link-active {
  color: #E6F3FF !important;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
}

.header-logo {
  height: 45px;
  width: auto;
  transition: all 0.3s ease;
  background-color: #C6EAFF;
  border-radius: 8px;
  padding: 4px;
}

.scrolled .header-logo {
  height: 28px;
}

.navbar-toggler {
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  z-index: 1061;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}

.mobile-nav-backdrop {
  display: none;
}

.beta-pill {
  background-color: white;
  color: #00a3ff;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: pulse-glow-white 2s infinite alternate;
}

.free-pill {
  background-color: #22c55e;
  color: white;
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: pulse-green 2s infinite alternate;
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 163, 255, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(0, 163, 255, 0); }
}

@keyframes pulse-glow-white {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
}

@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
}

.beta-nav-link {
  padding-top: 0.65rem;
  padding-bottom: 0.35rem;
}

.giveaway-nav-link {
  display: flex;
  align-items: center;
}

@media (min-width: 992px) {
  .navbar-nav .nav-item {
    position: relative;
  }

  .navbar-nav .nav-link {
    padding: 0.5rem 0.5rem;
  }

  .navbar-nav .nav-item:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -8px;
    top: 50%;
    height: 60%;
    transform: translateY(-50%);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }
}

@media (max-width: 991.98px) {
  .mobile-nav-backdrop {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1059;
  }

  .navbar-collapse {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    height: 100dvh;
    background: #0088dd;
    z-index: 1060;
    padding: 5rem 1.5rem 2rem;
    transition: right 0.3s ease;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
    visibility: hidden;
  }

  .navbar-collapse.show {
    right: 0;
    visibility: visible;
  }

  .navbar-nav {
    flex-direction: column;
    margin-top: 0;
  }

  .navbar-nav .nav-item {
    margin: 0;
  }

  .navbar-nav .nav-link {
    padding: 0.75rem 0.5rem;
    font-size: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navbar-nav .nav-link.router-link-active::after {
    display: none;
  }

  .navbar-nav .nav-link.router-link-active {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 6px;
  }

  .navbar-nav:last-child {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .navbar-nav:last-child .nav-link {
    border-bottom: none;
    padding: 0.5rem;
  }

  .navbar-nav.align-items-center {
    align-items: flex-start !important;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
  }
}
</style>
