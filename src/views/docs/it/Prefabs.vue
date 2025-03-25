<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">3. POSIZIONAMENTO PREFABS</h1>
      
      <p class="text-lead">
        Una volta separati i materiali, vai alla cartella Prefab Clone: <code>Assets > AssemblyStation > Prefab Clone</code>.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">ROTAZIONE DEL PREFAB</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              È importante considerare la rotazione con cui il prefab verrà instanziato nell'Assembly Station. Questa rotazione determina l'orientamento iniziale del modello quando viene visualizzato.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/prefabRotation.png" 
              alt="Rotazione del Prefab"
              class="w-50"
              caption="Gestione della rotazione del prefab durante l'instanziazione"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ASSEMBLY POINT</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              L'Assembly Station posiziona il prefab in un punto specifico chiamato <strong>Assembly Point</strong>. Questo è un riferimento fondamentale per il posizionamento dei modelli.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/pivot3.png" 
              alt="Assembly Point"
              caption="Punto di assemblaggio"
              class="right-aligned-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">PIVOT POINT</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Quel punto si riferisce al pivot genitore, che contiene tutti gli Elementi che compongono il gameobject. Posizionare correttamente questo perno è fondamentale per il corretto posizionamento del modello.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/pivot2.png" 
              alt="Parent Pivot"
              caption="Pivot del genitore"
              class="right-aligned-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">POSIZIONAMENTO DEL PREFAB</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Quando posizioniamo il prefab, il punto pivot corrisponde all'Assembly Point. Per assicurarsi che il prefab non fluttui o intersechi il terreno, è necessario spostare il pivot del genitore. (Partendo dall'FBX)
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/pivot.png" 
              alt="Spostamento del Pivot"
              caption="Regolazione della posizione del pivot"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">UNPACK DEL PREFAB</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              In questo caso, come puoi vedere, il pivot è leggermente spostato verso l'alto. Quindi premiamo <em>Unpack Completely</em>.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/unpack.png" 
              alt="Unpack Completely"
              caption="Operazione di Unpack Completely"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">REGOLAZIONE DEL PIVOT</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <ol class="numbered-list">
              <li>Seleziona tutto tranne il genitore (in questo caso <strong>Mech Rework</strong>) e sposta tutto fuori dal genitore.</li>
              <li>Seleziona il genitore (Mech Rework) e sposta il pivot.</li>
              <li>Per spostare il pivot, basta cliccare sulla freccia verde e spostarla verso il basso. Ti consiglio di attivare la vista 2D per una migliore visualizzazione.</li>
              <li>Come puoi vedere, il modello non si muoverà nello spazio ma solo il pivot.</li>
            </ol>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/prefabguide2.png" 
                alt="Spostamento fuori dal genitore" 
                caption="Spostamento degli oggetti figli fuori dal genitore"
              />
              <ImageZoomable 
                src="/images/prefabguide.png" 
                alt="Creazione del Prefab"
                caption="Regolazione finale del pivot"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ALLINEAMENTO DEL PREFAB</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              In questo caso, il Mecha è allineato nella parte inferiore per farlo apparire appoggiato al terreno. Quindi ho spostato leggermente il pivot verso il basso. Questo dipende da te in base a come vuoi visualizzare il modello.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/lowpivot.png" 
              alt="Prefab allineato in basso"
              caption="Prefab allineato con il terreno"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">POSIZIONAMENTO IN ARIA</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              È possibile anche posizionare il modello in aria (ad esempio, se è un'arma). In questo caso, il pivot è molto basso, quindi il modello rimane sospeso.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/ak.png" 
              alt="Prefab posizionato in aria"
              caption="Prefab sospeso in aria"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CREAZIONE DEL PREFAB</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Una volta fatto, seleziona tutti i figli e rimettili all'interno del genitore come prima. Quindi, trascina il genitore nella cartella (Prefab clone) e un Prefab verrà creato automaticamente.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/prefabimg.png" 
              alt="Immagine prefab" 
              class="img-fit-content" 
              caption="Aspetto del prefab finale"
            />
            <ImageZoomable 
              src="/images/replaceprefab.png" 
              alt="Creazione del Prefab"
              caption="Processo di creazione del prefab"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CAMERA</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Una volta in gioco, la camera che ruota intorno al prefab posizionato avrà come punto di riferimento l'Orbit Camera Point che verrà sempre aggiunto automaticamente con Add Name and Descriptions To Prefab.
            </p>
            <hr>
            <div class="alert-box alert-warning">
              <p>
                <strong>IMPORTANTE:</strong> Prima di modificare l'OrbitCameraPoint, è necessario andare al <strong>punto 4 della documentazione</strong> ed eseguire il passaggio "Add Name and Descriptions To Prefab". Questo assicurerà che l'Orbit Camera Point venga aggiunto correttamente al tuo prefab.
              </p>
            </div>
            <p>
              In modalità Editor, puoi spostare il punto pivot di ObitalCameraPoint per rendere la camera più bassa o più alta secondo necessità.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/orbitpoint.png" 
              alt="Orbital Camera Point"
              caption="Punto di riferimento per la camera orbitale"
            />
          </div>
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

<style>
@import '@/assets/styles/documentation.css';

.img-fit-content {
  width: fit-content !important;
}

.image-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.numbered-list {
  list-style-type: decimal;
  padding-left: 20px;
  margin-bottom: 20px;
}

.numbered-list li {
  margin-bottom: 8px;
}
</style>
