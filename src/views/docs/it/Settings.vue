<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. IMPOSTAZIONI GENERALI</h1>
      <div class="doc-section">
        <h2 class="fs-5">RIFERIMENTO AI COMPONENTI PRINCIPALI</h2>
        
        <div class="content-block vertical">
          <div class="api-documentation">
            <div class="api-class">
              
              <h4 class="mt-1">Proprietà ViewDetails</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Proprietà</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Pulsante di Costruzione</td>
                  </tr>
                  <tr>
                    <td>spriteButton</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato per il pulsante di costruzione.</td>
                  </tr>
                  <tr>
                    <td>unbuildButtonSprite</td>
                    <td>Sprite</td>
                    <td>Sprite da mostrare quando un pezzo può essere smontato.</td>
                  </tr>
                  <tr>
                    <td>cellSizeH</td>
                    <td>float</td>
                    <td>Dimensione orizzontale delle celle nella griglia UI.</td>
                  </tr>
                  <tr>
                    <td>cellSizeY</td>
                    <td>float</td>
                    <td>Dimensione verticale delle celle nella griglia UI.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Costo di Costruzione</td>
                  </tr>
                  <tr>
                    <td>resourceIcon</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato come icona per le risorse.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Posizionamento Prefab</td>
                  </tr>
                  <tr>
                    <td>resourceContainerHeight</td>
                    <td>float</td>
                    <td>Altezza del contenitore delle risorse nell'UI.</td>
                  </tr>
                  <tr>
                    <td>resourceImageWidth</td>
                    <td>float</td>
                    <td>Larghezza dell'immagine delle risorse nell'UI.</td>
                  </tr>
                  <tr>
                    <td>resourceImageHeight</td>
                    <td>float</td>
                    <td>Altezza dell'immagine delle risorse nell'UI.</td>
                  </tr>
                  <tr>
                    <td>resourceImageAnchorMin</td>
                    <td>Vector2</td>
                    <td>Punto di ancoraggio minimo per l'immagine della risorsa.</td>
                  </tr>
                  <tr>
                    <td>resourceImageAnchorMax</td>
                    <td>Vector2</td>
                    <td>Punto di ancoraggio massimo per l'immagine della risorsa.</td>
                  </tr>
                  <tr>
                    <td>resourceImagePivot</td>
                    <td>Vector2</td>
                    <td>Punto pivot per l'immagine della risorsa.</td>
                  </tr>
                  <tr>
                    <td>resourceTextFontSize</td>
                    <td>int</td>
                    <td>Dimensione del font per il testo delle risorse.</td>
                  </tr>
                  <tr>
                    <td>resourceVerticalAlign</td>
                    <td>float</td>
                    <td>Offset di allineamento verticale per il testo delle risorse.</td>
                  </tr>
                  <tr>
                    <td>resourceTextSize</td>
                    <td>Vector2</td>
                    <td>Dimensione del box di testo delle risorse.</td>
                  </tr>
                  <tr>
                    <td>resourceTextColor</td>
                    <td>Color</td>
                    <td>Colore del testo delle risorse.</td>
                  </tr>
                  <tr>
                    <td>resourceTextAlignment</td>
                    <td>TextAnchor</td>
                    <td>Allineamento del testo delle risorse all'interno del suo box.</td>
                  </tr>
                  <tr>
                    <td>resourceTextAutoSizing</td>
                    <td>bool</td>
                    <td>Indica se il testo delle risorse adatta automaticamente la sua dimensione.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Proprietà ConstructionUI</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Proprietà</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Materiali</td>
                  </tr>
                  <tr>
                    <td>skeletonColor</td>
                    <td>Material</td>
                    <td>Il materiale utilizzato per colorare lo scheletro del modello.</td>
                  </tr>
                  <tr>
                    <td>skeletonTransparentColor</td>
                    <td>Material</td>
                    <td>Il materiale utilizzato per rendere trasparente lo scheletro del modello.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Popup di Costruzione</td>
                  </tr>
                  <tr>
                    <td>popupPrefab</td>
                    <td>GameObject</td>
                    <td>Il prefab utilizzato per creare l'interfaccia popup.</td>
                  </tr>
                  <tr>
                    <td>popupButtonSrite</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato per il pulsante di costruzione nel popup.</td>
                  </tr>
                  <tr>
                    <td>popupUnbuildButtonSprite</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato per il pulsante di smontaggio nel popup.</td>
                  </tr>
                  <tr>
                    <td>popupSpritePanel</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato per lo sfondo del pannello popup.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Risorse Popup</td>
                  </tr>
                  <tr>
                    <td>popupSpriteIron</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato per rappresentare le risorse di ferro nel popup.</td>
                  </tr>
                  <tr>
                    <td>popupSpritePlastic</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato per rappresentare le risorse di plastica nel popup.</td>
                  </tr>
                  <tr>
                    <td>popupSpriteRubber</td>
                    <td>Sprite</td>
                    <td>Lo sprite utilizzato per rappresentare le risorse di gomma nel popup.</td>
                  </tr>
                  <tr>
                    <td>resourceIconSize</td>
                    <td>Vector2</td>
                    <td>La dimensione delle icone delle risorse visualizzate nel popup.</td>
                  </tr>
                  <tr>
                    <td>resourceSpacing</td>
                    <td>float</td>
                    <td>La spaziatura tra le icone delle risorse nel popup.</td>
                  </tr>
                  <tr>
                    <td>resourceTextColor</td>
                    <td>Color</td>
                    <td>Il colore del testo delle risorse nel popup.</td>
                  </tr>
                  <tr>
                    <td>resourceTextFontSize</td>
                    <td>int</td>
                    <td>La dimensione del font del testo delle risorse nel popup.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Layout Popup</td>
                  </tr>
                  <tr>
                    <td>popupSize</td>
                    <td>Vector2</td>
                    <td>La dimensione del pannello popup.</td>
                  </tr>
                  <tr>
                    <td>popupOffset</td>
                    <td>Vector2</td>
                    <td>L'offset del pannello popup rispetto al pulsante.</td>
                  </tr>
                  <tr>
                    <td>popupPadding</td>
                    <td>float[]</td>
                    <td>I valori di padding (sinistra, destra, alto, basso) per il pannello popup.</td>
                  </tr>
                  <tr>
                    <td>spacingBetweenElements</td>
                    <td>float</td>
                    <td>La spaziatura tra gli elementi all'interno del pannello popup.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Proprietà FreeCamera</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Proprietà</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Movimento Camera</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Controlla la sensibilità del mouse per la rotazione della camera.</td>
                  </tr>
                  <tr>
                    <td>_movementSpeed</td>
                    <td>float</td>
                    <td>Determina la velocità con cui la camera si muove nella scena.</td>
                  </tr>
                  <tr>
                    <td>_boundaryCollider</td>
                    <td>Collider</td>
                    <td>Definisce i limiti entro i quali la camera può muoversi.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Rotazione Camera</td>
                  </tr>
                  <tr>
                    <td>_rotationX</td>
                    <td>float</td>
                    <td>Tiene traccia della rotazione verticale della camera (pitch).</td>
                  </tr>
                  <tr>
                    <td>_rotationY</td>
                    <td>float</td>
                    <td>Tiene traccia della rotazione orizzontale della camera (yaw).</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Proprietà OrbitCamera</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Proprietà</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Camera</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Controlla la velocità di rotazione della camera attorno al target.</td>
                  </tr>
                  <tr>
                    <td>_zoomSpeed</td>
                    <td>float</td>
                    <td>Determina la velocità con cui la camera effettua lo zoom avanti e indietro.</td>
                  </tr>
                  <tr>
                    <td>_minZoomDistance</td>
                    <td>float</td>
                    <td>La distanza minima a cui la camera può zoomare verso il target.</td>
                  </tr>
                  <tr>
                    <td>_maxZoomDistance</td>
                    <td>float</td>
                    <td>La distanza massima a cui la camera può allontanarsi dal target.</td>
                  </tr>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>L'oggetto target attorno al quale la camera orbita.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Prestazioni</td>
                  </tr>
                  <tr>
                    <td>_usePerformanceMode</td>
                    <td>bool</td>
                    <td>Attiva/disattiva la modalità prestazioni per ottimizzare il comportamento della camera.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Input</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Regola la sensibilità dell'input del mouse per il controllo della camera.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Proprietà PositioningCamera</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Proprietà</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Camera</td>
                  </tr>
                  <tr>
                    <td>_cameraSpeed</td>
                    <td>float</td>
                    <td>Controlla la velocità di movimento della camera durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Determina la velocità di rotazione della camera attorno al target.</td>
                  </tr>
                  <tr>
                    <td>_zoomSpeed</td>
                    <td>float</td>
                    <td>Regola la velocità con cui la camera effettua lo zoom avanti e indietro.</td>
                  </tr>
                  <tr>
                    <td>_minZoomDistance</td>
                    <td>float</td>
                    <td>La distanza minima a cui la camera può zoomare verso il target.</td>
                  </tr>
                  <tr>
                    <td>_maxZoomDistance</td>
                    <td>float</td>
                    <td>La distanza massima a cui la camera può allontanarsi dal target.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Target</td>
                  </tr>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>L'oggetto target su cui la camera si concentra durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_offset</td>
                    <td>Vector3</td>
                    <td>La posizione di offset della camera rispetto al target.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Debug</td>
                  </tr>
                  <tr>
                    <td>_enableDebugLogs</td>
                    <td>bool</td>
                    <td>Abilita o disabilita i log di debug per le azioni di posizionamento della camera.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Sistema di Posizionamento</td>
                  </tr>
                  <tr>
                    <td>_prefabPlacementSystem</td>
                    <td>PrefabPlacementSystem</td>
                    <td>Gestisce il posizionamento dei prefab durante il posizionamento della camera.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Proprietà PlacementSystem</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Proprietà</th>
                    <th>Tipo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Riferimenti</td>
                  </tr>
                  <tr>
                    <td>_mainCamera</td>
                    <td>Camera</td>
                    <td>La camera principale utilizzata per il posizionamento e la visualizzazione. Se non specificata, viene utilizzata Camera.main.</td>
                  </tr>
                  <tr>
                    <td>_placementSurfaces</td>
                    <td>LayerMask</td>
                    <td>I layer su cui è possibile posizionare gli oggetti.</td>
                  </tr>
                  <tr>
                    <td>_constructionUI</td>
                    <td>ConstructionUI</td>
                    <td>Riferimento all'UI di costruzione per l'interazione.</td>
                  </tr>
                  <tr>
                    <td>_viewDetails</td>
                    <td>ViewDetails</td>
                    <td>Riferimento al componente che gestisce i dettagli di visualizzazione.</td>
                  </tr>
                  <tr>
                    <td>_audioSource</td>
                    <td>AudioSource</td>
                    <td>Sorgente audio per effetti sonori durante il piazzamento.</td>
                  </tr>
                  <tr>
                    <td>_positioningCamera</td>
                    <td>PositioningCamera</td>
                    <td>Camera specializzata per il posizionamento degli oggetti.</td>
                  </tr>
                  <tr>
                    <td>_placementUI</td>
                    <td>GameObject</td>
                    <td>Interfaccia utente mostrata durante il piazzamento.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Camera</td>
                  </tr>
                  <tr>
                    <td>_enableCameraFollow</td>
                    <td>bool</td>
                    <td>Se abilitato, la camera seguirà l'oggetto durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_cameraOffset</td>
                    <td>Vector3</td>
                    <td>Offset della camera rispetto all'oggetto durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Controlli di Movimento</td>
                  </tr>
                  <tr>
                    <td>_allowHeightAdjustment</td>
                    <td>bool</td>
                    <td>Consente la regolazione dell'altezza durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_allowFineMovement</td>
                    <td>bool</td>
                    <td>Consente il movimento preciso con WASD durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_raiseObjectKey</td>
                    <td>KeyCode</td>
                    <td>Tasto per alzare l'oggetto durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_lowerObjectKey</td>
                    <td>KeyCode</td>
                    <td>Tasto per abbassare l'oggetto durante il posizionamento.</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Velocità di rotazione dell'oggetto (in gradi al secondo).</td>
                  </tr>
                  <tr>
                    <td>_heightAdjustmentSpeed</td>
                    <td>float</td>
                    <td>Velocità di regolazione dell'altezza dell'oggetto.</td>
                  </tr>
                  <tr>
                    <td>_movmentSpeed</td>
                    <td>float</td>
                    <td>Velocità di movimento laterale dell'oggetto.</td>
                  </tr>
                  <tr>
                    <td>_maxHeightAdjustment</td>
                    <td>float</td>
                    <td>Limite massimo di regolazione dell'altezza verso l'alto e verso il basso.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Feedback Visivo</td>
                  </tr>
                  <tr>
                    <td>_validPlacementMaterial</td>
                    <td>Material</td>
                    <td>Materiale applicato al prefab quando il posizionamento è valido.</td>
                  </tr>
                  <tr>
                    <td>_invalidPlacementMaterial</td>
                    <td>Material</td>
                    <td>Materiale applicato al prefab quando il posizionamento non è valido.</td>
                  </tr>
                  <tr>
                    <td>_previewAlpha</td>
                    <td>float</td>
                    <td>Livello di trasparenza del prefab durante l'anteprima (0-1).</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Audio</td>
                  </tr>
                  <tr>
                    <td>_placementValidSound</td>
                    <td>AudioClip</td>
                    <td>Suono riprodotto quando il posizionamento diventa valido.</td>
                  </tr>
                  <tr>
                    <td>_placementInvalidSound</td>
                    <td>AudioClip</td>
                    <td>Suono riprodotto quando il posizionamento diventa invalido.</td>
                  </tr>
                  <tr>
                    <td>_rotateSound</td>
                    <td>AudioClip</td>
                    <td>Suono riprodotto quando si ruota l'oggetto.</td>
                  </tr>
                  <tr>
                    <td>_confirmPlacementSound</td>
                    <td>AudioClip</td>
                    <td>Suono riprodotto quando si conferma il posizionamento.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Impostazioni Area di Piazzamento</td>
                  </tr>
                  <tr>
                    <td>_usePlacementBoundary</td>
                    <td>bool</td>
                    <td>Se abilitato, limita il piazzamento all'interno di un'area definita.</td>
                  </tr>
                  <tr>
                    <td>_useVisualBoundary</td>
                    <td>bool</td>
                    <td>Se abilitato, visualizza i limiti dell'area di piazzamento nell'editor.</td>
                  </tr>
                  <tr>
                    <td>_boundaryCenter</td>
                    <td>Vector3</td>
                    <td>Centro dell'area di piazzamento.</td>
                  </tr>
                  <tr>
                    <td>_boxSize</td>
                    <td>Vector3</td>
                    <td>Dimensioni del cubo che definisce l'area di piazzamento (larghezza, altezza, profondità).</td>
                  </tr>
                  <tr>
                    <td>_boundaryColor</td>
                    <td>Color</td>
                    <td>Colore dell'area di piazzamento visualizzata nell'editor.</td>
                  </tr>
                  <tr>
                    <td>_useHeightLimit</td>
                    <td>bool</td>
                    <td>Se abilitato, usa limiti di altezza personalizzati anziché quelli del cubo.</td>
                  </tr>
                  <tr>
                    <td>_minHeightLimit</td>
                    <td>float</td>
                    <td>Altezza minima consentita per il piazzamento quando _useHeightLimit è attivo.</td>
                  </tr>
                  <tr>
                    <td>_maxHeightLimit</td>
                    <td>float</td>
                    <td>Altezza massima consentita per il piazzamento quando _useHeightLimit è attivo.</td>
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
              <li>Impostazioni di posizionamento</li>
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
            
            <div class="video-container mt-4">
              <video controls class="demo-video w-100">
                <source src="https://www.dropbox.com/scl/fi/fvedqud4zmlwnfyk6mtvo/Placement-Boundary.mp4?rlkey=emon73phj1znrjt1thql7qm5s&st=q1ewfxxy&dl=1" type="video/mp4">
                Il tuo browser non supporta il tag video HTML5.
              </video>
              <p class="caption">Tutorial: Configurazione dei limiti di posizionamento</p>
            </div>
            
            <div class="mt-4">
              <div class="image-row">
                <div class="image-column">
                  <ImageZoomable 
                    src="/images/PlacementSystemRed.png" 
                    alt="Area di Posizionamento Personalizzata - Red Zone"
                    caption="Visualizzazione dell'area di posizionamento personalizzata" 
                  />
                </div>
                <div class="image-column">
                  <ImageZoomable 
                    src="/images/redZone.png" 
                    alt="Configurazione Red Zone"
                    caption="Configurazione Red Zone" 
                  />
                </div>
              </div>
              <p class="mt-3">
                <strong>Aree di Posizionamento Personalizzate:</strong> Puoi anche definire confini specifici all'interno dell'area di posizionamento modificando le impostazioni della Zona di Esclusione (Exclusion Zone). Questo ti permette di creare regioni designate dove gli oggetti possono o non possono essere posizionati, fornendo un controllo preciso sul layout dell'ambiente e creando limiti specifici all'interno dell'area di posizionamento.
              </p>
            </div>
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

