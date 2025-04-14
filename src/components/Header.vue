<template>
  <header>
    <nav
      class="navbar navbar-expand-lg custom-navbar"
      :class="{ scrolled: isScrolled }"
    >
      <div class="container">
        <router-link
          :to="introPath"
          class="navbar-brand d-flex align-items-center"
        >
          <img
            src="/images/logo.png"
            alt="Assembly Station Logo"
            class="header-logo me-2"
          />
          Assembly Station
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: isNavOpen }" id="navbarNav">
          <ul class="navbar-nav me-auto ms-lg-5">
            <li class="nav-item mx-lg-2">
              <RouterLink :to="introPath" class="nav-link">{{
                isItalian ? "Introduzione" : "Introduction"
              }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="docPath" class="nav-link">{{
                isItalian ? "Documentazione" : "Documentation"
              }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="pricePath" class="nav-link">{{
                isItalian ? "Prezzi" : "Pricing"
              }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="demoPath" class="nav-link">{{
                isItalian ? "Demo" : "Demo"
              }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="discordGiveawayPath" class="nav-link giveaway-nav-link">{{
                isItalian ? "Keys" : "Keys"
              }}
              <span class="free-pill ms-1">FREE</span>
              </RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="betaPath" class="nav-link">
                <span class="beta-pill">BETA</span>
              </RouterLink>
            </li>
          </ul>

          <ul class="navbar-nav align-items-center">
            <li class="nav-item mx-lg-2">
              <RouterLink :to="bugPath" class="nav-link">{{
                isItalian ? "Segnala Bug" : "Report Bug"
              }}</RouterLink>
            </li>
            <li class="nav-item mx-lg-2">
              <RouterLink :to="contactPath" class="nav-link">{{
                isItalian ? "Contatti" : "Contacts"
              }}</RouterLink>
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
import LanguageSelector from "@/components/LanguageSelector.vue";

export default {
  name: "AppHeader",
  components: {
    LanguageSelector,
  },
  data() {
    return {
      isScrolled: false,
      lastScrollPosition: 0,
      isNavOpen: false,
    };
  },
  computed: {
    isItalian() {
      return this.$route.path.includes("/it");
    },
    introPath() {
      return this.isItalian ? "/it#home2" : "/#home2";
    },
    docPath() {
      return this.isItalian ? "/it/docs/installation" : "/docs/installation";
    },
    contactPath() {
      return this.isItalian ? "/it/contacts" : "/contacts";
    },
    bugPath() {
      return this.isItalian ? "/it/report-bug" : "/report-bug";
    },
    pricePath() {
      return this.isItalian ? "/it/pricing" : "/pricing";
    },
    betaPath() {
      return this.isItalian ? "/it/beta" : "/beta";
    },
    discordGiveawayPath() {
      return this.isItalian ? "/it/discord-giveaway" : "/discord-giveaway";
    },
    demoPath() {
      return this.isItalian ? "/it/demo" : "/demo";
    }
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
    
    closeNavbar() {
      this.isNavOpen = false;
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
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 1rem;
}

.custom-navbar.scrolled {
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.navbar-brand {
  font-size: 1.2rem;
  font-weight: 600;
  color: #00a3ff;
  transition: all 0.3s ease;
}

.scrolled .navbar-brand {
  font-size: 1.3rem;
}

.beta-pill {
  background-color: #00a3ff;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: pulse-glow 2s infinite alternate;
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

.navbar-brand:hover {
  color: #4dbeff;
}

.nav-link {
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
  color: #333333;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
}

.nav-link:hover {
  color: #00a3ff !important;
}

.nav-link.router-link-active {
  color: #00a3ff !important;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #00a3ff;
}

.header-logo {
  height: 45px;
  width: auto;
  transition: all 0.3s ease;
}

.scrolled .header-logo {
  height: 28px;
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
    border-right: 1px solid rgba(0, 0, 0, 0.2);
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
