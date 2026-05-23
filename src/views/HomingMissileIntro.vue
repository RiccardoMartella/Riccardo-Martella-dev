<template>
  <div class="hm-intro-page">
    <div class="hm-intro-grid-bg"></div>

    <!-- Background video — anchored to viewport right edge, behind container -->
    <video
      class="hm-hero-bg-video"
      src="/videos/homing-missile-bg.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
    ></video>

    <div class="container position-relative" style="z-index: 1;">

      <!-- Hero -->
      <div class="hm-hero-section">
        <div class="row align-items-center">
          <div class="col-lg-7 col-xl-6">
            <router-link :to="localePath('/')" class="hm-breadcrumb-back">
              <i class="bi bi-arrow-left"></i>
              {{ $t('hmIntro.backToHub') }}
            </router-link>
            <div class="ms-2 hm-hero-badge">Homing Missile</div>
            <h1 class="hm-hero-title">
              Homing <span class="hm-cyan">Missile</span>
            </h1>
            <p class="hm-hero-subtitle">{{ $t('hmIntro.subtitle') }}</p>
            <p class="hm-hero-text">{{ $t('hmIntro.heroText') }}</p>
            <div class="hm-hero-actions">
              <a href="#demo" class="hm-btn-primary" @click.prevent="scrollToDemo">
                <i class="bi bi-play-circle me-2"></i>{{ $t('hmIntro.demoTitle') }}
              </a>
              <router-link :to="localePath('/homing-missile/docs/overview')" class="hm-btn-secondary">
                <i class="bi bi-book me-2"></i>{{ $t('hmIntro.docTitle') }}
              </router-link>
              <a
                href="https://af.unity.com/sr/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F368542"
                target="_blank"
                rel="noopener noreferrer"
                class="hm-btn-secondary"
                :aria-label="$t('hmIntro.getBtnAria')"
              >
                <i class="bi bi-bag-check me-2"></i>{{ $t('hmIntro.getBtn') }}
              </a>
            </div>
            <div class="hm-hero-meta">
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--cyan"></span>Unity 6</span>
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--cyan"></span>Unity 2022.3 LTS</span>
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--cyan"></span>URP 17</span>
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--green"></span>C# Namespace: HomingMissile</span>
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--green"></span>Input System 1.14+</span>
            </div>
          </div>

        </div>
      </div>

      <!-- About section -->
      <div class="hm-about-section">
        <h2 class="hm-section-title">{{ $t('hmIntro.aboutTitle') }}</h2>
        <div class="row">
          <div class="col-md-6">
            <p class="hm-about-text">{{ $t('hmIntro.aboutP1') }}</p>
          </div>
          <div class="col-md-6">
            <p class="hm-about-text">{{ $t('hmIntro.aboutP2') }}</p>
          </div>
        </div>
      </div>

      <!-- Getting started cards -->
      <div class="hm-resources-section">
        <h2 class="hm-section-title">{{ $t('hmIntro.resourcesTitle') }}</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="hm-resource-card">
              <div class="hm-resource-icon">
                <i class="bi bi-file-earmark-code"></i>
              </div>
              <h3 class="hm-resource-title">{{ $t('hmIntro.docCardTitle') }}</h3>
              <p class="hm-resource-text">{{ $t('hmIntro.docCardText') }}</p>
              <router-link :to="localePath('/homing-missile/docs/overview')" class="hm-resource-btn">
                {{ $t('hmIntro.docCardBtn') }}
                <i class="bi bi-arrow-right ms-1"></i>
              </router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="hm-resource-card">
              <div class="hm-resource-icon">
                <i class="bi bi-check2-all"></i>
              </div>
              <h3 class="hm-resource-title">{{ $t('hmIntro.setupCardTitle') }}</h3>
              <p class="hm-resource-text">{{ $t('hmIntro.setupCardText') }}</p>
              <router-link :to="localePath('/homing-missile/docs/setup-checklist')" class="hm-resource-btn">
                {{ $t('hmIntro.setupCardBtn') }}
                <i class="bi bi-arrow-right ms-1"></i>
              </router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="hm-resource-card">
              <div class="hm-resource-icon">
                <i class="bi bi-cpu"></i>
              </div>
              <h3 class="hm-resource-title">{{ $t('hmIntro.techCardTitle') }}</h3>
              <p class="hm-resource-text">{{ $t('hmIntro.techCardText') }}</p>
              <router-link :to="localePath('/homing-missile/docs/technical-notes')" class="hm-resource-btn">
                {{ $t('hmIntro.techCardBtn') }}
                <i class="bi bi-arrow-right ms-1"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Demo -->
      <div id="demo" class="hm-demo-section">
        <h2 class="hm-section-title">{{ $t('hmIntro.demoTitle') }}</h2>
        <p class="hm-demo-lead">{{ $t('hmIntro.demoLead') }}</p>
        <!-- <div class="hm-demo-v13-notice">
          <i class="bi bi-rocket-takeoff-fill me-2"></i>
          <span><strong>{{ $t('hmIntro.v13NoticeStrong') }}</strong> {{ $t('hmIntro.v13NoticeText') }}</span>
        </div> -->
        <div class="hm-demo-disclaimer">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>
          <span>{{ $t('hmIntro.disclaimerText') }}</span>
        </div>
        <div class="hm-demo-container">
          <div class="hm-demo-notice">
            <i class="bi bi-mouse-fill me-2"></i>
            <span><strong>{{ $t('hmIntro.demoClickStrong') }}</strong> {{ $t('hmIntro.demoClickText') }}</span>
          </div>
          <div class="hm-demo-frame-wrap">
            <iframe
              v-if="demoLoaded"
              ref="demoFrame"
              class="hm-demo-frame"
              src="/TestRocket/index.html"
              title="Homing Missile WebGL Demo"
              allowfullscreen
              allow="pointer-lock; autoplay; fullscreen"
            ></iframe>
            <div v-else class="hm-demo-placeholder" @click="demoLoaded = true">
              <div class="hm-demo-play">
                <i class="bi bi-play-fill"></i>
              </div>
              <p class="hm-demo-play-text">{{ $t('hmIntro.demoClickStrong') }}</p>
            </div>
          </div>
          <p class="hm-demo-note">{{ $t('hmIntro.demoWebglNote') }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="hm-cta-section">
        <h2 class="hm-cta-title">{{ $t('hmIntro.ctaTitle') }}</h2>
        <p class="hm-cta-text">{{ $t('hmIntro.ctaText') }}</p>
        <a
          href="https://af.unity.com/sr/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F368542"
          target="_blank"
          rel="noopener noreferrer"
          class="hm-btn-primary"
        >
          <i class="bi bi-bag-check me-2"></i>{{ $t('hmIntro.ctaPurchase') }}
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useSEO, seoConfigs } from '@/composables/useSEO.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HomingMissileIntro',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    const seoConfig = seoConfigs.hmIntro[locale.value] || seoConfigs.hmIntro.en
    useSEO(seoConfig)
    return { localePath }
  },
  data() {
    return {
      demoLoaded: false
    }
  },
  methods: {
    scrollToDemo() {
      const el = document.getElementById('demo')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.hm-intro-page {
  min-height: 100vh;
  background-color: #060a10;
  color: #E1EBF2;
  padding-top: 80px;
  position: relative;
  overflow-x: hidden;
}

.hm-intro-grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

/* Hero */
.hm-hero-section {
  padding: 1.5rem 0 3rem;
  position: relative;
}

.hm-hero-bg-video {
  position: absolute;
  top: 120px;
  right: 5vw;
  width: 55vw;
  max-width: 880px;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  object-position: right center;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(90deg, transparent 0%, #000 18%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 18%);
}

.hm-hero-section > .row {
  position: relative;
  z-index: 1;
}

@media (max-width: 991.98px) {
  .hm-hero-bg-video {
    display: none;
  }
}

.hm-breadcrumb-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: rgba(225, 235, 242, 0.4);
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;
}

.hm-breadcrumb-back:hover {
  color: rgba(85, 195, 235, 0.8);
}

.hm-hero-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #55C3EB;
  background: rgba(85, 195, 235, 0.1);
  border: 1px solid rgba(85, 195, 235, 0.25);
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 1.25rem;
}

.hm-coming-soon-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffc107;
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.3);
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 0.75rem;
  animation: comingSoonPulse 2s ease-in-out infinite;
}

