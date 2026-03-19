<template>
  <div class="hm-intro-page">
    <div class="hm-intro-grid-bg"></div>

    <!-- Missile -->
    <div class="lockon-missile" ref="missile">
      <svg class="lockon-missile-svg" width="72" height="25" viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="4" cy="9" rx="5" ry="4" fill="rgba(255,140,40,0.5)"/>
        <polygon points="10,1 16,5 10,5" fill="#3daad6"/>
        <polygon points="10,17 16,13 10,13" fill="#3daad6"/>
        <rect x="10" y="5" width="30" height="8" rx="2" fill="url(#missileBody)"/>
        <polygon points="40,4 52,9 40,14" fill="#d8e8f0"/>
        <circle cx="36" cy="9" r="2" fill="#55C3EB" opacity="0.8"/>
        <defs>
          <linearGradient id="missileBody" x1="10" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#6a7d8a"/><stop offset="50%" stop-color="#a0b4c0"/><stop offset="100%" stop-color="#c8d8e2"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="lockon-missile-trail" ref="missileTrail"></div>
    </div>
    <!-- Trail path SVG -->
    <svg class="lockon-trail-svg" ref="trailSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref="trailPath" stroke="url(#trailGrad)" stroke-width="2" stroke-linecap="round" fill="none"/>
      <defs>
        <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(255,160,40,0)" />
          <stop offset="40%" stop-color="rgba(255,160,40,0.4)" />
          <stop offset="100%" stop-color="rgba(85,195,235,0.7)" />
        </linearGradient>
      </defs>
    </svg>
    <div class="lockon-impact" ref="impactFlash"></div>

    <div class="container position-relative" style="z-index: 1;">

      <!-- Hero -->
      <div class="hm-hero-section">
        <div class="row align-items-center">
          <div class="col-lg-7">
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
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--cyan"></span>URP 17</span>
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--green"></span>C# Namespace: HomingMissile</span>
              <span class="hm-meta-pill"><span class="hm-dot hm-dot--green"></span>Input System 1.14+</span>
            </div>
          </div>

          <!-- Lock-on animation -->
          <div class="col-lg-5 d-none d-lg-flex justify-content-center">
            <div class="lockon-scene" ref="lockonScene">
              <div class="lockon-crosshair lockon-ch-h"></div>
              <div class="lockon-crosshair lockon-ch-v"></div>
              <div class="lockon-scan-sweep"></div>

              <div class="lockon-frame-tick lockon-ft-h lockon-ft-tl-h"></div>
              <div class="lockon-frame-tick lockon-ft-v lockon-ft-tl-v"></div>
              <div class="lockon-frame-tick lockon-ft-h lockon-ft-tr-h"></div>
              <div class="lockon-frame-tick lockon-ft-v lockon-ft-tr-v"></div>
              <div class="lockon-frame-tick lockon-ft-h lockon-ft-bl-h"></div>
              <div class="lockon-frame-tick lockon-ft-v lockon-ft-bl-v"></div>
              <div class="lockon-frame-tick lockon-ft-h lockon-ft-br-h"></div>
              <div class="lockon-frame-tick lockon-ft-v lockon-ft-br-v"></div>

              <div class="lockon-hud-label lockon-hud-top">TGT ACQUISITION</div>
              <div class="lockon-hud-label lockon-hud-bottom">SYS PN-NAV // ACTIVE</div>

              <div class="lockon-ambient-glow" ref="ambientGlow"></div>

              <!-- Target -->
              <div class="lockon-target" ref="target">
                <div class="lockon-target-ring"></div>
                <div class="lockon-target-ring lockon-target-ring-inner"></div>
                <div class="lockon-target-dot"></div>
                <div class="lockon-target-line lockon-target-line-h"></div>
                <div class="lockon-target-line lockon-target-line-v"></div>
              </div>

              <div class="lockon-bracket" ref="lockBracket">
                <div class="lockon-status" ref="lockStatus">ACQUIRING</div>
                <div class="lockon-corners" ref="lockCorners">
                  <div class="lockon-corner lockon-corner-tl"></div>
                  <div class="lockon-corner lockon-corner-tr"></div>
                  <div class="lockon-corner lockon-corner-bl"></div>
                  <div class="lockon-corner lockon-corner-br"></div>
                </div>
                <div class="lockon-bar-track">
                  <div class="lockon-bar-fill" ref="lockBarFill"></div>
                </div>
                <div class="lockon-distance" ref="lockDistance">----m</div>
              </div>

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
      demoLoaded: false,
      _blinkTimer: null,
      _pulseTimer: null,
      _animFrame: null,
      _blinkOn: true,
      _pulseOn: true,
      _phase: 'acquire',
      _phaseStart: 0,
      _startTime: 0
    }
  },
  mounted() {
    // Delay start so the browser finishes initial layout/paint before rAF begins
    // This prevents the first-frame freeze caused by layout thrashing on load
    this._startTimer = setTimeout(() => {
      // Skip 2 rAF frames to let the browser fully settle after route navigation
      requestAnimationFrame(() => requestAnimationFrame(() => this._startLockonAnimation()))
    }, 200)
  },
  beforeUnmount() {
    clearTimeout(this._startTimer)
    this._stopLockonAnimation()
  },
  methods: {
    _startLockonAnimation() {
      const START_SIZE = 340
      const LOCKED_SIZE = 100
      const START_ROT = 45
      const BLINK_MS = 350
      const PULSE_MS = 220
      const ACQUIRE_MS = 3000
      const HOLD_MS = 800
      const MISSILE_MS = 1200
      const IMPACT_MS = 500
      const PAUSE_MS = 900
      const DIST_START = 1847
      const DIST_END = 412

      const bracket = this.$refs.lockBracket
      const cornersEl = this.$refs.lockCorners
      const statusEl = this.$refs.lockStatus
      const barFill = this.$refs.lockBarFill
      const distEl = this.$refs.lockDistance
      const glow = this.$refs.ambientGlow
      const target = this.$refs.target
      const impactFlash = this.$refs.impactFlash
      const missile = this.$refs.missile
      const missileTrail = this.$refs.missileTrail

      if (!bracket) return
      const corners = cornersEl.querySelectorAll('.lockon-corner')

      const startBlink = () => {
        this._blinkOn = true
        this._blinkTimer = setInterval(() => {
          this._blinkOn = !this._blinkOn
          cornersEl.style.opacity = this._blinkOn ? '1' : '0'
        }, BLINK_MS)
      }
      const stopBlink = () => {
        clearInterval(this._blinkTimer)
        this._blinkTimer = null
        cornersEl.style.opacity = '1'
      }
      const startPulse = () => {
        this._pulseOn = true
        this._pulseTimer = setInterval(() => {
          this._pulseOn = !this._pulseOn
          barFill.style.opacity = this._pulseOn ? '1' : '0.35'
        }, PULSE_MS)
      }
      const stopPulse = () => {
        clearInterval(this._pulseTimer)
        this._pulseTimer = null
        barFill.style.opacity = '1'
      }

      const getTargetCenter = () => {
        const scene = this.$refs.lockonScene
        if (!scene) return { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const rect = scene.getBoundingClientRect()
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      }

      const resetMissile = () => {
        missile.style.opacity = '0'
        missile.style.top = '-100px'
        missile.style.left = '-100px'
        missileTrail.style.width = '0px'
        missileTrail.style.opacity = '0'
        impactFlash.style.opacity = '0'
        impactFlash.style.transform = 'scale(0)'
        const trailSvg = this.$refs.trailSvg
        const trailPath = this.$refs.trailPath
        if (trailSvg) trailSvg.style.opacity = '0'
        if (trailPath) trailPath.setAttribute('d', '')
        this._trailPoints = []
      }

      const resetState = () => {
        stopPulse()
        this._lastSnapIndex = -1
        bracket.style.width = START_SIZE + 'px'
        bracket.style.height = START_SIZE + 'px'
        bracket.style.left = 'calc(50% - ' + (START_SIZE / 2) + 'px)'
        bracket.style.top = 'calc(50% - ' + (START_SIZE / 2) + 'px)'
        cornersEl.style.transform = 'rotate(' + START_ROT + 'deg)'
        corners.forEach(c => c.classList.remove('lockon-color-locked'))
        barFill.style.width = '0%'
        barFill.classList.remove('lockon-bar-locked')
        barFill.style.opacity = '1'
        statusEl.textContent = 'ACQUIRING'
        statusEl.classList.remove('lockon-status-locked')
        distEl.textContent = DIST_START + 'm'
        glow.classList.remove('lockon-glow-locked')
        cornersEl.style.opacity = '1'
        bracket.style.opacity = '1'
        target.style.opacity = '1'
        target.style.transform = 'translate(-50%, -50%) scale(1)'
        resetMissile()
      }

      const onLocked = () => {
        stopPulse()
        cornersEl.style.opacity = '1'
        bracket.style.opacity = '1'
        corners.forEach(c => c.classList.add('lockon-color-locked'))
        barFill.classList.add('lockon-bar-locked')
        statusEl.textContent = '\u25A0 LOCKED'
        statusEl.classList.add('lockon-status-locked')
        glow.classList.add('lockon-glow-locked')
        distEl.textContent = DIST_END + 'm'
      }

      this._phase = 'acquire'
      this._startTime = 0
      this._phaseStart = 0
      resetState()

      const tick = (now) => {
        if (!this._startTime) {
          this._startTime = now
          this._phaseStart = now
        }

        if (this._phase === 'acquire') {
          const elapsed = now - this._phaseStart
          const progress = Math.min(elapsed / ACQUIRE_MS, 1)
          const eased = 1 - Math.pow(1 - progress, 2.2)

          const size = START_SIZE - (START_SIZE - LOCKED_SIZE) * eased
          bracket.style.width = size + 'px'
          bracket.style.height = size + 'px'

          const rot = START_ROT * (1 - eased)
          cornersEl.style.transform = 'rotate(' + rot + 'deg)'

          barFill.style.width = (eased * 100) + '%'

          const dist = Math.round(DIST_START - (DIST_START - DIST_END) * eased)
          distEl.textContent = dist + 'm'

          // Mouse-drag drift — moves between waypoints like a human aiming
          const waypoints = [
            { x: -70, y: -55, hold: 0.12 },
            { x: 50, y: 45, hold: 0.08 },
            { x: -45, y: 35, hold: 0.10 },
            { x: 55, y: -40, hold: 0.06 },
            { x: -30, y: -25, hold: 0.08 },
            { x: 35, y: 20, hold: 0.06 },
            { x: -15, y: 12, hold: 0.05 },
            { x: 10, y: -8, hold: 0.04 },
            { x: 0, y: 0, hold: 1.0 }
          ]
          // Build timeline from waypoints
          const moveDur = 0.55
          let totalDur = 0
          const segments = []
          for (let i = 0; i < waypoints.length; i++) {
            if (i > 0) {
              segments.push({ type: 'move', from: waypoints[i - 1], to: waypoints[i], start: totalDur, dur: moveDur })
              totalDur += moveDur
            }
            segments.push({ type: 'hold', pos: waypoints[i], start: totalDur, dur: waypoints[i].hold })
            totalDur += waypoints[i].hold
          }
          const t = Math.min(progress / 0.95, 1.0)
          const tTime = t * totalDur
          let dx = 0, dy = 0
          for (const seg of segments) {
            if (tTime < seg.start + seg.dur) {
              if (seg.type === 'hold') {
                dx = seg.pos.x; dy = seg.pos.y
              } else {
                const segProgress = (tTime - seg.start) / seg.dur
                const ease = segProgress < 0.5
                  ? 2 * segProgress * segProgress
                  : 1 - Math.pow(-2 * segProgress + 2, 2) / 2
                dx = seg.from.x + (seg.to.x - seg.from.x) * ease
                dy = seg.from.y + (seg.to.y - seg.from.y) * ease
              }
              break
            }
            if (seg.type === 'hold') { dx = seg.pos.x; dy = seg.pos.y }
            else { dx = seg.to.x; dy = seg.to.y }
          }
          const drift = 1 - eased
          dx *= drift
          dy *= drift
          bracket.style.left = 'calc(50% - ' + (size / 2 - dx) + 'px)'
          bracket.style.top = 'calc(50% - ' + (size / 2 - dy) + 'px)'

          if (!this._pulseTimer) startPulse()

          if (progress >= 1) {
            bracket.style.left = 'calc(50% - ' + (LOCKED_SIZE / 2) + 'px)'
            bracket.style.top = 'calc(50% - ' + (LOCKED_SIZE / 2) + 'px)'
            this._phase = 'locked'
            this._phaseStart = now
            onLocked()
          }
        } else if (this._phase === 'locked') {
          if (now - this._phaseStart >= HOLD_MS) {
            this._phase = 'missile'
            this._phaseStart = now
            this._trailPoints = []
            missile.style.opacity = '1'
            missileTrail.style.opacity = '1'
            const trailSvg = this.$refs.trailSvg
            if (trailSvg) {
              trailSvg.style.opacity = '1'
              trailSvg.setAttribute('width', window.innerWidth)
              trailSvg.setAttribute('height', window.innerHeight)
            }
            statusEl.textContent = '\u25A0 FIRING'
          }
        } else if (this._phase === 'missile') {
          const elapsed = now - this._phaseStart
          const progress = Math.min(elapsed / MISSILE_MS, 1)
          const eased = 1 - Math.pow(1 - progress, 2.5)

          const tgt = getTargetCenter()
          const sx = -40
          const sy = -40

          const baseX = sx + (tgt.x - sx) * eased
          const baseY = sy + (tgt.y - sy) * eased
          const dirX = tgt.x - sx
          const dirY = tgt.y - sy
          const len = Math.sqrt(dirX * dirX + dirY * dirY)
          const perpX = -dirY / len
          const perpY = dirX / len
          const wave = Math.sin(eased * Math.PI * 4) * 70 * Math.pow(1 - eased, 0.4)
          const curX = baseX + perpX * wave
          const curY = baseY + perpY * wave

          const pts = this._trailPoints
          let angle
          if (pts.length > 0) {
            const prev = pts[pts.length - 1]
            angle = Math.atan2(curY - prev.y, curX - prev.x) * (180 / Math.PI)
          } else {
            angle = Math.atan2(tgt.y - sy, tgt.x - sx) * (180 / Math.PI)
          }

          missile.style.left = curX + 'px'
          missile.style.top = curY + 'px'
          missile.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)'

          pts.push({ x: curX, y: curY })
          const trailPath = this.$refs.trailPath
          if (trailPath && pts.length > 1) {
            let d = 'M' + pts[0].x + ',' + pts[0].y
            for (let i = 1; i < pts.length; i++) {
              d += ' L' + pts[i].x + ',' + pts[i].y
            }
            trailPath.setAttribute('d', d)
          }

          const trailLen = eased * 100
          missileTrail.style.width = trailLen + 'px'

          if (progress >= 1) {
            this._phase = 'impact'
            this._phaseStart = now
            missile.style.opacity = '0'
            missileTrail.style.opacity = '0'

            const impactPos = getTargetCenter()
            impactFlash.style.left = impactPos.x + 'px'
            impactFlash.style.top = impactPos.y + 'px'
            impactFlash.style.opacity = '1'
            impactFlash.style.transform = 'translate(-50%, -50%) scale(1)'
            bracket.style.opacity = '0'
            target.style.opacity = '0'
            target.style.transform = 'translate(-50%, -50%) scale(2)'
          }
        } else if (this._phase === 'impact') {
          const elapsed = now - this._phaseStart
          const progress = Math.min(elapsed / IMPACT_MS, 1)

          const fadeOut = 1 - progress
          impactFlash.style.opacity = fadeOut
          const scale = 1 + progress * 0.5
          impactFlash.style.transform = 'translate(-50%, -50%) scale(' + scale + ')'
          const trailSvg = this.$refs.trailSvg
          if (trailSvg) trailSvg.style.opacity = fadeOut

          if (progress >= 1) {
            this._phase = 'pause'
            this._phaseStart = now
          }
        } else if (this._phase === 'pause') {
          if (now - this._phaseStart >= PAUSE_MS) {
            resetState()
            this._phase = 'acquire'
            this._phaseStart = now
          }
        }

        this._animFrame = requestAnimationFrame(tick)
      }

      this._animFrame = requestAnimationFrame(tick)
    },
    _stopLockonAnimation() {
      cancelAnimationFrame(this._animFrame)
      clearInterval(this._pulseTimer)
    },
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

/* ---- Lock-on animation ---- */
.lockon-scene {
  position: relative;
  width: 620px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Share Tech Mono', monospace;
}

.lockon-scene::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.lockon-scene::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.10) 2px,
    rgba(0, 0, 0, 0.10) 4px
  );
  pointer-events: none;
  z-index: 10;
  border-radius: 16px;
}

