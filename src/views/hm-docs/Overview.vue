<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>01</span><template v-if="locale === 'en'">ASSET OVERVIEW</template><template v-else>PANORAMICA DELL'ASSET</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      Homing Missile is a complete, ready-to-use missile launcher system for Unity 6.
      Drop the prefabs into any scene, assign four tags, and you have a fully operational
      launcher station with real missile physics, Proportional Navigation guidance, a
      military-grade HUD, and procedurally generated lock-on audio.
    </p>
    <p class="hm-text-lead" v-else>
      Homing Missile è un sistema di lancio missili completo e pronto all'uso per Unity 6.
      Trascina i prefab in qualsiasi scena, assegna quattro tag e avrai una stazione di lancio
      completamente operativa con fisica missilistica reale, guida a Navigazione Proporzionale,
      un HUD di livello militare e audio di aggancio generato proceduralmente.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">What's Included</div>
      <div class="hm-doc-section-title" v-else>Cosa Include</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">13 C# scripts covering every aspect of the system (guidance, launcher, HUD, player input, targets, utilities)</li>
          <li class="hm-checklist-item">2 demo scenes: <span class="hm-code">GroundDemo.unity</span> and <span class="hm-code">AirDemo.unity</span></li>
          <li class="hm-checklist-item">Launcher prefab with fully rigged turret and cannon</li>
          <li class="hm-checklist-item">Missile prefab with Rigidbody, trail renderer, and proximity fuze</li>
          <li class="hm-checklist-item">Military HUD built with Unity UI Toolkit (<span class="hm-code">LauncherHUD.uxml</span> / <span class="hm-code">LauncherHUD.uss</span>)</li>
          <li class="hm-checklist-item">All physics, audio, and HUD parameters exposed in the Inspector</li>
          <li class="hm-checklist-item">Procedural lock-on audio — no audio files required</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">13 script C# che coprono ogni aspetto del sistema (guida, lanciatore, HUD, input giocatore, bersagli, utilità)</li>
          <li class="hm-checklist-item">2 scene demo: <span class="hm-code">GroundDemo.unity</span> e <span class="hm-code">AirDemo.unity</span></li>
          <li class="hm-checklist-item">Prefab lanciatore con torretta e cannone completamente configurati</li>
          <li class="hm-checklist-item">Prefab missile con Rigidbody, trail renderer e spoletta di prossimità</li>
          <li class="hm-checklist-item">HUD militare costruito con Unity UI Toolkit (<span class="hm-code">LauncherHUD.uxml</span> / <span class="hm-code">LauncherHUD.uss</span>)</li>
          <li class="hm-checklist-item">Tutti i parametri di fisica, audio e HUD esposti nell'Inspector</li>
          <li class="hm-checklist-item">Audio di aggancio procedurale — nessun file audio necessario</li>
        </ul>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Requirements</div>
      <div class="hm-doc-section-title" v-else>Requisiti</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'">
            <th>Requirement</th>
            <th>Version</th>
            <th>Notes</th>
          </tr>
          <tr v-else>
            <th>Requisito</th>
            <th>Versione</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">Unity</span></td>
            <td><span class="hm-field-type">6000.0+</span></td>
            <td v-if="locale === 'en'">Unity 6 (6000.x) required</td>
            <td v-else>Richiesto Unity 6 (6000.x)</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Universal Render Pipeline</span></td>
            <td><span class="hm-field-type">17.x</span></td>
            <td v-if="locale === 'en'">URP 17 (ships with Unity 6)</td>
            <td v-else>URP 17 (incluso con Unity 6)</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Input System</span></td>
            <td><span class="hm-field-type">1.14+</span></td>
            <td v-if="locale === 'en'">New Input System package — must be installed and active</td>
            <td v-else>Pacchetto New Input System — deve essere installato e attivo</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">C# Namespace</span></td>
            <td><span class="hm-field-type">HomingMissile</span></td>
            <td v-if="locale === 'en'">All scripts live under this namespace</td>
            <td v-else>Tutti gli script risiedono in questo namespace</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Key Features</div>
      <div class="hm-doc-section-title" v-else>Caratteristiche Principali</div>
      <div class="hm-content-block">
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item"><strong>Proportional Navigation (PN) guidance</strong> — real missile-science algorithm: lateral acceleration = N' × closing_speed × LOS_rate. The missile intercepts moving targets, not just the point-of-aim.</li>
          <li class="hm-checklist-item"><strong>4 distinct flight phases</strong> — Launch, Boost, Sustainer, and Coast, each with independent thrust and drag values configurable in the Inspector.</li>
          <li class="hm-checklist-item"><strong>Military HUD with UI Toolkit</strong> — dark navy/cyan aesthetic matching the asset's HUD palette. Azimuth bar, corner bracket lock-on animation, ammo strip, and live elevation readout.</li>
          <li class="hm-checklist-item"><strong>Procedural lock-on audio</strong> — beep frequency, duration, and interval are generated at runtime using 44100 Hz sine waves. No audio files needed.</li>
          <li class="hm-checklist-item"><strong>C# events</strong> — <span class="hm-code">OnFire</span>, <span class="hm-code">OnLockProgressChanged</span>, <span class="hm-code">OnTargetLocked</span>, <span class="hm-code">OnTargetLost</span> for easy integration.</li>
          <li class="hm-checklist-item"><strong>SendMessage-based damage</strong> — targets receive damage via <span class="hm-code">SendMessage("TakeDamage")</span> with <span class="hm-code">DontRequireReceiver</span>, so the missile works with any damage system.</li>
          <li class="hm-checklist-item"><strong>Turret + cannon rotation</strong> — Y-axis turret rotation and X-axis cannon elevation with configurable limits and exponential smoothing.</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item"><strong>Guida a Navigazione Proporzionale (PN)</strong> — algoritmo missilistico reale: accelerazione laterale = N' × velocità_di_chiusura × tasso_LOS. Il missile intercetta bersagli in movimento, non solo il punto di mira.</li>
          <li class="hm-checklist-item"><strong>4 fasi di volo distinte</strong> — Launch, Boost, Sustainer e Coast, ciascuna con valori indipendenti di spinta e resistenza configurabili nell'Inspector.</li>
          <li class="hm-checklist-item"><strong>HUD militare con UI Toolkit</strong> — estetica navy scuro/ciano che rispecchia la palette HUD dell'asset. Barra azimutale, animazione bracket di aggancio, striscia munizioni e lettura elevazione in tempo reale.</li>
          <li class="hm-checklist-item"><strong>Audio di aggancio procedurale</strong> — frequenza, durata e intervallo dei beep sono generati a runtime usando onde sinusoidali a 44100 Hz. Nessun file audio necessario.</li>
          <li class="hm-checklist-item"><strong>Eventi C#</strong> — <span class="hm-code">OnFire</span>, <span class="hm-code">OnLockProgressChanged</span>, <span class="hm-code">OnTargetLocked</span>, <span class="hm-code">OnTargetLost</span> per un'integrazione semplice.</li>
          <li class="hm-checklist-item"><strong>Danni basati su SendMessage</strong> — i bersagli ricevono danno tramite <span class="hm-code">SendMessage("TakeDamage")</span> con <span class="hm-code">DontRequireReceiver</span>, quindi il missile funziona con qualsiasi sistema di danno.</li>
          <li class="hm-checklist-item"><strong>Rotazione torretta + cannone</strong> — rotazione torretta sull'asse Y ed elevazione cannone sull'asse X con limiti configurabili e smoothing esponenziale.</li>
        </ul>
      </div>
    </div>

    <div class="hm-alert hm-alert-warning" v-if="locale === 'en'">
      <strong>UI Document — Panel Settings Required</strong>
      The HUD uses Unity's UI Toolkit. Make sure the <span class="hm-code">UIDocument</span> component on the
      launcher has a <strong>Panel Settings</strong> asset assigned in the Inspector. Without it the UI will
      not be rendered and Unity will throw an error. If you are using the included prefabs, the Panel Settings
      is already assigned — but if you set up a launcher from scratch or create a new scene, you must assign
      it manually (<strong>Assets &rarr; Create &rarr; UI Toolkit &rarr; Panel Settings Asset</strong>).
    </div>
    <div class="hm-alert hm-alert-warning" v-else>
      <strong>UI Document — Panel Settings Obbligatorio</strong>
      L'HUD utilizza UI Toolkit di Unity. Assicurati che il componente <span class="hm-code">UIDocument</span> sul
      lanciatore abbia un asset <strong>Panel Settings</strong> assegnato nell'Inspector. Senza di esso la UI non
      verrà visualizzata e Unity genererà un errore. Se usi i prefab inclusi, il Panel Settings è già assegnato —
      ma se configuri un lanciatore da zero o crei una nuova scena, devi assegnarlo manualmente
      (<strong>Assets &rarr; Create &rarr; UI Toolkit &rarr; Panel Settings Asset</strong>).
    </div>

    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Self-Contained System</strong>
      The asset is fully self-contained and works out of the box with the included demo scenes. Open
      <span class="hm-code">GroundDemo.unity</span>, press Play, and you have a working launcher station immediately.
      No additional setup is required to explore the system.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Sistema Autonomo</strong>
      L'asset è completamente autonomo e funziona immediatamente con le scene demo incluse. Apri
      <span class="hm-code">GroundDemo.unity</span>, premi Play e avrai subito una stazione di lancio funzionante.
      Nessuna configurazione aggiuntiva è necessaria per esplorare il sistema.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMOverview',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