@keyframes comingSoonPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.hm-hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #E1EBF2;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.hm-cyan {
  color: #55C3EB;
}

.hm-hero-subtitle {
  font-size: 1.15rem;
  color: rgba(225, 235, 242, 0.55);
  margin-bottom: 1rem;
}

.hm-hero-text {
  font-size: 1rem;
  color: rgba(225, 235, 242, 0.6);
  max-width: 680px;
  line-height: 1.75;
  margin-bottom: 2rem;
}

.hm-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hm-btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #55C3EB;
  color: #060a10;
  font-weight: 700;
  font-size: 0.9rem;
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

.hm-btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: rgba(85, 195, 235, 0.08);
  color: #55C3EB;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(85, 195, 235, 0.3);
  transition: all 0.25s ease;
}

.hm-btn-secondary:hover {
  background-color: rgba(85, 195, 235, 0.15);
  border-color: rgba(85, 195, 235, 0.55);
  color: #55C3EB;
  transform: translateY(-1px);
}

.hm-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.hm-meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(225, 235, 242, 0.5);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 12px;
  border-radius: 20px;
}

.hm-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.hm-dot--cyan {
  background-color: #55C3EB;
  box-shadow: 0 0 5px rgba(85, 195, 235, 0.7);
}

.hm-dot--green {
  background-color: #28DC64;
  box-shadow: 0 0 5px rgba(40, 220, 100, 0.7);
}

