<template>
  <div class="hub-page">
    <div class="hub-grid-bg"></div>

    <div class="hub-lang-selector">
      <LanguageSelector theme="dark" />
    </div>

    <div class="hub-content">
      <div class="hub-header">
        <p class="hub-label">{{ $t('hub.byLine') }}</p>
        <h1 class="hub-title">{{ $t('hub.title') }}</h1>
        <p class="hub-subtitle">{{ $t('hub.subtitle') }}</p>
      </div>

      <div class="hub-cards">
        <!-- Assembly Station Card -->
        <div class="card-wrapper">
          <svg class="circuit-traces circuit-traces--as" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <filter id="traceGlowAs">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path class="trace trace-base-as" d="M0 100 H55 V160 H35 V200"/>
            <path class="trace trace-pulse-as tap-1" d="M0 100 H55 V160 H35 V200"/>
            <path class="trace trace-base-as" d="M0 300 H45 V250 H75"/>
            <path class="trace trace-pulse-as tap-2" d="M0 300 H45 V250 H75"/>
            <path class="trace trace-base-as" d="M600 130 H545 V190 H565 V240"/>
            <path class="trace trace-pulse-as tap-3" d="M600 130 H545 V190 H565 V240"/>
            <path class="trace trace-base-as" d="M600 350 H555 V310 H525"/>
            <path class="trace trace-pulse-as tap-4" d="M600 350 H555 V310 H525"/>
            <path class="trace trace-base-as" d="M180 0 V35 H230 V65"/>
            <path class="trace trace-pulse-as tap-5" d="M180 0 V35 H230 V65"/>
            <path class="trace trace-base-as" d="M410 0 V45 H370 V75"/>
            <path class="trace trace-pulse-as tap-6" d="M410 0 V45 H370 V75"/>
            <path class="trace trace-base-as" d="M200 500 V465 H240 V435"/>
            <path class="trace trace-pulse-as tap-7" d="M200 500 V465 H240 V435"/>
            <path class="trace trace-base-as" d="M430 500 V455 H390 V425"/>
            <path class="trace trace-pulse-as tap-8" d="M430 500 V455 H390 V425"/>
            <circle class="trace-dot-as tda-1" cx="55" cy="100" r="2.5"/>
            <circle class="trace-dot-as tda-2" cx="45" cy="250" r="2.5"/>
            <circle class="trace-dot-as tda-3" cx="545" cy="130" r="2.5"/>
            <circle class="trace-dot-as tda-4" cx="555" cy="310" r="2.5"/>
            <circle class="trace-dot-as tda-5" cx="230" cy="35" r="2.5"/>
            <circle class="trace-dot-as tda-6" cx="390" cy="455" r="2.5"/>
          </svg>
          <div class="asset-card asset-card--as">
            <div class="card-glow card-glow--as"></div>
            <div class="card-inner">
              <div class="card-badge card-badge--as">{{ $t('hub.asCardTag') }}</div>
              <h2 class="card-title">Assembly Station</h2>
              <p class="card-desc">{{ $t('hub.asCardDesc') }}</p>
              <div class="card-meta">
                <span class="meta-item"><span class="meta-dot meta-dot--green"></span>Unity 2021+</span>
                <span class="meta-item"><span class="meta-dot meta-dot--green"></span>URP / Built-in</span>
              </div>
              <router-link :to="localePath('/assembly-station')" class="card-btn card-btn--as">
                {{ $t('hub.asCardBtn') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Homing Missile Card -->
        <div class="card-wrapper">
          <!-- Circuit traces -->
          <svg class="circuit-traces" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <filter id="traceGlow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <!-- Left side traces -->
            <path class="trace trace-base" d="M0 120 H60 V180 H30 V220"/>
            <path class="trace trace-pulse tp-1" d="M0 120 H60 V180 H30 V220"/>
            <path class="trace trace-base" d="M0 200 H40 V260 H80"/>
            <path class="trace trace-pulse tp-2" d="M0 200 H40 V260 H80"/>
            <path class="trace trace-base" d="M0 340 H50 V300 H90"/>
            <path class="trace trace-pulse tp-3" d="M0 340 H50 V300 H90"/>
            <!-- Right side traces -->
            <path class="trace trace-base" d="M600 150 H540 V210 H560 V260"/>
            <path class="trace trace-pulse tp-4" d="M600 150 H540 V210 H560 V260"/>
            <path class="trace trace-base" d="M600 280 H550 V340 H520"/>
            <path class="trace trace-pulse tp-5" d="M600 280 H550 V340 H520"/>
            <path class="trace trace-base" d="M600 380 H530 V350 H500"/>
            <path class="trace trace-pulse tp-6" d="M600 380 H530 V350 H500"/>
            <!-- Top traces -->
            <path class="trace trace-base" d="M200 0 V40 H250 V70"/>
            <path class="trace trace-pulse tp-7" d="M200 0 V40 H250 V70"/>
            <path class="trace trace-base" d="M400 0 V50 H360 V80"/>
            <path class="trace trace-pulse tp-8" d="M400 0 V50 H360 V80"/>
            <!-- Bottom traces -->
            <path class="trace trace-base" d="M180 500 V460 H220 V430"/>
            <path class="trace trace-pulse tp-9" d="M180 500 V460 H220 V430"/>
            <path class="trace trace-base" d="M420 500 V450 H380 V420"/>
            <path class="trace trace-pulse tp-10" d="M420 500 V450 H380 V420"/>
            <!-- Junction dots -->
            <circle class="trace-dot td-1" cx="60" cy="120" r="2.5"/>
            <circle class="trace-dot td-2" cx="40" cy="260" r="2.5"/>
            <circle class="trace-dot td-3" cx="540" cy="150" r="2.5"/>
            <circle class="trace-dot td-4" cx="550" cy="340" r="2.5"/>
            <circle class="trace-dot td-5" cx="250" cy="40" r="2.5"/>
            <circle class="trace-dot td-6" cx="380" cy="450" r="2.5"/>
          </svg>
          <div class="asset-card asset-card--hm">
            <div class="card-glow card-glow--hm"></div>
            <div class="card-inner">
              <div class="card-badges-row">
                <div class="card-badge card-badge--hm">{{ $t('hub.hmCardTag') }}</div>
              </div>
              <h2 class="card-title card-title--hm">Homing Missile</h2>
              <p class="card-desc card-desc--hm">{{ $t('hub.hmCardDesc') }}</p>
              <div class="card-meta">
                <span class="meta-item meta-item--hm"><span class="meta-dot meta-dot--cyan"></span>Unity 6</span>
                <span class="meta-item meta-item--hm"><span class="meta-dot meta-dot--cyan"></span>URP 17</span>
              </div>
              <router-link :to="localePath('/homing-missile')" class="card-btn card-btn--hm">
                {{ $t('hub.hmCardBtn') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <p class="hub-footer-note">{{ $t('hub.moreComingSoon') }}</p>
    </div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useSEO, seoConfigs } from '@/composables/useSEO.js'
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  name: 'Hub',
  components: { LanguageSelector },
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    const seoConfig = seoConfigs.hub[locale.value] || seoConfigs.hub.en
    useSEO(seoConfig)
    return { localePath }
  }
}
</script>

<style scoped>
.hub-page {
  min-height: 100vh;
  background-color: #060a10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 40px 20px 40px;
}

.hub-lang-selector {
  position: fixed;
  top: 16px;
  right: 20px;
  z-index: 100;
}

.hub-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.hub-content {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  width: 100%;
  text-align: center;
}

.hub-header {
  margin-bottom: 3.5rem;
}

.hub-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(85, 195, 235, 0.7);
  margin-bottom: 0.75rem;
}

