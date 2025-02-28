<template>
  <div class="content-section-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentSection'
}
</script>

<style scoped>
.content-section-wrapper {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 25px;
  margin-bottom: 30px;
}
</style>
