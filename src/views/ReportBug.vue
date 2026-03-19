<template>
  <div class="report-bug-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4" id="bug">{{ $t('reportBug.title') }}</h1>
            <p class="lead">
                {{ $t('reportBug.subtitle') }}
            </p>
          </div>

          <div class="row mb-5">
            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-check-circle-fill"></i>
                </div>
                <h4>{{ $t('reportBug.trackingTitle') }}</h4>
                <p>{{ $t('reportBug.trackingText') }}</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-clock-fill"></i>
                </div>
                <h4>{{ $t('reportBug.responseTitle') }}</h4>
                <p>{{ $t('reportBug.responseText') }}</p>
                <div class="support-developer mt-3">
                  <a href="https://paypal.me/riccardomartella" target="_blank" class="support-link">
                    <i class="bi bi-heart-fill me-1"></i> {{ $t('reportBug.supportWork') }}
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-shield-check"></i>
                </div>
                <h4>{{ $t('reportBug.privacyTitle') }}</h4>
                <p>{{ $t('reportBug.privacyText') }}</p>
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body">
              <h4>{{ $t('reportBug.waysTitle') }}</h4>
              <div class="alert alert-info mb-4">
                <i class="bi bi-info-circle-fill me-2"></i>
                <strong>{{ $t('reportBug.recommended') }}</strong> {{ $t('reportBug.recommendedText') }}
              </div>
              <div class="row mt-4 equal-height-row">
                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="bug-report-method h-100">
                    <div class="bug-report-icon">
                      <i class="bi bi-github"></i>
                    </div>
                    <h5>{{ $t('reportBug.githubTitle') }}</h5>
                    <p class="mb-3">{{ $t('reportBug.githubText') }}</p>
                    <div class="mt-auto">
                      <a href="https://github.com/RiccardoMartella/Riccardo-Martella-dev/issues" class="btn btn-primary w-100" target="_blank">{{ $t('reportBug.openGithub') }}</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="bug-report-method h-100">
                    <div class="bug-report-icon">
                      <i class="bi bi-discord"></i>
                    </div>
                    <h5>Discord</h5>
                    <p class="mb-3">{{ $t('reportBug.discordText') }}</p>
                    <div class="mt-auto">
                      <a href="https://discord.gg/dZ2Veb4eM5" class="btn btn-primary w-100" target="_blank">{{ $t('reportBug.joinDiscord') }}</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="bug-report-method h-100">
                    <div class="bug-report-icon">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <h5>{{ $t('reportBug.emailTitle') }}</h5>
                    <p class="mb-3">{{ $t('reportBug.emailText') }}</p>
                    <div class="mt-auto">
                      <a href="mailto:riccardomartella77@gmail.com" class="btn btn-outline-primary w-100">{{ $t('reportBug.emailMe') }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 alert alert-secondary">
                <i class="bi bi-shield-check me-2"></i>
                <strong>{{ $t('reportBug.verification') }}</strong> {{ $t('reportBug.verificationText') }}
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="mb-4">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-bug fs-1 text-accent me-3"></i>
                  <h2>{{ $t('reportBug.formTitle') }}</h2>
                </div>
                <p class="text-muted">
                  {{ $t('reportBug.formSubtitle') }}
                </p>
              </div>

              <form :name="formName" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" :value="formName" />
                <div class="mb-3">
                  <label for="bugTitle" class="form-label">{{ $t('reportBug.bugTitleLabel') }}</label>
                  <input type="text" class="form-control" id="bugTitle" name="bugTitle" :placeholder="$t('reportBug.bugTitlePlaceholder')">
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="version" class="form-label">{{ $t('reportBug.versionLabel') }}</label>
                    <input type="text" class="form-control" id="version" name="version" :placeholder="$t('reportBug.versionPlaceholder')">
                  </div>
                  <div class="col-md-6">
                    <label for="unityVersion" class="form-label">{{ $t('reportBug.unityVersionLabel') }}</label>
                    <input type="text" class="form-control" id="unityVersion" name="unityVersion" :placeholder="$t('reportBug.unityVersionPlaceholder')">
                  </div>
                </div>

                <div class="mb-3">
                  <label for="severity" class="form-label">{{ $t('reportBug.severityLabel') }}</label>
                  <select class="form-select" id="severity"  name="severity">
                    <option selected>{{ $t('reportBug.severityDefault') }}</option>
                    <option value="critical">{{ $t('reportBug.severityCritical') }}</option>
                    <option value="major">{{ $t('reportBug.severityMajor') }}</option>
                    <option value="minor">{{ $t('reportBug.severityMinor') }}</option>
                    <option value="enhancement">{{ $t('reportBug.severityEnhancement') }}</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="bugDescription" class="form-label">{{ $t('reportBug.descriptionLabel') }}</label>
                  <textarea class="form-control" id="bugDescription" name="bugDescription" rows="5" :placeholder="$t('reportBug.descriptionPlaceholder')"></textarea>
                </div>

                <div class="mb-3">
                  <label for="reproduction" class="form-label">{{ $t('reportBug.stepsLabel') }}</label>
                  <textarea class="form-control" id="reproduction" name="reproduction" rows="4" :placeholder="$t('reportBug.stepsPlaceholder')"></textarea>
                </div>

                <div class="mb-3">
                  <label for="expected" class="form-label">{{ $t('reportBug.expectedLabel') }}</label>
                  <textarea class="form-control" id="expected" name="expected" rows="2" :placeholder="$t('reportBug.expectedPlaceholder')"></textarea>
                </div>

                <div class="mb-3">
                  <label class="form-label">{{ $t('reportBug.screenshotsLabel') }}</label>
                  <div class="input-group">
                    <input type="file" class="form-control" id="attachments" name="attachments" multiple>
                    <label class="input-group-text" for="attachments">{{ $t('reportBug.upload') }}</label>
                  </div>
                  <div class="form-text">{{ $t('reportBug.screenshotsHelp') }}</div>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">{{ $t('reportBug.emailLabel') }}</label>
                  <input type="email" class="form-control" id="email"  name="email" :placeholder="$t('reportBug.emailPlaceholder')">
                </div>
                <div><p class="form-text">{{ $t('reportBug.formPrivacy') }}</p></div>

                <button type="submit" class="btn btn-primary w-100 py-2 mt-3">{{ $t('reportBug.submitBtn') }}</button>
              </form>
            </div>
          </div>

          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  {{ $t('reportBug.faq1Question') }}
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>{{ $t('reportBug.faq1Answer') }}</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  {{ $t('reportBug.faq2Question') }}
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>{{ $t('reportBug.faq2Answer') }}</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  {{ $t('reportBug.faq3Question') }}
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>{{ $t('reportBug.faq3Answer') }}</p>
                  <ul>
                    <li>{{ $t('reportBug.faq3List1') }}</li>
                    <li>{{ $t('reportBug.faq3List2') }}</li>
                    <li>{{ $t('reportBug.faq3List3') }}</li>
                    <li>{{ $t('reportBug.faq3List4') }}</li>
                    <li>{{ $t('reportBug.faq3List5') }}</li>
                  </ul>
                </div>
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
  name: 'ReportBug',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { localePath, locale }
  },
  computed: {
    isHM() {
      return this.$route.path.includes('homing-missile')
    },
    formName() {
      const prefix = this.isHM ? 'hm-' : ''
      return this.locale === 'it' ? `${prefix}reportbugit` : `${prefix}reportbugen`
    }
  },
  mounted() {

    this.$nextTick(() => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    });
  }
}
</script>

