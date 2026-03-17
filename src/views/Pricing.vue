<template>
  <div class="pricing-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">{{ $t('pricing.title') }}</h1>
            <p class="lead">
              {{ $t('pricing.lead') }}
            </p>
          </div>

          <div class="card pricing-card shadow mb-5">
            <div class="card-header text-center py-4">
              <h2 class="pricing-title">{{ $t('pricing.productName') }}</h2>
              <div class="price-container">
                <span class="currency">$</span>
                <span class="price">39</span>
                <span class="period">{{ $t('pricing.period') }}</span>
              </div>
            </div>
            <div class="card-body p-4">
              <div class="package-features">
                <h4 class="mb-3">{{ $t('pricing.whatsIncluded') }}</h4>
                <ul class="feature-list">
                  <li>
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    <span>{{ $t('pricing.feature1') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    <span>{{ $t('pricing.feature2') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    <span>{{ $t('pricing.feature3') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    <span>{{ $t('pricing.feature4') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    <span>{{ $t('pricing.feature5') }}</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    <span>{{ $t('pricing.feature6') }}</span>
                  </li>
                </ul>
              </div>

              <div class="text-center mt-4">
                <a href="https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569" class="btn btn-primary btn-lg px-5 py-3" target="_blank">
                  <i class="bi bi-cart-fill me-2"></i>
                  {{ $t('pricing.buyBtn') }}
                </a>
              </div>
            </div>
          </div>

          <div class="faq-section mt-5">
            <h3 class="text-center mb-4">{{ $t('pricing.faqTitle') }}</h3>

            <div class="accordion" id="pricingFaq">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    {{ $t('pricing.faq1Q') }}
                  </button>
                </h2>
                <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#pricingFaq">
                  <div class="accordion-body">
                    {{ $t('pricing.faq1A') }}
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    {{ $t('pricing.faq2Q') }}
                  </button>
                </h2>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div class="accordion-body">
                    {{ $t('pricing.faq2A') }}
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    {{ $t('pricing.faq3Q') }}
                  </button>
                </h2>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div class="accordion-body">
                    {{ $t('pricing.faq3A') }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-5">
            <p>{{ $t('pricing.moreInfo') }}</p>
            <div class="d-flex justify-content-center gap-4 mt-3">
              <RouterLink :to="localePath('/contacts#contEn')" class="btn btn-outline-primary">
                <i class="bi bi-envelope me-2"></i>{{ $t('pricing.contactMe') }}
              </RouterLink>
              <RouterLink :to="localePath('/docs/installation')" class="btn btn-outline-primary">
                <i class="bi bi-book me-2"></i>{{ $t('pricing.readDocs') }}
              </RouterLink>
            </div>
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
  name: 'Pricing',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    useSEO(seoConfigs.pricing[locale.value] || seoConfigs.pricing)
    return { localePath, locale }
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
.pricing-page {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.pricing-card {
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #00A3FF;
  color: white;
  border-bottom: none;
}

.pricing-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.price-container {
  font-size: 1.25rem;
}

.currency {
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  top: -15px;
}

.price {
  font-size: 6.5rem;
  font-weight: 700;
}

.price-decimal {
  font-size: 0.4em;
  position: relative;
  top: -1.5rem;
}

.period {
  font-size: 1rem;
  opacity: 0.8;
}

.vat-note {
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: 500;
  display: inline-block;
  font-size: 0.9rem;
}

.feature-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.feature-list li {
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
}

.feature-list i {
  margin-top: 3px;
}

.btn-primary {
  background-color: #00A3FF;
  border-color: #00A3FF;
  font-weight: 600;
}

.btn-primary:hover {
  background-color: #0082CC;
  border-color: #0082CC;
}

.btn-outline-primary {
  color: #00A3FF;
  border-color: #00A3FF;
}

.btn-outline-primary:hover {
  background-color: #00A3FF;
  border-color: #00A3FF;
}

.faq-section {
  margin-top: 4rem;
}

.accordion-button:not(.collapsed) {
  background-color: #E6F7FF;
  color: #00A3FF;
}

.accordion-button:focus {
  border-color: #00A3FF;
  box-shadow: 0 0 0 0.25rem rgba(0, 163, 255, 0.25);
}

/* Remove these styles as they're no longer needed */
.price-original {
  display: none;
}

.discount-badge {
  display: none;
}
</style>
