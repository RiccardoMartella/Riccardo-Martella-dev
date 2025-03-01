<template>
  <div class="language-selector">
    <router-link to="/it">
      <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="Italia"> IT
    </router-link>
    <router-link to="/">
      <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK"> EN
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector'
}
</script>

<style scoped>
.language-selector {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 100;
}

.language-selector a {
  margin-left: 10px;
  text-decoration: none;
  color: #000;
}

.language-selector img {
  width: 20px;
  height: auto;
  margin-right: 5px;
}
</style>
