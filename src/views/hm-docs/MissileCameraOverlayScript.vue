<template>
  <div class="hm-doc-page">
    <h1 v-if="locale === 'en'" class="hm-doc-title"><span>5.5</span>MISSILECAMERAOVERLAY SCRIPT</h1>
    <h1 v-else class="hm-doc-title"><span>5.5</span>SCRIPT MISSILECAMERAOVERLAY</h1>

    <p v-if="locale === 'en'" class="hm-text-lead">
      The missile-camera HUD overlay — <span class="hm-code">Scripts/UI/MissileCameraOverlay.cs</span>.
      Renders a retro military view on top of the onboard camera feed: shader-based
      post-FX (saturation / contrast / brightness / vignette / tint), scanlines, glitch bands, TV
      noise, signal drop, REC blink, configurable warning + header text and a four-bracket crosshair.
      No <span class="hm-code">RequireComponent</span> — can sit on the missile prefab, or be
      auto-created at runtime by <span class="hm-code">Spawn()</span>.
    </p>
    <p v-else class="hm-text-lead">
      L'overlay HUD della missile camera — <span class="hm-code">Scripts/UI/MissileCameraOverlay.cs</span>.
      Disegna una vista militare retrò sopra il feed della camera onboard: post-FX
      shader-based (saturazione / contrasto / luminosità / vignette / tint), scanlines, glitch bands,
      rumore TV, signal drop, lampeggio REC, testo warning + header configurabili e un mirino a
      quattro angoli. Niente <span class="hm-code">RequireComponent</span> — può stare sul prefab del
      missile o essere auto-creato a runtime da <span class="hm-code">Spawn()</span>.
    </p>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Render pipeline</strong>
        The onboard camera renders into a <span class="hm-code">RenderTexture</span> (HDR, fullscreen size).
        <span class="hm-code">OnGUI</span> blits it through the <span class="hm-code">Hidden/HomingMissile/MissileCamFX</span>
        shader using <span class="hm-code">Graphics.DrawTexture</span>, then draws the IMGUI HUD on top.
        Works identically on URP, HDRP and Built-in.
      </template>
      <template v-else>
        <strong>Pipeline di rendering</strong>
        La camera onboard renderizza in una <span class="hm-code">RenderTexture</span> (HDR, dimensione fullscreen).
        <span class="hm-code">OnGUI</span> la blitta attraverso lo shader <span class="hm-code">Hidden/HomingMissile/MissileCamFX</span>
        usando <span class="hm-code">Graphics.DrawTexture</span>, poi disegna sopra l'HUD IMGUI.
        Funziona allo stesso modo su URP, HDRP e Built-in.
      </template>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Config Override</div>
      <div v-else class="hm-doc-section-title">Override Configurazione</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">config</span></td>
            <td><span class="hm-field-type">MissileCameraOverlayConfig</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Optional ScriptableObject. <span class="hm-code">ApplyConfig()</span> is called from <span class="hm-code">Spawn()</span> before <span class="hm-code">BuildResources()</span> so the asset's values are baked into the scanline texture and shader material. Menu path: <em>Create → Homing Missile → Missile Camera Overlay Config</em>.</td>
            <td v-else>ScriptableObject opzionale. <span class="hm-code">ApplyConfig()</span> viene chiamato da <span class="hm-code">Spawn()</span> prima di <span class="hm-code">BuildResources()</span>, così i valori dell'asset vengono integrati nella texture delle scanlines e nel materiale dello shader. Menu: <em>Create → Homing Missile → Missile Camera Overlay Config</em>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Colors</div>
      <div v-else class="hm-doc-section-title">Colori</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="hm-field-name">hudColor</span></td><td><span class="hm-field-type">Color</span></td><td><span class="hm-field-default">(0.95, 0.95, 0.95, 0.88)</span></td><td v-if="locale === 'en'">Primary HUD color (header, frame, crosshair). White-ish by default.</td><td v-else>Colore HUD primario (header, cornice, mirino). Bianchiccio di default.</td></tr>
          <tr><td><span class="hm-field-name">hudDimColor</span></td><td><span class="hm-field-type">Color</span></td><td><span class="hm-field-default">(0.65, 0.65, 0.65, 0.45)</span></td><td v-if="locale === 'en'">Dim color used for secondary HUD elements (ticks, REC label).</td><td v-else>Colore attenuato per elementi HUD secondari (tick, label REC).</td></tr>
          <tr><td><span class="hm-field-name">warnColor</span></td><td><span class="hm-field-type">Color</span></td><td><span class="hm-field-default">(1, 1, 1, 0.95)</span></td><td v-if="locale === 'en'">Color of the blinking warning text strip.</td><td v-else>Colore del testo di warning lampeggiante.</td></tr>
          <tr><td><span class="hm-field-name">recDotColor</span></td><td><span class="hm-field-type">Color</span></td><td><span class="hm-field-default">(0.85, 0.85, 0.85, 0.95)</span></td><td v-if="locale === 'en'">Color of the REC blink dot in the top-right corner.</td><td v-else>Colore del puntino REC lampeggiante in alto a destra.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Camera FX (shader-based)</div>
      <div v-else class="hm-doc-section-title">Camera FX (shader-based)</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Range</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Range</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="hm-field-name">fxSaturation</span></td><td><span class="hm-field-type">float</span></td><td>0 – 1</td><td><span class="hm-field-default">1</span></td><td v-if="locale === 'en'">0 = pure grayscale (BT.709 luminance), 1 = full color.</td><td v-else>0 = grayscale puro (luminanza BT.709), 1 = colore pieno.</td></tr>
          <tr><td><span class="hm-field-name">fxContrast</span></td><td><span class="hm-field-type">float</span></td><td>0.5 – 3</td><td><span class="hm-field-default">1.0</span></td><td v-if="locale === 'en'">Linear contrast around mid-gray.</td><td v-else>Contrasto lineare attorno al grigio medio.</td></tr>
          <tr><td><span class="hm-field-name">fxBrightness</span></td><td><span class="hm-field-type">float</span></td><td>0.3 – 2.5</td><td><span class="hm-field-default">1.0</span></td><td v-if="locale === 'en'">Multiplicative brightness applied after contrast.</td><td v-else>Luminosità moltiplicativa applicata dopo il contrasto.</td></tr>
          <tr><td><span class="hm-field-name">fxVignetteIntensity</span></td><td><span class="hm-field-type">float</span></td><td>0 – 2</td><td><span class="hm-field-default">0.7</span></td><td v-if="locale === 'en'">Strength of the corner darkening.</td><td v-else>Intensità dell'oscuramento ai bordi.</td></tr>
          <tr><td><span class="hm-field-name">fxVignetteSize</span></td><td><span class="hm-field-type">float</span></td><td>0.1 – 1</td><td><span class="hm-field-default">0.55</span></td><td v-if="locale === 'en'">Radius (UV space) of the unaffected center.</td><td v-else>Raggio (spazio UV) del centro non influenzato.</td></tr>
          <tr><td><span class="hm-field-name">fxVignetteSoftness</span></td><td><span class="hm-field-type">float</span></td><td>0.01 – 1</td><td><span class="hm-field-default">0.4</span></td><td v-if="locale === 'en'">Width of the falloff between bright center and dark edges.</td><td v-else>Larghezza del falloff tra centro luminoso e bordi scuri.</td></tr>
          <tr><td><span class="hm-field-name">fxTint</span></td><td><span class="hm-field-type">Color</span></td><td>—</td><td><span class="hm-field-default">white</span></td><td v-if="locale === 'en'">Multiplicative tint applied last. Push green for night-vision feel, amber for vintage CRT.</td><td v-else>Tint moltiplicativa applicata per ultima. Spingi sul verde per un effetto night-vision, ambra per un CRT vintage.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Scanlines</div>
      <div v-else class="hm-doc-section-title">Scanlines</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Range</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Range</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="hm-field-name">scanlineDarkAlpha</span></td><td><span class="hm-field-type">float</span></td><td>0 – 1</td><td><span class="hm-field-default">0.22</span></td><td v-if="locale === 'en'">Alpha of the dark band.</td><td v-else>Alpha della banda scura.</td></tr>
          <tr><td><span class="hm-field-name">scanlineLightAlpha</span></td><td><span class="hm-field-type">float</span></td><td>0 – 1</td><td><span class="hm-field-default">0.04</span></td><td v-if="locale === 'en'">Alpha of the bright highlight pixel inside each period.</td><td v-else>Alpha del pixel highlight chiaro dentro ogni periodo.</td></tr>
          <tr><td><span class="hm-field-name">scanlinePeriod</span></td><td><span class="hm-field-type">int</span></td><td>2 – 16</td><td><span class="hm-field-default">3</span></td><td v-if="locale === 'en'">Pixel height of one full repeat (dark + light + gap). Higher = more space between lines.</td><td v-else>Altezza in pixel di una ripetizione completa (dark + light + gap). Più alto = più spazio tra le righe.</td></tr>
          <tr><td><span class="hm-field-name">scanlineThickness</span></td><td><span class="hm-field-type">int</span></td><td>1 – 8</td><td><span class="hm-field-default">1</span></td><td v-if="locale === 'en'">Pixel thickness of the dark band inside the period. Clamped to <span class="hm-code">[1, period-1]</span> so there is always at least one gap pixel.</td><td v-else>Spessore in pixel della banda scura dentro il periodo. Clampato a <span class="hm-code">[1, period-1]</span> così c'è sempre almeno un pixel di gap.</td></tr>
        </tbody>
      </table>
      <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
        <strong>Looks like…</strong>
        period 3 / thickness 1 = classic CRT (default); period 5 / thickness 2 = 70s TV;
        period 8 / thickness 1 = sparse modern monitor; period 4 / thickness 3 = degraded VHS.
      </div>
      <div class="hm-alert hm-alert-info" v-else>
        <strong>Aspetto…</strong>
        period 3 / thickness 1 = CRT classico (default); period 5 / thickness 2 = TV anni 70;
        period 8 / thickness 1 = monitor moderno rado; period 4 / thickness 3 = VHS degradato.
      </div>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Glitch Bands</div>
      <div v-else class="hm-doc-section-title">Glitch Bands</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="hm-field-name">glitchIntervalMin / Max</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">1.0 / 3.5</span></td><td v-if="locale === 'en'">Random seconds between candidate glitch events.</td><td v-else>Secondi casuali tra eventi candidati di glitch.</td></tr>
          <tr><td><span class="hm-field-name">glitchDurationMin / Max</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.04 / 0.18</span></td><td v-if="locale === 'en'">Random visible duration of each glitch band.</td><td v-else>Durata visibile casuale di ogni banda glitch.</td></tr>
          <tr><td><span class="hm-field-name">glitchHeightMin / Max</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">8 / 60</span></td><td v-if="locale === 'en'">Random band height in pixels.</td><td v-else>Altezza casuale della banda in pixel.</td></tr>
          <tr><td><span class="hm-field-name">glitchProbability</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.55</span></td><td v-if="locale === 'en'">Probability that a scheduled event actually fires (0 – 1).</td><td v-else>Probabilità che un evento schedulato si verifichi davvero (0 – 1).</td></tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">TV Noise &amp; Signal</div>
      <div v-else class="hm-doc-section-title">Rumore TV e Segnale</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="hm-field-name">noiseBrightCount</span></td><td><span class="hm-field-type">int</span></td><td><span class="hm-field-default">32</span></td><td v-if="locale === 'en'">Number of bright "snow" pixels per frame.</td><td v-else>Numero di pixel "neve" chiari per frame.</td></tr>
          <tr><td><span class="hm-field-name">noiseDarkCount</span></td><td><span class="hm-field-type">int</span></td><td><span class="hm-field-default">18</span></td><td v-if="locale === 'en'">Number of dark noise pixels per frame.</td><td v-else>Numero di pixel di rumore scuri per frame.</td></tr>
          <tr><td><span class="hm-field-name">noiseBrightAlpha</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.18</span></td><td v-if="locale === 'en'">Alpha of the bright noise pixels.</td><td v-else>Alpha dei pixel di rumore chiari.</td></tr>
          <tr><td><span class="hm-field-name">noiseDarkAlpha</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.15</span></td><td v-if="locale === 'en'">Alpha of the dark noise pixels.</td><td v-else>Alpha dei pixel di rumore scuri.</td></tr>
          <tr><td><span class="hm-field-name">signalDropChance</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.08</span></td><td v-if="locale === 'en'">Per-second probability of a brief signal-quality dip.</td><td v-else>Probabilità al secondo di un breve calo di qualità del segnale.</td></tr>
          <tr><td><span class="hm-field-name">signalDropMin / Max</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.25 / 0.75</span></td><td v-if="locale === 'en'">Range of the signal quality value during a dip (0 = lost, 1 = perfect).</td><td v-else>Range del valore di qualità del segnale durante un calo (0 = perso, 1 = perfetto).</td></tr>
          <tr><td><span class="hm-field-name">signalLerpSpeed</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">4</span></td><td v-if="locale === 'en'">Recovery speed of the signal value back to 1.</td><td v-else>Velocità di recupero del valore segnale verso 1.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">REC, Warning &amp; Header</div>
      <div v-else class="hm-doc-section-title">REC, Warning e Header</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="hm-field-name">recBlinkInterval</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.5</span></td><td v-if="locale === 'en'">Half-period of the REC dot blink in seconds.</td><td v-else>Semi-periodo del lampeggio del puntino REC in secondi.</td></tr>
          <tr><td><span class="hm-field-name">warningText</span></td><td><span class="hm-field-type">string</span></td><td><span class="hm-field-default">[!] MANUAL GUIDANCE - NO TARGET LOCK</span></td><td v-if="locale === 'en'">Bottom-centered blinking warning text.</td><td v-else>Testo di warning lampeggiante in basso al centro.</td></tr>
          <tr><td><span class="hm-field-name">warningBlinkPeriod</span></td><td><span class="hm-field-type">float</span></td><td><span class="hm-field-default">0.7</span></td><td v-if="locale === 'en'">Blink period of the warning text in seconds.</td><td v-else>Periodo di lampeggio del testo di warning in secondi.</td></tr>
          <tr><td><span class="hm-field-name">headerText</span></td><td><span class="hm-field-type">string</span></td><td><span class="hm-field-default">[ MSL-CAM ] CH-04 NSL-9</span></td><td v-if="locale === 'en'">Top-left status header. Customize for your own unit/channel naming.</td><td v-else>Header di stato in alto a sinistra. Personalizzalo con nome unità/canale.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Font &amp; Crosshair</div>
      <div v-else class="hm-doc-section-title">Font e Mirino</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Range</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Range</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="hm-field-name">textScale</span></td><td><span class="hm-field-type">float</span></td><td>0.5 – 4</td><td><span class="hm-field-default">1</span></td><td v-if="locale === 'en'">Global multiplier on HUD text sizes.</td><td v-else>Moltiplicatore globale sulle dimensioni del testo HUD.</td></tr>
          <tr><td><span class="hm-field-name">crosshairScale</span></td><td><span class="hm-field-type">float</span></td><td>0.2 – 5</td><td><span class="hm-field-default">1</span></td><td v-if="locale === 'en'">Crosshair bracket size multiplier.</td><td v-else>Moltiplicatore dimensione del mirino.</td></tr>
          <tr><td><span class="hm-field-name">crosshairThickness</span></td><td><span class="hm-field-type">float</span></td><td>0.5 – 6</td><td><span class="hm-field-default">1.5</span></td><td v-if="locale === 'en'">Crosshair line thickness in pixels.</td><td v-else>Spessore in pixel delle linee del mirino.</td></tr>
          <tr><td><span class="hm-field-name">crosshairShowTicks</span></td><td><span class="hm-field-type">bool</span></td><td>—</td><td><span class="hm-field-default">true</span></td><td v-if="locale === 'en'">Show the small tick marks around the center.</td><td v-else>Mostra i piccoli tick attorno al centro.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Public API</div>
      <div v-else class="hm-doc-section-title">API Pubblica</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Member</th><th>Signature</th><th>Description</th></tr>
          <tr v-else><th>Membro</th><th>Firma</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">Spawn()</span></td>
            <td><span class="hm-code">static MissileCameraOverlay Spawn(HomingMissile missile, Transform launcherOrigin)</span></td>
            <td v-if="locale === 'en'">Called by <span class="hm-code">PlayerController</span> on launch. Reuses any existing overlay child on the missile, otherwise creates one; resolves the onboard camera via <span class="hm-code">PlayerGuidedMissile.OnboardCamera</span>, calls <span class="hm-code">ApplyConfig()</span>, <span class="hm-code">BuildResources()</span> and <span class="hm-code">SetupShaderFX()</span>, then enables itself.</td>
            <td v-else>Chiamato da <span class="hm-code">PlayerController</span> al lancio. Riusa un eventuale overlay già figlio del missile, altrimenti lo crea; risolve la camera onboard via <span class="hm-code">PlayerGuidedMissile.OnboardCamera</span>, chiama <span class="hm-code">ApplyConfig()</span>, <span class="hm-code">BuildResources()</span> e <span class="hm-code">SetupShaderFX()</span>, poi si attiva.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Cleanup</strong>
        <span class="hm-code">OnDestroy()</span> clears the missile camera's <span class="hm-code">targetTexture</span>
        and releases the <span class="hm-code">RenderTexture</span>, <span class="hm-code">fxMaterial</span> and
        scanline <span class="hm-code">Texture2D</span>. Because the overlay lives on the missile GameObject,
        detonation destroys it automatically — no manual teardown required.
      </template>
      <template v-else>
        <strong>Cleanup</strong>
        <span class="hm-code">OnDestroy()</span> azzera il <span class="hm-code">targetTexture</span> della
        missile camera e rilascia <span class="hm-code">RenderTexture</span>,
        <span class="hm-code">fxMaterial</span> e la <span class="hm-code">Texture2D</span> delle scanlines.
        Dato che l'overlay vive sul GameObject del missile, la detonazione lo distrugge automaticamente —
        nessuna pulizia manuale necessaria.
      </template>
    </div>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        See <router-link :to="localePath('/homing-missile/docs/manual-guidance')">Manual Guidance System</router-link>
        for the full pipeline, and <router-link :to="localePath('/homing-missile/docs/player-guided-missile')">PlayerGuidedMissile Script</router-link>
        for the steering side.
      </template>
      <template v-else>
        Vedi <router-link :to="localePath('/homing-missile/docs/manual-guidance')">Sistema di Guida Manuale</router-link>
        per la pipeline completa, e <router-link :to="localePath('/homing-missile/docs/player-guided-missile')">Script PlayerGuidedMissile</router-link>
        per il lato steering.
      </template>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'

export default {
  name: 'HMMissileCameraOverlayScript',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { locale, localePath }
  }
}
</script>