.lockon-crosshair {
  position: absolute;
  background: rgba(85, 195, 235, 0.08);
}
.lockon-ch-h {
  width: 100%;
  height: 1px;
  top: 50%;
  left: 0;
}
.lockon-ch-v {
  height: 100%;
  width: 1px;
  left: 50%;
  top: 0;
}

.lockon-scan-sweep {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(85, 195, 235, 0.12), transparent);
  animation: lockonSweep 4s linear infinite;
  pointer-events: none;
}
@keyframes lockonSweep {
  0% { top: 0; opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.lockon-frame-tick {
  position: absolute;
  background: rgba(85, 195, 235, 0.15);
}
.lockon-ft-h { width: 28px; height: 1px; }
.lockon-ft-v { width: 1px; height: 28px; }
.lockon-ft-tl-h { top: 0; left: 0; }
.lockon-ft-tl-v { top: 0; left: 0; }
.lockon-ft-tr-h { top: 0; right: 0; }
.lockon-ft-tr-v { top: 0; right: 0; }
.lockon-ft-bl-h { bottom: 0; left: 0; }
.lockon-ft-bl-v { bottom: 0; left: 0; }
.lockon-ft-br-h { bottom: 0; right: 0; }
.lockon-ft-br-v { bottom: 0; right: 0; }

.lockon-hud-label {
  position: absolute;
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  letter-spacing: 4px;
  color: rgba(85, 195, 235, 0.50);
  text-transform: uppercase;
}
.lockon-hud-top {
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
}
.lockon-hud-bottom {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  letter-spacing: 5px;
  color: rgba(225, 235, 242, 0.45);
}

/* ---- Target ---- */
.lockon-target {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 50px;
  height: 50px;
  transition: opacity 0.15s ease, transform 0.15s ease;
  z-index: 2;
}

.lockon-target-ring {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(255, 100, 80, 0.7);
  border-radius: 50%;
}

.lockon-target-ring-inner {
  inset: 10px;
  border-color: rgba(255, 100, 80, 0.4);
}

.lockon-target-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: rgba(255, 100, 80, 0.9);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px rgba(255, 80, 60, 0.6);
}

.lockon-target-line {
  position: absolute;
  background: rgba(255, 100, 80, 0.35);
}

.lockon-target-line-h {
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  transform: translateY(-0.5px);
}

.lockon-target-line-v {
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  transform: translateX(-0.5px);
}

.lockon-ambient-glow {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(85, 195, 235, 0.06) 0%, transparent 70%);
  pointer-events: none;
  transition: background 0.5s ease;
}
.lockon-glow-locked {
  background: radial-gradient(circle, rgba(40, 220, 100, 0.06) 0%, transparent 70%);
}

