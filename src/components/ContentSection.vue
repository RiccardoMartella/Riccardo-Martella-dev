<template>
  <div class="warning-box mb-3">
    <div class="warning-icon"><i class="bi bi-exclamation-triangle-fill"></i></div>
    <div class="warning-content">
      <h4>{{ $t('contentSection.cautionTitle') }}</h4>
      <p>{{ $t('contentSection.warning') }}</p>
    </div>
  </div>
  <div class="disclaimer-box ">
    <div class="disclaimer-icon"><i class="bi bi-info-circle-fill"></i></div>
    <div class="disclaimer-content">
      <h4>{{ $t('contentSection.noteTitle') }}</h4>
      <p>{{ $t('contentSection.disclaimer') }}</p>
    </div>
  </div>
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

.warning-box {
  display: flex;
  background-color: #ffebeb;
  border-left: 4px solid #dc3545;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 0 15px 0;
}

.warning-icon {
  font-size: 22px;
  color: #dc3545;
  margin-right: 12px;
  margin-top: 0;
}

.warning-content h4 {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 6px;
  color: #dc3545;
  font-weight: bold;
}

.warning-content p {
  margin-bottom: 0;
  line-height: 1.4;
  color: #333;
  font-size: 0.95rem;
}

.disclaimer-box {
  display: flex;
  background-color: #e6f7ff;
  border-left: 4px solid #00A3FF;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 0 15px 0;
}

.disclaimer-icon {
  font-size: 22px;
  color: #00A3FF;
  margin-right: 12px;
  margin-top: 0;
}

.disclaimer-content h4 {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 6px;
  color: #00A3FF;
  font-weight: bold;
}

.disclaimer-content p {
  margin-bottom: 0;
  line-height: 1.4;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .content-section {
    padding: 1.5rem;
  }

  .warning-box, .disclaimer-box {
    flex-direction: column;
  }

  .warning-icon, .disclaimer-icon {
    margin-bottom: 8px;
  }
}
</style>
