<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>5.4</span>PLAYER CONTROLLER SCRIPT</h1>

    <!-- Lead paragraph -->
    <p v-if="locale === 'en'" class="hm-text-lead">
      <span class="hm-code">Scripts/Input/PlayerController.cs</span> — Manages player input and
      acts as the bridge between Unity's new Input System and the launcher components.
      On <span class="hm-code">Start()</span> the controller automatically enters launcher mode
      by finding the launcher and camera rig via Unity tags — no manual wiring in the Inspector is required.
    </p>
    <p v-else class="hm-text-lead">
      <span class="hm-code">Scripts/Input/PlayerController.cs</span> — Gestisce l'input del giocatore e
      funge da ponte tra il nuovo Input System di Unity e i componenti del lanciatore.
      All'avvio <span class="hm-code">Start()</span> il controller entra automaticamente in modalità lanciatore
      trovando il lanciatore e il rig della camera tramite i tag Unity — nessun collegamento manuale nell'Inspector è necessario.
    </p>

    <!-- Input Action Map Section -->
    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Input Action Map</div>
      <div v-else class="hm-doc-section-title">Mappa Azioni Input</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          The controller reads from the <span class="hm-code">"Rocket"</span> Input Action Map, which is
          implemented by the <span class="hm-code">PlayerInputManagment</span> class (note the intentional
          spelling) in the <span class="hm-code">SteelSavior</span> namespace. The Action Map defines
          three actions:
        </p>
        <p v-else>
          Il controller legge dalla Mappa Azioni Input <span class="hm-code">"Rocket"</span>, implementata
          dalla classe <span class="hm-code">PlayerInputManagment</span> (nota l'ortografia intenzionale)
          nel namespace <span class="hm-code">SteelSavior</span>. La Mappa Azioni definisce
          tre azioni:
        </p>
        <table class="hm-field-table" style="margin-top: 0.75rem;">
          <thead>
            <tr v-if="locale === 'en'"><th>Action</th><th>Type</th><th>Description</th></tr>
            <tr v-else><th>Azione</th><th>Tipo</th><th>Descrizione</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="hm-field-name">Look</span></td>
              <td><span class="hm-field-type">Vector2</span></td>
              <td v-if="locale === 'en'">Mouse delta / right stick. Forwarded to LauncherController.SetLookInput() each frame.</td>
              <td v-else>Delta del mouse / stick destro. Inoltrato a LauncherController.SetLookInput() ad ogni frame.</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Attack</span></td>
              <td><span class="hm-field-type">Button</span></td>
              <td v-if="locale === 'en'">Left mouse button / right trigger. Calls MissileLauncher.TryFire() when pressed.</td>
              <td v-else>Tasto sinistro del mouse / grilletto destro. Chiama MissileLauncher.TryFire() quando premuto.</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Zoom</span></td>
              <td><span class="hm-field-type">Value (float)</span></td>
              <td v-if="locale === 'en'">Mouse scroll wheel. Cycles through the <span class="hm-code">zoomSteps</span> array, adjusting the camera FOV to <span class="hm-code">baseFOV / zoomSteps[index]</span>.</td>
              <td v-else>Rotella del mouse. Cicla attraverso l'array <span class="hm-code">zoomSteps</span>, regolando il FOV della camera a <span class="hm-code">baseFOV / zoomSteps[index]</span>.</td>
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
            <td><span class="hm-field-name">currentLauncher</span></td>
            <td><span class="hm-field-type">LauncherController</span></td>
            <td><span class="hm-field-default">auto</span></td>
            <td v-if="locale === 'en'">Reference to the LauncherController. Auto-populated at Start via the "Rocket" tag — no manual assignment needed.</td>
            <td v-else>Riferimento al LauncherController. Auto-popolato all'avvio tramite il tag "Rocket" — nessuna assegnazione manuale necessaria.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">currentMissileLauncher</span></td>
            <td><span class="hm-field-type">MissileLauncher</span></td>
            <td><span class="hm-field-default">auto</span></td>
            <td v-if="locale === 'en'">Reference to the MissileLauncher. Also auto-populated via tag at Start.</td>
            <td v-else>Riferimento al MissileLauncher. Anch'esso auto-popolato tramite tag all'avvio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">playerCamera</span></td>
            <td><span class="hm-field-type">Camera</span></td>
            <td><span class="hm-field-default">—</span></td>
            <td v-if="locale === 'en'">The player camera. Assign in the Inspector.</td>
            <td v-else>La camera del giocatore. Assegna nell'Inspector.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">cameraLookTarget</span></td>
            <td><span class="hm-field-type">Transform</span></td>
            <td><span class="hm-field-default">auto</span></td>
            <td v-if="locale === 'en'">Auto-populated via "CameraLookRocket" tag. The camera looks at this Transform every frame.</td>
            <td v-else>Auto-popolato tramite il tag "CameraLookRocket". La camera guarda questo Transform ad ogni frame.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">cameraPositionTarget</span></td>
            <td><span class="hm-field-type">Transform</span></td>
            <td><span class="hm-field-default">auto</span></td>
            <td v-if="locale === 'en'">Auto-populated via "CameraTransformRocket" tag. The camera lerps toward this Transform's position.</td>
            <td v-else>Auto-popolato tramite il tag "CameraTransformRocket". La camera interpola verso la posizione di questo Transform.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">cameraLerpSpeedLauncher</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">6.0</span></td>
            <td v-if="locale === 'en'">Speed at which the camera position lerps to cameraPositionTarget each frame.</td>
            <td v-else>Velocità alla quale la posizione della camera interpola verso cameraPositionTarget ad ogni frame.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">baseFOV</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">60.0</span></td>
            <td v-if="locale === 'en'">Default camera field of view when not zoomed.</td>
            <td v-else>Campo visivo predefinito della camera quando non è in zoom.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">zoomSteps</span></td>
            <td><span class="hm-field-type">int[]</span></td>
            <td><span class="hm-field-default">{ 1, 2, 4, 8 }</span></td>
            <td v-if="locale === 'en'">Array of zoom multipliers. Scroll cycles through these levels: 1&times; (no zoom), 2&times;, 4&times;, 8&times;. The camera FOV is set to <span class="hm-code">baseFOV / zoomSteps[index]</span>.</td>
            <td v-else>Array di moltiplicatori di zoom. Lo scroll cicla tra questi livelli: 1&times; (nessuno zoom), 2&times;, 4&times;, 8&times;. Il FOV della camera è impostato a <span class="hm-code">baseFOV / zoomSteps[index]</span>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Alert box -->
    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Automatic Component Discovery</strong>
        Because <span class="hm-code">PlayerController</span> finds the launcher via the
        <span class="hm-code">"Rocket"</span> tag rather than a serialized field, you can swap
        launcher prefabs at runtime without re-wiring the Inspector. As long as the new launcher
        has the correct tag, the controller picks it up automatically on the next
        <span class="hm-code">Start()</span> call.
      </template>
      <template v-else>
        <strong>Scoperta Automatica dei Componenti</strong>
        Poiché <span class="hm-code">PlayerController</span> trova il lanciatore tramite il tag
        <span class="hm-code">"Rocket"</span> invece di un campo serializzato, puoi scambiare
        i prefab del lanciatore a runtime senza riconfigurare l'Inspector. Finché il nuovo lanciatore
        ha il tag corretto, il controller lo rileva automaticamente alla prossima chiamata
        <span class="hm-code">Start()</span>.
      </template>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMPlayerControllerScript',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