.api-class h4 {
  background: linear-gradient(90deg, #f0f8ff 0%, #ffffff 100%);
  padding: 12px 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-weight: 600;
  color: #0055a4;
  border-left: 5px solid #00A3FF;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
}

.api-class h4::before {
  content: '⚙️';
  margin-right: 8px;
  font-size: 1.1em;
}

.api-table th {
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 12px 10px;
  text-align: left;
  border: 1px solid #ddd;
  font-weight: 600;
  color: #495057;
}

.section-header {
  background: linear-gradient(90deg, #e6f3ff 0%, #f3f8ff 100%);
  font-weight: bold;
  color: #0055a4;
  text-align: left;
  padding: 10px 12px;
  border-top: 1px solid #b8daff;
  border-bottom: 1px solid #b8daff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.doc-section-title {
  background: linear-gradient(90deg, #f5f9ff 0%, #ffffff 100%);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 6px solid #00A3FF;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.api-table {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
}

.api-table tr td:first-child {
  font-weight: 500;
  color: #333;
  border-right: 1px solid #e6e6e6;
}

.api-table tr td:nth-child(2) {
  color: #0055a4;
  font-family: monospace;
  font-size: 0.85em;
  background-color: #f9fbff;
}

.image-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 15px;
}

.image-column {
  flex: 1;
  min-width: 45%;
}

@media (max-width: 768px) {
  .image-row {
    flex-direction: column;
  }
  
  .image-column {
    min-width: 100%;
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .api-table {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 0.75rem;
  }
  
  .api-table th, .api-table td {
    padding: 8px 6px;
  }
  
  .api-table tr td:first-child {
    min-width: 120px;
  }
  
  .api-class h4 {
    font-size: 1.1rem;
    padding: 10px;
  }
  
  .doc-title {
    font-size: 1.8rem;
  }
  
  .section-header {
    font-size: 0.75rem;
  }
  
  .doc-section-title {
    font-size: 1.3rem;
    padding: 12px;
  }
  
  .content-text ul li {
    margin-bottom: 12px;
  }
  
  kbd {
    padding: 4px 6px;
    margin: 0 2px;
  }
  
  .info-box {
    padding: 12px;
    font-size: 0.85rem;
  }
  
  .image-group > div {
    min-width: 100%;
  }
  
  .video-container {
    margin-top: 15px;
  }
  
  .caption {
    font-size: 0.8rem;
  }
}


@media (max-width: 576px) {
  .api-table th, .api-table td {
    padding: 10px 6px;
  }
  
  .info-box h5 {
    font-size: 1rem;
  }
  
  .info-box h6 {
    font-size: 0.9rem;
  }
}
</style>