.lockon-bracket {
  position: absolute;
  left: calc(50% - 120px);
  top: calc(50% - 120px);
  width: 240px;
  height: 240px;
}

.lockon-corners {
  position: absolute;
  inset: 0;
  transform: rotate(45deg);
}

.lockon-corner {
  position: absolute;
  width: 28px;
  height: 28px;
  border-color: rgba(85, 195, 235, 0.90);
  border-style: solid;
  border-width: 0;
  transition: border-color 0.3s ease;
}
.lockon-corner-tl { left: 0; top: 0; border-left-width: 3px; border-top-width: 3px; }
.lockon-corner-tr { right: 0; top: 0; border-right-width: 3px; border-top-width: 3px; }
.lockon-corner-bl { left: 0; bottom: 0; border-left-width: 3px; border-bottom-width: 3px; }
.lockon-corner-br { right: 0; bottom: 0; border-right-width: 3px; border-bottom-width: 3px; }

.lockon-color-locked {
  border-color: rgba(40, 220, 100, 1) !important;
}

.lockon-status {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Rajdhani', 'Share Tech Mono', monospace;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: rgba(85, 195, 235, 0.90);
  white-space: nowrap;
  transition: color 0.3s ease;
}
.lockon-status-locked {
  color: rgba(40, 220, 100, 1);
}

