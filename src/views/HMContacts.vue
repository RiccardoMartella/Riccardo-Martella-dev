<template>
  <div class="hm-contacts-page">
    <div class="hm-contacts-grid-bg"></div>
    <div class="container position-relative py-5" style="z-index: 1;">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="hm-contacts-title" id="cont">{{ $t('contacts.title') }}</h1>
            <p class="hm-contacts-lead">{{ $t('contacts.subtitle') }}</p>
          </div>

          <div class="hm-contacts-card mb-5">
            <div class="row">
              <div class="col-lg-6 mb-4 mb-lg-0">
                <h4 class="hm-section-label">{{ $t('contacts.infoTitle') }}</h4>
                <p class="hm-muted-text mb-4">{{ $t('contacts.infoText') }}</p>

                <div class="d-flex align-items-center mb-3">
                  <div class="hm-contact-icon">
                    <a href="mailto:riccardomartella77@gmail.com"><i class="bi bi-envelope-fill"></i></a>
                  </div>
                  <div>
                    <p class="mb-0 fw-bold hm-text">Email</p>
                    <p class="mb-0 hm-muted-text">riccardomartella77@gmail.com</p>
                  </div>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <div class="hm-contact-icon">
                    <a href="https://discord.gg/dZ2Veb4eM5"><i class="bi bi-discord"></i></a>
                  </div>
                  <div>
                    <p class="mb-0 fw-bold hm-text">Discord</p>
                    <p class="mb-0 hm-muted-text">{{ $t('contacts.discord') }}</p>
                  </div>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <div class="hm-contact-icon">
                    <a href="https://www.linkedin.com/in/riccardo-martella-b91854252/"><i class="bi bi-linkedin"></i></a>
                  </div>
                  <div>
                    <p class="mb-0 fw-bold hm-text">Linkedin</p>
                    <p class="mb-0 hm-muted-text">{{ $t('contacts.linkedin') }}</p>
                  </div>
                </div>

                <div class="d-flex align-items-center">
                  <div class="hm-contact-icon">
                    <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues"><i class="bi bi-github"></i></a>
                  </div>
                  <div>
                    <p class="mb-0 fw-bold hm-text">GitHub</p>
                    <p class="mb-0 hm-muted-text">{{ $t('contacts.github') }}</p>
                  </div>
                </div>

                <div class="hm-alert-info mt-4">
                  <i class="bi bi-info-circle-fill me-2"></i>
                  <strong>{{ $t('contacts.discordVerification') }}</strong> {{ $t('contacts.discordVerificationText') }}
                </div>

                <div class="hm-support-card mt-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-heart-fill text-danger me-2"></i>
                    <h5 class="mb-0 hm-text">{{ $t('contacts.supportTitle') }}</h5>
                  </div>
                  <p class="small hm-muted-text mb-2">{{ $t('contacts.supportText') }}</p>
                  <a href="https://paypal.me/riccardomartella" target="_blank" class="hm-btn-outline btn-sm">
                    <i class="bi bi-paypal me-1"></i> {{ $t('contacts.donatePaypal') }}
                  </a>
                </div>
              </div>

              <div class="col-lg-6">
                <h4 class="hm-section-label">{{ $t('contacts.formTitle') }}</h4>
                <form :name="formName" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" :value="formName" />
                  <p class="d-none">
                    <label>{{ $t('contacts.honeypot') }}<input name="bot-field" /></label>
                  </p>

                  <div class="mb-3">
                    <label for="name" class="form-label hm-text">{{ $t('contacts.formName') }}</label>
                    <input type="text" class="form-control hm-input" id="name" name="name" :placeholder="$t('contacts.formNamePlaceholder')" required>
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label hm-text">{{ $t('contacts.formEmail') }}</label>
                    <input type="email" class="form-control hm-input" id="email" name="email" :placeholder="$t('contacts.formEmailPlaceholder')" required>
                  </div>
                  <div><p class="form-text hm-muted-text">{{ $t('contacts.formPrivacy') }}</p></div>

                  <div class="mb-3">
                    <label for="message" class="form-label hm-text">{{ $t('contacts.formMessage') }}</label>
                    <textarea class="form-control hm-input" id="message" name="message" rows="5" :placeholder="$t('contacts.formMessagePlaceholder')" required></textarea>
                  </div>

                  <button type="submit" class="hm-btn-primary w-100">{{ $t('contacts.formSubmit') }}</button>
                </form>
              </div>
            </div>
          </div>

          <div class="text-center mt-5">
            <h5 class="hm-text">{{ $t('contacts.socialTitle') }}</h5>
            <div class="d-flex justify-content-center gap-4 mt-3">
              <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues" class="hm-social-icon">
                <i class="bi bi-github fs-3"></i>
              </a>
              <a href="https://discord.gg/dZ2Veb4eM5" class="hm-social-icon">
                <i class="bi bi-discord fs-3"></i>
              </a>
              <a href="https://assetstore.unity.com" class="hm-social-icon">
                <i class="bi bi-unity fs-3"></i>
              </a>
              <a href="https://www.linkedin.com/in/riccardo-martella-b91854252/" class="hm-social-icon">
                <i class="bi bi-linkedin fs-3"></i>
              </a>
            </div>
          </div>

          <div class="contact-links my-4 text-center">
            <a href="https://assetstore.unity.com" target="_blank" class="hm-btn-primary me-3 mb-3">
              <i class="bi bi-cart-fill me-2"></i>{{ $t('contacts.getBtn') }}
            </a>
            <a href="https://discord.gg/dZ2Veb4eM5" target="_blank" class="hm-btn-outline mb-3">
              <i class="bi bi-discord me-2"></i>{{ $t('contacts.joinDiscord') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSEO, seoConfigs } from '@/composables/useSEO.js'
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMContacts',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    const seoConfig = seoConfigs.contacts[locale.value] || seoConfigs.contacts.en
    useSEO(seoConfig)
    return { localePath, locale }
  },
  computed: {
    formName() {
      return this.locale === 'it' ? 'hm-contactit' : 'hm-contacten'
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1)
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }
}
</script>

