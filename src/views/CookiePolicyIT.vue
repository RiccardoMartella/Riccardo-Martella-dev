<template>
  <div class="cookie-policy-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Politica dei Cookie</h1>
            <p class="lead">
              Informazioni sui cookie utilizzati sul sito web di Assembly Station.
            </p>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="iubenda-container">
                <a href="https://www.iubenda.com/privacy-policy/82562185/cookie-policy" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy">Politica dei Cookie</a>
              </div>
              
              <div class="mt-4">
                <p>
                  Questa pagina fornisce informazioni sui cookie utilizzati sul nostro sito web. 
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo computer o 
                  dispositivo mobile quando visiti il nostro sito web.
                </p>
                <p>
                  Utilizziamo i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico 
                  del sito e personalizzare i contenuti. Utilizzando il nostro sito web, acconsenti 
                  all'uso dei cookie in conformità con questa Politica dei Cookie.
                </p>
              </div>
            </div>
          </div>

          <div class="text-center mt-5">
            <RouterLink to="/it" class="btn btn-outline-primary">
              <i class="bi bi-arrow-left me-2"></i> Torna alla Home
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiePolicyIT',
  mounted() {
    // Load iubenda script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (w,d) {
        var loader = function () {
          var s = d.createElement("script"), 
          tag = d.getElementsByTagName("script")[0]; 
          s.src="https://cdn.iubenda.com/iubenda.js"; 
          tag.parentNode.insertBefore(s,tag);
        }; 
        if(w.addEventListener){
          w.addEventListener("load", loader, false);
        } else if(w.attachEvent){
          w.attachEvent("onload", loader);
        } else {
          w.onload = loader;
        }
      })(window, document);
    `;
    document.body.appendChild(script);
  }
}
</script>

<style scoped>
.cookie-policy-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.iubenda-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

/* Override iubenda styles if needed */
:deep(.iubenda-white) {
  font-size: 1.1rem !important;
  padding: 10px 20px !important;
}
</style>
