<template>
  <div class="section" :id="id">
    <h2 v-if="title" :class="titleClass">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.section {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
}
</style>
