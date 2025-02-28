<template>
  <img :src="src" :alt="alt" @click="zoomImage" :style="imageStyle" :class="imageClass">
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
      default: 'Image'
    },
    imageStyle: {
      type: Object,
      default: () => ({})
    },
    imageClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    zoomImage() {
      const newWindow = window.open();
      newWindow.document.write(`<img src="${this.src}" style="display:block; margin:0 auto; width:75%; height:auto;">`);
    }
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
  transition: transform 0.2s;
}
img:hover {
  transform: scale(1.02);
}
</style>