.lockon-bar-track {
  position: absolute;
  bottom: -22px;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(10, 15, 22, 0.90);
  overflow: hidden;
}

.lockon-bar-fill {
  height: 100%;
  width: 0%;
  background: rgba(85, 195, 235, 1);
  transition: background-color 0.3s ease;
}
.lockon-bar-locked {
  background: rgba(40, 220, 100, 1);
}

.lockon-distance {
  position: absolute;
  bottom: -58px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Rajdhani', 'Share Tech Mono', monospace;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 3px;
  color: rgba(225, 235, 242, 0.95);
  white-space: nowrap;
}

/* ---- Missile ---- */
.lockon-missile {
  position: fixed;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  top: 0;
  left: 0;
}

.lockon-missile-svg {
  display: block;
  filter: drop-shadow(0 0 6px rgba(85, 195, 235, 0.5));
}

.lockon-missile-trail {
  position: absolute;
  right: 48px;
  top: 50%;
  transform: translateY(-50%);
  height: 5px;
  width: 0;
  opacity: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 160, 40, 0.6), rgba(255, 200, 80, 0.9));
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(255, 160, 40, 0.6), 0 0 20px rgba(255, 100, 20, 0.3);
}

.lockon-trail-svg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 49;
  pointer-events: none;
  opacity: 0;
}

/* ---- Impact flash ---- */
.lockon-impact {
  position: fixed;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 220, 120, 0.9) 0%, rgba(255, 140, 40, 0.6) 30%, rgba(85, 195, 235, 0.2) 60%, transparent 80%);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
  z-index: 6;
  box-shadow: 0 0 40px rgba(255, 180, 60, 0.6), 0 0 80px rgba(255, 120, 20, 0.3);
}
</style>