/* About section */
.hm-about-section {
  padding: 3rem 0;
  border-top: 1px solid rgba(85, 195, 235, 0.08);
}

.hm-section-title {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #55C3EB;
  margin-bottom: 1.5rem;
}

.hm-about-text {
  font-size: 0.95rem;
  color: rgba(225, 235, 242, 0.6);
  line-height: 1.75;
}

/* Resources */
.hm-resources-section {
  padding: 3rem 0;
  border-top: 1px solid rgba(85, 195, 235, 0.08);
}

.hm-resource-card {
  background: rgba(13, 21, 32, 0.8);
  border: 1px solid rgba(85, 195, 235, 0.12);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.hm-resource-card:hover {
  border-color: rgba(85, 195, 235, 0.3);
  transform: translateY(-4px);
}

.hm-resource-icon {
  font-size: 1.75rem;
  color: #55C3EB;
  margin-bottom: 1rem;
}

.hm-resource-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #E1EBF2;
  margin-bottom: 0.6rem;
}

.hm-resource-text {
  font-size: 0.88rem;
  color: rgba(225, 235, 242, 0.5);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1.25rem;
}

.hm-resource-btn {
  display: inline-flex;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: #55C3EB;
  text-decoration: none;
  transition: gap 0.2s ease;
  gap: 4px;
}

.hm-resource-btn:hover {
  color: #78d0ef;
  gap: 8px;
}

/* Demo */
.hm-demo-section {
  padding: 3rem 0;
  border-top: 1px solid rgba(85, 195, 235, 0.08);
}

.hm-demo-lead {
  font-size: 0.95rem;
  color: rgba(225, 235, 242, 0.55);
  margin-bottom: 1.5rem;
  max-width: 600px;
}

.hm-demo-v13-notice {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  margin-bottom: 12px;
  font-size: 0.85rem;
  line-height: 1.45;
  color: #ffe9b8;
  background: linear-gradient(90deg, rgba(255, 165, 0, 0.18), rgba(85, 195, 235, 0.10));
  border: 1px solid rgba(255, 165, 0, 0.45);
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(255, 165, 0, 0.12);
}

.hm-demo-v13-notice strong {
  color: #ffd27a;
  margin-right: 4px;
}

.hm-demo-disclaimer {
  display: flex;
  align-items: flex-start;
  padding: 10px 14px;
  margin-bottom: 16px;
  font-size: 0.75rem;
  line-height: 1.4;
  color: #d4edda;
  background: rgba(40, 167, 69, 0.15);
  border: 1px solid rgba(40, 167, 69, 0.35);
  border-radius: 10px;
}

.hm-demo-container {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(85, 195, 235, 0.15);
  background: rgba(6, 10, 16, 0.6);
}

.hm-demo-notice {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 0.82rem;
  color: rgba(225, 235, 242, 0.7);
  background: rgba(85, 195, 235, 0.06);
  border-bottom: 1px solid rgba(85, 195, 235, 0.1);
}

.hm-demo-frame-wrap {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.hm-demo-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.hm-demo-note {
  text-align: center;
  font-size: 0.85rem;
  color: rgba(225, 235, 242, 0.6);
  padding: 10px 0;
  margin: 0;
}

.hm-demo-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(6, 10, 16, 0.9);
  cursor: pointer;
  transition: background 0.3s ease;
}

.hm-demo-placeholder:hover {
  background: rgba(6, 10, 16, 0.7);
}

.hm-demo-placeholder:hover .hm-demo-play {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(85, 195, 235, 0.4);
}

.hm-demo-play {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(85, 195, 235, 0.15);
  border: 2px solid rgba(85, 195, 235, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #55C3EB;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.hm-demo-play-text {
  color: rgba(225, 235, 242, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

/* CTA */
.hm-cta-section {
  text-align: center;
  padding: 4rem 0 5rem;
  border-top: 1px solid rgba(85, 195, 235, 0.08);
}

.hm-cta-title {
  font-size: 2rem;
  font-weight: 800;
  color: #E1EBF2;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.hm-cta-text {
  font-size: 1rem;
  color: rgba(225, 235, 242, 0.5);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