.hub-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: rgba(225, 235, 242, 0.95);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.hub-subtitle {
  font-size: 1.1rem;
  color: rgba(225, 235, 242, 0.45);
  max-width: 480px;
  margin: 0 auto;
}

.hub-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

/* Base card */
.asset-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;
}

.asset-card:hover {
  transform: translateY(-8px);
}

.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
  border-radius: 20px;
}

.asset-card:hover .card-glow {
  opacity: 1;
}

/* Assembly Station card — force light appearance */
.asset-card--as {
  background: linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%) !important;
  border: 1px solid rgba(0, 163, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  color-scheme: only light;
  z-index: 2;
  position: relative;
}

.asset-card--as:hover {
  box-shadow: 0 20px 60px rgba(0, 163, 255, 0.25), 0 4px 30px rgba(0, 0, 0, 0.3);
}

.card-glow--as {
  background: radial-gradient(ellipse at 50% 0%, rgba(0, 163, 255, 0.12) 0%, transparent 70%);
}

/* Homing Missile card */
.asset-card--hm {
  background: linear-gradient(145deg, #0d1520 0%, #0a1018 100%);
  border: 1px solid rgba(85, 195, 235, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.asset-card--hm:hover {
  box-shadow: 0 20px 60px rgba(85, 195, 235, 0.2), 0 4px 30px rgba(0, 0, 0, 0.5);
  border-color: rgba(85, 195, 235, 0.4);
}

.card-glow--hm {
  background: radial-gradient(ellipse at 50% 0%, rgba(85, 195, 235, 0.1) 0%, transparent 70%);
}

.card-inner {
  padding: 2.25rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 1rem;
  height: 100%;
}

/* Badge */
.card-badge {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
}

.card-badge--as {
  background-color: #e6f4ff !important;
  color: #00A3FF !important;
}

.card-badge--hm {
  background-color: rgba(85, 195, 235, 0.12);
  color: #55C3EB;
  border: 1px solid rgba(85, 195, 235, 0.3);
}

.card-badges-row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.card-badge--coming-soon {
  background-color: rgba(255, 193, 7, 0.12);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.3);
  animation: comingSoonPulse 2s ease-in-out infinite;
}

@keyframes comingSoonPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* Titles */
.card-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.02em;
  color: #1a2535 !important;
}

.card-title--hm {
  color: rgba(225, 235, 242, 0.95) !important;
}

/* Description */
.card-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: #555e6e !important;
  margin: 0;
  flex: 1;
}

