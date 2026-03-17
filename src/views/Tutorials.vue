<template>
  <div class="tutorials-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4" id="#tutorials">
              {{ $t('tutorials.title') }}
            </h1>
            <p class="lead">
              {{ $t('tutorials.lead') }}
            </p>
            <p class="lead mb-0">
              {{ $t('tutorials.youtubeLead').split('{0}')[0] }}<a href="https://youtube.com/@riccardomartella2666?si=LKhiph9HqEq-4CBb" target="_blank" rel="noopener noreferrer">{{ $t('tutorials.youtubeLink') }}</a>{{ $t('tutorials.youtubeLead').split('{0}')[1] }}
            </p>
          </div>

          <div class="tutorial-list">
            <!-- Tutorial 1 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">{{ $t('tutorials.t1Title') }}</h3>
                <p class="tutorial-description">
                  {{ $t('tutorials.t1Desc') }}
                </p>
                <div class="video-container">
                  <video controls class="demo-video w-100">
                    <source
                      src="https://www.dropbox.com/scl/fi/xpdi7ezvad46gjgxh8mwo/Video1.mp4?rlkey=hqusvrqunlzvyr0fkmwbeb9zz&st=zwlvlorn&dl=1"
                      type="video/mp4"
                    />
                    {{ $t('tutorials.videoNotSupported') }}
                  </video>
                  <p class="video-caption">
                    {{ $t('tutorials.t1Caption') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Tutorial 2 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">{{ $t('tutorials.t2Title') }}</h3>
                <p class="tutorial-description">
                  {{ $t('tutorials.t2Desc') }}
                </p>
                <div class="video-container">
                  <video controls class="demo-video w-100">
                    <source
                      src="https://www.dropbox.com/scl/fi/lqeganlygnyw43cgb3yi3/Video2.mp4?rlkey=becbuvglu8fyh7nk5uiettvl3&st=vzc0m97p&dl=1"
                      type="video/mp4"
                    />
                    {{ $t('tutorials.videoNotSupported') }}
                  </video>
                  <p class="video-caption">
                    {{ $t('tutorials.t2Caption') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Tutorial 3 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">{{ $t('tutorials.t3Title') }}</h3>
                <p class="tutorial-description">
                  {{ $t('tutorials.t3Desc') }}
                </p>
                <div class="video-container">
                  <video controls class="demo-video w-100">
                    <source
                      src="https://www.dropbox.com/scl/fi/k1uels9afqhi03xpu6jsw/Video3.mp4?rlkey=nt0nsgv1tmvzs8yvnlvryet0j&st=cspxlrix&dl=1"
                      type="video/mp4"
                    />
                    {{ $t('tutorials.videoNotSupported') }}
                  </video>
                  <p class="video-caption">
                    {{ $t('tutorials.t3Caption') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Tutorial 4 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">{{ $t('tutorials.t4Title') }}</h3>
                <p class="tutorial-description">
                  {{ $t('tutorials.t4Desc') }}
                </p>
                <div class="video-container">
                  <video controls class="demo-video w-100">
                    <source
                      src="https://www.dropbox.com/scl/fi/5x6hrdpfuhnaw12x01kpw/Video4.mp4?rlkey=0l5h8fkq0mvevk48xt4weuayq&st=g84bmyqy&dl=1"
                      type="video/mp4"
                    />
                    {{ $t('tutorials.videoNotSupported') }}
                  </video>
                  <p class="video-caption">
                    {{ $t('tutorials.t4Caption') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Tutorial 5 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">{{ $t('tutorials.t5Title') }}</h3>
                <p class="tutorial-description">
                  {{ $t('tutorials.t5Desc') }}
                </p>
                <div class="video-container">
                  <video controls class="demo-video w-100">
                    <source
                      src="https://www.dropbox.com/scl/fi/b5c3x2yhb11bbry970hhu/AssemblyStation-GuidaallInstallazione.mp4?rlkey=hjh2zh6edd53wjycsk1o919ci&st=ncukwzhp&dl=1"
                      type="video/mp4"
                    />
                    {{ $t('tutorials.videoNotSupported') }}
                  </video>
                  <p class="video-caption">
                    {{ $t('tutorials.t5Caption') }}
                  </p>
                </div>
              </div>
              <div class="card-body p-4">
                <h3 class="tutorial-title">{{ $t('tutorials.t5bTitle') }}</h3>
                <div class="video-container">
                  <video controls class="demo-video w-100">
                    <source
                      src="https://www.dropbox.com/scl/fi/pehlalx0cxts1dfnd3f81/newsystemGroup.mp4?rlkey=xxnl6gztdhdtujv26fh44mnwn&st=im49clo1&dl=1"
                      type="video/mp4"
                    />
                    {{ $t('tutorials.videoNotSupported') }}
                  </video>
                  <p class="video-caption">{{ $t('tutorials.t5bCaption') }}</p>
                </div>
              </div>
            </div>

            <!-- Tutorial 6 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">{{ $t('tutorials.t6Title') }}</h3>
                <p class="tutorial-description">
                  {{ $t('tutorials.t6Desc') }}
                </p>
                <div class="video-container">
                  <video controls class="demo-video w-100">
                    <source
                      src="https://www.dropbox.com/scl/fi/m0rytn4th39fnbxj3wu43/Video6.mp4?rlkey=znu377g0t3bvfcts0c16ucy2a&st=y6hci9zs&dl=1"
                      type="video/mp4"
                    />
                    {{ $t('tutorials.videoNotSupported') }}
                  </video>
                  <p class="video-caption">
                    {{ $t('tutorials.t6Caption') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-light shadow-sm mb-5">
            <div class="card-body p-4">
              <h4 class="mb-3">
                <i class="bi bi-lightbulb-fill text-warning me-2"></i>{{ $t('tutorials.additionalResources') }}
              </h4>
              <p>{{ $t('tutorials.needHelp') }}</p>
              <div class="row">
                <div class="col-md-4 mb-2">
                  <RouterLink
                    :to="localePath('/docs/installation')"
                    class="btn btn-outline-primary w-100"
                  >
                    <i class="bi bi-book me-2"></i>{{ $t('tutorials.documentation') }}
                  </RouterLink>
                </div>
                <div class="col-md-4 mb-2">
                  <RouterLink
                    :to="localePath('/report-bug#bug')"
                    class="btn btn-outline-primary w-100"
                  >
                    <i class="bi bi-bug me-2"></i>{{ $t('tutorials.reportIssues') }}
                  </RouterLink>
                </div>
                <div class="col-md-4 mb-2">
                  <a
                    href="https://discord.gg/dZ2Veb4eM5"
                    target="_blank"
                    class="btn btn-outline-primary w-100"
                  >
                    <i class="bi bi-discord me-2"></i>{{ $t('tutorials.joinDiscord') }}
                  </a>
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
import { useSEO, seoConfigs } from '@/composables/useSEO.js'
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Tutorials',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    useSEO(seoConfigs.tutorials[locale.value] || seoConfigs.tutorials)
    return { localePath, locale }
  }
}
</script>

<style scoped>
.tutorials-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00a3ff;
}

.tutorial-card {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tutorial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.tutorial-title {
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
}

.tutorial-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #00a3ff;
}

.tutorial-description {
  color: #555;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.btn-outline-primary {
  color: #00a3ff;
  border-color: #00a3ff;
}

.btn-outline-primary:hover {
  background-color: #00a3ff;
  color: white;
}

.video-container {
  width: 100%;
  margin: 1.5rem 0;
}

.tutorial-video {
  width: 100%;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #000;
}

.video-caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
  font-size: 0.9rem;
}
</style>
