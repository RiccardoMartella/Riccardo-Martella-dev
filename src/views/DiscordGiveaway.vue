<template>
  <div class="giveaway-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">{{ $t('discordGiveaway.title') }}</h1>
            <p class="lead">
              {{ $t('discordGiveaway.lead') }}
            </p>
          </div>

          <div class="card shadow-lg mb-5 border-primary">
            <div class="card-header bg-primary text-white">
              <h2 class="h4 mb-0">{{ $t('discordGiveaway.statusTitle') }}</h2>
            </div>
            <div class="card-body p-4">
              <div class="alert alert-success mb-4">
                <strong><i class="bi bi-check-circle me-2"></i> {{ $t('discordGiveaway.firstBatchLabel') }}</strong>
                {{ $t('discordGiveaway.firstBatchText') }}
              </div>

              <div class="alert alert-info mb-4">
                <strong><i class="bi bi-calendar-event me-2"></i> {{ $t('discordGiveaway.nextGiveawayLabel') }}</strong>
                {{ $t('discordGiveaway.nextGiveawayText') }} <strong>{{ $t('discordGiveaway.nextGiveawayDate') }}</strong>
              </div>

              <div class="countdown-container mb-4">
                <div class="text-center">
                  <h4 class="mb-3">{{ $t('discordGiveaway.countdownTitle') }}</h4>
                  <div class="countdown-display">
                    <div class="countdown-item">
                      <div class="countdown-number">{{ days }}</div>
                      <div class="countdown-label">{{ $t('discordGiveaway.countdownDays') }}</div>
                    </div>
                    <div class="countdown-item">
                      <div class="countdown-number">{{ hours }}</div>
                      <div class="countdown-label">{{ $t('discordGiveaway.countdownHours') }}</div>
                    </div>
                    <div class="countdown-item">
                      <div class="countdown-number">{{ minutes }}</div>
                      <div class="countdown-label">{{ $t('discordGiveaway.countdownMinutes') }}</div>
                    </div>
                    <div class="countdown-item">
                      <div class="countdown-number">{{ seconds }}</div>
                      <div class="countdown-label">{{ $t('discordGiveaway.countdownSeconds') }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mb-4">
                <i class="bi bi-discord"></i>
                <h3 class="h3 mb-3">{{ $t('discordGiveaway.howToTitle') }}</h3>
                <p class="text-muted">{{ $t('discordGiveaway.howToSubtitle') }}</p>
              </div>

              <div class="steps-container">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4 class="h5">{{ $t('discordGiveaway.step1Title') }}</h4>
                    <p>{{ $t('discordGiveaway.step1Text') }}</p>
                    <a href="https://discord.gg/m5Yw4MfEUs" target="_blank" rel="noopener noreferrer" class="btn btn-discord mb-3">
                      <i class="bi bi-discord me-2"></i> {{ $t('discordGiveaway.step1Btn') }}
                    </a>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4 class="h5">{{ $t('discordGiveaway.step2Title') }}</h4>
                    <p v-html="$t('discordGiveaway.step2Text')"></p>
                    <div class="alert alert-warning">
                      <i class="bi bi-exclamation-triangle me-2"></i>
                      <strong>{{ $t('discordGiveaway.step2Important') }}</strong> {{ $t('discordGiveaway.step2Warning') }}
                    </div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4 class="h5">{{ $t('discordGiveaway.step3Title') }}</h4>
                    <p>{{ $t('discordGiveaway.step3Text') }}</p>
                    <div class="alert alert-info">
                      <i class="bi bi-info-circle me-2"></i>
                      {{ $t('discordGiveaway.step3Info') }}
                    </div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h4 class="h5">{{ $t('discordGiveaway.step4Title') }}</h4>
                    <p>{{ $t('discordGiveaway.step4Text') }}</p>
                    <div class="alert alert-warning">
                      <i class="bi bi-chat-dots me-2"></i>
                      <strong>{{ $t('discordGiveaway.step4Format') }}</strong><br>
                      "{{ $t('discordGiveaway.step4Message') }}"
                    </div>
                  </div>
                </div>
              </div>

              <div class="asset-features-section mt-4">
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="text-center mb-3">{{ $t('discordGiveaway.featuresTitle') }}</h4>
                    <div class="feature-list">
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>{{ $t('discordGiveaway.feature1') }}</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>{{ $t('discordGiveaway.feature2') }}</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>{{ $t('discordGiveaway.feature3') }}</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>{{ $t('discordGiveaway.feature4') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <div class="asset-preview text-center">
                      <img src="/images/asset-preview.png" :alt="$t('discordGiveaway.assetPreviewAlt')" class="img-fluid rounded shadow-sm mb-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-light">
              <p class="text-center mb-0">
                <small>{{ $t('discordGiveaway.footerText') }}</small>
              </p>
            </div>
          </div>

          <div class="text-center mt-5">
            <RouterLink :to="localePath('/')" class="btn btn-outline-primary">
              <i class="bi bi-arrow-left me-2"></i> {{ $t('discordGiveaway.returnHome') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'DiscordGiveaway',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()

    const days = ref('--')
    const hours = ref('--')
    const minutes = ref('--')
    const seconds = ref('--')
    let countdownInterval = null

    function startCountdown() {
      const targetDate = new Date('2025-09-30T00:00:00').getTime()

      countdownInterval = setInterval(() => {
        const now = new Date().getTime()
        const distance = targetDate - now

        if (distance < 0) {
          clearInterval(countdownInterval)
          days.value = '00'
          hours.value = '00'
          minutes.value = '00'
          seconds.value = '00'
          return
        }

        days.value = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
        hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
        minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
        seconds.value = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
      }, 1000)
    }

    onMounted(() => {
      startCountdown()
    })

    onBeforeUnmount(() => {
      if (countdownInterval) {
        clearInterval(countdownInterval)
      }
    })

    return { localePath, days, hours, minutes, seconds }
  }
}
</script>

<style scoped>
.giveaway-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.border-primary {
  border-color: #00A3FF !important;
}

.bg-primary {
  background-color: #00A3FF !important;
}

.discord-logo {
  height: 80px;
  width: auto;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.step-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00A3FF;
  color: white;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  font-size: 18px;
}

.step-content {
  flex: 1;
}

.btn-discord {
  background-color: #5865F2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-discord:hover {
  background-color: #4752c4;
  color: white;
}

.asset-features-section {
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.feature-item:hover {
  transform: translateX(5px);
}

.asset-preview img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
}

.countdown-container {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 20px 0;
}

.countdown-display {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.countdown-item {
  text-align: center;
  min-width: 80px;
}

.countdown-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #00A3FF;
  background: white;
  border-radius: 10px;
  padding: 15px 10px;
  margin-bottom: 8px;
  box-shadow: 0 4px 8px rgba(0, 163, 255, 0.1);
  border: 2px solid #00A3FF;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.countdown-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .step-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .step-number {
    margin-bottom: 10px;
  }

  .asset-features-section .col-md-6:first-child {
    margin-bottom: 30px;
  }

  .countdown-display {
    gap: 15px;
  }

  .countdown-item {
    min-width: 70px;
  }

  .countdown-number {
    font-size: 2rem;
    padding: 12px 8px;
    min-height: 70px;
  }
}
</style>
