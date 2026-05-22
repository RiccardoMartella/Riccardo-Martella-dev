<template>
  <div class="hm-freekey-page">
    <div class="hm-freekey-grid-bg"></div>
    <div class="container position-relative py-5" style="z-index: 1;">
      <div class="row justify-content-center">
        <div class="col-lg-8">

          <div class="text-center mb-5">
            <div class="hm-freekey-badge mb-3">
              <i class="bi bi-gift-fill me-2"></i>{{ $t('hmFreeKey.badge') }}
            </div>
            <h1 class="hm-freekey-title">{{ $t('hmFreeKey.title') }}</h1>
            <p class="hm-freekey-lead">{{ $t('hmFreeKey.lead') }}</p>
          </div>

          <!-- Honest review request -->
          <div class="hm-freekey-card hm-review-card mb-4">
            <div class="d-flex align-items-center mb-3">
              <i class="bi bi-heart-fill hm-accent-icon me-2"></i>
              <h2 class="hm-section-label mb-0">{{ $t('hmFreeKey.reviewTitle') }}</h2>
            </div>
            <p class="hm-text-body mb-0">{{ $t('hmFreeKey.reviewText') }}</p>
          </div>

          <!-- How to get the key -->
          <div class="hm-freekey-card mb-4">
            <h2 class="hm-section-label mb-4">{{ $t('hmFreeKey.howTitle') }}</h2>

            <div class="hm-step">
              <div class="hm-step-number">1</div>
              <div class="hm-step-content">
                <h3 class="hm-step-title">{{ $t('hmFreeKey.step1Title') }}</h3>
                <p class="hm-text-body">{{ $t('hmFreeKey.step1Text') }}</p>
                <a :href="discordDmUrl" target="_blank" rel="noopener noreferrer" class="hm-btn-discord">
                  <i class="bi bi-discord me-2"></i>{{ $t('hmFreeKey.step1Btn') }}
                </a>
              </div>
            </div>

            <div class="hm-step">
              <div class="hm-step-number">2</div>
              <div class="hm-step-content">
                <h3 class="hm-step-title">{{ $t('hmFreeKey.step2Title') }}</h3>
                <p class="hm-text-body">{{ $t('hmFreeKey.step2Text') }}</p>
                <div class="hm-message-box">
                  <span class="hm-message-text">"{{ $t('hmFreeKey.step2Message') }}"</span>
                  <button type="button" class="hm-copy-btn" @click="copyMessage">
                    <i :class="copied ? 'bi bi-check-lg' : 'bi bi-clipboard'"></i>
                    {{ copied ? $t('hmFreeKey.copied') : $t('hmFreeKey.copy') }}
                  </button>
                </div>
              </div>
            </div>

            <div class="hm-step hm-step-last">
              <div class="hm-step-number">3</div>
              <div class="hm-step-content">
                <h3 class="hm-step-title">{{ $t('hmFreeKey.step3Title') }}</h3>
                <p class="hm-text-body mb-0">{{ $t('hmFreeKey.step3Text') }}</p>
              </div>
            </div>
          </div>

          <!-- Note -->
          <div class="hm-note">
            <i class="bi bi-info-circle-fill me-2"></i>
            <span><strong>{{ $t('hmFreeKey.noteTitle') }}</strong> {{ $t('hmFreeKey.noteText') }}</span>
          </div>

          <div class="text-center mt-5">
            <RouterLink :to="localePath('/homing-missile')" class="hm-btn-outline">
              <i class="bi bi-arrow-left me-2"></i>{{ $t('hmFreeKey.backHome') }}
            </RouterLink>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSEO, seoConfigs } from '@/composables/useSEO.js'
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMFreeKey',
  setup() {
    const { locale, t } = useI18n()
    const { localePath } = useLocalePath()
    const seoConfig = seoConfigs.hmFreeKey[locale.value] || seoConfigs.hmFreeKey.en
    useSEO(seoConfig)

    // Direct link to my Discord profile (Message button available there)
    const discordDmUrl = 'https://discord.com/users/266681429612560384'
    const copied = ref(false)

    function copyMessage() {
      const text = t('hmFreeKey.step2Message')
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          copied.value = true
          setTimeout(() => { copied.value = false }, 2000)
        })
      }
    }

    return { localePath, locale, discordDmUrl, copied, copyMessage }
  }
}
</script>

<style scoped>
.hm-freekey-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hm-freekey-grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.hm-freekey-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(85, 195, 235, 0.1);
  border: 1px solid rgba(85, 195, 235, 0.35);
  border-radius: 999px;
  color: #55C3EB;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hm-freekey-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #E1EBF2;
  letter-spacing: -0.02em;
}

.hm-freekey-lead {
  font-size: 1.1rem;
  color: rgba(225, 235, 242, 0.55);
}

.hm-freekey-card {
  background: rgba(13, 21, 32, 0.8);
  border: 1px solid rgba(85, 195, 235, 0.15);
  border-radius: 16px;
  padding: 2rem;
}

.hm-review-card {
  border-left: 3px solid #55C3EB;
}

.hm-section-label {
  color: #55C3EB;
  font-weight: 700;
  font-size: 1.2rem;
}

.hm-accent-icon {
  color: #ff6b6b;
  font-size: 1.2rem;
}

.hm-text-body {
  color: rgba(225, 235, 242, 0.75);
  line-height: 1.7;
}

.hm-step {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding-bottom: 1.75rem;
  margin-bottom: 1.75rem;
  border-bottom: 1px solid rgba(85, 195, 235, 0.12);
}

.hm-step-last {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}

.hm-step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #55C3EB;
  color: #060a10;
  font-weight: 800;
  font-size: 1.05rem;
  flex-shrink: 0;
}

.hm-step-content {
  flex: 1;
}

.hm-step-title {
  color: #E1EBF2;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.hm-message-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  background: rgba(85, 195, 235, 0.06);
  border: 1px dashed rgba(85, 195, 235, 0.4);
  border-radius: 10px;
  padding: 12px 16px;
}

.hm-message-text {
  color: #E1EBF2;
  font-style: italic;
}

.hm-copy-btn {
  background: transparent;
  border: 1px solid rgba(85, 195, 235, 0.35);
  color: #55C3EB;
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hm-copy-btn:hover {
  background: rgba(85, 195, 235, 0.12);
  border-color: rgba(85, 195, 235, 0.6);
}

.hm-btn-discord {
  display: inline-flex;
  align-items: center;
  padding: 11px 22px;
  background-color: #5865F2;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.hm-btn-discord:hover {
  background-color: #4752c4;
  color: #fff;
  transform: translateY(-1px);
}

.hm-note {
  display: flex;
  align-items: flex-start;
  background: rgba(85, 195, 235, 0.08);
  border: 1px solid rgba(85, 195, 235, 0.2);
  border-radius: 10px;
  padding: 14px 18px;
  color: rgba(225, 235, 242, 0.7);
  font-size: 0.9rem;
}

.hm-note i {
  color: #55C3EB;
  margin-top: 2px;
}

.hm-note strong {
  color: #55C3EB;
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

@media (max-width: 576px) {
  .hm-freekey-title {
    font-size: 1.9rem;
  }

  .hm-freekey-card {
    padding: 1.5rem;
  }

  .hm-step {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
