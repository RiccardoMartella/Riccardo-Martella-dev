<template>
  <div class="hm-doc-page">
    <h1 v-if="locale === 'en'" class="hm-doc-title"><span>4.1</span>MANUAL GUIDANCE SYSTEM</h1>
    <h1 v-else class="hm-doc-title"><span>4.1</span>SISTEMA DI GUIDA MANUALE</h1>

    <p v-if="locale === 'en'" class="hm-text-lead">
      Starting with <strong>v1.3.0</strong>, Homing Missile ships with a first-person
      <strong>player-guided missile</strong> mode. On launch the launcher
      HUD hides, an onboard missile camera takes over the screen with a retro military overlay, and the player steers the projectile with the Look input until detonation.
    </p>
    <p v-else class="hm-text-lead">
      A partire dalla <strong>v1.3.0</strong>, Homing Missile include una modalità
      <strong>missile guidato dal player</strong> in prima persona.
      Al lancio l'HUD del launcher si nasconde, una camera onboard prende il controllo dello schermo
      con un overlay militare retrò, e il player guida il proiettile con l'input
      Look fino alla detonazione.
    </p>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Two modes per launcher</strong>
        Every <span class="hm-code">MissileLauncher</span> exposes a <span class="hm-code">playerGuided</span>
        flag. When unchecked, missiles use the standard Proportional Navigation auto-homing.
        When checked, they spawn under manual control with an onboard camera and overlay.
      </template>
      <template v-else>
        <strong>Due modalità per launcher</strong>
        Ogni <span class="hm-code">MissileLauncher</span> espone un flag <span class="hm-code">playerGuided</span>.
        Quando non spuntato, i missili usano la navigazione proporzionale standard.
        Quando spuntato, vengono spawnati sotto controllo manuale con camera onboard e overlay.
      </template>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Components Involved</div>
      <div v-else class="hm-doc-section-title">Componenti Coinvolti</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Component</th><th>Role</th></tr>
          <tr v-else><th>Componente</th><th>Ruolo</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">PlayerGuidedMissile</span></td>
            <td v-if="locale === 'en'">Added to the missile prefab next to <span class="hm-code">HomingMissile</span>. Owns the onboard camera, takes <span class="hm-code">SetSteerInput</span> calls and rotates the Rigidbody. See <router-link :to="localePath('/homing-missile/docs/player-guided-missile')">PlayerGuidedMissile Script</router-link>.</td>
            <td v-else>Aggiunto al prefab del missile insieme a <span class="hm-code">HomingMissile</span>. Possiede la camera onboard, riceve le chiamate <span class="hm-code">SetSteerInput</span> e ruota il Rigidbody. Vedi <router-link :to="localePath('/homing-missile/docs/player-guided-missile')">Script PlayerGuidedMissile</router-link>.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">MissileCameraOverlay</span></td>
            <td v-if="locale === 'en'">Optional component on the missile prefab (auto-spawned at runtime if missing). Renders the retro HUD: scanlines, glitch bands, TV noise, vignette, REC blink, crosshair. See <router-link :to="localePath('/homing-missile/docs/missile-camera-overlay')">MissileCameraOverlay Script</router-link>.</td>
            <td v-else>Componente opzionale sul prefab del missile (auto-spawnato a runtime se assente). Disegna l'HUD retrò: scanlines, glitch, rumore TV, vignette, lampeggio REC, mirino. Vedi <router-link :to="localePath('/homing-missile/docs/missile-camera-overlay')">Script MissileCameraOverlay</router-link>.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">MissileLauncher</span></td>
            <td v-if="locale === 'en'">New <span class="hm-code">playerGuided</span> flag and <span class="hm-code">extraIgnoreRoots</span> list. Fires the <span class="hm-code">OnGuidedMissileLaunched</span> event when a guided missile is spawned.</td>
            <td v-else>Nuovo flag <span class="hm-code">playerGuided</span> e lista <span class="hm-code">extraIgnoreRoots</span>. Emette l'evento <span class="hm-code">OnGuidedMissileLaunched</span> quando viene spawnato un missile guidato.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">PlayerController</span></td>
            <td v-if="locale === 'en'">Subscribes to <span class="hm-code">OnGuidedMissileLaunched</span>, hides the launcher HUD, enables the onboard camera, reroutes the Look action to the missile, and restores everything on detonation.</td>
            <td v-else>Si iscrive a <span class="hm-code">OnGuidedMissileLaunched</span>, nasconde l'HUD del launcher, attiva la camera onboard, reindirizza l'azione Look al missile e ripristina tutto alla detonazione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">MissileCamFX shader</span></td>
            <td v-if="locale === 'en'">Pipeline-agnostic post-FX (saturation, contrast, brightness, vignette, tint). Located at <span class="hm-code">Shaders/MissileCamFX.shader</span>, path <span class="hm-code">Hidden/HomingMissile/MissileCamFX</span>.</td>
            <td v-else>Post-FX agnostico rispetto alla pipeline (saturazione, contrasto, luminosità, vignette, tint). In <span class="hm-code">Shaders/MissileCamFX.shader</span>, path <span class="hm-code">Hidden/HomingMissile/MissileCamFX</span>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Data Flow — Launch to Detonation</div>
      <div v-else class="hm-doc-section-title">Flusso Dati — Dal Lancio alla Detonazione</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Step</th><th>What happens</th></tr>
          <tr v-else><th>Passo</th><th>Cosa accade</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">1. Fire</span></td>
            <td v-if="locale === 'en'"><span class="hm-code">Attack</span> input → <span class="hm-code">PlayerController.Update</span> → <span class="hm-code">MissileLauncher.Fire</span> instantiates the missile prefab.</td>
            <td v-else>Input <span class="hm-code">Attack</span> → <span class="hm-code">PlayerController.Update</span> → <span class="hm-code">MissileLauncher.Fire</span> istanzia il prefab del missile.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">2. Init</span></td>
            <td v-if="locale === 'en'"><span class="hm-code">HomingMissile.Initialize(target=null, velocity, launcherRoot, extraIgnoreRoots)</span> sets initial velocity and ignores both launcher and any extra colliders configured by the user.</td>
            <td v-else><span class="hm-code">HomingMissile.Initialize(target=null, velocity, launcherRoot, extraIgnoreRoots)</span> imposta la velocità iniziale e ignora sia il launcher sia eventuali collider aggiuntivi configurati dall'utente.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">3. Engage</span></td>
            <td v-if="locale === 'en'"><span class="hm-code">PlayerGuidedMissile.Engage()</span> sets <span class="hm-code">manualGuidanceActive = true</span> on the <span class="hm-code">HomingMissile</span> (bypassing PN), ensures the onboard camera and applies the configured Rigidbody interpolation.</td>
            <td v-else><span class="hm-code">PlayerGuidedMissile.Engage()</span> imposta <span class="hm-code">manualGuidanceActive = true</span> sul <span class="hm-code">HomingMissile</span> (bypassando il PN), garantisce la camera onboard e applica l'interpolazione del Rigidbody configurata.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">4. Handoff</span></td>
            <td v-if="locale === 'en'"><span class="hm-code">MissileLauncher.OnGuidedMissileLaunched</span> event → <span class="hm-code">PlayerController</span> enables <span class="hm-code">missile.OnboardCamera</span>, calls <span class="hm-code">launcherHUD.SetHidden(true)</span>, spawns <span class="hm-code">MissileCameraOverlay</span> and subscribes to <span class="hm-code">HomingMissile.OnDetonated</span>.</td>
            <td v-else>Evento <span class="hm-code">MissileLauncher.OnGuidedMissileLaunched</span> → <span class="hm-code">PlayerController</span> attiva <span class="hm-code">missile.OnboardCamera</span>, chiama <span class="hm-code">launcherHUD.SetHidden(true)</span>, spawna <span class="hm-code">MissileCameraOverlay</span> e si iscrive a <span class="hm-code">HomingMissile.OnDetonated</span>.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">5. Pilot</span></td>
            <td v-if="locale === 'en'">Look input (action map <span class="hm-code">Rocket</span>) → <span class="hm-code">PlayerController.OnLauncherLook</span> → <span class="hm-code">pilotingMissile.SetSteerInput</span> → <span class="hm-code">PlayerGuidedMissile.FixedUpdate</span> at 50 Hz applies yaw/pitch clamped by <span class="hm-code">maxTurnRate</span> and bends velocity toward <span class="hm-code">transform.forward</span>.</td>
            <td v-else>Input Look (action map <span class="hm-code">Rocket</span>) → <span class="hm-code">PlayerController.OnLauncherLook</span> → <span class="hm-code">pilotingMissile.SetSteerInput</span> → <span class="hm-code">PlayerGuidedMissile.FixedUpdate</span> a 50 Hz applica yaw/pitch clampati da <span class="hm-code">maxTurnRate</span> e piega la velocità verso <span class="hm-code">transform.forward</span>.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">6. Render</span></td>
            <td v-if="locale === 'en'">The missile camera renders into a <span class="hm-code">RenderTexture</span>. <span class="hm-code">OnGUI</span> blits it fullscreen through the <span class="hm-code">MissileCamFX</span> shader, then draws the IMGUI HUD (scanlines, glitch, noise, crosshair, REC, warning, header) on top.</td>
            <td v-else>La missile camera renderizza in una <span class="hm-code">RenderTexture</span>. <span class="hm-code">OnGUI</span> la blitta a tutto schermo attraverso lo shader <span class="hm-code">MissileCamFX</span>, poi disegna sopra l'HUD IMGUI (scanlines, glitch, rumore, mirino, REC, warning, header).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">7. Detonate</span></td>
            <td v-if="locale === 'en'"><span class="hm-code">HomingMissile.Detonate</span> raises <span class="hm-code">OnDetonated</span> → <span class="hm-code">PlayerController.ExitPiloting</span> restores the launcher HUD. <span class="hm-code">MissileCameraOverlay.OnDestroy</span> releases the RT, material, and textures.</td>
            <td v-else><span class="hm-code">HomingMissile.Detonate</span> emette <span class="hm-code">OnDetonated</span> → <span class="hm-code">PlayerController.ExitPiloting</span> ripristina l'HUD del launcher. <span class="hm-code">MissileCameraOverlay.OnDestroy</span> rilascia RT, materiale e texture.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Setup Checklist</div>
      <div v-else class="hm-doc-section-title">Checklist di Setup</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>#</th><th>On</th><th>Action</th></tr>
          <tr v-else><th>#</th><th>Su</th><th>Azione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td v-if="locale === 'en'">Missile prefab</td><td v-else>Prefab del missile</td>
            <td v-if="locale === 'en'">Add the <span class="hm-code">PlayerGuidedMissile</span> component. A Rigidbody and <span class="hm-code">HomingMissile</span> are required (auto-added via <span class="hm-code">RequireComponent</span>).</td>
            <td v-else>Aggiungi il componente <span class="hm-code">PlayerGuidedMissile</span>. Sono richiesti Rigidbody e <span class="hm-code">HomingMissile</span> (aggiunti automaticamente via <span class="hm-code">RequireComponent</span>).</td>
          </tr>
          <tr>
            <td>2</td>
            <td v-if="locale === 'en'">Missile prefab (optional)</td><td v-else>Prefab del missile (opzionale)</td>
            <td v-if="locale === 'en'">Add the <span class="hm-code">MissileCameraOverlay</span> component if you want to tweak colors, FX or text. If omitted, one is auto-created at runtime with default values.</td>
            <td v-else>Aggiungi il componente <span class="hm-code">MissileCameraOverlay</span> per tweakkare colori, FX o testi. Se omesso, ne viene creato uno a runtime con i default.</td>
          </tr>
          <tr>
            <td>3</td>
            <td v-if="locale === 'en'">Launcher prefab</td><td v-else>Prefab del launcher</td>
            <td v-if="locale === 'en'">In the <em>Player-Guided Mode</em> section, tick <span class="hm-code">playerGuided</span>. Set Fire Mode to <em>Projectile</em> with the guided missile prefab, or add guided prefabs to the <span class="hm-code">rocketList</span>.</td>
            <td v-else>Nella sezione <em>Player-Guided Mode</em>, spunta <span class="hm-code">playerGuided</span>. Imposta Fire Mode su <em>Projectile</em> con il prefab guidato, o aggiungi prefab guidati alla <span class="hm-code">rocketList</span>.</td>
          </tr>
          <tr>
            <td>4</td>
            <td v-if="locale === 'en'">Launcher prefab (optional)</td><td v-else>Prefab del launcher (opzionale)</td>
            <td v-if="locale === 'en'">Drag any Transforms whose colliders the missile should ignore on launch into <span class="hm-code">extraIgnoreRoots</span> (in addition to the launcher itself, already ignored).</td>
            <td v-else>Trascina in <span class="hm-code">extraIgnoreRoots</span> i Transform i cui collider vanno ignorati dal missile al lancio (oltre al launcher stesso, già ignorato).</td>
          </tr>
          <tr>
            <td>5</td>
            <td v-if="locale === 'en'">Project (optional)</td><td v-else>Progetto (opzionale)</td>
            <td v-if="locale === 'en'">Create <span class="hm-code">PlayerGuidedMissileConfig</span> and <span class="hm-code">MissileCameraOverlayConfig</span> assets (Create → Homing Missile) and assign them via the <em>Config Override</em> slot so user tweaks survive package updates.</td>
            <td v-else>Crea asset <span class="hm-code">PlayerGuidedMissileConfig</span> e <span class="hm-code">MissileCameraOverlayConfig</span> (Create → Homing Missile) e assegnali nello slot <em>Config Override</em>, così i tweak sopravvivono agli update.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Render Pipeline Compatibility</div>
      <div v-else class="hm-doc-section-title">Compatibilità Render Pipeline</div>
      <p v-if="locale === 'en'">
        The overlay renders via <span class="hm-code">RenderTexture</span> + <span class="hm-code">Graphics.DrawTexture</span>
        through the <span class="hm-code">MissileCamFX</span> shader, blitted to screen in immediate-mode <span class="hm-code">OnGUI</span>.
        This pipeline is fully <strong>URP / HDRP / Built-in</strong> compatible with no extra setup, define symbols or Volume profiles.
      </p>
      <p v-else>
        L'overlay renderizza tramite <span class="hm-code">RenderTexture</span> + <span class="hm-code">Graphics.DrawTexture</span>
        attraverso lo shader <span class="hm-code">MissileCamFX</span>, blittato a schermo in <span class="hm-code">OnGUI</span>
        immediate-mode. Questa pipeline è pienamente compatibile con <strong>URP / HDRP / Built-in</strong> senza setup aggiuntivi,
        define symbols o profili Volume.
      </p>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Input</div>
      <div v-else class="hm-doc-section-title">Input</div>
      <p v-if="locale === 'en'">
        No <span class="hm-code">.inputactions</span> changes are required. The existing <strong>Rocket</strong>
        action map drives both launcher control and missile steering — <span class="hm-code">PlayerController</span>
        automatically routes the <span class="hm-code">Look</span> action to whichever is currently active.
        <span class="hm-code">Zoom</span> is suppressed while piloting; hold <span class="hm-code">Attack</span> for continuous fire when not piloting.
      </p>
      <p v-else>
        Non sono richieste modifiche a <span class="hm-code">.inputactions</span>. L'action map <strong>Rocket</strong>
        esistente gestisce sia il controllo del launcher sia lo steering del missile —
        <span class="hm-code">PlayerController</span> instrada automaticamente l'azione <span class="hm-code">Look</span>
        verso quello attivo. <span class="hm-code">Zoom</span> è disabilitato durante il pilotaggio;
        tieni premuto <span class="hm-code">Attack</span> per il fuoco continuo quando non stai pilotando.
      </p>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'

export default {
  name: 'HMManualGuidance',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { locale, localePath }
  }
}
</script>
