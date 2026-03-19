<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>5.2</span>MISSILE LAUNCHER SCRIPT</h1>

    <!-- Lead paragraph -->
    <p class="hm-text-lead" v-if="locale === 'en'">
      <span class="hm-code">Scripts/Core/MissileLauncher.cs</span> — Manages the ammunition supply,
      fire rate, lock-on detection, and all targeting events. This script does <em>not</em> rotate
      the turret — that responsibility belongs to <span class="hm-code">LauncherController</span>.
      Think of this script as the fire-control computer.
    </p>
    <p class="hm-text-lead" v-else>
      <span class="hm-code">Scripts/Core/MissileLauncher.cs</span> — Gestisce la scorta di munizioni,
      la cadenza di fuoco, il rilevamento dell'aggancio e tutti gli eventi di puntamento. Questo script <em>non</em> ruota
      la torretta — quella responsabilità appartiene a <span class="hm-code">LauncherController</span>.
      Pensa a questo script come al computer di controllo del fuoco.
    </p>

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
          <!-- rocketList -->
          <tr>
            <td><span class="hm-field-name">rocketList</span></td>
            <td><span class="hm-field-type">List&lt;GameObject&gt;</span></td>
            <td><span class="hm-field-default">—</span></td>
            <td v-if="locale === 'en'">Ordered list of missile GameObjects in the scene (pre-placed in the hierarchy or dynamically populated). They are consumed in order on each fire.</td>
            <td v-else>Lista ordinata dei GameObject missile nella scena (pre-posizionati nella gerarchia o popolati dinamicamente). Vengono consumati in ordine ad ogni sparo.</td>
          </tr>
          <!-- rocketLaunchForce -->
          <tr>
            <td><span class="hm-field-name">rocketLaunchForce</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">30.0</span></td>
            <td v-if="locale === 'en'">Initial forward impulse (N) applied to the missile Rigidbody at the moment of launch.</td>
            <td v-else>Impulso in avanti iniziale (N) applicato al Rigidbody del missile al momento del lancio.</td>
          </tr>
          <!-- launchVelocityMultiplier -->
          <tr>
            <td><span class="hm-field-name">launchVelocityMultiplier</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td v-if="locale === 'en'">Multiplier applied to the launcher's own velocity before being added to the missile's initial velocity. Useful when the launcher itself is moving.</td>
            <td v-else>Moltiplicatore applicato alla velocità propria del lanciatore prima di essere aggiunto alla velocità iniziale del missile. Utile quando il lanciatore stesso è in movimento.</td>
          </tr>
          <!-- fireRate -->
          <tr>
            <td><span class="hm-field-name">fireRate</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.5</span></td>
            <td v-if="locale === 'en'">Minimum time in seconds between consecutive shots.</td>
            <td v-else>Tempo minimo in secondi tra spari consecutivi.</td>
          </tr>
          <!-- recoilForce -->
          <tr>
            <td><span class="hm-field-name">recoilForce</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">50.0</span></td>
            <td v-if="locale === 'en'">Backward impulse applied to the launcher Rigidbody on each shot, simulating recoil.</td>
            <td v-else>Impulso all'indietro applicato al Rigidbody del lanciatore ad ogni sparo, simulando il rinculo.</td>
          </tr>
          <!-- lockOnRange -->
          <tr>
            <td><span class="hm-field-name">lockOnRange</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">200.0</span></td>
            <td v-if="locale === 'en'">Maximum distance in metres at which the launcher can begin locking on to a target.</td>
            <td v-else>Distanza massima in metri alla quale il lanciatore può iniziare ad agganciarsi a un bersaglio.</td>
          </tr>
          <!-- lockOnAngle -->
          <tr>
            <td><span class="hm-field-name">lockOnAngle</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">30.0</span></td>
            <td v-if="locale === 'en'">Full cone angle (degrees) in front of the cannon barrel within which targets are eligible for lock-on.</td>
            <td v-else>Angolo del cono completo (gradi) davanti alla canna del cannone entro il quale i bersagli sono idonei per l'aggancio.</td>
          </tr>
          <!-- lockOnTime -->
          <tr>
            <td><span class="hm-field-name">lockOnTime</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">2.0</span></td>
            <td v-if="locale === 'en'">Time in seconds required to achieve a full lock. Shorter values feel more arcade; longer values feel more tactical.</td>
            <td v-else>Tempo in secondi necessario per ottenere un aggancio completo. Valori più brevi danno una sensazione più arcade; valori più lunghi danno una sensazione più tattica.</td>
          </tr>
          <!-- beepFrequency -->
          <tr>
            <td><span class="hm-field-name">beepFrequency</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">880.0</span></td>
            <td v-if="locale === 'en'">Frequency (Hz) of the procedural lock-on beep tone. 880 Hz is a high A note — audible and attention-grabbing.</td>
            <td v-else>Frequenza (Hz) del tono beep procedurale di aggancio. 880 Hz è un La alto — udibile e che attira l'attenzione.</td>
          </tr>
          <!-- beepDuration -->
          <tr>
            <td><span class="hm-field-name">beepDuration</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.08</span></td>
            <td v-if="locale === 'en'">Duration of each individual beep in seconds.</td>
            <td v-else>Durata di ogni singolo beep in secondi.</td>
          </tr>
          <!-- beepVolume -->
          <tr>
            <td><span class="hm-field-name">beepVolume</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.5</span></td>
            <td v-if="locale === 'en'">Volume of the beep audio (0–1).</td>
            <td v-else>Volume dell'audio beep (0–1).</td>
          </tr>
          <!-- beepIntervalMax -->
          <tr>
            <td><span class="hm-field-name">beepIntervalMax</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.6</span></td>
            <td v-if="locale === 'en'">Beep interval at the start of lock-on (lock progress = 0). Slow beeping.</td>
            <td v-else>Intervallo del beep all'inizio dell'aggancio (progresso aggancio = 0). Beep lento.</td>
          </tr>
          <!-- beepIntervalMin -->
          <tr>
            <td><span class="hm-field-name">beepIntervalMin</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.08</span></td>
            <td v-if="locale === 'en'">Beep interval when lock progress approaches 1. Fast, urgent beeping.</td>
            <td v-else>Intervallo del beep quando il progresso di aggancio si avvicina a 1. Beep veloce e urgente.</td>
          </tr>
          <!-- lockedToneFrequency -->
          <tr>
            <td><span class="hm-field-name">lockedToneFrequency</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1200.0</span></td>
            <td v-if="locale === 'en'">Frequency (Hz) of the continuous tone played once a lock is acquired.</td>
            <td v-else>Frequenza (Hz) del tono continuo riprodotto una volta acquisito l'aggancio.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Public Events -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Public Events</div>
      <div class="hm-doc-section-title" v-else>Eventi Pubblici</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Event</th><th>Signature</th><th>Description</th></tr>
          <tr v-else><th>Evento</th><th>Firma</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr class="hm-event-row">
            <td>OnFire</td>
            <td><span class="hm-field-type">Action&lt;GameObject&gt;</span></td>
            <td v-if="locale === 'en'">Fired each time a missile is launched. Parameter is the missile GameObject.</td>
            <td v-else>Emesso ogni volta che un missile viene lanciato. Il parametro è il GameObject del missile.</td>
          </tr>
          <tr class="hm-event-row">
            <td>OnLockProgressChanged</td>
            <td><span class="hm-field-type">Action&lt;float&gt;</span></td>
            <td v-if="locale === 'en'">Fired every frame while a target is in the lock-on cone. Parameter is LockProgress (0–1). Used by the HUD to animate the bracket.</td>
            <td v-else>Emesso ogni frame mentre un bersaglio è nel cono di aggancio. Il parametro è LockProgress (0–1). Usato dall'HUD per animare la parentesi.</td>
          </tr>
          <tr class="hm-event-row">
            <td>OnTargetLocked</td>
            <td><span class="hm-field-type">Action&lt;Transform&gt;</span></td>
            <td v-if="locale === 'en'">Fired once when LockProgress reaches 1.0. Parameter is the locked target's Transform.</td>
            <td v-else>Emesso una volta quando LockProgress raggiunge 1.0. Il parametro è il Transform del bersaglio agganciato.</td>
          </tr>
          <tr class="hm-event-row">
            <td>OnTargetLost</td>
            <td><span class="hm-field-type">Action</span></td>
            <td v-if="locale === 'en'">Fired when the current target leaves the lock-on cone, is destroyed, or is out of range. HUD resets to searching state.</td>
            <td v-else>Emesso quando il bersaglio corrente esce dal cono di aggancio, viene distrutto o è fuori portata. L'HUD si resetta allo stato di ricerca.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Public Read-Only Properties -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Public Read-Only Properties</div>
      <div class="hm-doc-section-title" v-else>Proprietà Pubbliche in Sola Lettura</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Property</th><th>Type</th><th>Description</th></tr>
          <tr v-else><th>Proprietà</th><th>Tipo</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">CurrentTarget</span></td>
            <td><span class="hm-field-type">Transform</span></td>
            <td v-if="locale === 'en'">The transform of the current lock-on target, or null if no target is being tracked.</td>
            <td v-else>Il Transform del bersaglio di aggancio corrente, o null se nessun bersaglio è in fase di tracciamento.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">LockProgress</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td v-if="locale === 'en'">Current lock-on progress from 0 (no lock) to 1 (full lock).</td>
            <td v-else>Progresso di aggancio corrente da 0 (nessun aggancio) a 1 (aggancio completo).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">IsLocked</span></td>
            <td><span class="hm-field-type">bool</span></td>
            <td v-if="locale === 'en'">True when LockProgress == 1 and a target is held.</td>
            <td v-else>True quando LockProgress == 1 e un bersaglio è mantenuto.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">RocketCount</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td v-if="locale === 'en'">Number of missiles remaining.</td>
            <td v-else>Numero di missili rimanenti.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">InitialRocketCount</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td v-if="locale === 'en'">Total missiles at scene start. Used by the HUD to calculate the ammo strip display.</td>
            <td v-else>Missili totali all'inizio della scena. Usato dall'HUD per calcolare la visualizzazione della striscia munizioni.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">CooldownProgress</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td v-if="locale === 'en'">Fire-rate cooldown progress from 0 (weapon ready) to 1 (on cooldown). Exposed for HUD feedback.</td>
            <td v-else>Progresso del cooldown della cadenza di fuoco da 0 (arma pronta) a 1 (in cooldown). Esposto per il feedback dell'HUD.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMMissileLauncherScript',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
