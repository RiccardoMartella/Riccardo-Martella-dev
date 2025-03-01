<template>
  <div class="image-container">
    <img :src="src" :alt="alt || 'Documentation image'" class="zoomable-image" @click="openZoom" />
    
    <div v-if="isZoomed" class="image-modal" @click="closeZoom">
      <div class="modal-content">
        <img :src="src" :alt="alt || 'Documentation image'" class="modal-image" />
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
    }
  },
  data() {
    return {
      isZoomed: false
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
  display: inline-block;
}

.zoomable-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.zoomable-image:hover {
  transform: scale(1.01);
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  pointer-events: none;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}
</style>
