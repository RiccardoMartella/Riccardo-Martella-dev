<template>
  <div class="hm-pricing-page">
    <div class="hm-pricing-grid-bg"></div>
    <div class="container position-relative" style="z-index: 1;">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="hm-pricing-title">{{ $t('hmPricing.title') }}</h1>
            <p class="hm-pricing-lead">{{ $t('hmPricing.lead') }}</p>
          </div>

          <div class="hm-pricing-card mb-5">
            <div class="hm-pricing-card-header text-center py-4">
              <h2 class="hm-product-name">Homing Missile</h2>
              <div class="hm-price-container">
                <span class="hm-currency">$</span>
                <span class="hm-price">19</span>
                <span class="hm-period">{{ $t('hmPricing.period') }}</span>
              </div>
            </div>
            <div class="hm-pricing-card-body p-4">
              <div class="hm-package-features">
                <h4 class="mb-3 hm-features-title">{{ $t('hmPricing.whatsIncluded') }}</h4>
                <ul class="hm-feature-list">
                  <li>
                    <i class="bi bi-check-circle-fill hm-check-icon me-2"></i>
                    <span>{{ $t('hmPricing.feature1') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill hm-check-icon me-2"></i>
                    <span>{{ $t('hmPricing.feature2') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill hm-check-icon me-2"></i>
                    <span>{{ $t('hmPricing.feature3') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill hm-check-icon me-2"></i>
                    <span>{{ $t('hmPricing.feature4') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill hm-check-icon me-2"></i>
                    <span>{{ $t('hmPricing.feature5') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill hm-check-icon me-2"></i>
                    <span>{{ $t('hmPricing.feature6') }}</span>
                  </li>
                </ul>
              </div>

              <div class="text-center mt-4">
                <a href="https://assetstore.unity.com" class="hm-buy-btn" target="_blank">
                  <i class="bi bi-cart-fill me-2"></i>
                  {{ $t('hmPricing.buyBtn') }}
                </a>
              </div>
            </div>
          </div>

          <div class="hm-faq-section mt-5">
            <h3 class="text-center mb-4 hm-faq-title">{{ $t('hmPricing.faqTitle') }}</h3>

            <div class="hm-faq-item" v-for="(faq, index) in faqs" :key="index">
              <button class="hm-faq-question" @click="toggleFaq(index)">
                {{ faq.q }}
                <i class="bi" :class="openFaq === index ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
              </button>
              <div class="hm-faq-answer" v-show="openFaq === index">
                {{ faq.a }}
              </div>
            </div>
          </div>

          <div class="text-center mt-5 pb-4">
            <p class="hm-more-info">{{ $t('hmPricing.moreInfo') }}</p>
            <div class="d-flex justify-content-center gap-3 mt-3 flex-wrap">
              <RouterLink :to="localePath('/homing-missile/contacts')" class="hm-outline-btn">
                <i class="bi bi-envelope me-2"></i>{{ $t('hmPricing.contactMe') }}
              </RouterLink>
              <RouterLink :to="localePath('/homing-missile/docs/overview')" class="hm-outline-btn">
                <i class="bi bi-book me-2"></i>{{ $t('hmPricing.readDocs') }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useSEO, seoConfigs } from '@/composables/useSEO.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMPricing',
  setup() {
    const { t, locale } = useI18n()
    const { localePath } = useLocalePath()
    const seoConfig = seoConfigs.hmPricing[locale.value] || seoConfigs.hmPricing.en
    useSEO(seoConfig)
    return { localePath, t }
  },
  data() {
    return {
      openFaq: 0
    }
  },
  computed: {
    faqs() {
      return [
        { q: this.t('hmPricing.faq1Q'), a: this.t('hmPricing.faq1A') },
        { q: this.t('hmPricing.faq2Q'), a: this.t('hmPricing.faq2A') },
        { q: this.t('hmPricing.faq3Q'), a: this.t('hmPricing.faq3A') }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? -1 : index
    }
  }
}
</script>

<style scoped>
.hm-pricing-page {
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
}

.hm-pricing-grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.hm-pricing-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #E1EBF2;
  letter-spacing: -0.02em;
}

.hm-pricing-lead {
  font-size: 1.1rem;
  color: rgba(225, 235, 242, 0.5);
}

.hm-pricing-card {
  background: rgba(13, 21, 32, 0.8);
  border: 1px solid rgba(85, 195, 235, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hm-pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(85, 195, 235, 0.15);
}

.hm-pricing-card-header {
  background: linear-gradient(135deg, rgba(85, 195, 235, 0.15) 0%, rgba(85, 195, 235, 0.05) 100%);
  border-bottom: 1px solid rgba(85, 195, 235, 0.15);
  padding: 2rem;
}

.hm-product-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #E1EBF2;
  margin-bottom: 0.5rem;
}

.hm-price-container {
  font-size: 1.25rem;
  color: #E1EBF2;
}

.hm-currency {
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  top: -15px;
  color: #55C3EB;
}

.hm-price {
  font-size: 5rem;
  font-weight: 700;
  color: #55C3EB;
}

.hm-period {
  font-size: 1rem;
  color: rgba(225, 235, 242, 0.5);
}

.hm-pricing-card-body {
  padding: 2rem;
}

.hm-features-title {
  color: #E1EBF2;
  font-weight: 600;
}

.hm-feature-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.hm-feature-list li {
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  color: rgba(225, 235, 242, 0.75);
}

.hm-check-icon {
  color: #55C3EB;
  margin-top: 3px;
}

.hm-buy-btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  background-color: #55C3EB;
  color: #060a10;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(85, 195, 235, 0.3);
}

.hm-buy-btn:hover {
  background-color: #78d0ef;
  box-shadow: 0 6px 28px rgba(85, 195, 235, 0.45);
  color: #060a10;
  transform: translateY(-2px);
}

.hm-faq-title {
  color: #E1EBF2;
  font-weight: 700;
}

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

.hm-faq-question:hover {
  color: #55C3EB;
}

.hm-faq-question i {
  color: #55C3EB;
  font-size: 0.8rem;
}

.hm-faq-answer {
  padding: 0 1.25rem 1rem;
  color: rgba(225, 235, 242, 0.6);
  font-size: 0.9rem;
  line-height: 1.65;
}

.hm-more-info {
  color: rgba(225, 235, 242, 0.5);
}

.hm-outline-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: transparent;
  color: #55C3EB;
  border: 1px solid rgba(85, 195, 235, 0.35);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.25s ease;
}

.hm-outline-btn:hover {
  background-color: rgba(85, 195, 235, 0.1);
  border-color: rgba(85, 195, 235, 0.6);
  color: #55C3EB;
}
</style>
