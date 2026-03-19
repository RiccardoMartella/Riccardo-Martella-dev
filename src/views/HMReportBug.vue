<template>
  <div class="hm-report-bug-page">
    <div class="hm-rb-grid-bg"></div>
    <div class="container position-relative py-5" style="z-index: 1;">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="hm-rb-title" id="bug">{{ $t('reportBug.title') }}</h1>
            <p class="hm-rb-lead">{{ $t('reportBug.subtitle') }}</p>
          </div>

          <div class="row mb-5">
            <div class="col-md-4">
              <div class="hm-info-card mb-4">
                <div class="hm-info-icon"><i class="bi bi-check-circle-fill"></i></div>
                <h4 class="hm-text">{{ $t('reportBug.trackingTitle') }}</h4>
                <p class="hm-muted-text">{{ $t('reportBug.trackingText') }}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hm-info-card mb-4">
                <div class="hm-info-icon"><i class="bi bi-clock-fill"></i></div>
                <h4 class="hm-text">{{ $t('reportBug.responseTitle') }}</h4>
                <p class="hm-muted-text">{{ $t('reportBug.responseText') }}</p>
                <div class="hm-support-link-wrap mt-3">
                  <a href="https://paypal.me/riccardomartella" target="_blank" class="hm-support-link">
                    <i class="bi bi-heart-fill me-1"></i> {{ $t('reportBug.supportWork') }}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hm-info-card mb-4">
                <div class="hm-info-icon"><i class="bi bi-shield-check"></i></div>
                <h4 class="hm-text">{{ $t('reportBug.privacyTitle') }}</h4>
                <p class="hm-muted-text">{{ $t('reportBug.privacyText') }}</p>
              </div>
            </div>
          </div>

          <div class="hm-rb-card mb-5">
            <h4 class="hm-section-label">{{ $t('reportBug.waysTitle') }}</h4>
            <div class="hm-alert-info mb-4">
              <i class="bi bi-info-circle-fill me-2"></i>
              <strong>{{ $t('reportBug.recommended') }}</strong> {{ $t('reportBug.recommendedText') }}
            </div>
            <div class="row mt-4">
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="hm-method-card h-100">
                  <div class="hm-method-icon"><i class="bi bi-github"></i></div>
                  <h5 class="hm-text">{{ $t('reportBug.githubTitle') }}</h5>
                  <p class="hm-muted-text mb-3">{{ $t('reportBug.githubText') }}</p>
                  <div class="mt-auto">
                    <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues" class="hm-btn-primary w-100 justify-content-center" target="_blank">{{ $t('reportBug.openGithub') }}</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="hm-method-card h-100">
                  <div class="hm-method-icon"><i class="bi bi-discord"></i></div>
                  <h5 class="hm-text">Discord</h5>
                  <p class="hm-muted-text mb-3">{{ $t('reportBug.discordText') }}</p>
                  <div class="mt-auto">
                    <a href="https://discord.gg/dZ2Veb4eM5" class="hm-btn-primary w-100 justify-content-center" target="_blank">{{ $t('reportBug.joinDiscord') }}</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="hm-method-card h-100">
                  <div class="hm-method-icon"><i class="bi bi-envelope"></i></div>
                  <h5 class="hm-text">{{ $t('reportBug.emailTitle') }}</h5>
                  <p class="hm-muted-text mb-3">{{ $t('reportBug.emailText') }}</p>
                  <div class="mt-auto">
                    <a href="mailto:riccardomartella77@gmail.com" class="hm-btn-outline w-100 justify-content-center">{{ $t('reportBug.emailMe') }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 hm-alert-secondary">
              <i class="bi bi-shield-check me-2"></i>
              <strong>{{ $t('reportBug.verification') }}</strong> {{ $t('reportBug.verificationText') }}
            </div>
          </div>

          <div class="hm-rb-card mb-5">
            <div class="mb-4">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-bug fs-1 hm-accent me-3"></i>
                <h2 class="hm-text mb-0">{{ $t('reportBug.formTitle') }}</h2>
              </div>
              <p class="hm-muted-text">{{ $t('reportBug.formSubtitle') }}</p>
            </div>

            <form :name="formName" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" :value="formName" />
              <div class="mb-3">
                <label for="bugTitle" class="form-label hm-text">{{ $t('reportBug.bugTitleLabel') }}</label>
                <input type="text" class="form-control hm-input" id="bugTitle" name="bugTitle" :placeholder="$t('reportBug.bugTitlePlaceholder')">
              </div>

              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="version" class="form-label hm-text">{{ $t('reportBug.versionLabel') }}</label>
                  <input type="text" class="form-control hm-input" id="version" name="version" :placeholder="$t('reportBug.versionPlaceholder')">
                </div>
                <div class="col-md-6">
                  <label for="unityVersion" class="form-label hm-text">{{ $t('reportBug.unityVersionLabel') }}</label>
                  <input type="text" class="form-control hm-input" id="unityVersion" name="unityVersion" :placeholder="$t('reportBug.unityVersionPlaceholder')">
                </div>
              </div>

              <div class="mb-3">
                <label for="severity" class="form-label hm-text">{{ $t('reportBug.severityLabel') }}</label>
                <select class="form-select hm-input" id="severity" name="severity">
                  <option selected>{{ $t('reportBug.severityDefault') }}</option>
                  <option value="critical">{{ $t('reportBug.severityCritical') }}</option>
                  <option value="major">{{ $t('reportBug.severityMajor') }}</option>
                  <option value="minor">{{ $t('reportBug.severityMinor') }}</option>
                  <option value="enhancement">{{ $t('reportBug.severityEnhancement') }}</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="bugDescription" class="form-label hm-text">{{ $t('reportBug.descriptionLabel') }}</label>
                <textarea class="form-control hm-input" id="bugDescription" name="bugDescription" rows="5" :placeholder="$t('reportBug.descriptionPlaceholder')"></textarea>
              </div>

              <div class="mb-3">
                <label for="reproduction" class="form-label hm-text">{{ $t('reportBug.stepsLabel') }}</label>
                <textarea class="form-control hm-input" id="reproduction" name="reproduction" rows="4" :placeholder="$t('reportBug.stepsPlaceholder')"></textarea>
              </div>

              <div class="mb-3">
                <label for="expected" class="form-label hm-text">{{ $t('reportBug.expectedLabel') }}</label>
                <textarea class="form-control hm-input" id="expected" name="expected" rows="2" :placeholder="$t('reportBug.expectedPlaceholder')"></textarea>
              </div>

              <div class="mb-3">
                <label class="form-label hm-text">{{ $t('reportBug.screenshotsLabel') }}</label>
                <div class="input-group">
                  <input type="file" class="form-control hm-input" id="attachments" name="attachments" multiple>
                  <label class="input-group-text hm-input-addon" for="attachments">{{ $t('reportBug.upload') }}</label>
                </div>
                <div class="form-text hm-muted-text">{{ $t('reportBug.screenshotsHelp') }}</div>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label hm-text">{{ $t('reportBug.emailLabel') }}</label>
                <input type="email" class="form-control hm-input" id="email" name="email" :placeholder="$t('reportBug.emailPlaceholder')">
              </div>
              <div><p class="form-text hm-muted-text">{{ $t('reportBug.formPrivacy') }}</p></div>

              <button type="submit" class="hm-btn-primary w-100 py-2 mt-3 justify-content-center">{{ $t('reportBug.submitBtn') }}</button>
            </form>
          </div>

          <div class="hm-faq-section">
            <div class="hm-faq-item" v-for="(faq, i) in 3" :key="i">
              <button class="hm-faq-question" @click="toggleFaq(i)">
                {{ $t(`reportBug.faq${i+1}Question`) }}
                <i :class="openFaq === i ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
              </button>
              <div v-if="openFaq === i" class="hm-faq-answer">
                <p>{{ $t(`reportBug.faq${i+1}Answer`) }}</p>
                <ul v-if="i === 2">
                  <li v-for="j in 5" :key="j">{{ $t(`reportBug.faq3List${j}`) }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMReportBug',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { localePath, locale }
  },
  data() {
    return { openFaq: -1 }
  },
  computed: {
    formName() {
      return this.locale === 'it' ? 'hm-reportbugit' : 'hm-reportbugen'
    }
  },
  methods: {
    toggleFaq(i) {
      this.openFaq = this.openFaq === i ? -1 : i
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1)
        const element = document.getElementById(id)
        if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    })
  }
}
</script>

