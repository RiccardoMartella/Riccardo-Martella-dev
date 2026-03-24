<template>
  <footer class="hm-footer mt-4">
    <div class="hm-footer-main py-5 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-4 mb-md-0 d-flex">
            <div class="d-flex align-items-center mb-2">
              <h5 class="mb-0 hm-footer-brand">Homing <span class="hm-cyan">Missile</span></h5>
            </div>
          </div>

          <div class="col-md-3 mb-4 mb-md-0">
            <h5 class="mb-3 hm-footer-heading">
              <u>{{ $t('footer.info') }}</u>
            </h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a
                  href="https://github.com/RiccardoMartella"
                  class="hm-footer-link"
                >{{ $t('footer.aboutMe') }}</a>
              </li>
              <li class="mb-2">
                <RouterLink :to="localePath('/homing-missile/contacts')" class="hm-footer-link">{{
                  $t('footer.contact')
                }}</RouterLink>
              </li>
              <li class="mb-2">
                <a
                  :href="donateLink"
                  target="_blank"
                  class="hm-footer-link hm-donate-link"
                >
                  <i class="bi bi-heart-fill me-1"></i>{{ $t('footer.donate') }}
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-4 mb-md-0">
            <h5 class="mb-3 hm-footer-heading">
              <u>{{ $t('footer.getStarted') }}</u>
            </h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <RouterLink :to="localePath('/homing-missile/docs/overview')" class="hm-footer-link">{{
                  $t('footer.documentation')
                }}</RouterLink>
              </li>
              <li class="mb-2">
                <RouterLink :to="localePath('/homing-missile/report-bug#bug')" class="hm-footer-link">{{
                  $t('footer.support')
                }}</RouterLink>
              </li>
              <li class="mb-2">
                <RouterLink :to="localePath('/')" class="hm-footer-link">{{
                  $t('hmFooter.allAssets')
                }}</RouterLink>
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <h5 class="mb-3 hm-footer-heading">
              <u>{{ $t('footer.legal') }}</u>
            </h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <RouterLink :to="localePath('/homing-missile/privacy')" class="hm-footer-link" @click="scrollToTop">{{
                  $t('footer.privacyPolicy')
                }}</RouterLink>
              </li>
              <li class="mb-2">
                <RouterLink :to="localePath('/homing-missile/cookie-policy')" class="hm-footer-link" @click="scrollToTop">{{
                  $t('footer.cookiePolicy')
                }}</RouterLink>
              </li>
              <li class="mb-2">
                <RouterLink :to="localePath('/homing-missile/licenses')" class="hm-footer-link" @click="scrollToTop">{{
                  $t('footer.licenses')
                }}</RouterLink>
              </li>
              <li class="mb-2">
                <a href="#" class="hm-footer-link" @click.prevent="openCookiePreferences">{{
                  $t('footer.doNotSell')
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hm-social-icons">
        <a href="https://discord.gg/dZ2Veb4eM5" class="hm-social-icon mx-2">
          <i class="bi bi-discord"></i>
        </a>
        <a href="https://af.unity.com/sr/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F368542" class="hm-social-icon mx-2">
          <img src="/images/logo.png" alt="Assembly Station" class="hm-social-logo">
        </a>
        <a
          href="https://www.linkedin.com/in/riccardo-martella-b91854252/"
          class="hm-social-icon mx-2"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          href="https://youtube.com/@riccardomartella2666?si=LKhiph9HqEq-4CBb"
          target="_blank"
          rel="noopener noreferrer"
          class="hm-social-icon mx-2"
          title="YouTube"
        >
          <i class="bi bi-youtube"></i>
        </a>
      </div>
    </div>
    <div class="hm-footer-bottom py-3">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <p class="mb-0 hm-copyright">{{ $t('hmFooter.copyright') }}</p>
          <p style="font-size: 12px" class="mb-0 hm-powered">
            {{ $t('footer.poweredBy') }}
            <a
              class="hm-powered-link"
              href="https://www.linkedin.com/in/riccardo-martella-b91854252/"
            >Riccardo Martella</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useLocalePath } from "@/composables/useLocalePath.js"

export default {
  name: "HMFooter",
  setup() {
    const { localePath } = useLocalePath()
    return { localePath }
  },
  computed: {
    donateLink() {
      return "https://paypal.me/riccardomartella";
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    openCookiePreferences() {
      if (window._iub && window._iub.cs && window._iub.cs.api) {
        window._iub.cs.api.openPreferences();
      }
    }
  }
};
</script>

<style scoped>
.hm-footer {
  border-top: 1px solid rgba(85, 195, 235, 0.15);
}

.hm-footer-main {
  background-color: #0d1520;
}

.hm-footer-bottom {
  background-color: #060a10;
}

.hm-footer-brand {
  font-size: 1.3rem;
  font-weight: 700;
  color: #E1EBF2;
}

.hm-cyan {
  color: #55C3EB;
}

.hm-footer-heading {
  color: #55C3EB;
  font-weight: 600;
  font-size: 1rem;
}

.hm-footer-link {
  color: rgba(225, 235, 242, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.hm-footer-link:hover {
  color: #55C3EB;
  text-decoration: none;
}

.hm-donate-link {
  color: rgba(255, 220, 130, 0.8);
  font-weight: 500;
}

.hm-donate-link:hover {
  color: #ffdd57;
}

.hm-donate-link i {
  color: #ff6b6b;
}

.hm-social-icons {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.hm-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(85, 195, 235, 0.1);
  margin: 0 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  color: #55C3EB;
}

.hm-social-icon:hover {
  transform: translateY(-3px);
  background-color: rgba(85, 195, 235, 0.2);
  color: #78d0ef;
}

.hm-social-logo {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.hm-copyright {
  color: rgba(225, 235, 242, 0.5);
  font-size: 0.9rem;
}

.hm-powered {
  color: rgba(225, 235, 242, 0.3);
}

.hm-powered-link {
  color: rgba(225, 235, 242, 0.4);
  transition: color 0.2s ease;
}

.hm-powered-link:hover {
  color: #55C3EB;
}

@media (max-width: 767px) {
  .hm-footer-brand {
    font-size: 1.1rem;
  }

  .hm-footer-heading {
    font-size: 0.9rem;
  }

  .hm-social-icon {
    width: 35px;
    height: 35px;
  }
}
</style>
