<template>
  <div class="d-flex justify-content-end">
    <div class="btn btn-success" id="tornaSu" @click="scrollToTop">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackToTopButton',
  props: {
    text: {
      type: String,
      default: 'Back to Top'
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.btn-success {
  cursor: pointer;
  margin: 10px;
}
</style>
