<template>
  <div class="hm-doc-page">
    <h1 v-if="locale === 'en'" class="hm-doc-title"><span>5.4</span>PLAYERGUIDEDMISSILE SCRIPT</h1>
    <h1 v-else class="hm-doc-title"><span>5.4</span>SCRIPT PLAYERGUIDEDMISSILE</h1>

    <p v-if="locale === 'en'" class="hm-text-lead">
      The manual-pilot component — <span class="hm-code">Scripts/Core/PlayerGuidedMissile.cs</span>.
      Attach to the missile prefab next to <span class="hm-code">HomingMissile</span>. Owns an
      onboard <span class="hm-code">Camera</span>, receives <span class="hm-code">SetSteerInput()</span>
      calls from <span class="hm-code">PlayerController</span> and rotates the
      <span class="hm-code">Rigidbody</span> at 50 Hz inside <span class="hm-code">FixedUpdate</span>.
    </p>
    <p v-else class="hm-text-lead">
      Il componente di pilotaggio manuale — <span class="hm-code">Scripts/Core/PlayerGuidedMissile.cs</span>.
      Collega al prefab del missile insieme a <span class="hm-code">HomingMissile</span>. Possiede una
      <span class="hm-code">Camera</span> onboard, riceve chiamate <span class="hm-code">SetSteerInput()</span>
      da <span class="hm-code">PlayerController</span> e ruota il <span class="hm-code">Rigidbody</span>
      a 50 Hz in <span class="hm-code">FixedUpdate</span>.
    </p>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>RequireComponent</strong>
        <span class="hm-code">[RequireComponent(typeof(Rigidbody), typeof(HomingMissile))]</span> — both
        components are added automatically when you attach <span class="hm-code">PlayerGuidedMissile</span>.
        Engaging sets <span class="hm-code">HomingMissile.manualGuidanceActive = true</span>, which bypasses
        Proportional Navigation for the lifetime of the missile.
      </template>
      <template v-else>
        <strong>RequireComponent</strong>
        <span class="hm-code">[RequireComponent(typeof(Rigidbody), typeof(HomingMissile))]</span> — entrambi
        i componenti vengono aggiunti automaticamente quando colleghi <span class="hm-code">PlayerGuidedMissile</span>.
        L'attivazione imposta <span class="hm-code">HomingMissile.manualGuidanceActive = true</span>, che bypassa
        la Navigazione Proporzionale per tutta la vita del missile.
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
            <td><span class="hm-field-type">PlayerGuidedMissileConfig</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Optional ScriptableObject. When assigned, <span class="hm-code">ApplyConfig()</span> in <span class="hm-code">Awake()</span> copies every field below from the asset — so user tweaks survive package updates. Menu path: <em>Create → Homing Missile → Player Guided Missile Config</em>.</td>
            <td v-else>ScriptableObject opzionale. Quando assegnato, <span class="hm-code">ApplyConfig()</span> in <span class="hm-code">Awake()</span> copia tutti i campi seguenti dall'asset — così i tweak utente sopravvivono agli update. Menu: <em>Create → Homing Missile → Player Guided Missile Config</em>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Steering</div>
      <div v-else class="hm-doc-section-title">Steering</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">steerSensitivity</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">90</span></td>
            <td v-if="locale === 'en'">Degrees per second per unit of Look input. Higher = more responsive stick/mouse.</td>
            <td v-else>Gradi al secondo per unità di input Look. Più alto = stick/mouse più reattivo.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">maxTurnRate</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">120</span></td>
            <td v-if="locale === 'en'">Hard cap on yaw + pitch rate in deg/s. Limits how tightly the missile can manoeuvre regardless of input magnitude.</td>
            <td v-else>Cap massimo sul tasso di yaw + pitch in deg/s. Limita quanto strettamente il missile può manovrare indipendentemente dall'input.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">velocityAlignmentRate</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">4</span></td>
            <td v-if="locale === 'en'">How aggressively the Rigidbody velocity is bent toward <span class="hm-code">transform.forward</span> each FixedUpdate. Higher = arcade feel; lower = realistic inertia.</td>
            <td v-else>Quanto aggressivamente la velocità del Rigidbody viene piegata verso <span class="hm-code">transform.forward</span> ad ogni FixedUpdate. Più alto = feel arcade; più basso = inerzia realistica.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">inputSmoothing</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.05</span></td>
            <td v-if="locale === 'en'">Exponential smoothing time constant (seconds) applied to incoming Look deltas. Reduces jitter from high-DPI mice and analog sticks.</td>
            <td v-else>Costante temporale dello smoothing esponenziale (secondi) applicata ai delta Look in ingresso. Riduce il jitter di mouse ad alto DPI e stick analogici.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">invertPitch</span></td>
            <td><span class="hm-field-type">bool</span></td>
            <td><span class="hm-field-default">false</span></td>
            <td v-if="locale === 'en'">Flip the vertical axis. Set to <span class="hm-code">true</span> for "push stick up = nose down" flight-sim convention.</td>
            <td v-else>Inverte l'asse verticale. Imposta a <span class="hm-code">true</span> per la convenzione flight-sim "spingi lo stick in alto = naso giù".</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Camera</div>
      <div v-else class="hm-doc-section-title">Camera</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">onboardCamera</span></td>
            <td><span class="hm-field-type">Camera</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Reference to the missile's onboard camera. If left empty, <span class="hm-code">EnsureCamera()</span> creates a child GameObject "MissileCamera" automatically with the FOV and offset below (near=0.05, far=2000, starts disabled).</td>
            <td v-else>Riferimento alla camera onboard del missile. Se vuoto, <span class="hm-code">EnsureCamera()</span> crea automaticamente un child GameObject "MissileCamera" con il FOV e l'offset sottostanti (near=0.05, far=2000, parte disabilitata).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">cameraLocalOffset</span></td>
            <td><span class="hm-field-type">Vector3</span></td>
            <td><span class="hm-field-default">(0, 0.15, 0.4)</span></td>
            <td v-if="locale === 'en'">Local position of the auto-created camera relative to the missile root.</td>
            <td v-else>Posizione locale della camera auto-creata rispetto al root del missile.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">cameraFOV</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">75</span></td>
            <td v-if="locale === 'en'">Vertical field of view in degrees applied to the onboard camera.</td>
            <td v-else>Campo visivo verticale in gradi applicato alla camera onboard.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Physics</div>
      <div v-else class="hm-doc-section-title">Fisica</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">rigidbodyInterpolation</span></td>
            <td><span class="hm-field-type">RigidbodyInterpolation</span></td>
            <td><span class="hm-field-default">Interpolate</span></td>
            <td v-if="locale === 'en'">Applied to the Rigidbody on <span class="hm-code">Engage()</span> to smooth the visible motion between physics ticks. <span class="hm-code">Interpolate</span> is the recommended default; <span class="hm-code">Extrapolate</span> is slightly more reactive but can wobble at low framerates; <span class="hm-code">None</span> reproduces pre-1.3.0 stuttering behavior.</td>
            <td v-else>Applicato al Rigidbody su <span class="hm-code">Engage()</span> per smussare il movimento visibile tra i tick fisici. <span class="hm-code">Interpolate</span> è il default consigliato; <span class="hm-code">Extrapolate</span> è leggermente più reattivo ma può ondulare a basso framerate; <span class="hm-code">None</span> riproduce lo stutter pre-1.3.0.</td>
          </tr>
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
            <td><span class="hm-field-name">OnboardCamera</span></td>
            <td><span class="hm-code">Camera { get; }</span></td>
            <td v-if="locale === 'en'">Read-only accessor for the onboard camera reference (whether assigned in the Inspector or auto-created).</td>
            <td v-else>Accessore read-only al riferimento della camera onboard (assegnata nell'Inspector o auto-creata).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Engage()</span></td>
            <td><span class="hm-code">void Engage()</span></td>
            <td v-if="locale === 'en'">Activates manual guidance. Called by <span class="hm-code">MissileLauncher</span> right after <span class="hm-code">HomingMissile.Initialize()</span> when <span class="hm-code">playerGuided</span> is on. Sets <span class="hm-code">manualGuidanceActive = true</span> on the missile, ensures the camera, applies <span class="hm-code">rigidbodyInterpolation</span>.</td>
            <td v-else>Attiva la guida manuale. Chiamata da <span class="hm-code">MissileLauncher</span> subito dopo <span class="hm-code">HomingMissile.Initialize()</span> quando <span class="hm-code">playerGuided</span> è attivo. Imposta <span class="hm-code">manualGuidanceActive = true</span> sul missile, garantisce la camera, applica <span class="hm-code">rigidbodyInterpolation</span>.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">SetSteerInput()</span></td>
            <td><span class="hm-code">void SetSteerInput(Vector2 lookDelta)</span></td>
            <td v-if="locale === 'en'">Receives the Look delta from <span class="hm-code">PlayerController.OnLauncherLook</span>. X drives yaw (rotation around world up), Y drives pitch (around the missile's local right). Smoothed and clamped inside <span class="hm-code">FixedUpdate</span>.</td>
            <td v-else>Riceve il delta Look da <span class="hm-code">PlayerController.OnLauncherLook</span>. X guida lo yaw (rotazione attorno all'asse world up), Y guida il pitch (attorno al right locale del missile). Smussato e clampato in <span class="hm-code">FixedUpdate</span>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Steering Math</div>
      <div v-else class="hm-doc-section-title">Matematica dello Steering</div>
      <p v-if="locale === 'en'">
        Each FixedUpdate (50 Hz) the smoothed Look delta is scaled by <span class="hm-code">steerSensitivity * Time.fixedDeltaTime</span>
        to obtain raw yaw and pitch deltas, then clamped so neither exceeds <span class="hm-code">maxTurnRate * Time.fixedDeltaTime</span>.
        A yaw quaternion around <span class="hm-code">Vector3.up</span> and a pitch quaternion around the missile's
        local <span class="hm-code">transform.right</span> are composed and applied via <span class="hm-code">rb.MoveRotation</span>.
        Finally, the Rigidbody velocity is <span class="hm-code">Slerp</span>'d toward <span class="hm-code">transform.forward * speed</span>
        with weight <span class="hm-code">velocityAlignmentRate * Time.fixedDeltaTime</span>.
      </p>
      <p v-else>
        Ad ogni FixedUpdate (50 Hz) il delta Look smussato è scalato per <span class="hm-code">steerSensitivity * Time.fixedDeltaTime</span>
        ottenendo i delta grezzi di yaw e pitch, poi clampati a <span class="hm-code">maxTurnRate * Time.fixedDeltaTime</span>.
        Un quaternion yaw attorno a <span class="hm-code">Vector3.up</span> e un quaternion pitch attorno al
        <span class="hm-code">transform.right</span> locale del missile vengono composti e applicati via
        <span class="hm-code">rb.MoveRotation</span>. Infine, la velocità del Rigidbody viene
        <span class="hm-code">Slerp</span>'ata verso <span class="hm-code">transform.forward * speed</span>
        con peso <span class="hm-code">velocityAlignmentRate * Time.fixedDeltaTime</span>.
      </p>
    </div>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        See <router-link :to="localePath('/homing-missile/docs/manual-guidance')">Manual Guidance System</router-link>
        for the end-to-end data flow and <router-link :to="localePath('/homing-missile/docs/missile-camera-overlay')">MissileCameraOverlay Script</router-link>
        for the HUD overlay reference.
      </template>
      <template v-else>
        Vedi <router-link :to="localePath('/homing-missile/docs/manual-guidance')">Sistema di Guida Manuale</router-link>
        per il flusso dati completo e <router-link :to="localePath('/homing-missile/docs/missile-camera-overlay')">Script MissileCameraOverlay</router-link>
        per il riferimento dell'overlay HUD.
      </template>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'

export default {
  name: 'HMPlayerGuidedMissileScript',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { locale, localePath }
  }
}
</script>
