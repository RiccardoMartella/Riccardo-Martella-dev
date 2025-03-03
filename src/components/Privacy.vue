<template>
  <div class="container">
    <a 
      href="https://www.iubenda.com/privacy-policy/82562185" 
      class="iubenda-white iubenda-embed" 
      title="Privacy Policy"
      target="_blank"
    >
      Privacy Policy
    </a>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  mounted() {
    if (!document.getElementById('iubenda-script')) {
      const script = document.createElement('script');
      script.id = 'iubenda-script';
      script.src = 'https://cdn.iubenda.com/iubenda.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.container{
    padding-top: 20px;
    padding-bottom: 50px;
}
</style>