<style scoped>
.report-bug-page {
  padding-top: 20px;
  padding-bottom: 50px;
  background-color: rgb(240, 240, 240);
  min-height: 100vh;
}

.text-accent {
  color: #00A3FF;
}

.bug-report-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #E6F7FF;
  margin-right: 15px;
  font-size: 24px;
  color: #00A3FF;
}

.info-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 20px;
  height: 100%;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #E6F7FF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 24px;
  color: #00A3FF;
}

.form-control:focus, .form-select:focus, .accordion-button:focus {
  border-color: #00A3FF;
  box-shadow: 0 0 0 0.25rem rgba(0, 163, 255, 0.25);
}

.accordion {
  margin-top: 2rem;
}

.accordion-button:not(.collapsed) {
  background-color: #E6F7FF;
  color: #00A3FF;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2300A3FF'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.support-developer {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #cce5ff;
}

.support-link {
  color: #00A3FF;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
}

.support-link:hover {
  color: #0082CC;
}

.support-link i {
  color: #ff6b6b;
  margin-right: 5px;
}

.support-text {
  font-size: 0.8rem;
  margin-top: 5px;
  color: #6c757d;
}

.equal-height-row {
  display: flex;
  flex-wrap: wrap;
}

.equal-height-row > [class*='col-'] {
  display: flex;
  flex-direction: column;
}

.bug-report-method {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
}
</style>
