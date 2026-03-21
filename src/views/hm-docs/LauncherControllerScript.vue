<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>5.3</span>LAUNCHER CONTROLLER SCRIPT</h1>

    <!-- Lead paragraph -->
    <p class="hm-text-lead" v-if="locale === 'en'">
      <span class="hm-code">Scripts/Core/LauncherController.cs</span> — Controls the physical rotation
      of the turret (Y-axis) and elevation of the cannon (X-axis). Input is delivered each frame by
      <span class="hm-code">PlayerController</span> via the <span class="hm-code">SetLookInput()</span>
      method. Rotation is smoothed using exponential interpolation so the turret never snaps.
    </p>
    <p class="hm-text-lead" v-else>
      <span class="hm-code">Scripts/Core/LauncherController.cs</span> — Controlla la rotazione fisica
      della torretta (asse Y) e l'elevazione del cannone (asse X). L'input viene fornito ogni frame da
      <span class="hm-code">PlayerController</span> tramite il metodo <span class="hm-code">SetLookInput()</span>.
      La rotazione è smussata usando un'interpolazione esponenziale così la torretta non scatta mai.
    </p>

    <!-- Expected Scene Hierarchy -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Expected Scene Hierarchy</div>
      <div class="hm-doc-section-title" v-else>Gerarchia di Scena Prevista</div>
      <div class="hm-code-block" v-if="locale === 'en'">
<pre>LauncherStation        ← "Rocket" tag, LauncherController here
└── Turret             ← rotates on Y axis
    └── Cannon         ← rotates on X axis (elevation)
        ├── FirePoint  ← missile spawn position
        ├── CameraLookTarget   ← "CameraLookRocket" tag
        └── CameraPosition     ← "CameraTransformRocket" tag</pre>
      </div>
      <div class="hm-code-block" v-else>
