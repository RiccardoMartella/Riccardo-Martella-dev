<template>
  <div>
    <ContentSection>
      <h1>9. PROBLEMI NOTI</h1>
      
      <div class="content mt-5">
        <div>
          <p class="text-center mt-4 mb-4">
            Può succedere che, quando vai ad assemblare certi pezzi, appaia questo tipo di errore:
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/bug.png" alt="Messaggio di Errore" class="mb-2" />
        </div>
      </div>
      
      <div class="content mt-5">
        <div>
          <p class="mt-5">
            Questo può accadere perché il pezzo potrebbe avere lo stesso nome di un altro pezzo già presente nel gioco.
            Per risolvere il problema, basta rinominarlo e assegnargli lo Scriptable Object corrispondente.
          </p>
          <p>
            Il video qui sotto mostra come risolvere questo problema:
          </p>
        </div>
        <div>
          <video controls class="w-100" src="/src/assets/video/bug.mp4" type="video/mp4"></video>
        </div>
      </div>

      <div class="alert alert-info mt-5">
        <h4 class="alert-heading">Consigli per la Risoluzione dei Problemi</h4>
        <p>
          Quando affronti problemi con Assembly Station, considera queste soluzioni comuni:
        </p>
        <ul>
          <li>Assicurati che tutti i materiali siano posizionati correttamente nella cartella Resources</li>
          <li>Controlla che i prefab siano configurati correttamente con pivot appropriati</li>
          <li>Verifica che tutti i componenti richiesti siano assegnati nell'inspector</li>
          <li>Assicurati che non ci siano nomi duplicati nei pezzi del tuo progetto</li>
          <li>Controlla la presenza di messaggi di errore nella console di Unity</li>
        </ul>
      </div>
      
      <div class="mt-5">
        <h3 class="text-center">Hai bisogno di aiuto?</h3>
        <p class="text-center">
          Se stai riscontrando problemi non coperti in questa documentazione, non esitare a contattarmi per assistenza.
        </p>
        <div class="d-flex justify-content-center gap-4 mt-3">
          <a href="#" class="btn btn-outline-primary">
            <i class="bi bi-github me-2"></i>Segnala Problema su GitHub
          </a>
          <a href="#" class="btn btn-outline-primary">
            <i class="bi bi-envelope me-2"></i>Contattami via Email
          </a>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'KnownIssuesIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.content > div:first-child {
  flex: 1;
}

.content > div:last-child {
  flex: 1;
}

video {
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.alert {
  border-left: 4px solid #00A3FF;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