.card-desc--hm {
  color: rgba(225, 235, 242, 0.55) !important;
}

/* Meta */
.card-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta-item {
  font-size: 0.78rem;
  font-weight: 500;
  color: #6b7585 !important;
  display: flex;
  align-items: center;
  gap: 5px;
}

.meta-item--hm {
  color: rgba(225, 235, 242, 0.45) !important;
}

.meta-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.meta-dot--green {
  background-color: #22c55e;
  box-shadow: 0 0 4px rgba(34, 197, 94, 0.6);
}

.meta-dot--cyan {
  background-color: #55C3EB;
  box-shadow: 0 0 4px rgba(85, 195, 235, 0.7);
}

/* CTA Buttons */
.card-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.25s ease;
  margin-top: auto;
}

.card-btn--as {
  background-color: #00A3FF;
  color: white;
  box-shadow: 0 4px 14px rgba(0, 163, 255, 0.3);
}

.card-btn--as:hover {
  background-color: #0088cc;
  box-shadow: 0 6px 20px rgba(0, 163, 255, 0.45);
  transform: translateX(2px);
  color: white;
}

.card-btn--hm {
  background-color: rgba(85, 195, 235, 0.12);
  color: #55C3EB;
  border: 1px solid rgba(85, 195, 235, 0.35);
}

.card-btn--hm:hover {
  background-color: rgba(85, 195, 235, 0.2);
  border-color: rgba(85, 195, 235, 0.6);
  box-shadow: 0 4px 20px rgba(85, 195, 235, 0.2);
  transform: translateX(2px);
  color: #55C3EB;
}


.hub-footer-note {
  font-size: 0.8rem;
  color: rgba(225, 235, 242, 0.25);
  letter-spacing: 0.05em;
}

/* ---- Circuit traces (shared) ---- */
.card-wrapper {
  position: relative;
  overflow: visible;
}

.asset-card--hm {
  z-index: 2;
  position: relative;
}

.circuit-traces {
  position: absolute;
  inset: -60px -80px;
  width: calc(100% + 160px);
  height: calc(100% + 120px);
  pointer-events: none;
  z-index: 0;
}

.trace {
  fill: none;
  stroke-width: 1.2;
  stroke-linecap: square;
  stroke-linejoin: miter;
}

/* ---- HM traces (cyan) ---- */
.trace-base {
  stroke: rgba(85, 195, 235, 0.1);
}