<style scoped>
.hm-contacts-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hm-contacts-grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.hm-contacts-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #E1EBF2;
  letter-spacing: -0.02em;
}

.hm-contacts-lead {
  font-size: 1.1rem;
  color: rgba(225, 235, 242, 0.5);
}

.hm-contacts-card {
  background: rgba(13, 21, 32, 0.8);
  border: 1px solid rgba(85, 195, 235, 0.15);
  border-radius: 16px;
  padding: 2rem;
}

.hm-section-label {
  color: #55C3EB;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.hm-text {
  color: #E1EBF2;
}

.hm-muted-text {
  color: rgba(225, 235, 242, 0.55);
}

.hm-contact-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(85, 195, 235, 0.1);
  margin-right: 15px;
}

.hm-contact-icon i {
  font-size: 18px;
  color: #55C3EB;
}

.hm-contact-icon a {
  color: #55C3EB;
  text-decoration: none;
}

.hm-alert-info {
  background: rgba(85, 195, 235, 0.08);
  border: 1px solid rgba(85, 195, 235, 0.2);
  border-radius: 10px;
  padding: 12px 16px;
  color: rgba(225, 235, 242, 0.7);
  font-size: 0.9rem;
}

.hm-alert-info strong {
  color: #55C3EB;
}

.hm-support-card {
  background: rgba(85, 195, 235, 0.05);
  border-radius: 10px;
  padding: 15px;
  border-left: 3px solid #55C3EB;
}

.hm-input {
  background-color: rgba(13, 21, 32, 0.8);
  border: 1px solid rgba(85, 195, 235, 0.2);
  color: #E1EBF2;
  border-radius: 8px;
}

.hm-input::placeholder {
  color: rgba(225, 235, 242, 0.3);
}

.hm-input:focus {
  background-color: rgba(13, 21, 32, 0.9);
  border-color: #55C3EB;
  box-shadow: 0 0 0 0.2rem rgba(85, 195, 235, 0.2);
  color: #E1EBF2;
}

.hm-btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #55C3EB;
  color: #060a10;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(85, 195, 235, 0.3);
}

.hm-btn-primary:hover {
  background-color: #78d0ef;
  box-shadow: 0 6px 28px rgba(85, 195, 235, 0.45);
  color: #060a10;
  transform: translateY(-1px);
}

.hm-btn-outline {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: transparent;
  color: #55C3EB;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid rgba(85, 195, 235, 0.35);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.hm-btn-outline:hover {
  background-color: rgba(85, 195, 235, 0.1);
  border-color: rgba(85, 195, 235, 0.6);
  color: #55C3EB;
}

.hm-social-icon {
  color: #55C3EB;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
}

.hm-social-icon:hover {
  transform: translateY(-3px);
  color: #78d0ef;
}

.text-danger {
  color: #ff6b6b !important;
}
</style>
