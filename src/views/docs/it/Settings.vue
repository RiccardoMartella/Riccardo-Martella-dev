<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. IMPOSTAZIONI GENERALI</h1>
      
      <p class="text-lead">
        Questa pagina descrive tutte le diverse impostazioni disponibili in Assembly Station.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">RIFERIMENTO AI COMPONENTI PRINCIPALI</h2>
        
        <div class="content-block vertical">
          <div class="api-documentation">
            <div class="api-class">
              <h3>ViewDetails.cs</h3>
              <p>Gestisce l'interfaccia utente e la visualizzazione dei dettagli per i prefab e i loro componenti.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>prefabButtonList</td>
                    <td>PrefabButtonList</td>
                    <td>Contiene la lista dei dati dei bottoni associati ai prefab. Memorizza informazioni come colori e stato di conferma per ciascun bottone.</td>
                  </tr>
                  <tr>
                    <td>pieceButtons</td>
                    <td>Dictionary&lt;GameObject, Button&gt;</td>
                    <td>Dizionario che associa ogni pezzo al suo bottone nell'interfaccia utente. Consente un rapido accesso al bottone di un pezzo specifico.</td>
                  </tr>
                  <tr>
                    <td>prefabManager</td>
                    <td>PrefabManager</td>
                    <td>Gestore che controlla la creazione, il caricamento e il salvataggio dei prefab. Coordina lo stato globale dei prefab nel sistema.</td>
                  </tr>
                  <tr>
                    <td>builtPieces</td>
                    <td>HashSet&lt;GameObject&gt;</td>
                    <td>Insieme dei pezzi già costruiti dall'utente. Usato per verificare rapidamente se un pezzo è stato assemblato.</td>
                  </tr>
                  <tr>
                    <td>playerResources</td>
                    <td>PlayerResources</td>
                    <td>Gestisce le risorse del giocatore (ferro, plastica, gomma) utilizzate per costruire i pezzi. Tiene traccia delle quantità e controlla le operazioni di aggiunta/sottrazione.</td>
                  </tr>
                  <tr>
                    <td>buildButton</td>
                    <td>GameObject</td>
                    <td>Riferimento al bottone principale per la costruzione di un componente. Consente di iniziare il processo di assemblaggio.</td>
                  </tr>
                  <tr>
                    <td>effectsContainer</td>
                    <td>Transform</td>
                    <td>Contenitore per gli effetti visivi durante la costruzione. Gli effetti di particelle vengono creati come figli di questo transform.</td>
                  </tr>
                  <tr>
                    <td>panelResources</td>
                    <td>GameObject</td>
                    <td>Pannello UI che mostra le risorse richieste per un pezzo. Contiene i testi e le immagini delle risorse.</td>
                  </tr>
                  <tr>
                    <td>PanelTextresources</td>
                    <td>GameObject</td>
                    <td>Pannello che mostra messaggi relativi alle risorse (es. "Risorse insufficienti").</td>
                  </tr>
                  <tr>
                    <td>containerPercentage</td>
                    <td>GameObject</td>
                    <td>Contenitore UI per visualizzare la percentuale di completamento dell'assemblaggio.</td>
                  </tr>
                  <tr>
                    <td>saveProgressButton</td>
                    <td>GameObject</td>
                    <td>Bottone per salvare i progressi dell'assemblaggio corrente. Consente di preservare lo stato di costruzione tra le sessioni.</td>
                  </tr>
                  <tr>
                    <td>effectsManager</td>
                    <td>EffectsManager</td>
                    <td>Gestore degli effetti visivi mostrati durante l'assemblaggio (particelle, luci, ecc.). Coordina gli effetti per singoli pezzi e gruppi.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Impostazioni UI</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cellSizeH</td>
                    <td>float</td>
                    <td>Larghezza della cella UI per i bottoni dei pezzi. Controlla la dimensione orizzontale dei bottoni nella griglia.</td>
                  </tr>
                  <tr>
                    <td>cellSizeY</td>
                    <td>float</td>
                    <td>Altezza della cella UI per i bottoni dei pezzi. Controlla la dimensione verticale dei bottoni nella griglia.</td>
                  </tr>
                  <tr>
                    <td>resourceIcon</td>
                    <td>Sprite</td>
                    <td>Icona generica utilizzata per rappresentare le risorse nell'interfaccia.</td>
                  </tr>
                  <tr>
                    <td>resourceContainerWidth</td>
                    <td>float</td>
                    <td>Larghezza del contenitore che mostra le risorse richieste. Definisce lo spazio orizzontale disponibile per le informazioni sulle risorse.</td>
                  </tr>
                  <tr>
                    <td>resourceContainerHeight</td>
                    <td>float</td>
                    <td>Altezza del contenitore che mostra le risorse richieste. Definisce lo spazio verticale per ciascuna risorsa.</td>
                  </tr>
                  <tr>
                    <td>resourceTextFontSize</td>
                    <td>int</td>
                    <td>Dimensione del font per il testo delle risorse. Controlla la leggibilità delle informazioni sulle risorse.</td>
                  </tr>
                  <tr>
                    <td>resourceVerticalAlign</td>
                    <td>float</td>
                    <td>Spaziatura verticale tra le risorse nella lista. Controlla la densità visiva delle informazioni sulle risorse.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>ConstructionUI.cs</h3>
              <p>Gestisce l'interfaccia principale di costruzione e assemblaggio.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Instance</td>
                    <td>ConstructionUI</td>
                    <td>Istanza singleton della classe ConstructionUI. Permette accesso globale alle sue funzionalità.</td>
                  </tr>
                  <tr>
                    <td>currentPrefab</td>
                    <td>GameObject</td>
                    <td>Prefab attualmente selezionato per l'assemblaggio. Oggetto su cui l'utente sta lavorando.</td>
                  </tr>
                  <tr>
                    <td>tagObject</td>
                    <td>List&lt;string&gt;</td>
                    <td>Lista dei tag disponibili per categorizzare gli oggetti. Usata per organizzare i pezzi in categorie.</td>
                  </tr>
                  <tr>
                    <td>piecesByTag</td>
                    <td>Dictionary&lt;string, List&lt;GameObject&gt;&gt;</td>
                    <td>Dizionario che organizza i pezzi per tag. Facilita l'accesso ai pezzi per categoria.</td>
                  </tr>
                  <tr>
                    <td>originalMaterials</td>
                    <td>Dictionary&lt;GameObject, Material[]&gt;</td>
                    <td>Memorizza i materiali originali di ciascun pezzo. Usato per ripristinare i materiali dopo lo scheletro.</td>
                  </tr>
                  <tr>
                    <td>confirmedPieces</td>
                    <td>HashSet&lt;GameObject&gt;</td>
                    <td>Insieme dei pezzi confermati nell'assemblaggio. Pezzi che sono stati posizionati correttamente.</td>
                  </tr>
                  <tr>
                    <td>skeletonColor</td>
                    <td>Material</td>
                    <td>Materiale utilizzato per visualizzare i pezzi in modalità scheletro. Definisce l'aspetto dei pezzi non ancora assemblati.</td>
                  </tr>
                  <tr>
                    <td>skeletonTransparentColor</td>
                    <td>Material</td>
                    <td>Materiale per lo scheletro con trasparenza. Permette di vedere la struttura interna mantenendo visibili i contorni.</td>
                  </tr>
                  <tr>
                    <td>switchMaterial</td>
                    <td>ButtonSwitch</td>
                    <td>Controller per lo switch tra materiali normali e trasparenti. Gestisce il cambio di visualizzazione.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Impostazioni Grid UI</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>gridColumn</td>
                    <td>int</td>
                    <td>Numero di colonne nella griglia dei pezzi. Determina il layout della visualizzazione dei pezzi disponibili.</td>
                  </tr>
                  <tr>
                    <td>sizeCellX</td>
                    <td>int</td>
                    <td>Larghezza della cella nella griglia. Controlla la dimensione orizzontale dei bottoni dei pezzi.</td>
                  </tr>
                  <tr>
                    <td>sizeCellY</td>
                    <td>int</td>
                    <td>Altezza della cella nella griglia. Controlla la dimensione verticale dei bottoni dei pezzi.</td>
                  </tr>
                  <tr>
                    <td>spacingX</td>
                    <td>int</td>
                    <td>Spaziatura orizzontale tra celle. Controlla la distanza tra i bottoni dei pezzi in orizzontale.</td>
                  </tr>
                  <tr>
                    <td>spacingY</td>
                    <td>int</td>
                    <td>Spaziatura verticale tra celle. Controlla la distanza tra i bottoni dei pezzi in verticale.</td>
                  </tr>
                  <tr>
                    <td>paddingLeft</td>
                    <td>int</td>
                    <td>Padding sinistro della griglia. Spazio tra il bordo sinistro del contenitore e la prima colonna.</td>
                  </tr>
                  <tr>
                    <td>paddingRight</td>
                    <td>int</td>
                    <td>Padding destro della griglia. Spazio tra l'ultima colonna e il bordo destro del contenitore.</td>
                  </tr>
                  <tr>
                    <td>paddingTop</td>
                    <td>int</td>
                    <td>Padding superiore della griglia. Spazio tra il bordo superiore del contenitore e la prima riga.</td>
                  </tr>
                  <tr>
                    <td>paddingBottom</td>
                    <td>int</td>
                    <td>Padding inferiore della griglia. Spazio tra l'ultima riga e il bordo inferiore del contenitore.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>FreeCamera.cs</h3>
              <p>Gestisce la camera in modalità libera, permettendo all'utente di muoversi liberamente nella scena.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_freeCameraOn</td>
                    <td>bool</td>
                    <td>Stato di attivazione della camera libera. Quando true, la camera è in modalità libera e può essere spostata indipendentemente dagli oggetti nella scena.</td>
                  </tr>
                  <tr>
                    <td>_mainCameraAssembly</td>
                    <td>GameObject</td>
                    <td>Riferimento all'oggetto della camera principale di assemblaggio. Quando la camera libera è attivata, questa viene disabilitata.</td>
                  </tr>
                  <tr>
                    <td>_boundaryCollider</td>
                    <td>BoxCollider</td>
                    <td>Collider che definisce i limiti di movimento della camera libera. Impedisce all'utente di allontanarsi troppo dalla zona di assemblaggio.</td>
                  </tr>
                  <tr>
                    <td>_moveSpeed</td>
                    <td>float</td>
                    <td>Velocità di movimento della camera in unità per secondo. Controlla quanto velocemente l'utente può spostarsi nello spazio.</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Sensibilità del mouse per il controllo della rotazione della camera. Valori più alti rendono la rotazione più rapida.</td>
                  </tr>
                  <tr>
                    <td>_rotationX</td>
                    <td>float</td>
                    <td>Rotazione corrente sull'asse X (pitch). Viene limitata per evitare la rotazione completa.</td>
                  </tr>
                  <tr>
                    <td>_rotationY</td>
                    <td>float</td>
                    <td>Rotazione corrente sull'asse Y (yaw). Controlla la rotazione orizzontale della camera.</td>
                  </tr>
                  <tr>
                    <td>_isInitialized</td>
                    <td>bool</td>
                    <td>Flag che indica se la camera libera è stata inizializzata. Evita l'inizializzazione multipla.</td>
                  </tr>
                  <tr>
                    <td>_cachedBounds</td>
                    <td>Bounds</td>
                    <td>Cache dei limiti del boundary collider. Memorizzati per ottimizzare i controlli sui limiti di movimento.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>OrbitCamera.cs</h3>
              <p>Gestisce la camera orbitale che ruota attorno a un oggetto target.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>Target corrente attorno a cui la camera orbita. Centro del movimento orbitale della camera.</td>
                  </tr>
                  <tr>
                    <td>_canvasAssembly</td>
                    <td>Canvas</td>
                    <td>Canvas principale dell'interfaccia di assemblaggio. Gestisce la visualizzazione UI durante l'assemblaggio.</td>
                  </tr>
                  <tr>
                    <td>_canvasFreeAssembly</td>
                    <td>GameObject</td>
                    <td>Canvas specifico per la modalità camera libera. Contiene controlli UI specifici per questa modalità.</td>
                  </tr>
                  <tr>
                    <td>_mainCamera</td>
                    <td>Camera</td>
                    <td>Componente camera principale del sistema. Responsabile del rendering della vista principale.</td>
                  </tr>
                  <tr>
                    <td>_zoomMultiplier</td>
                    <td>float</td>
                    <td>Moltiplicatore che controlla la velocità di zoom. Valori più alti rendono lo zoom più rapido.</td>
                  </tr>
                  <tr>
                    <td>_zoomMin</td>
                    <td>float</td>
                    <td>Distanza minima di zoom dal target. Impedisce di zoomare eccessivamente vicino.</td>
                  </tr>
                  <tr>
                    <td>_zoomMax</td>
                    <td>float</td>
                    <td>Distanza massima di zoom dal target. Limita quanto lontano è possibile zoomare.</td>
                  </tr>
                  <tr>
                    <td>_startDistance</td>
                    <td>float</td>
                    <td>Distanza iniziale della camera dal target all'avvio. Definisce il livello di zoom predefinito.</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Velocità di rotazione della camera attorno al target. Controlla la reattività della rotazione.</td>
                  </tr>
                  <tr>
                    <td>_minYAngle</td>
                    <td>float</td>
                    <td>Angolo Y minimo per la rotazione. Impedisce di guardare troppo in basso rispetto al target.</td>
                  </tr>
                  <tr>
                    <td>_maxYAngle</td>
                    <td>float</td>
                    <td>Angolo Y massimo per la rotazione. Impedisce di guardare troppo in alto rispetto al target.</td>
                  </tr>
                  <tr>
                    <td>_smoothSpeed</td>
                    <td>float</td>
                    <td>Velocità di smoothing per i movimenti della camera. Più alto = movimenti più fluidi ma meno immediati.</td>
                  </tr>
                  <tr>
                    <td>_usePerformanceMode</td>
                    <td>bool</td>
                    <td>Quando attivato, ottimizza certi calcoli per migliorare le prestazioni, riducendo la precisione.</td>
                  </tr>
                  <tr>
                    <td>_targetCenterUpdateFrequency</td>
                    <td>float</td>
                    <td>Frequenza (in secondi) con cui viene aggiornato il centro del target durante l'orbita.</td>
                  </tr>
                  <tr>
                    <td>_useFixedUpdate</td>
                    <td>bool</td>
                    <td>Se utilizzare FixedUpdate per aggiornamenti a intervalli fissi, utile per movimenti più fluidi.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>PositioningCamera.cs</h3>
              <p>Gestisce il posizionamento della camera in relazione agli oggetti della scena.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_cameraComponent</td>
                    <td>Camera</td>
                    <td>Componente camera utilizzato per la visualizzazione. Gestisce il rendering della vista di posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_zoomMin</td>
                    <td>float</td>
                    <td>Livello minimo di zoom consentito. Limita quanto vicino la camera può avvicinarsi all'oggetto.</td>
                  </tr>
                  <tr>
                    <td>_zoomMax</td>
                    <td>float</td>
                    <td>Livello massimo di zoom consentito. Limita quanto lontano la camera può allontanarsi dall'oggetto.</td>
                  </tr>
                  <tr>
                    <td>_distance</td>
                    <td>float</td>
                    <td>Distanza attuale dal target. Determina quanto lontano la camera si trova dall'oggetto osservato.</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Sensibilità del mouse per la rotazione della camera. Valori più alti rendono la rotazione più reattiva.</td>
                  </tr>
                  <tr>
                    <td>_minYAngle</td>
                    <td>float</td>
                    <td>Angolo Y minimo consentito per la rotazione. Impedisce di guardare troppo in basso.</td>
                  </tr>
                  <tr>
                    <td>_maxYAngle</td>
                    <td>float</td>
                    <td>Angolo Y massimo consentito per la rotazione. Impedisce di guardare troppo in alto.</td>
                  </tr>
                  <tr>
                    <td>_smoothSpeed</td>
                    <td>float</td>
                    <td>Velocità di smoothing dei movimenti della camera. Valori più alti rendono i movimenti più fluidi ma meno immediati.</td>
                  </tr>
                  <tr>
                    <td>_usePerformanceMode</td>
                    <td>bool</td>
                    <td>Quando attivato, riduce la frequenza di aggiornamento di certi calcoli per migliorare le prestazioni.</td>
                  </tr>
                  <tr>
                    <td>_targetCenterUpdateFrequency</td>
                    <td>float</td>
                    <td>Frequenza di aggiornamento del centro del target in secondi. In modalità prestazioni, limita gli aggiornamenti intensivi.</td>
                  </tr>
                  <tr>
                    <td>_useFixedUpdate</td>
                    <td>bool</td>
                    <td>Se true, utilizza FixedUpdate invece di Update per i movimenti della camera, garantendo aggiornamenti a frequenza fissa.</td>
                  </tr>
                  <tr>
                    <td>_enableDebugLogs</td>
                    <td>bool</td>
                    <td>Attiva/disattiva i log di debug. Utile per il troubleshooting durante lo sviluppo.</td>
                  </tr>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>Il transform dell'oggetto che la camera sta osservando. Centro dell'orbita per la camera.</td>
                  </tr>
                  <tr>
                    <td>_currentX</td>
                    <td>float</td>
                    <td>Rotazione corrente sull'asse X. Controlla l'angolo orizzontale della camera.</td>
                  </tr>
                  <tr>
                    <td>_currentY</td>
                    <td>float</td>
                    <td>Rotazione corrente sull'asse Y. Controlla l'angolo verticale della camera (altezza della visuale).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI DI COSTRUZIONE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Nella Hierarchy, puoi trovare il GameObject <strong>Construction UI</strong> che contiene tutte le impostazioni per:
            </p>
            <ul>
              <li>Impostazioni dei pulsanti per ogni modello</li>
              <li>Colori da assegnare per la trasparenza del modello</li>
              <li>Impostazioni individuali per ogni pezzo di ogni modello che verranno visualizzati nella griglia di sinistra</li>
              <li>Impostazioni per il popup che appare quando si clicca su un pezzo</li>
            </ul>
            <p>
              Queste impostazioni ti permettono di personalizzare completamente l'aspetto e il comportamento dei tuoi modelli interattivi.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/construction2.jpg" 
                alt="Impostazioni di Costruzione 2"
                caption="Impostazioni di interfaccia costruzione" 
              />
              <ImageZoomable 
                src="/images/construction1.jpg" 
                alt="Impostazioni di Costruzione 1"
                caption="Dettagli configurazione costruzione" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI CAMERA LIBERA</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Queste impostazioni controllano la camera libera che si attiva quando premi il tasto <kbd>L</kbd>.
              Puoi regolare:
            </p>
            <ul>
              <li>Velocità di movimento</li>
              <li>Sensibilità di rotazione</li>
              <li>I limiti della free camera vengono stabiliti in base alla grandezza del box collider che si trova nel GameObject "Collider_FreeCamera". Ridimensionando questo collider potrai impostare con precisione l'area di movimento consentita alla camera.</li>
            </ul>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/FREEcameraLimit.png" 
              alt="Impostazioni Camera Libera"
              caption="Configurazione camera libera" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI - CAMERA ORBITALE/POSIZIONAMENTO</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Queste impostazioni controllano la camera orbitale che ruota attorno al modello.
              Puoi configurare:
            </p>
            <ul>
              <li>Velocità di rotazione</li>
              <li>Smorzamento e fluidità</li>
              <li>Distanza minima e massima</li>
              <li>Use Performance Mode</li>
            </ul>
            
            <div class="info-box mt-3">
              <h5>Modalità Prestazioni</h5>
              <ul>
                <li><strong>Miglioramento dell'uso delle risorse:</strong> Utilizzando una modalità più "grezza" per determinare la posizione della fotocamera (come usare solo la posizione del target invece di considerare i bounds di un renderer), si riducono i calcoli complessi, liberando risorse per altri compiti.</li>
                <li><strong>Contesto applicativo:</strong> La modalità di prestazioni è utile in situazioni dove l'utente si trova in una scena che richiede molte risorse (ad esempio, quando c'è una grande quantità di oggetti da caricare, come in una scena con molti prefab) e si desidera un minor carico computazionale.</li>
              </ul>
              
              <h6 class="mt-3">Dettagli tecnici:</h6>
              <ul>
                <li><strong>Calcolo della posizione semplificato:</strong> Quando la modalità performance è attivata, viene semplicemente utilizzata la posizione del targetTransform come il centro dell'oggetto, senza calcolare i bounds del renderer (operazione che richiede più risorse computazionali).</li>
                <li><strong>Riduzione dell'interpolazione:</strong> Con la modalità performance attiva, la velocità di interpolazione della posizione e della rotazione viene ridotta tramite il moltiplicatore smoothFactor, che diminuisce la "lentezza" del movimento della telecamera per ridurre ulteriormente il carico di calcolo.</li>
              </ul>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/ORbitCAmeraSettings.png" 
              alt="Impostazioni Camera Orbitale"
              caption="Configurazione camera orbitale" 
            />
          </div>
        </div>
      </div>
            <div class="doc-section">        
        <div class="content-block vertical">
      
          <div class="content-media">
            <ImageZoomable 
              src="/images/CameraPositioning.png" 
              alt="Impostazioni Camera Positioning"
              caption="Configurazione del posizionamento della camera" 
            />
          </div>
        </div>
      </div>
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI EFFETTI VISIVI E SONORI</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Queste impostazioni riguardano gli effetti sonori e visivi associati a ogni prefab.
              Puoi regolare:
            </p>
            <ul>
              <li>Effetti sonori</li>
              <li>Parametri degli effetti visivi</li>
              <li>Configurazioni dei sistemi di particelle</li>
            </ul>
            <p>
              Personalizzare queste impostazioni ti permette di creare un'esperienza più immersiva e interattiva per i tuoi utenti.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/viewdetails2.jpg" 
              alt="Impostazioni Effetti Visivi e Sonori"
              caption="Configurazione effetti visivi e sonori" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI PLACEMENT SYSTEM</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Queste impostazioni controllano il sistema di posizionamento dei prefab completati nell'ambiente di gioco.
              In questa sezione puoi configurare:
            </p>
            <ul>
              <li>Effetti audio per il posizionamento e la rotazione</li>
              <li>Colori di feedback visivo (valido/non valido)</li>
              <li>Tasti per la rotazione del prefab</li>
              <li>Velocità e sensibilità di movimento</li>
              <li>Altezza di posizionamento e offset</li>
            </ul>
            <p>
              Personalizzare correttamente queste impostazioni è fondamentale per garantire un'esperienza di posizionamento fluida e intuitiva. 
              Gli indicatori visivi e sonori aiutano l'utente a capire quando un posizionamento è valido o non valido.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/PlacementSystem.png" 
              alt="Impostazioni Placement System"
              caption="Configurazione del sistema di posizionamento prefab" 
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
  name: 'SettingsPageIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.image-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.image-group > div {
  flex: 1;
  min-width: 280px;
}

kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  color: #333;
  display: inline-block;
  font-size: .85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .image-group {
    flex-direction: column;
  }
}

.api-documentation {
  width: 100%;
  margin-bottom: 40px;
}

.api-class {
  margin-bottom: 30px;
}

.api-class h3 {
  background-color: #f8f9fa;
  padding: 10px 15px;
  border-left: 4px solid #007bff;
  margin-bottom: 15px;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.api-table th {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.api-table td {
  padding: 8px 10px;
  border: 1px solid #ddd;
  vertical-align: top;
}

.api-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .api-table {
    font-size: 0.8rem;
  }
  
  .api-table th, .api-table td {
    padding: 6px;
  }
}
</style>
