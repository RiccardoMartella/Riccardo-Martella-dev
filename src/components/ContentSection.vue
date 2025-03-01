<template>
  <div class="content-section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentSection'
}
</script>

<style scoped>
.content-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 24px;
}
</style>
