<template>
  <div class="image-container">
    <div class="image-wrapper" @click="openZoom">
      <img :src="imagePath" :alt="alt || 'Documentation image'" class="zoomable-image" />
      <div class="zoom-indicator">
        <i class="bi bi-zoom-in"></i>
      </div>
    </div>
    <p v-if="caption || alt" class="image-caption">{{ caption || alt }}</p>
    
    <div v-if="isZoomed" class="image-modal" @click="closeZoom">
      <div class="modal-content">
        <button class="close-btn" @click.stop="closeZoom" aria-label="Close image">
          <i class="bi bi-x-lg"></i>
        </button>
        <img :src="imagePath" :alt="alt || 'Documentation image'" class="modal-image" />
        <p v-if="caption || alt" class="modal-caption">{{ caption || alt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageZoomable',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isZoomed: false
    }
  },
  computed: {
    // This helps resolve image paths properly
    imagePath() {
      // If the path already includes import.meta, return as is
      if (this.src.startsWith('/') && !this.src.startsWith('/src/')) {
        return this.src;
      }
      
      // Otherwise transform paths that start with /src/
      return this.src.replace('/src/', '/');
    }
  },
  methods: {
    openZoom() {
      this.isZoomed = true;
      document.body.style.overflow = 'hidden';
    },
    closeZoom() {
      this.isZoomed = false;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped>
.image-container {
  margin: 1rem 0;
  width: 100%;
}

.image-wrapper {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  display: inline-block;
  max-width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
}

.image-wrapper:hover .zoom-indicator {
  opacity: 1;
}

.zoomable-image {
  display: block;
  max-width: 100%;
  height: auto;
  transition: filter 0.3s ease;
  border: v-bind('border ? "1px solid #e0e0e0" : "none"');
}

.image-wrapper:hover .zoomable-image {
  filter: brightness(0.92);
}

.zoom-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  font-style: italic;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
  animation: fadeIn 0.2s ease;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  animation: scaleIn 0.3s ease;
  border-radius: 6px;
}

.modal-caption {
  color: white;
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: -10px;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 768px) {
  .image-wrapper {
    max-width: 100%;
    width: 100%;
  }
  
  .modal-content {
    width: 95%;
  }
}
</style>
