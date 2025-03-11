<template>
  <div class="video-container">
    <div class="video-wrapper">
      <video 
        ref="videoPlayer" 
        :src="src" 
        :poster="poster" 
        :controls="!customControls" 
        :muted="muted"
        preload="metadata"
        @play="isPlaying = true"
        @pause="isPlaying = false"
        @ended="isPlaying = false"
        @timeupdate="updateProgress"
        @loadedmetadata="onMetadataLoaded"
        @error="handleVideoError"
        class="video-element"
      >
        <p>Your browser does not support the video element or the video failed to load. Please try a different browser or check your connection.</p>
      </video>
      
      <div v-if="hasError" class="video-error-overlay">
        <div class="error-message">
          <i class="bi bi-exclamation-triangle-fill"></i>
          <p>{{ errorMessage }}</p>
          <button @click="retryLoadVideo" class="retry-btn">Retry</button>
        </div>
      </div>
      
      <div v-if="customControls" class="custom-controls" :class="{ 'playing': isPlaying || isControlsVisible }">
        <div class="progress-container" @click="seek">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${progressPercent}%` }"></div>
          </div>
        </div>
        
        <div class="controls-row">
          <div class="left-controls">
            <button class="play-btn" @click="togglePlay" :aria-label="isPlaying ? 'Pause' : 'Play'">
              <i :class="['bi', isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"></i>
            </button>
            
            <div class="time-display">
              {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
            </div>
          </div>
          
          <div class="right-controls">
            <button class="fullscreen-btn" @click="toggleFullscreen" :aria-label="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'">
              <i :class="['bi', isFullscreen ? 'bi-fullscreen-exit' : 'bi-fullscreen']"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div class="video-overlay" v-if="!isPlaying && customControls" @click="togglePlay">
        <div class="play-overlay-btn">
          <i class="bi bi-play-fill"></i>
        </div>
      </div>
    </div>
    
    <p v-if="caption" class="video-caption">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    customControls: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isPlaying: false,
      isFullscreen: false,
      currentTime: 0,
      duration: 0,
      progressPercent: 0,
      isControlsVisible: false,
      controlsTimeout: null,
      hasError: false,
      errorMessage: 'Video failed to load. Please try again.'
    }
  },
  mounted() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', this.handleFullscreenChange);
    
    // Add mouse movement tracking for controls visibility
    const videoWrapper = this.$el.querySelector('.video-wrapper');
    videoWrapper.addEventListener('mousemove', this.showControls);
    videoWrapper.addEventListener('mouseleave', this.hideControls);
  },
  beforeUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('MSFullscreenChange', this.handleFullscreenChange);
    
    const videoWrapper = this.$el.querySelector('.video-wrapper');
    videoWrapper.removeEventListener('mousemove', this.showControls);
    videoWrapper.removeEventListener('mouseleave', this.hideControls);
    
    clearTimeout(this.controlsTimeout);
  },
  methods: {
    togglePlay() {
      const video = this.$refs.videoPlayer;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    },
    toggleFullscreen() {
      const videoWrapper = this.$el.querySelector('.video-wrapper');
      
      if (!this.isFullscreen) {
        if (videoWrapper.requestFullscreen) {
          videoWrapper.requestFullscreen();
        } else if (videoWrapper.webkitRequestFullscreen) {
          videoWrapper.webkitRequestFullscreen();
        } else if (videoWrapper.msRequestFullscreen) {
          videoWrapper.msRequestFullscreen();
        } else if (videoWrapper.mozRequestFullScreen) {
          videoWrapper.mozRequestFullScreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        }
      }
    },
    handleFullscreenChange() {
      this.isFullscreen = Boolean(
        document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    },
    updateProgress() {
      const video = this.$refs.videoPlayer;
      this.currentTime = video.currentTime;
      this.progressPercent = (video.currentTime / video.duration) * 100 || 0;
    },
    onMetadataLoaded() {
      const video = this.$refs.videoPlayer;
      this.duration = video.duration;
    },
    seek(event) {
      const progressBar = event.currentTarget;
      const bounds = progressBar.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const percentage = x / bounds.width;
      
      const video = this.$refs.videoPlayer;
      video.currentTime = percentage * video.duration;
    },
    formatTime(seconds) {
      if (!seconds || isNaN(seconds)) return '0:00';
      
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    },
    showControls() {
      this.isControlsVisible = true;
      clearTimeout(this.controlsTimeout);
      this.controlsTimeout = setTimeout(() => {
        if (this.isPlaying) {
          this.isControlsVisible = false;
        }
      }, 3000); 
    },
    hideControls() {
      if (this.isPlaying) {
        this.isControlsVisible = false;
      }
    },
    handleVideoError(e) {
      console.error("Video error:", e);
      this.hasError = true;
    },
    retryLoadVideo() {
      const video = this.$refs.videoPlayer;
      this.hasError = false;
      
      if (video) {
        video.load();
        video.play().catch(err => {
          console.error("Error playing video:", err);
          this.hasError = true;
        });
      }
    }
  }
}
</script>

<style scoped>
.video-container {
  margin: 1.5rem 0;
  width: 100%;
}

.video-wrapper {
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background-color: #000;
}

.video-element {
  width: 100%;
  display: block;
  border-radius: 10px;
}

.video-caption {
  margin-top: 0.75rem;
  text-align: center;
  color: #666;
  font-style: italic;
  font-size: 0.9rem;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.play-overlay-btn {
  width: 70px;
  height: 70px;
  background-color: rgba(0, 163, 255, 0.85);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.play-overlay-btn i {
  margin-left: 5px; 
}

.video-overlay:hover .play-overlay-btn {
  transform: scale(1.1);
  background-color: rgba(0, 130, 204, 0.9);
}

.custom-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 15px 15px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
}

.custom-controls.playing {
  opacity: 1;
}

.video-wrapper:hover .custom-controls {
  opacity: 1;
}

.progress-container {
  width: 100%;
  height: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  transition: height 0.2s ease;
}

.progress-container:hover .progress-bar {
  height: 6px;
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #00A3FF;
  border-radius: 2px;
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-controls, .right-controls {
  display: flex;
  align-items: center;
}

.time-display {
  color: white;
  font-size: 13px;
  margin-left: 12px;
  font-family: monospace;
}

.play-btn, .fullscreen-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.play-btn:hover, .fullscreen-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

:fullscreen .video-wrapper {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

:fullscreen .video-element {
  max-height: 100vh;
  max-width: 100vw;
  border-radius: 0;
}

:-webkit-full-screen .video-wrapper {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

:-webkit-full-screen .video-element {
  max-height: 100vh;
  max-width: 100vw;
  border-radius: 0;
}

:-moz-full-screen .video-wrapper {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

:-moz-full-screen .video-element {
  max-height: 100vh;
  max-width: 100vw;
  border-radius: 0;
}

.video-error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
}

.error-message {
  text-align: center;
  color: white;
  padding: 20px;
}

.error-message i {
  font-size: 40px;
  color: #ff6b6b;
  margin-bottom: 10px;
}

.error-message p {
  margin-bottom: 15px;
}

.retry-btn {
  background-color: #00A3FF;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.retry-btn:hover {
  background-color: #0082CC;
}
</style>
