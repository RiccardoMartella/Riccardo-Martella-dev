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
                <a href="https://www.iubenda.com/privacy-policy/82562185" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>
              </div>
              
              <div class="mt-4">
                <p>
                  Questa Informativa sulla Privacy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.
                  Ci impegniamo a garantire la sicurezza e la riservatezza dei tuoi dati.
                </p>
                <p>
                  Quando utilizzi il nostro sito web o i nostri servizi, potrebbero essere raccolte alcune informazioni per migliorare 
                  la tua esperienza e aiutarci a comprendere meglio come gli utenti interagiscono con la nostra piattaforma.
                  Raccogliamo solo i dati necessari e li utilizziamo nei modi descritti in questa informativa.
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
  name: 'PrivacyIT',
  mounted() {
    // Load iubenda script
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
 text-align: center;
}


a {
  color: #00A3FF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
