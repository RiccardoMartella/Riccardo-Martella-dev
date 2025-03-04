<template>
  <div class="privacy-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Informativa sulla Privacy</h1>
            <p class="lead">
              La tua privacy è importante per noi. Questa pagina spiega le nostre pratiche sulla privacy.
            </p>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="privacy-content">
                <a 
                  href="https://www.iubenda.com/privacy-policy/82562185" 
                  class="iubenda-white iubenda-embed" 
                  title="Privacy Policy"
                  target="_blank"
                >
                  Informativa sulla Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyIT',
  mounted() {
    // Carica lo script Iubenda in modo sicuro
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
.privacy-page {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.privacy-content {
  min-height: 500px;
}

a {
  color: #00A3FF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
