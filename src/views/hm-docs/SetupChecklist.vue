<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>14</span><template v-if="locale === 'en'">MINIMUM SETUP CHECKLIST</template><template v-else>CHECKLIST DI CONFIGURAZIONE MINIMA</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      Step-by-step guide to add the Homing Missile system to an existing scene.
      Follow each step in order. The entire setup should take under 10 minutes.
    </p>
    <p class="hm-text-lead" v-else>
      Guida passo-passo per aggiungere il sistema Homing Missile a una scena esistente.
      Segui ogni passaggio in ordine. L'intera configurazione dovrebbe richiedere meno di 10 minuti.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Step 1 — Verify Requirements</div>
      <div class="hm-doc-section-title" v-else>Passaggio 1 — Verificare i Requisiti</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Unity 6 (6000.0+) is open with a URP project.</li>
          <li class="hm-checklist-item">The <strong>Input System</strong> package is installed (Package Manager &gt; Input System). Both <em>Input System</em> and <em>Active Input Handling</em> should be set to <strong>Input System Package (New)</strong> in Project Settings &gt; Player.</li>
          <li class="hm-checklist-item">The <span class="hm-code">HomingMissile</span> folder has been imported from the Asset Store.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Unity 6 (6000.0+) è aperto con un progetto URP.</li>
          <li class="hm-checklist-item">Il pacchetto <strong>Input System</strong> è installato (Package Manager &gt; Input System). Sia <em>Input System</em> che <em>Active Input Handling</em> devono essere impostati su <strong>Input System Package (New)</strong> in Project Settings &gt; Player.</li>
          <li class="hm-checklist-item">La cartella <span class="hm-code">HomingMissile</span> è stata importata dall'Asset Store.</li>
        </ul>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Step 2 — Create Required Tags</div>
      <div class="hm-doc-section-title" v-else>Passaggio 2 — Creare i Tag Richiesti</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Open <strong>Edit &gt; Project Settings &gt; Tags and Layers</strong>.</li>
          <li class="hm-checklist-item">Add all four tags (exact case): <span class="hm-code">Rocket</span>, <span class="hm-code">target</span>, <span class="hm-code">CameraLookRocket</span>, <span class="hm-code">CameraTransformRocket</span>.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Apri <strong>Edit &gt; Project Settings &gt; Tags and Layers</strong>.</li>
          <li class="hm-checklist-item">Aggiungi tutti e quattro i tag (maiuscole esatte): <span class="hm-code">Rocket</span>, <span class="hm-code">target</span>, <span class="hm-code">CameraLookRocket</span>, <span class="hm-code">CameraTransformRocket</span>.</li>
        </ul>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Step 3 — Add the Launcher Prefab</div>
      <div class="hm-doc-section-title" v-else>Passaggio 3 — Aggiungere il Prefab del Lanciatore</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Drag <span class="hm-code">Prefabs/LauncherStation.prefab</span> into your scene and position it where the player will use the launcher.</li>
          <li class="hm-checklist-item">Confirm the root GameObject has the <span class="hm-code">Rocket</span> tag assigned.</li>
          <li class="hm-checklist-item">Verify that the <span class="hm-code">CameraLookTarget</span> child has the <span class="hm-code">CameraLookRocket</span> tag, and <span class="hm-code">CameraPosition</span> has the <span class="hm-code">CameraTransformRocket</span> tag.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Trascina <span class="hm-code">Prefabs/LauncherStation.prefab</span> nella tua scena e posizionalo dove il giocatore utilizzerà il lanciatore.</li>
          <li class="hm-checklist-item">Conferma che il GameObject root abbia il tag <span class="hm-code">Rocket</span> assegnato.</li>
          <li class="hm-checklist-item">Verifica che il figlio <span class="hm-code">CameraLookTarget</span> abbia il tag <span class="hm-code">CameraLookRocket</span> e <span class="hm-code">CameraPosition</span> abbia il tag <span class="hm-code">CameraTransformRocket</span>.</li>
        </ul>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Step 4 — Set Up Targets</div>
      <div class="hm-doc-section-title" v-else>Passaggio 4 — Configurare i Bersagli</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Select each GameObject you want to be a destructible target.</li>
          <li class="hm-checklist-item">Assign the <span class="hm-code">target</span> tag.</li>
          <li class="hm-checklist-item">Optionally add <span class="hm-code">TargetHealth.cs</span> to control how many hits it takes to destroy each target.</li>
          <li class="hm-checklist-item">Ensure each target has at least one <strong>Collider</strong> component — the proximity fuze requires a collider to detect the target.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Seleziona ogni GameObject che vuoi rendere un bersaglio distruttibile.</li>
          <li class="hm-checklist-item">Assegna il tag <span class="hm-code">target</span>.</li>
          <li class="hm-checklist-item">Opzionalmente aggiungi <span class="hm-code">TargetHealth.cs</span> per controllare quanti colpi servono per distruggere ogni bersaglio.</li>
          <li class="hm-checklist-item">Assicurati che ogni bersaglio abbia almeno un componente <strong>Collider</strong> — la spoletta di prossimità richiede un collider per rilevare il bersaglio.</li>
        </ul>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Step 5 — Assign Missile Prefabs</div>
      <div class="hm-doc-section-title" v-else>Passaggio 5 — Assegnare i Prefab dei Missili</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Select the <span class="hm-code">LauncherStation</span> GameObject and find the <span class="hm-code">MissileLauncher</span> component in the Inspector.</li>
          <li class="hm-checklist-item">In the <span class="hm-code">rocketList</span> field, add instances of <span class="hm-code">Prefabs/Missile.prefab</span> placed in the scene (pre-placed on the launcher) <em>or</em> drag the prefab directly — they will be instantiated at the fire point.</li>
          <li class="hm-checklist-item">Set <span class="hm-code">lockOnRange</span> and <span class="hm-code">lockOnAngle</span> to match your scene scale.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Seleziona il GameObject <span class="hm-code">LauncherStation</span> e trova il componente <span class="hm-code">MissileLauncher</span> nell'Inspector.</li>
          <li class="hm-checklist-item">Nel campo <span class="hm-code">rocketList</span>, aggiungi istanze di <span class="hm-code">Prefabs/Missile.prefab</span> posizionate nella scena (pre-posizionate sul lanciatore) <em>oppure</em> trascina il prefab direttamente — verranno istanziati al punto di fuoco.</li>
          <li class="hm-checklist-item">Imposta <span class="hm-code">lockOnRange</span> e <span class="hm-code">lockOnAngle</span> in base alla scala della tua scena.</li>
        </ul>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Step 6 — Configure the Camera</div>
      <div class="hm-doc-section-title" v-else>Passaggio 6 — Configurare la Camera</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Select the <span class="hm-code">PlayerController</span> component on the launcher root.</li>
          <li class="hm-checklist-item">Drag your scene's main Camera into the <span class="hm-code">playerCamera</span> field.</li>
          <li class="hm-checklist-item">Leave <span class="hm-code">currentLauncher</span>, <span class="hm-code">cameraLookTarget</span>, and <span class="hm-code">cameraPositionTarget</span> empty — they are auto-populated by tag at runtime.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Seleziona il componente <span class="hm-code">PlayerController</span> sul root del lanciatore.</li>
          <li class="hm-checklist-item">Trascina la Camera principale della tua scena nel campo <span class="hm-code">playerCamera</span>.</li>
          <li class="hm-checklist-item">Lascia <span class="hm-code">currentLauncher</span>, <span class="hm-code">cameraLookTarget</span> e <span class="hm-code">cameraPositionTarget</span> vuoti — vengono auto-popolati tramite tag a runtime.</li>
        </ul>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Step 7 — Press Play</div>
      <div class="hm-doc-section-title" v-else>Passaggio 7 — Premi Play</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Enter Play mode. The camera should automatically move to the launcher position.</li>
          <li class="hm-checklist-item">Move the mouse to rotate the turret. Aim at a target — after <span class="hm-code">lockOnTime</span> seconds the HUD will show LOCKED and a continuous tone will play.</li>
          <li class="hm-checklist-item">Left-click (or press the configured Attack button) to fire. The missile will guide itself to the locked target.</li>
          <li class="hm-checklist-item">Press <span class="hm-code">1</span> to switch between demo scenes if you want to compare the two environments.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Entra in modalità Play. La camera dovrebbe spostarsi automaticamente nella posizione del lanciatore.</li>
          <li class="hm-checklist-item">Muovi il mouse per ruotare la torretta. Punta un bersaglio — dopo <span class="hm-code">lockOnTime</span> secondi l'HUD mostrerà LOCKED e un tono continuo verrà riprodotto.</li>
          <li class="hm-checklist-item">Click sinistro (o premi il pulsante Attack configurato) per sparare. Il missile si guiderà verso il bersaglio agganciato.</li>
          <li class="hm-checklist-item">Premi <span class="hm-code">1</span> per passare tra le scene demo se vuoi confrontare i due ambienti.</li>
        </ul>
      </div>
    </div>

    <div class="hm-alert hm-alert-success" v-if="locale === 'en'">
      <strong>You're Done</strong>
      If all steps are complete and the scene runs without errors, the system is fully operational.
      From here you can customise missile parameters, adjust HUD positioning, swap audio clips, or
      integrate with your own damage system — all without touching the core scripts.
    </div>
    <div class="hm-alert hm-alert-success" v-else>
      <strong>Completato</strong>
      Se tutti i passaggi sono completati e la scena funziona senza errori, il sistema è completamente
      operativo. Da qui puoi personalizzare i parametri del missile, regolare il posizionamento dell'HUD,
      cambiare le clip audio o integrare il tuo sistema di danno — tutto senza toccare gli script principali.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMSetupChecklist',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
