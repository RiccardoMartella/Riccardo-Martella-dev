<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>5.2</span>MISSILE LAUNCHER SCRIPT</h1>

    <!-- Lead paragraph -->
    <p class="hm-text-lead" v-if="locale === 'en'">
      <span class="hm-code">Scripts/Core/MissileLauncher.cs</span> — Manages the ammunition supply,
      fire rate, lock-on detection, and all targeting events. This script does <em>not</em> rotate
      the turret — that responsibility belongs to <span class="hm-code">LauncherController</span>.
      Think of this script as the fire-control computer. Supports two fire modes:
      <span class="hm-code">RocketList</span> (pre-placed missiles) and <span class="hm-code">Projectile</span> (instantiated on fire).
    </p>
    <p class="hm-text-lead" v-else>
      <span class="hm-code">Scripts/Core/MissileLauncher.cs</span> — Gestisce la scorta di munizioni,
      la cadenza di fuoco, il rilevamento dell'aggancio e tutti gli eventi di puntamento. Questo script <em>non</em> ruota
      la torretta — quella responsabilità appartiene a <span class="hm-code">LauncherController</span>.
      Pensa a questo script come al computer di controllo del fuoco. Supporta due modalità di sparo:
      <span class="hm-code">RocketList</span> (missili pre-posizionati) e <span class="hm-code">Projectile</span> (istanziati allo sparo).
    </p>

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
            <td><span class="hm-field-type">LauncherConfig</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Optional ScriptableObject config. When assigned, overrides all Inspector fields below. See <router-link :to="localePath('/homing-missile/docs/scriptable-object-config')">ScriptableObject Configuration</router-link>.</td>
            <td v-else>ScriptableObject config opzionale. Quando assegnato, sovrascrive tutti i campi Inspector sottostanti. Vedi <router-link :to="localePath('/homing-missile/docs/scriptable-object-config')">Configurazione ScriptableObject</router-link>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Fire Mode -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Fire Mode</div>
      <div class="hm-doc-section-title" v-else>Modalità di Sparo</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">fireMode</span></td>
            <td><span class="hm-field-type">FireMode</span></td>
            <td><span class="hm-field-default">RocketList</span></td>
            <td v-if="locale === 'en'">Selects the fire mode. <span class="hm-code">RocketList</span>: missiles are pre-placed in the hierarchy and consumed one by one (random selection). <span class="hm-code">Projectile</span>: a prefab is instantiated at the spawn point on each fire.</td>
            <td v-else>Seleziona la modalità di sparo. <span class="hm-code">RocketList</span>: i missili sono pre-posizionati nella gerarchia e consumati uno alla volta (selezione random). <span class="hm-code">Projectile</span>: un prefab viene istanziato al punto di spawn ad ogni sparo.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Inspector Fields — RocketList mode -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Rockets — RocketList Mode</div>
      <div class="hm-doc-section-title" v-else>Razzi — Modalità RocketList</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">rocketList</span></td>
            <td><span class="hm-field-type">List&lt;Transform&gt;</span></td>
            <td><span class="hm-field-default">—</span></td>
            <td v-if="locale === 'en'">Pre-placed missile Transforms in the launcher hierarchy. On fire, one is randomly selected, detached (<span class="hm-code">SetParent(null)</span>), and launched. Finite ammunition equal to the list count.</td>
            <td v-else>Transform dei missili pre-posizionati nella gerarchia del lanciatore. Allo sparo, uno viene selezionato casualmente, sganciato (<span class="hm-code">SetParent(null)</span>) e lanciato. Munizioni finite pari al conteggio della lista.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Inspector Fields — Projectile mode -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Projectile — Projectile Mode</div>
      <div class="hm-doc-section-title" v-else>Proiettile — Modalità Projectile</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">projectilePrefab</span></td>
            <td><span class="hm-field-type">GameObject</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Missile prefab instantiated on each fire when using Projectile mode.</td>
            <td v-else>Prefab del missile istanziato ad ogni sparo nella modalità Projectile.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">projectileSpawnPoint</span></td>
            <td><span class="hm-field-type">Transform</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">The Transform where projectiles are instantiated. Typically placed at the end of the cannon barrel.</td>
            <td v-else>Il Transform dove i proiettili vengono istanziati. Tipicamente posizionato alla fine della canna del cannone.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">maxAmmo</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td><span class="hm-field-default">-1</span></td>
            <td v-if="locale === 'en'">Maximum ammunition for Projectile mode. Set to <span class="hm-code">-1</span> for infinite ammo.</td>
            <td v-else>Munizioni massime per la modalità Projectile. Impostare a <span class="hm-code">-1</span> per munizioni infinite.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Launch & Fire Settings -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Launch &amp; Fire Settings</div>
      <div class="hm-doc-section-title" v-else>Impostazioni Lancio e Fuoco</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">rocketLaunchForce</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">100.0</span></td>
            <td v-if="locale === 'en'">Initial forward impulse (N) applied to the missile Rigidbody at the moment of launch.</td>
            <td v-else>Impulso in avanti iniziale (N) applicato al Rigidbody del missile al momento del lancio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">launchVelocityMultiplier</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td v-if="locale === 'en'">Multiplier applied to the launcher's own velocity before being added to the missile's initial velocity. Useful when the launcher itself is moving (e.g. on a vehicle). Set to 0.3 for 30% velocity inheritance.</td>
            <td v-else>Moltiplicatore applicato alla velocità propria del lanciatore prima di essere aggiunto alla velocità iniziale del missile. Utile quando il lanciatore stesso è in movimento (es. su un veicolo). Impostare a 0.3 per ereditare il 30% della velocità.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">fireRate</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.5</span></td>
            <td v-if="locale === 'en'">Shots per second. Higher values = faster fire rate.</td>
            <td v-else>Colpi al secondo. Valori più alti = cadenza di fuoco più rapida.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">recoilForce</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">20.0</span></td>
            <td v-if="locale === 'en'">Backward impulse applied to the launcher Rigidbody on each shot, simulating recoil.</td>
            <td v-else>Impulso all'indietro applicato al Rigidbody del lanciatore ad ogni sparo, simulando il rinculo.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Lock-On -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title">Lock-On</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">lockOnRange</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">400.0</span></td>
            <td v-if="locale === 'en'">Maximum distance in metres at which the launcher can begin locking on to a target.</td>
            <td v-else>Distanza massima in metri alla quale il lanciatore può iniziare ad agganciarsi a un bersaglio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lockOnAngle</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">18.0</span></td>
            <td v-if="locale === 'en'">Half-angle (degrees) of the lock-on cone in front of the cannon barrel. Targets inside this cone are eligible for lock-on.</td>
            <td v-else>Semi-angolo (gradi) del cono di aggancio davanti alla canna del cannone. I bersagli dentro questo cono sono idonei per l'aggancio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lockOnTime</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">2.0</span></td>
            <td v-if="locale === 'en'">Time in seconds required to achieve a full lock. Shorter values feel more arcade; longer values feel more tactical.</td>
            <td v-else>Tempo in secondi necessario per ottenere un aggancio completo. Valori più brevi danno una sensazione più arcade; valori più lunghi danno una sensazione più tattica.</td>
          </tr>
        </tbody>
      </table>

      <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
        <strong>Lock-On Behaviour Details</strong>
        <ul style="margin: 0.5rem 0 0 1rem; padding: 0;">
          <li><strong>Target priority:</strong> closest to screen centre (crosshair) wins.</li>
          <li><strong>Occlusion:</strong> uses <span class="hm-code">RaycastAll</span> and ignores all colliders on the launcher's own root hierarchy.</li>
          <li><strong>Hysteresis:</strong> the currently tracked target gets a 50% wider cone to prevent flickering when near the edge.</li>
          <li><strong>Grace period:</strong> 150 ms delay before actually losing a target — covers micro-dropouts.</li>
        </ul>
      </div>
      <div class="hm-alert hm-alert-info" v-else>
        <strong>Dettagli Comportamento Lock-On</strong>
        <ul style="margin: 0.5rem 0 0 1rem; padding: 0;">
          <li><strong>Priorità target:</strong> il più vicino al centro schermo (mirino) vince.</li>
          <li><strong>Occlusione:</strong> usa <span class="hm-code">RaycastAll</span> e ignora tutti i collider sulla gerarchia root del lanciatore.</li>
          <li><strong>Isteresi:</strong> il target attualmente tracciato ha un cono 50% più largo per prevenire il flickering vicino al bordo.</li>
          <li><strong>Grace period:</strong> ritardo di 150 ms prima di perdere effettivamente il target — copre i micro-dropout.</li>
        </ul>
      </div>
    </div>

    <!-- Lock-On Audio -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Lock-On Audio (Procedural)</div>
      <div class="hm-doc-section-title" v-else>Audio Lock-On (Procedurale)</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">beepFrequency</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">440.0</span></td>
            <td v-if="locale === 'en'">Frequency (Hz) of the procedural lock-on beep tone. Generated via <span class="hm-code">AudioClip.Create</span> with a sine wave — no audio files required.</td>
            <td v-else>Frequenza (Hz) del tono beep procedurale di aggancio. Generato tramite <span class="hm-code">AudioClip.Create</span> con un'onda sinusoidale — nessun file audio necessario.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">beepDuration</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.08</span></td>
            <td v-if="locale === 'en'">Duration of each individual beep in seconds.</td>
            <td v-else>Durata di ogni singolo beep in secondi.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">beepVolume</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.5</span></td>
            <td v-if="locale === 'en'">Volume of the beep audio (0–1).</td>
            <td v-else>Volume dell'audio beep (0–1).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">beepIntervalMax</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.3</span></td>
            <td v-if="locale === 'en'">Beep interval at the start of lock-on (lock progress = 0). Slow beeping.</td>
            <td v-else>Intervallo del beep all'inizio dell'aggancio (progresso aggancio = 0). Beep lento.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">beepIntervalMin</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.05</span></td>
            <td v-if="locale === 'en'">Beep interval when lock progress approaches 1. Fast, urgent beeping.</td>
            <td v-else>Intervallo del beep quando il progresso di aggancio si avvicina a 1. Beep veloce e urgente.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lockedToneFrequency</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">600.0</span></td>
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
            <td><span class="hm-field-type">Action</span></td>
            <td v-if="locale === 'en'">Fired each time a missile is launched.</td>
            <td v-else>Emesso ogni volta che un missile viene lanciato.</td>
          </tr>
          <tr class="hm-event-row">
            <td>OnLockProgressChanged</td>
            <td><span class="hm-field-type">Action&lt;Transform, float&gt;</span></td>
            <td v-if="locale === 'en'">Fired every frame while a target is in the lock-on cone. Parameters: target Transform and LockProgress (0–1). Used by the HUD to animate the bracket and progress bar.</td>
            <td v-else>Emesso ogni frame mentre un bersaglio è nel cono di aggancio. Parametri: Transform del bersaglio e LockProgress (0–1). Usato dall'HUD per animare il bracket e la barra di progresso.</td>
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

    <!-- Public Methods -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Public Methods</div>
      <div class="hm-doc-section-title" v-else>Metodi Pubblici</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Method</th><th>Signature</th><th>Description</th></tr>
          <tr v-else><th>Metodo</th><th>Firma</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">Enter</span></td>
            <td><span class="hm-field-type">void Enter()</span></td>
            <td v-if="locale === 'en'">Enters fire-control mode. Resets lock state and enables targeting.</td>
            <td v-else>Entra in modalità controllo fuoco. Resetta lo stato di aggancio e abilita il puntamento.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Exit</span></td>
            <td><span class="hm-field-type">void Exit()</span></td>
            <td v-if="locale === 'en'">Exits fire-control mode. Stops lock-on audio and disables targeting.</td>
            <td v-else>Esce dalla modalità controllo fuoco. Ferma l'audio di aggancio e disabilita il puntamento.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Fire</span></td>
            <td><span class="hm-field-type">void Fire()</span></td>
            <td v-if="locale === 'en'">Fires a missile if cooldown has elapsed and ammo is available. Aim direction is calculated from the camera centre via raycast.</td>
            <td v-else>Spara un missile se il cooldown è trascorso e le munizioni sono disponibili. La direzione di mira è calcolata dal centro della camera tramite raycast.</td>
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
            <td v-if="locale === 'en'">True when LockProgress &ge; 1 and a target is held.</td>
            <td v-else>True quando LockProgress &ge; 1 e un bersaglio è mantenuto.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">RocketCount</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td v-if="locale === 'en'">Number of missiles remaining. In RocketList mode returns <span class="hm-code">rocketList.Count</span>; in Projectile mode returns <span class="hm-code">currentAmmo</span>.</td>
            <td v-else>Numero di missili rimanenti. In modalità RocketList restituisce <span class="hm-code">rocketList.Count</span>; in modalità Projectile restituisce <span class="hm-code">currentAmmo</span>.</td>
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
import { useLocalePath } from '@/composables/useLocalePath'

export default {
  name: 'HMMissileLauncherScript',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { locale, localePath }
  }
}
</script>