.trace-pulse {
  stroke: rgba(85, 195, 235, 0.7);
  stroke-dasharray: 30 300;
  filter: url(#traceGlow);
}

.tp-1  { animation: tracePulse 3s    linear infinite; animation-delay: 0s; }
.tp-2  { animation: tracePulse 3.5s  linear infinite; animation-delay: 1.2s; }
.tp-3  { animation: tracePulse 4s    linear infinite; animation-delay: 2.5s; }
.tp-4  { animation: tracePulse 3.2s  linear infinite; animation-delay: 0.5s; }
.tp-5  { animation: tracePulse 3.8s  linear infinite; animation-delay: 1.8s; }
.tp-6  { animation: tracePulse 4.2s  linear infinite; animation-delay: 3s; }
.tp-7  { animation: tracePulse 3.4s  linear infinite; animation-delay: 0.8s; }
.tp-8  { animation: tracePulse 3.6s  linear infinite; animation-delay: 2s; }
.tp-9  { animation: tracePulse 4s    linear infinite; animation-delay: 1.5s; }
.tp-10 { animation: tracePulse 3.3s  linear infinite; animation-delay: 2.8s; }

.trace-dot {
  fill: rgba(85, 195, 235, 0.15);
  stroke: none;
}

.td-1 { animation: dotGlowCyan 3s   ease-in-out infinite; animation-delay: 0.4s; }
.td-2 { animation: dotGlowCyan 3.5s ease-in-out infinite; animation-delay: 1.6s; }
.td-3 { animation: dotGlowCyan 3.2s ease-in-out infinite; animation-delay: 0.9s; }
.td-4 { animation: dotGlowCyan 3.8s ease-in-out infinite; animation-delay: 2.2s; }
.td-5 { animation: dotGlowCyan 3.4s ease-in-out infinite; animation-delay: 1.2s; }
.td-6 { animation: dotGlowCyan 4s   ease-in-out infinite; animation-delay: 1.9s; }

/* ---- AS traces (blue) ---- */
.trace-base-as {
  stroke: rgba(0, 163, 255, 0.1);
}

.trace-pulse-as {
  stroke: rgba(0, 163, 255, 0.65);
  stroke-dasharray: 30 300;
  filter: url(#traceGlowAs);
}

.tap-1 { animation: tracePulse 3.2s  linear infinite; animation-delay: 0.3s; }
.tap-2 { animation: tracePulse 3.8s  linear infinite; animation-delay: 1.5s; }
.tap-3 { animation: tracePulse 3.5s  linear infinite; animation-delay: 0.7s; }
.tap-4 { animation: tracePulse 4s    linear infinite; animation-delay: 2.2s; }
.tap-5 { animation: tracePulse 3.3s  linear infinite; animation-delay: 1s; }
.tap-6 { animation: tracePulse 3.7s  linear infinite; animation-delay: 2.6s; }
.tap-7 { animation: tracePulse 4.1s  linear infinite; animation-delay: 1.8s; }
.tap-8 { animation: tracePulse 3.6s  linear infinite; animation-delay: 3s; }

.trace-dot-as {
  fill: rgba(0, 163, 255, 0.12);
  stroke: none;
}

.tda-1 { animation: dotGlowBlue 3.2s ease-in-out infinite; animation-delay: 0.6s; }
.tda-2 { animation: dotGlowBlue 3.8s ease-in-out infinite; animation-delay: 1.8s; }
.tda-3 { animation: dotGlowBlue 3.5s ease-in-out infinite; animation-delay: 1s; }
.tda-4 { animation: dotGlowBlue 4s   ease-in-out infinite; animation-delay: 2.5s; }
.tda-5 { animation: dotGlowBlue 3.3s ease-in-out infinite; animation-delay: 1.3s; }
.tda-6 { animation: dotGlowBlue 3.7s ease-in-out infinite; animation-delay: 2.1s; }

/* ---- Keyframes ---- */
@keyframes tracePulse {
  0%   { stroke-dashoffset: 330; opacity: 0; }
  10%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}

@keyframes dotGlowCyan {
  0%, 100% { fill: rgba(85, 195, 235, 0.12); r: 2.5; }
  50%      { fill: rgba(85, 195, 235, 0.6);  r: 3.5; }
}

@keyframes dotGlowBlue {
  0%, 100% { fill: rgba(0, 163, 255, 0.1);  r: 2.5; }
  50%      { fill: rgba(0, 163, 255, 0.55); r: 3.5; }
}

@media (max-width: 767px) {
  .hub-cards {
    grid-template-columns: 1fr;
  }
  .hub-page {
    padding: 40px 16px 40px;
  }
}
</style>
