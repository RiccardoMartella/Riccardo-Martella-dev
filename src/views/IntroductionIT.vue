<template>
  <div class="introduction">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Assembly Station</h1>
            <p class="lead">
              Benvenuto nella documentazione ufficiale di Assembly Station, uno strumento completo per Unity che semplifica i meccanismi di assemblaggio e produzione nei tuoi giochi.
            </p>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="bi bi-tools fs-1 text-accent me-3"></i>
                <h2>Informazioni su Assembly Station</h2>
              </div>
              <p>Assembly Station è un sistema di assemblaggio progettato per ottimizzare i processi di produzione nei progetti Unity. Che tu stia costruendo macchinari complessi, creando oggetti unici o migliorando i flussi di lavoro, Assembly Station offre strumenti intuitivi per assemblare componenti in modo efficiente e preciso.</p>
              <p>Questo sito di documentazione fornisce guide complete e risorse per aiutarti a iniziare con Assembly Station e a sfruttare al meglio le sue funzionalità.</p>
            </div>
          </div>

          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="card h-100 shadow-sm hover-card">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-book fs-2 text-accent me-2"></i>
                    <h3 class="h5 mb-0">Documentazione</h3>
                  </div>
                  <p>Guide dettagliate e tutorial su come utilizzare Assembly Station nei tuoi progetti Unity.</p>
                  <RouterLink to="/it" class="btn btn-primary mt-3">Vai alla Documentazione</RouterLink>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 shadow-sm hover-card">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-play-circle fs-2 text-accent me-2"></i>
                    <h3 class="h5 mb-0">Video Tutorial</h3>
                  </div>
                  <p>Tutorial video passo-passo per aiutarti a iniziare rapidamente e padroneggiare le funzionalità avanzate.</p>
                  <a href="#" class="btn btn-outline-primary mt-3">Guarda i Tutorial</a>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <h3 class="mb-4">Inizia Subito</h3>
            <RouterLink to="/it" class="btn btn-lg btn-primary px-4 py-2">
              Inizia a Usare Assembly Station
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionIT'
}
</script>

<style scoped>
.introduction {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}
</style>
