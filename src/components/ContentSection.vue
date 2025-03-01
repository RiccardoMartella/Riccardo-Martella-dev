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
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.content-section:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .content-section {
    padding: 1.5rem;
  }
}
</style>
