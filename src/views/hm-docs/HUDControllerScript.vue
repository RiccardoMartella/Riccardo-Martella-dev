<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>5.5</span>HUD CONTROLLER SCRIPT</h1>

    <!-- Lead paragraph -->
    <p v-if="locale === 'en'" class="hm-text-lead">
      <span class="hm-code">Scripts/UI/LauncherHUDController.cs</span> — Drives the military-style HUD
      built with Unity UI Toolkit. The controller subscribes to all
      <span class="hm-code">MissileLauncher</span> events on <span class="hm-code">Awake()</span> and
      reads <span class="hm-code">LauncherController</span> state every frame to keep the azimuth bar
      and elevation readout current.
    </p>
    <p v-else class="hm-text-lead">
      <span class="hm-code">Scripts/UI/LauncherHUDController.cs</span> — Gestisce l'HUD in stile militare
      costruito con Unity UI Toolkit. Il controller si iscrive a tutti gli eventi di
      <span class="hm-code">MissileLauncher</span> in <span class="hm-code">Awake()</span> e
      legge lo stato di <span class="hm-code">LauncherController</span> ad ogni frame per mantenere aggiornati
      la barra azimutale e la lettura dell'elevazione.
    </p>

    <!-- HUD Elements Section -->
    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">HUD Elements</div>
      <div v-else class="hm-doc-section-title">Elementi HUD</div>
      <div class="hm-content-block">
        <table class="hm-field-table" style="margin: 0;">
          <thead>
            <tr v-if="locale === 'en'"><th>Element</th><th>Description</th></tr>
            <tr v-else><th>Elemento</th><th>Descrizione</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Azimuth Bar</span><span v-else class="hm-field-name">Barra Azimutale</span></td>
              <td v-if="locale === 'en'">Horizontal strip at the top showing a sliding compass readout. The tick mark moves as the turret rotates, giving the player the current azimuth heading in degrees.</td>
              <td v-else>Striscia orizzontale in alto che mostra una lettura a bussola scorrevole. Il segno di riferimento si sposta con la rotazione della torretta, fornendo al giocatore la direzione azimutale corrente in gradi.</td>
            </tr>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Corner Brackets</span><span v-else class="hm-field-name">Bracket Angolari</span></td>
              <td v-if="locale === 'en'">Four L-shaped brackets that animate during lock-on. They start at <span class="hm-code">lockBracketStartSize</span>, shrink toward <span class="hm-code">lockBracketLockedSize</span> as LockProgress increases, and begin rotating at <span class="hm-code">lockBracketRotation</span> deg/s once fully locked.</td>
              <td v-else>Quattro bracket a forma di L che si animano durante l'aggancio. Partono da <span class="hm-code">lockBracketStartSize</span>, si restringono verso <span class="hm-code">lockBracketLockedSize</span> con l'aumento di LockProgress, e iniziano a ruotare a <span class="hm-code">lockBracketRotation</span> gradi/s una volta completamente agganciati.</td>
            </tr>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Top Info Bar</span><span v-else class="hm-field-name">Barra Info Superiore</span></td>
              <td v-if="locale === 'en'">Shows azimuth (AZ), elevation (EL), range to current target (RNG), and lock status label (SEARCHING / LOCKING / LOCKED).</td>
              <td v-else>Mostra azimut (AZ), elevazione (EL), distanza dal bersaglio corrente (RNG) e etichetta dello stato di aggancio (SEARCHING / LOCKING / LOCKED).</td>
            </tr>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Crosshair</span><span v-else class="hm-field-name">Mirino</span></td>
              <td v-if="locale === 'en'">Central reticle that changes colour based on state: default cyan when searching, brighter cyan while locking, green on full lock.</td>
              <td v-else>Reticolo centrale che cambia colore in base allo stato: ciano predefinito durante la ricerca, ciano più luminoso durante l'aggancio, verde ad aggancio completo.</td>
            </tr>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Bottom Strip — Left Panel</span><span v-else class="hm-field-name">Striscia Inferiore — Pannello Sinistro</span></td>
              <td v-if="locale === 'en'">Ammo slot display. Each slot represents one missile from <span class="hm-code">rocketList</span>. Slots light up on fire with a brief flash of <span class="hm-code">slotFiredFlashDurationMs</span> ms, then dim to expended state.</td>
              <td v-else>Visualizzazione degli slot munizioni. Ogni slot rappresenta un missile da <span class="hm-code">rocketList</span>. Gli slot si illuminano al lancio con un breve flash di <span class="hm-code">slotFiredFlashDurationMs</span> ms, poi si attenuano allo stato esaurito.</td>
            </tr>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Bottom Strip — Centre Panel</span><span v-else class="hm-field-name">Striscia Inferiore — Pannello Centrale</span></td>
              <td v-if="locale === 'en'">Total remaining ammo count (numeric) and ammo colour warning: cyan = normal, orange = low ammo (&le; <span class="hm-code">lowAmmoWarningThreshold</span>), red = no ammo.</td>
              <td v-else>Conteggio numerico delle munizioni rimanenti totali e avviso colore munizioni: ciano = normale, arancione = munizioni scarse (&le; <span class="hm-code">lowAmmoWarningThreshold</span>), rosso = nessuna munizione.</td>
            </tr>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Bottom Strip — Right Panel</span><span v-else class="hm-field-name">Striscia Inferiore — Pannello Destro</span></td>
              <td v-if="locale === 'en'">Fire-rate cooldown bar and "READY" / "RELOAD" status label.</td>
              <td v-else>Barra di cooldown della cadenza di fuoco e etichetta di stato "READY" / "RELOAD".</td>
            </tr>
            <tr>
              <td><span v-if="locale === 'en'" class="hm-field-name">Lock-On Overlay</span><span v-else class="hm-field-name">Overlay di Aggancio</span></td>
              <td v-if="locale === 'en'">World-space bracket projected onto the screen over the locked target using <span class="hm-code">RuntimePanelUtils.ScreenToPanel()</span>. Blinks at <span class="hm-code">lockBlinkIntervalMs</span> when locking; steady when fully locked.</td>
              <td v-else>Bracket nello spazio mondo proiettato sullo schermo sopra il bersaglio agganciato usando <span class="hm-code">RuntimePanelUtils.ScreenToPanel()</span>. Lampeggia a <span class="hm-code">lockBlinkIntervalMs</span> durante l'aggancio; fisso quando completamente agganciato.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Inspector Fields Section -->
    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Inspector Fields</div>
      <div v-else class="hm-doc-section-title">Campi Inspector</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Default</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">lockBlinkIntervalMs</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td><span class="hm-field-default">150</span></td>
            <td v-if="locale === 'en'">Blink interval for the lock-on overlay in milliseconds while locking is in progress.</td>
            <td v-else>Intervallo di lampeggio per l'overlay di aggancio in millisecondi durante la fase di aggancio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lockBracketStartSize</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">140.0</span></td>
            <td v-if="locale === 'en'">Initial size (px) of the four corner brackets when a target first enters the lock-on cone.</td>
            <td v-else>Dimensione iniziale (px) dei quattro bracket angolari quando un bersaglio entra per la prima volta nel cono di aggancio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lockBracketLockedSize</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">60.0</span></td>
            <td v-if="locale === 'en'">Final size (px) of the brackets when LockProgress = 1.</td>
            <td v-else>Dimensione finale (px) dei bracket quando LockProgress = 1.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lockBracketRotation</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">45.0</span></td>
            <td v-if="locale === 'en'">Rotation speed (degrees/second) of the locked brackets.</td>
            <td v-else>Velocità di rotazione (gradi/secondo) dei bracket agganciati.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lowAmmoWarningThreshold</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td><span class="hm-field-default">3</span></td>
            <td v-if="locale === 'en'">Number of missiles remaining at which the ammo readout turns orange.</td>
            <td v-else>Numero di missili rimanenti al quale la lettura delle munizioni diventa arancione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">maxDisplaySlots</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td><span class="hm-field-default">20</span></td>
            <td v-if="locale === 'en'">Maximum number of ammo slots shown in the bottom strip. If rocketList has more missiles, slots are batched.</td>
            <td v-else>Numero massimo di slot munizioni mostrati nella striscia inferiore. Se rocketList ha più missili, gli slot vengono raggruppati.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">slotFiredFlashDurationMs</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td><span class="hm-field-default">80</span></td>
            <td v-if="locale === 'en'">Duration in ms of the bright flash on the fired slot before it dims to expended.</td>
            <td v-else>Durata in ms del flash luminoso sullo slot lanciato prima che si attenui allo stato esaurito.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">hudScale</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td v-if="locale === 'en'">Global scale multiplier for the entire HUD. Adjust to taste for different screen sizes.</td>
            <td v-else>Moltiplicatore di scala globale per l'intero HUD. Regola a piacere per diverse dimensioni dello schermo.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">referenceResolution</span></td>
            <td><span class="hm-field-type">Vector2</span></td>
            <td><span class="hm-field-default">(1920, 1080)</span></td>
            <td v-if="locale === 'en'">The resolution at which the UXML layout was designed. The HUD scales proportionally from this baseline.</td>
            <td v-else>La risoluzione per la quale il layout UXML è stato progettato. L'HUD scala proporzionalmente da questa base.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">bottomOffset</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">24.0</span></td>
            <td v-if="locale === 'en'">Distance from the screen bottom edge to the bottom strip.</td>
            <td v-else>Distanza dal bordo inferiore dello schermo alla striscia inferiore.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">sideOffset</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">24.0</span></td>
            <td v-if="locale === 'en'">Distance from the screen side edges to the outer HUD elements.</td>
            <td v-else>Distanza dai bordi laterali dello schermo agli elementi HUD esterni.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">panelCenterOffset</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.0</span></td>
            <td v-if="locale === 'en'">Horizontal offset to shift bottom panels towards the centre (px).</td>
            <td v-else>Offset orizzontale per spostare i pannelli inferiori verso il centro (px).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">panelPadding</span></td>
            <td><span class="hm-field-type">Vector4</span></td>
            <td><span class="hm-field-default">(7, 12, 9, 10)</span></td>
            <td v-if="locale === 'en'">Internal padding within each bottom panel (top, right, bottom, left).</td>
            <td v-else>Padding interno di ciascun pannello inferiore (alto, destra, basso, sinistra).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">azimuthTopOffset</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">8.0</span></td>
            <td v-if="locale === 'en'">Distance from the screen top edge to the azimuth bar.</td>
            <td v-else>Distanza dal bordo superiore dello schermo alla barra azimutale.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Elevation Display Internals -->
    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Elevation Display Internals</div>
      <div v-else class="hm-doc-section-title">Funzionamento Interno della Visualizzazione Elevazione</div>
      <div class="hm-content-block" v-if="locale === 'en'">
        <p>Because <span class="hm-code">LauncherController</span> stores elevation as a <strong>negative value</strong> internally, the HUD applies three compensations:</p>
        <ul>
          <li><strong>Elevation readout</strong> — the value is negated before display so the player sees a positive number when aiming up:<br/>
            <span class="hm-code">float e = -launcherCtrl.CurrentElevation;</span></li>
          <li><strong>Elevation indicator position</strong> — the normalised value is used directly (not inverted) for the indicator's vertical offset:<br/>
            <span class="hm-code">elevIndicator.style.top = norm * (trackH - 2f);</span></li>
          <li><strong>Elevation bar normalisation</strong> — <span class="hm-code">InverseLerp</span> maps the inverted range so the bar fills correctly:<br/>
            <span class="hm-code">float norm = Mathf.InverseLerp(-launcherCtrl.maxElevation, -launcherCtrl.minElevation, launcherCtrl.CurrentElevation);</span></li>
        </ul>
      </div>
      <div class="hm-content-block" v-else>
        <p>Poiché <span class="hm-code">LauncherController</span> memorizza l'elevazione come <strong>valore negativo</strong> internamente, l'HUD applica tre compensazioni:</p>
        <ul>
          <li><strong>Lettura elevazione</strong> — il valore viene negato prima della visualizzazione, così il giocatore vede un numero positivo quando mira verso l'alto:<br/>
            <span class="hm-code">float e = -launcherCtrl.CurrentElevation;</span></li>
          <li><strong>Posizione indicatore elevazione</strong> — il valore normalizzato viene usato direttamente (non invertito) per l'offset verticale dell'indicatore:<br/>
            <span class="hm-code">elevIndicator.style.top = norm * (trackH - 2f);</span></li>
          <li><strong>Normalizzazione barra elevazione</strong> — <span class="hm-code">InverseLerp</span> mappa il range invertito perché la barra si riempia correttamente:<br/>
            <span class="hm-code">float norm = Mathf.InverseLerp(-launcherCtrl.maxElevation, -launcherCtrl.minElevation, launcherCtrl.CurrentElevation);</span></li>
        </ul>
      </div>
    </div>

    <!-- How References Are Obtained -->
    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>How the HUD Gets Its References</strong>
      The HUD does <em>not</em> use serialized fields for <span class="hm-code">MissileLauncher</span> or
      <span class="hm-code">LauncherController</span>. Instead, <span class="hm-code">PlayerController</span>
      calls <span class="hm-code">Show(MissileLauncher, LauncherController)</span> when entering launcher mode.
      The HUD subscribes to all launcher events (OnFire, OnLockProgressChanged, OnTargetLocked, OnTargetLost)
      inside <span class="hm-code">Show()</span> and unsubscribes in <span class="hm-code">Hide()</span>.
      A <span class="hm-code">UIDocument</span> component must be present on the same GameObject — it is obtained
      via <span class="hm-code">GetComponent&lt;UIDocument&gt;()</span>.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Come l'HUD Ottiene i Riferimenti</strong>
      L'HUD <em>non</em> usa campi serializzati per <span class="hm-code">MissileLauncher</span> o
      <span class="hm-code">LauncherController</span>. Invece, <span class="hm-code">PlayerController</span>
      chiama <span class="hm-code">Show(MissileLauncher, LauncherController)</span> quando entra in modalità lanciatore.
      L'HUD si sottoscrive a tutti gli eventi del lanciatore (OnFire, OnLockProgressChanged, OnTargetLocked, OnTargetLost)
      dentro <span class="hm-code">Show()</span> e si cancella in <span class="hm-code">Hide()</span>.
      Un componente <span class="hm-code">UIDocument</span> deve essere presente sullo stesso GameObject — viene ottenuto
      tramite <span class="hm-code">GetComponent&lt;UIDocument&gt;()</span>.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMHUDControllerScript',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
