<template>
  <div class="rocket-page">
    <div class="container py-5">
      <div class="text-center mb-4">
        <h1 class="display-4 fw-bold text-accent">{{ $t('rocket.title') }}</h1>
      </div>
      <div class="demo-container">
        <div class="demo-click-notice alert alert-warning d-flex align-items-center mb-0" role="alert">
          <i class="bi bi-mouse-fill me-2 flex-shrink-0"></i>
          <span v-html="$t('rocket.demoNotice')"></span>
        </div>
        <div class="demo-frame-container">
          <iframe
            class="demo-frame"
            src="/TestRocket/index.html"
            :title="$t('rocket.iframeTitle')"
            allowfullscreen
            allow="pointer-lock; autoplay; fullscreen">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Rocket',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()

    return { localePath }
  }
}
</script>

<style scoped>
.rocket-page {
  padding-top: 60px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.demo-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.demo-click-notice {
  border: 2px solid #ffc107;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.25);
}

.demo-frame-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.demo-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
