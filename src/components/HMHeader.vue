<template>
  <header>
    <nav
      class="hm-navbar navbar navbar-expand-lg"
      :class="{ scrolled: isScrolled }"
    >
      <div class="container">
        <div class="d-flex align-items-center">
          <router-link
            :to="localePath('/')"
            class="hm-hub-btn me-2"
            :title="$t('header.allAssets')"
          >
            <i class="bi bi-grid-fill"></i>
          </router-link>
          <router-link
            :to="localePath('/homing-missile')"
            class="navbar-brand d-flex align-items-center"
          >
            <img src="/images/logo.png" alt="Logo" class="hm-brand-logo">
            <span class="hm-brand-text">Homing <span class="hm-cyan">Missile</span></span>
          </router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          aria-controls="hmNavbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: isNavOpen }" id="hmNavbarNav">
          <ul class="navbar-nav me-auto ms-lg-5">
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/homing-missile')" class="nav-link" exact>{{ $t('hmHeader.overview') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <a href="#demo" class="nav-link" @click.prevent="scrollToDemo">{{ $t('hmHeader.demo') }}</a>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/homing-missile/docs/overview')" class="nav-link">{{ $t('header.documentation') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/homing-missile/pricing')" class="nav-link">{{ $t('header.pricing') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/homing-missile/report-bug')" class="nav-link">{{ $t('header.reportBug') }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="localePath('/homing-missile/contacts')" class="nav-link">{{ $t('header.contacts') }}</RouterLink>
            </li>
          </ul>

          <ul class="navbar-nav align-items-center">
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
              <LanguageSelector theme="dark" />
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
  name: "HMHeader",
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
    },
    scrollToDemo() {
      const introPath = this.localePath('/homing-missile')
      if (this.$route.path !== introPath) {
        this.$router.push(introPath).then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              const el = document.getElementById('demo')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 300)
          })
        })
      } else {
        const el = document.getElementById('demo')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      this.isNavOpen = false
    },
  },
};
</script>

<style scoped>
.hm-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  background-color: #0d1520;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  padding: 1rem;
  border-bottom: 1px solid rgba(85, 195, 235, 0.1);
}

.hm-navbar.scrolled {
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
}

.hm-hub-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(85, 195, 235, 0.1);
  color: rgba(225, 235, 242, 0.6);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
  border: 1px solid rgba(85, 195, 235, 0.15);
}

.hm-hub-btn:hover {
  background-color: rgba(85, 195, 235, 0.2);
  color: #55C3EB;
  border-color: rgba(85, 195, 235, 0.3);
}

.navbar-brand {
  font-size: 1.2rem;
  font-weight: 600;
  color: #E1EBF2;
  transition: all 0.3s ease;
  text-decoration: none;
}

.navbar-brand:hover,
.navbar-brand:focus,
.navbar-brand:visited,
.navbar-brand:active {
  color: #E1EBF2;
  text-decoration: none;
}

.hm-brand-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  margin-right: 8px;
}

.hm-brand-text {
  font-weight: 700;
  letter-spacing: -0.01em;
}

.hm-cyan {
  color: #55C3EB;
}

.nav-link {
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
  color: rgba(225, 235, 242, 0.7);
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
}

.nav-link:hover {
  color: #E1EBF2 !important;
}

.nav-link.router-link-active {
  color: #E1EBF2 !important;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #55C3EB;
}

.navbar-toggler {
  border: 1px solid rgba(85, 195, 235, 0.3);
  padding: 4px 8px;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(85, 195, 235, 0.25);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2885, 195, 235, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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
    border-right: 1px solid rgba(85, 195, 235, 0.15);
  }
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem 0;
    transition: all 0.3s ease;
  }

  .navbar-nav {
    margin-top: 0.5rem;
  }

  .navbar-collapse.show {
    display: block;
  }
}
</style>