<style scoped>
.hm-report-bug-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hm-rb-grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.hm-rb-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #E1EBF2;
  letter-spacing: -0.02em;
}

.hm-rb-lead {
  font-size: 1.1rem;
  color: rgba(225, 235, 242, 0.5);
}

.hm-text { color: #E1EBF2; }
.hm-muted-text { color: rgba(225, 235, 242, 0.55); }
.hm-accent { color: #55C3EB; }
.hm-section-label { color: #55C3EB; font-weight: 700; font-size: 1.1rem; }

.hm-rb-card {
  background: rgba(13, 21, 32, 0.8);
  border: 1px solid rgba(85, 195, 235, 0.15);
  border-radius: 16px;
  padding: 2rem;
}

.hm-info-card {
  background: rgba(13, 21, 32, 0.6);
  border: 1px solid rgba(85, 195, 235, 0.1);
  border-radius: 14px;
  padding: 25px 20px;
  height: 100%;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.hm-info-card:hover {
  transform: translateY(-5px);
  border-color: rgba(85, 195, 235, 0.3);
}

.hm-info-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(85, 195, 235, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 24px;
  color: #55C3EB;
}

.hm-method-card {
  background: rgba(13, 21, 32, 0.6);
  border: 1px solid rgba(85, 195, 235, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.hm-method-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(85, 195, 235, 0.1);
  margin-bottom: 12px;
  font-size: 24px;
  color: #55C3EB;
}

.hm-alert-info {
  background: rgba(85, 195, 235, 0.08);
  border: 1px solid rgba(85, 195, 235, 0.2);
  border-radius: 10px;
  padding: 12px 16px;
  color: rgba(225, 235, 242, 0.7);
  font-size: 0.9rem;
}

.hm-alert-info strong { color: #55C3EB; }

.hm-alert-secondary {
  background: rgba(225, 235, 242, 0.05);
  border: 1px solid rgba(225, 235, 242, 0.1);
  border-radius: 10px;
  padding: 12px 16px;
  color: rgba(225, 235, 242, 0.6);
  font-size: 0.9rem;
}

.hm-alert-secondary strong { color: rgba(225, 235, 242, 0.85); }

.hm-input {
  background-color: rgba(13, 21, 32, 0.8);
  border: 1px solid rgba(85, 195, 235, 0.2);
  color: #E1EBF2;
  border-radius: 8px;
}

.hm-input::placeholder { color: rgba(225, 235, 242, 0.3); }

.hm-input:focus {
  background-color: rgba(13, 21, 32, 0.9);
  border-color: #55C3EB;
  box-shadow: 0 0 0 0.2rem rgba(85, 195, 235, 0.2);
  color: #E1EBF2;
}

.hm-input-addon {
  background-color: rgba(85, 195, 235, 0.1);
  border: 1px solid rgba(85, 195, 235, 0.2);
  color: #55C3EB;
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

.hm-support-link-wrap {
  padding-top: 10px;
  border-top: 1px dashed rgba(85, 195, 235, 0.15);
}

.hm-support-link {
  color: #55C3EB;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.hm-support-link:hover { color: #78d0ef; }
.hm-support-link i { color: #ff6b6b; }

.hm-faq-section { margin-top: 2rem; }

.hm-faq-item {
  background: rgba(13, 21, 32, 0.6);
  border: 1px solid rgba(85, 195, 235, 0.1);
  border-radius: 10px;
  margin-bottom: 0.75rem;
  overflow: hidden;
}

.hm-faq-question {
  width: 100%;
  padding: 1rem 1.25rem;
  background: none;
  border: none;
  color: #E1EBF2;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.2s ease;
}

.hm-faq-question:hover { color: #55C3EB; }
.hm-faq-question i { color: #55C3EB; font-size: 0.8rem; }

.hm-faq-answer {
  padding: 0 1.25rem 1rem;
  color: rgba(225, 235, 242, 0.6);
  font-size: 0.9rem;
  line-height: 1.65;
}

.hm-faq-answer ul { padding-left: 1.5rem; }
.hm-faq-answer li { margin-bottom: 0.3rem; }
</style>
