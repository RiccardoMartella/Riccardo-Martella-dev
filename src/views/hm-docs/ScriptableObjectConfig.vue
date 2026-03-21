<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>13</span><template v-if="locale === 'en'">SCRIPTABLEOBJECT CONFIGURATION</template><template v-else>CONFIGURAZIONE SCRIPTABLEOBJECT</template></h1>

    <p class="hm-text-lead" v-if="locale === 'en'">
      A ScriptableObject-based configuration system that protects your custom parameters during asset updates.
      Each core component supports an optional <span class="hm-code">config</span> field: when assigned, the config
      values override the Inspector defaults; when left empty, everything works exactly as before (100% backwards-compatible).
    </p>
    <p class="hm-text-lead" v-else>
      Un sistema di configurazione basato su ScriptableObject che protegge i parametri personalizzati durante gli aggiornamenti dell'asset.
      Ogni componente principale supporta un campo <span class="hm-code">config</span> opzionale: se assegnato, i valori del config
      sovrascrivono quelli dell'Inspector; se non assegnato, tutto funziona come prima (retrocompatibile al 100%).
    </p>

    <!-- WHY USE THIS -->
    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Why use configs?</strong>
      When you update the asset, Unity overwrites every file inside <span class="hm-code">Assets/HomingMissile/</span>.
      If you store your tuned parameters in a <span class="hm-code">.asset</span> file outside that folder,
      your values survive every update. Unity references assets by GUID, not by path, so the link
      between your scene and your config stays intact.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Perch&eacute; usare i config?</strong>
      Quando aggiorni l'asset, Unity sovrascrive ogni file dentro <span class="hm-code">Assets/HomingMissile/</span>.
      Se salvi i parametri personalizzati in un file <span class="hm-code">.asset</span> fuori da quella cartella,
      i tuoi valori sopravvivono ad ogni aggiornamento. Unity referenzia gli asset tramite GUID, non tramite percorso,
      quindi il collegamento tra la tua scena e il tuo config resta intatto.
    </div>

    <!-- CONFIG FILES -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Config ScriptableObjects</div>
      <div class="hm-doc-section-title" v-else>ScriptableObject di Configurazione</div>

      <!-- MissileConfig -->
      <div class="hm-content-block">
        <h3 class="hm-doc-subsection-title">MissileConfig.cs</h3>
        <p v-if="locale === 'en'">
          <strong style="color: #E1EBF2;">Create:</strong> Assets &rarr; Create &rarr; Homing Missile &rarr; Missile Config<br>
          <strong style="color: #E1EBF2;">Path:</strong> <span class="hm-code">Scripts/Core/MissileConfig.cs</span>
        </p>
        <p v-else>
          <strong style="color: #E1EBF2;">Crea:</strong> Assets &rarr; Create &rarr; Homing Missile &rarr; Missile Config<br>
          <strong style="color: #E1EBF2;">Percorso:</strong> <span class="hm-code">Scripts/Core/MissileConfig.cs</span>
        </p>
        <table class="hm-field-table">
          <thead>
            <tr v-if="locale === 'en'"><th>Group</th><th>Parameters</th></tr>
            <tr v-else><th>Gruppo</th><th>Parametri</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="hm-field-name">Guidance</span></td>
              <td><span class="hm-code">navigationConstant</span>, <span class="hm-code">maxLateralG</span>, <span class="hm-code">seekerFOV</span>, <span class="hm-code">seekerRange</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Engine</span></td>
              <td><span class="hm-code">launchPhaseTime</span>, <span class="hm-code">boostThrust</span>, <span class="hm-code">boostDuration</span>, <span class="hm-code">sustainerThrust</span>, <span class="hm-code">sustainerDuration</span>, <span class="hm-code">missileDrag</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Warhead</span></td>
              <td><span class="hm-code">proximityRadius</span>, <span class="hm-code">explosionRadius</span>, <span class="hm-code">explosionForce</span>, <span class="hm-code">explosionDamage</span>, <span class="hm-code">lifetime</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Effects</span></td>
              <td><span class="hm-code">explosionPrefab</span>, <span class="hm-code">trailEffectPrefab</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Audio</span></td>
              <td><span class="hm-code">launchSound</span>, <span class="hm-code">launchVolume</span>, <span class="hm-code">launchMinDistance</span>, <span class="hm-code">launchMaxDistance</span>, <span class="hm-code">explosionSound</span>, <span class="hm-code">explosionVolume</span>, <span class="hm-code">explosionMinDistance</span>, <span class="hm-code">explosionMaxDistance</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- LauncherConfig -->
      <div class="hm-content-block" style="margin-top: 2rem;">
        <h3 class="hm-doc-subsection-title">LauncherConfig.cs</h3>
        <p v-if="locale === 'en'">
          <strong style="color: #E1EBF2;">Create:</strong> Assets &rarr; Create &rarr; Homing Missile &rarr; Launcher Config<br>
          <strong style="color: #E1EBF2;">Path:</strong> <span class="hm-code">Scripts/Core/LauncherConfig.cs</span>
        </p>
        <p v-else>
          <strong style="color: #E1EBF2;">Crea:</strong> Assets &rarr; Create &rarr; Homing Missile &rarr; Launcher Config<br>
          <strong style="color: #E1EBF2;">Percorso:</strong> <span class="hm-code">Scripts/Core/LauncherConfig.cs</span>
        </p>
        <table class="hm-field-table">
          <thead>
            <tr v-if="locale === 'en'"><th>Group</th><th>Parameters</th></tr>
            <tr v-else><th>Gruppo</th><th>Parametri</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="hm-field-name">Rockets</span></td>
              <td><span class="hm-code">rocketLaunchForce</span>, <span class="hm-code">launchVelocityMultiplier</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Fire Settings</span></td>
              <td><span class="hm-code">fireRate</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Recoil</span></td>
              <td><span class="hm-code">recoilForce</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Lock-On</span></td>
              <td><span class="hm-code">lockOnRange</span>, <span class="hm-code">lockOnAngle</span>, <span class="hm-code">lockOnTime</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Lock-On Audio</span></td>
              <td><span class="hm-code">beepFrequency</span>, <span class="hm-code">beepDuration</span>, <span class="hm-code">beepVolume</span>, <span class="hm-code">beepIntervalMax</span>, <span class="hm-code">beepIntervalMin</span>, <span class="hm-code">lockedToneFrequency</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- LauncherControllerConfig -->
      <div class="hm-content-block" style="margin-top: 2rem;">
        <h3 class="hm-doc-subsection-title">LauncherControllerConfig.cs</h3>
        <p v-if="locale === 'en'">
          <strong style="color: #E1EBF2;">Create:</strong> Assets &rarr; Create &rarr; Homing Missile &rarr; Launcher Controller Config<br>
          <strong style="color: #E1EBF2;">Path:</strong> <span class="hm-code">Scripts/Core/LauncherControllerConfig.cs</span>
        </p>
        <p v-else>
          <strong style="color: #E1EBF2;">Crea:</strong> Assets &rarr; Create &rarr; Homing Missile &rarr; Launcher Controller Config<br>
          <strong style="color: #E1EBF2;">Percorso:</strong> <span class="hm-code">Scripts/Core/LauncherControllerConfig.cs</span>
        </p>
        <table class="hm-field-table">
          <thead>
            <tr v-if="locale === 'en'"><th>Group</th><th>Parameters</th></tr>
            <tr v-else><th>Gruppo</th><th>Parametri</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="hm-field-name">Rotation</span></td>
              <td><span class="hm-code">rotationSpeed</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Elevation</span></td>
              <td><span class="hm-code">elevationSpeed</span>, <span class="hm-code">maxElevation</span>, <span class="hm-code">minElevation</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Air Mode</span></td>
              <td><span class="hm-code">airMode</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Smoothing</span></td>
              <td><span class="hm-code">smoothSpeed</span></td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Start</span></td>
              <td><span class="hm-code">startElevation</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- HOW SCRIPTS WERE MODIFIED -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">How It Works Under the Hood</div>
      <div class="hm-doc-section-title" v-else>Come Funziona Internamente</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          Each of the three core scripts (<span class="hm-code">HomingMissile.cs</span>,
          <span class="hm-code">MissileLauncher.cs</span>, <span class="hm-code">LauncherController.cs</span>)
          now has a public <span class="hm-code">config</span> field and a private <span class="hm-code">ApplyConfig()</span> method.
        </p>
        <p v-else>
          Ognuno dei tre script principali (<span class="hm-code">HomingMissile.cs</span>,
          <span class="hm-code">MissileLauncher.cs</span>, <span class="hm-code">LauncherController.cs</span>)
          ora ha un campo pubblico <span class="hm-code">config</span> e un metodo privato <span class="hm-code">ApplyConfig()</span>.
        </p>
        <table class="hm-field-table">
          <thead>
            <tr v-if="locale === 'en'"><th>Script</th><th>When ApplyConfig runs</th></tr>
            <tr v-else><th>Script</th><th>Quando viene eseguito ApplyConfig</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="hm-field-name">HomingMissile.cs</span></td>
              <td v-if="locale === 'en'">At the start of <span class="hm-code">Initialize()</span>, before any other setup</td>
              <td v-else>All'inizio di <span class="hm-code">Initialize()</span>, prima di qualsiasi altra operazione</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">MissileLauncher.cs</span></td>
              <td v-if="locale === 'en'">In <span class="hm-code">Awake()</span>, before any other initialization</td>
              <td v-else>In <span class="hm-code">Awake()</span>, prima di qualsiasi altra inizializzazione</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">LauncherController.cs</span></td>
              <td v-if="locale === 'en'">In <span class="hm-code">Awake()</span>, before applying the initial rotation</td>
              <td v-else>In <span class="hm-code">Awake()</span>, prima di applicare la rotazione iniziale</td>
            </tr>
          </tbody>
        </table>
        <p v-if="locale === 'en'" style="margin-top: 0.75rem;">
          For Effects and Audio fields in <span class="hm-code">MissileConfig</span>, the config only overrides
          when the config field is not null — this avoids clearing references already assigned on the prefab.
        </p>
        <p v-else style="margin-top: 0.75rem;">
          Per i campi Effects e Audio in <span class="hm-code">MissileConfig</span>, il config sovrascrive solo
          se il campo nel config non &egrave; null — questo evita di cancellare riferimenti gi&agrave; assegnati sul prefab.
        </p>
      </div>
    </div>

    <div class="hm-alert hm-alert-warning" v-if="locale === 'en'">
      <strong>Don't Forget: UI Document Panel Settings</strong>
      If you are building a new scene or a custom launcher setup, remember to assign a
      <strong>Panel Settings</strong> asset to the <span class="hm-code">UIDocument</span> component in the Inspector.
      Without it the HUD will not be rendered and Unity will throw an error at runtime.
      Create one via <strong>Assets &rarr; Create &rarr; UI Toolkit &rarr; Panel Settings Asset</strong>.
    </div>
    <div class="hm-alert hm-alert-warning" v-else>
      <strong>Non Dimenticare: Panel Settings del UI Document</strong>
      Se stai costruendo una nuova scena o una configurazione personalizzata del lanciatore, ricordati di assegnare
      un asset <strong>Panel Settings</strong> al componente <span class="hm-code">UIDocument</span> nell'Inspector.
      Senza di esso l'HUD non verrà visualizzato e Unity genererà un errore a runtime.
      Creane uno tramite <strong>Assets &rarr; Create &rarr; UI Toolkit &rarr; Panel Settings Asset</strong>.
    </div>

    <!-- QUICK START -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Quick Start</div>
      <div class="hm-doc-section-title" v-else>Guida Rapida</div>
      <div class="hm-content-block">
        <ol class="hm-step-list" v-if="locale === 'en'">
          <li>In Unity: <strong>Assets &rarr; Create &rarr; Homing Missile</strong> &rarr; choose the config you need.</li>
          <li>Save the <span class="hm-code">.asset</span> file <strong>outside</strong> <span class="hm-code">Assets/HomingMissile/</span> (e.g. <span class="hm-code">Assets/MyConfigs/</span>).</li>
          <li>In the Inspector, drag the <span class="hm-code">.asset</span> file into the <strong>Config</strong> slot on the component.</li>
          <li>Edit parameters in the config file instead of the component Inspector.</li>
        </ol>
        <ol class="hm-step-list" v-else>
          <li>In Unity: <strong>Assets &rarr; Create &rarr; Homing Missile</strong> &rarr; scegli il config desiderato.</li>
          <li>Salva il file <span class="hm-code">.asset</span> <strong>fuori</strong> da <span class="hm-code">Assets/HomingMissile/</span> (es. <span class="hm-code">Assets/MyConfigs/</span>).</li>
          <li>Nell'Inspector, trascina il file <span class="hm-code">.asset</span> nello slot <strong>Config</strong> del componente.</li>
          <li>Modifica i parametri nel file config invece che nell'Inspector del componente.</li>
        </ol>
      </div>
    </div>

    <!-- PRIORITY -->
    <div class="hm-alert hm-alert-success" v-if="locale === 'en'">
      <strong>Value Priority</strong><br>
      Config assigned &rarr; uses values from the config.<br>
      Config not assigned (null) &rarr; uses Inspector values on the component (original behaviour).
    </div>
    <div class="hm-alert hm-alert-success" v-else>
      <strong>Priorit&agrave; dei Valori</strong><br>
      Config assegnato &rarr; usa i valori dal config.<br>
      Config non assegnato (null) &rarr; usa i valori dall'Inspector del componente (comportamento originale).
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMScriptableObjectConfig',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