<pre>LauncherStation        ← tag "Rocket", LauncherController qui
└── Turret             ← ruota sull'asse Y
    └── Cannon         ← ruota sull'asse X (elevazione)
        ├── FirePoint  ← posizione di spawn del missile
        ├── CameraLookTarget   ← tag "CameraLookRocket"
        └── CameraPosition     ← tag "CameraTransformRocket"</pre>
      </div>
    </div>

    <!-- Config Override -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Config Override</div>
      <div class="hm-doc-section-title" v-else>Override Configurazione</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">config</span></td>
            <td><span class="hm-field-type">LauncherControllerConfig</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Optional ScriptableObject config. When assigned, overrides all Inspector fields below. See <router-link :to="localePath('/homing-missile/docs/scriptableobject-config')">ScriptableObject Configuration</router-link>.</td>
            <td v-else>ScriptableObject config opzionale. Quando assegnato, sovrascrive tutti i campi Inspector sottostanti. Vedi <router-link :to="localePath('/homing-missile/docs/scriptableobject-config')">Configurazione ScriptableObject</router-link>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Inspector Fields -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Inspector Fields</div>
      <div class="hm-doc-section-title" v-else>Campi Inspector</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <!-- turret -->
          <tr>
            <td><span class="hm-field-name">turret</span></td>
            <td><span class="hm-field-type">Transform</span></td>
            <td><span class="hm-field-default">—</span></td>
            <td v-if="locale === 'en'">The turret Transform. Rotated around its local Y axis.</td>
            <td v-else>Il Transform della torretta. Ruotato attorno al suo asse Y locale.</td>
          </tr>
          <!-- cannon -->
          <tr>
            <td><span class="hm-field-name">cannon</span></td>
            <td><span class="hm-field-type">Transform</span></td>
            <td><span class="hm-field-default">—</span></td>
            <td v-if="locale === 'en'">The cannon Transform. Rotated around its local X axis for elevation.</td>
            <td v-else>Il Transform del cannone. Ruotato attorno al suo asse X locale per l'elevazione.</td>
          </tr>
          <!-- rotationSpeed -->
          <tr>
            <td><span class="hm-field-name">rotationSpeed</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">180.0</span></td>
            <td v-if="locale === 'en'">Degrees per second for turret azimuth rotation.</td>
            <td v-else>Gradi al secondo per la rotazione azimutale della torretta.</td>
          </tr>
          <!-- elevationSpeed -->
          <tr>
            <td><span class="hm-field-name">elevationSpeed</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">90.0</span></td>
            <td v-if="locale === 'en'">Degrees per second for cannon elevation.</td>
            <td v-else>Gradi al secondo per l'elevazione del cannone.</td>
          </tr>
          <!-- maxElevation -->
          <tr>
            <td><span class="hm-field-name">maxElevation</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">45.0</span></td>
            <td v-if="locale === 'en'">Maximum upward elevation angle in degrees.</td>
            <td v-else>Angolo di elevazione massimo verso l'alto in gradi.</td>
          </tr>
          <!-- minElevation -->
          <tr>
            <td><span class="hm-field-name">minElevation</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">-10.0</span></td>
            <td v-if="locale === 'en'">Minimum (downward) elevation angle in degrees. Negative values allow the cannon to depress below the horizon.</td>
            <td v-else>Angolo di elevazione minimo (verso il basso) in gradi. Valori negativi permettono al cannone di abbassarsi sotto l'orizzonte.</td>
          </tr>
          <!-- airMode -->
          <tr>
            <td><span class="hm-field-name">airMode</span></td>
            <td><span class="hm-field-type">bool</span></td>
            <td><span class="hm-field-default">false</span></td>
            <td v-if="locale === 'en'">When enabled, inverts the elevation controls for upside-down mounting (e.g. under an aircraft). Used by the Air Demo scene.</td>
            <td v-else>Quando abilitato, inverte i controlli di elevazione per il montaggio capovolto (es. sotto un aereo). Usato nella scena Air Demo.</td>
          </tr>
          <!-- smoothSpeed -->
          <tr>
            <td><span class="hm-field-name">smoothSpeed</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">10.0</span></td>
            <td v-if="locale === 'en'">Exponential smoothing factor for both rotation axes. Higher values = snappier response; lower values = smoother, more cinematic movement.</td>
            <td v-else>Fattore di smussamento esponenziale per entrambi gli assi di rotazione. Valori più alti = risposta più reattiva; valori più bassi = movimento più fluido e cinematografico.</td>
          </tr>
          <!-- startElevation -->
          <tr>
            <td><span class="hm-field-name">startElevation</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">90.0</span></td>
            <td v-if="locale === 'en'">Initial elevation angle on scene start.</td>
            <td v-else>Angolo di elevazione iniziale all'avvio della scena.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Public Properties -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Public Properties</div>
      <div class="hm-doc-section-title" v-else>Proprietà Pubbliche</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Property</th><th>Type</th><th>Description</th></tr>
          <tr v-else><th>Proprietà</th><th>Tipo</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">TurretTransform</span></td>
            <td><span class="hm-field-type">Transform</span></td>
            <td v-if="locale === 'en'">Read-only reference to the turret Transform. Used by the HUD to compute the azimuth heading for the azimuth bar.</td>
            <td v-else>Riferimento in sola lettura al Transform della torretta. Usato dall'HUD per calcolare la direzione azimutale per la barra azimutale.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">CurrentElevation</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td v-if="locale === 'en'">Current elevation angle in degrees. Displayed in the HUD top-bar as the elevation readout.</td>
            <td v-else>Angolo di elevazione corrente in gradi. Visualizzato nella barra superiore dell'HUD come indicatore di elevazione.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Elevation Internals -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Elevation Internals</div>
      <div class="hm-doc-section-title" v-else>Funzionamento Interno dell'Elevazione</div>
      <div class="hm-content-block" v-if="locale === 'en'">
        <p>Internally the elevation value is <strong>stored as negative</strong>. The update formula subtracts mouse input instead of adding it:</p>
        <div class="hm-code-block"><pre>targetElevation -= mouseY * elevationSpeed * Time.deltaTime * invert;</pre></div>
        <p>The clamp mirrors this by negating the Inspector limits:</p>
        <div class="hm-code-block"><pre>targetElevation = Mathf.Clamp(targetElevation, -maxElevation, -minElevation);</pre></div>
        <p>This means <span class="hm-code">CurrentElevation</span> is negative when the cannon aims upward and closer to zero when it aims at the horizon. The HUD negates the value before display so the player always sees a positive readout when aiming up.</p>
      </div>
      <div class="hm-content-block" v-else>
        <p>Internamente il valore di elevazione è <strong>memorizzato come negativo</strong>. La formula di aggiornamento sottrae l'input del mouse invece di aggiungerlo:</p>
        <div class="hm-code-block"><pre>targetElevation -= mouseY * elevationSpeed * Time.deltaTime * invert;</pre></div>
        <p>Il clamp rispecchia questo negando i limiti impostati nell'Inspector:</p>
        <div class="hm-code-block"><pre>targetElevation = Mathf.Clamp(targetElevation, -maxElevation, -minElevation);</pre></div>
        <p>Questo significa che <span class="hm-code">CurrentElevation</span> è negativo quando il cannone punta verso l'alto e più vicino a zero quando punta all'orizzonte. L'HUD nega il valore prima della visualizzazione, così il giocatore vede sempre un valore positivo quando mira verso l'alto.</p>
      </div>
    </div>

    <!-- Separation of Concerns alert -->
    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Separation of Concerns</strong>
      <span class="hm-code">LauncherController</span> handles only physical rotation.
      Lock-on logic, ammo tracking, and firing are all handled by <span class="hm-code">MissileLauncher</span>.
      This separation makes it easy to replace or extend either system independently.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Separazione delle Responsabilità</strong>
      <span class="hm-code">LauncherController</span> gestisce solo la rotazione fisica.
      La logica di aggancio, il tracciamento delle munizioni e lo sparo sono tutti gestiti da <span class="hm-code">MissileLauncher</span>.
      Questa separazione rende facile sostituire o estendere ciascun sistema in modo indipendente.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'

export default {
  name: 'HMLauncherControllerScript',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { locale, localePath }
  }
}
</script>
