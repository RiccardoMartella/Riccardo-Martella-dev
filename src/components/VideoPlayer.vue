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
        class="video-element"
      ></video>
      
      <div v-if="customControls" class="custom-controls" :class="{ 'playing': isPlaying }">
        <button class="play-btn" @click="togglePlay" :aria-label="isPlaying ? 'Pause' : 'Play'">
          <i :class="['bi', isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"></i>
        </button>
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
      isPlaying: false
    }
  },
  methods: {
    togglePlay() {
      const video = this.$refs.videoPlayer;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
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
  margin-left: 5px; /* Adjust for visual centering */
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
  padding: 15px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
}

.custom-controls.playing {
  opacity: 1;
}

.video-wrapper:hover .custom-controls {
  opacity: 1;
}

.play-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.play-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
