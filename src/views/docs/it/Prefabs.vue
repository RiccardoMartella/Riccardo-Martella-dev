<template>
  <div>
    <ContentSection>
      <h1>3. POSIZIONARE I PREFABS</h1>
      
      <div class="content">
        <div>
          <p>
            Una volta che i materiali sono separati, vai alla cartella Prefab Clone: <code>Assets > AssemblyStation > Prefab Clone</code>.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/prefabclone.png" alt="Cartella Prefab Clone" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            L'Assembly Station posiziona il prefab in un punto specifico chiamato <strong>Assembly Point</strong>.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/pivot3.png" alt="Punto di Assemblaggio" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Quel punto si riferisce al pivot del genitore del prefab, che contiene tutti i "pezzi" che compongono il gameobject.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/pivot2.png" alt="Pivot del Genitore" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Quando posizioniamo il prefab, il punto pivot corrisponde all'Assembly Point. Per assicurarci che il prefab non fluttui o intersechi il terreno, è necessario spostare il pivot del genitore. (Partendo dal FBX)
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/pivot.png" alt="Spostare il Pivot" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            In questo caso, come puoi vedere, il pivot è leggermente spostato verso l'alto. Quindi premiamo <em>Unpack Completely</em>.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/unpack.png" alt="Unpack Completely" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Seleziona tutto tranne il genitore (in questo caso <strong>Mech Rework</strong>) e sposta tutto fuori dal genitore.
          </p>
          <hr>
          <p>Seleziona il genitore (Mech Rework) e sposta il pivot.</p>
          <hr>
          <p>
            Per spostare il pivot, basta cliccare sulla freccia verde e spostarla verso il basso. Consiglio di attivare la vista 2D per una migliore visione.
          </p>
          <hr>
          <p>Come puoi vedere, il modello non si muoverà nello spazio ma solo il pivot.</p>
        </div>
        <div>
          <div>
            <ImageZoomable src="/src/assets/images/prefabguide2.png" alt="Spostamento fuori dal genitore" class="mb-3" />
          </div>
          <div>
            <ImageZoomable src="/src/assets/images/prefabguide.png" alt="Creazione del Prefab" />
          </div>
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            In questo caso, il Mecha è allineato al fondo per farlo apparire appoggiato sul terreno. Quindi ho spostato il pivot leggermente verso il basso. Questo dipende da te in base a come vuoi visualizzare il modello.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/lowpivot.png" alt="Prefab allineato al fondo" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Puoi anche posizionare il modello in aria (ad esempio, se è un'arma). In questo caso, il pivot è molto basso, quindi il modello rimane sospeso.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/ak.png" alt="Prefab posizionato in aria" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <h3>Creazione del Prefab</h3>
          <p>
            Una volta fatto, seleziona tutti i figli e rimettili dentro il genitore come prima. Quindi, trascina il genitore nella cartella (Prefab clone) e un Prefab verrà creato automaticamente.
          </p>
          <ImageZoomable src="/src/assets/images/prefabimg.png" alt="Immagine Prefab" class="img-fit-content" />
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/replaceprefab.png" alt="Creazione del Prefab" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <h3>Camera</h3>
          <p>
            Una volta nel gioco, la camera che ruota attorno al prefab posizionato avrà come punto di riferimento l'Orbit Camera Point che verrà sempre aggiunto automaticamente con Add Name and Descriptions To Prefab.
          </p>
          <hr>
          <p>
            In modalità Editor, puoi spostare il punto pivot di ObitalCameraPoint per rendere la camera più bassa o più alta secondo necessità.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/orbitpoint.png" alt="Punto Camera Orbitale" />
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'PrefabsIT',
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

.img-fit-content {
  width: fit-content !important;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
