<template>
  <div class="hm-doc-page">
    <h1 v-if="locale === 'en'" class="hm-doc-title"><span>5.1</span>HOMING MISSILE SCRIPT</h1>
    <h1 v-else class="hm-doc-title"><span>5.1</span>SCRIPT HOMING MISSILE</h1>

    <p v-if="locale === 'en'" class="hm-text-lead">
      The missile projectile component — <span class="hm-code">Scripts/Core/HomingMissile.cs</span>.
      Attach to the missile prefab root. A <span class="hm-code">Rigidbody</span> is automatically
      added via <span class="hm-code">[RequireComponent(typeof(Rigidbody))]</span> and configured
      at runtime by <span class="hm-code">Initialize()</span>.
    </p>
    <p v-else class="hm-text-lead">
      Il componente proiettile missile — <span class="hm-code">Scripts/Core/HomingMissile.cs</span>.
      Collega al root del prefab del missile. Un <span class="hm-code">Rigidbody</span> viene aggiunto
      automaticamente tramite <span class="hm-code">[RequireComponent(typeof(Rigidbody))]</span> e configurato
      a runtime da <span class="hm-code">Initialize()</span>.
    </p>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Guidance Algorithm — Proportional Navigation (PN)</strong>
        The lateral acceleration applied each FixedUpdate is:<br>
        <span class="hm-code">a_lateral = N' &times; V_closing &times; &omega;_LOS</span><br>
        where N' is <span class="hm-code">navigationConstant</span>, V_closing is the relative closing
        speed along the line-of-sight, and &omega;_LOS is the instantaneous angular rate of the
        line-of-sight vector. This ensures the missile intercepts moving targets rather than
        simply chasing them.
      </template>
      <template v-else>
        <strong>Algoritmo di Guida — Navigazione Proporzionale (PN)</strong>
        L'accelerazione laterale applicata ad ogni FixedUpdate è:<br>
        <span class="hm-code">a_lateral = N' &times; V_closing &times; &omega;_LOS</span><br>
        dove N' è <span class="hm-code">navigationConstant</span>, V_closing è la velocità relativa di
        avvicinamento lungo la linea di vista, e &omega;_LOS è il tasso angolare istantaneo del vettore
        della linea di vista. Questo assicura che il missile intercetti bersagli in movimento anziché
        semplicemente inseguirli.
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
            <td><span class="hm-field-type">MissileConfig</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Optional ScriptableObject config. When assigned, overrides all Inspector fields below. See <router-link :to="localePath('/homing-missile/docs/scriptable-object-config')">ScriptableObject Configuration</router-link>.</td>
            <td v-else>ScriptableObject config opzionale. Quando assegnato, sovrascrive tutti i campi Inspector sottostanti. Vedi <router-link :to="localePath('/homing-missile/docs/scriptable-object-config')">Configurazione ScriptableObject</router-link>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Guidance — Proportional Navigation</div>
      <div v-else class="hm-doc-section-title">Guida — Navigazione Proporzionale</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">navigationConstant</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">4.0</span></td>
            <td v-if="locale === 'en'">The PN gain (N'). Higher values produce more aggressive lead angle corrections. Typical range 3–5.</td>
            <td v-else>Il guadagno PN (N'). Valori più alti producono correzioni dell'angolo di anticipo più aggressive. Intervallo tipico 3–5.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">maxLateralG</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">30.0</span></td>
            <td v-if="locale === 'en'">Maximum lateral acceleration in m/s² the guidance can command. Limits the tightness of manoeuvres.</td>
            <td v-else>Accelerazione laterale massima in m/s² che la guida può comandare. Limita l'intensità delle manovre.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">seekerFOV</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">45.0</span></td>
            <td v-if="locale === 'en'">Half-angle (degrees) of the seeker head's field of view. If the target moves outside this cone, guidance is suspended.</td>
            <td v-else>Semi-angolo (gradi) del campo visivo della testina di ricerca. Se il bersaglio esce da questo cono, la guida viene sospesa.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">seekerRange</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">800.0</span></td>
            <td v-if="locale === 'en'">Maximum range in metres at which the seeker can track a target.</td>
            <td v-else>Portata massima in metri alla quale la testina di ricerca può tracciare un bersaglio.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Engine</div>
      <div v-else class="hm-doc-section-title">Motore</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">launchPhaseTime</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.3</span></td>
            <td v-if="locale === 'en'">Duration of the Launch phase in seconds. No guidance is applied during this phase.</td>
            <td v-else>Durata della fase Launch in secondi. Nessuna guida viene applicata durante questa fase.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">boostThrust</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">600.0</span></td>
            <td v-if="locale === 'en'">Forward force (N) applied during the Boost phase.</td>
            <td v-else>Forza in avanti (N) applicata durante la fase Boost.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">boostDuration</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.5</span></td>
            <td v-if="locale === 'en'">Duration of the Boost phase in seconds.</td>
            <td v-else>Durata della fase Boost in secondi.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">sustainerThrust</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">200.0</span></td>
            <td v-if="locale === 'en'">Forward force (N) during the Sustainer phase — lower than boost, keeps the missile at cruise speed.</td>
            <td v-else>Forza in avanti (N) durante la fase Sustainer — inferiore al boost, mantiene il missile alla velocità di crociera.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">sustainerDuration</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">4.0</span></td>
            <td v-if="locale === 'en'">Duration of the Sustainer phase in seconds.</td>
            <td v-else>Durata della fase Sustainer in secondi.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">missileDrag</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">0.05</span></td>
            <td v-if="locale === 'en'">Rigidbody drag applied to the missile. Set at runtime by Initialize().</td>
            <td v-else>Drag del Rigidbody applicato al missile. Impostato a runtime da Initialize().</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Warhead</div>
      <div v-else class="hm-doc-section-title">Testata</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">proximityRadius</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">3.0</span></td>
            <td v-if="locale === 'en'">Radius of the proximity fuze sphere. Detonation triggers when a target collider enters this sphere.</td>
            <td v-else>Raggio della sfera della spoletta di prossimità. La detonazione si attiva quando un collider bersaglio entra in questa sfera.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionRadius</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">8.0</span></td>
            <td v-if="locale === 'en'">Radius of the damage and force blast on detonation.</td>
            <td v-else>Raggio dell'onda d'urto e del danno alla detonazione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionForce</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">500.0</span></td>
            <td v-if="locale === 'en'">Physics impulse (N) applied to all Rigidbodies within explosionRadius.</td>
            <td v-else>Impulso fisico (N) applicato a tutti i Rigidbody entro explosionRadius.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionDamage</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">100.0</span></td>
            <td v-if="locale === 'en'">Damage value passed to SendMessage("TakeDamage") on all objects within explosionRadius.</td>
            <td v-else>Valore di danno passato a SendMessage("TakeDamage") su tutti gli oggetti entro explosionRadius.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">lifetime</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">12.0</span></td>
            <td v-if="locale === 'en'">Maximum flight time in seconds before the missile self-destructs.</td>
            <td v-else>Tempo massimo di volo in secondi prima che il missile si autodistrugga.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Effects</div>
      <div v-else class="hm-doc-section-title">Effetti</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">explosionPrefab</span></td>
            <td><span class="hm-field-type">GameObject</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Particle effect prefab instantiated at the detonation point.</td>
            <td v-else>Prefab dell'effetto particellare istanziato nel punto di detonazione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">trailEffectPrefab</span></td>
            <td><span class="hm-field-type">GameObject</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Optional exhaust trail effect attached to the missile on launch.</td>
            <td v-else>Effetto scia di scarico opzionale collegato al missile al lancio.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title">Audio</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr v-else><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">launchSound</span></td>
            <td><span class="hm-field-type">AudioClip</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">One-shot sound played when the missile launches.</td>
            <td v-else>Suono one-shot riprodotto al lancio del missile.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">launchVolume</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td v-if="locale === 'en'">Volume of the launch sound (0–1).</td>
            <td v-else>Volume del suono di lancio (0–1).</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">launchMinDistance</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">5.0</span></td>
            <td v-if="locale === 'en'">3D audio min distance for launch sound.</td>
            <td v-else>Distanza minima audio 3D per il suono di lancio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">launchMaxDistance</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">50.0</span></td>
            <td v-if="locale === 'en'">3D audio max distance for launch sound.</td>
            <td v-else>Distanza massima audio 3D per il suono di lancio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">travelAudioSource</span></td>
            <td><span class="hm-field-type">AudioSource</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">Looping AudioSource for in-flight motor sound. Started on launch and stopped on detonation.</td>
            <td v-else>AudioSource in loop per il suono del motore in volo. Avviato al lancio e fermato alla detonazione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionSound</span></td>
            <td><span class="hm-field-type">AudioClip</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td v-if="locale === 'en'">One-shot sound played at detonation.</td>
            <td v-else>Suono one-shot riprodotto alla detonazione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionVolume</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td v-if="locale === 'en'">Volume of the explosion sound.</td>
            <td v-else>Volume del suono di esplosione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionMinDistance</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">10.0</span></td>
            <td v-if="locale === 'en'">3D audio min distance for explosion sound.</td>
            <td v-else>Distanza minima audio 3D per il suono di esplosione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionMaxDistance</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">100.0</span></td>
            <td v-if="locale === 'en'">3D audio max distance for explosion sound.</td>
            <td v-else>Distanza massima audio 3D per il suono di esplosione.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Flight Phases</div>
      <div v-else class="hm-doc-section-title">Fasi di Volo</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'"><th>Phase</th><th>Duration</th><th>Thrust</th><th>Guidance</th><th>Description</th></tr>
          <tr v-else><th>Fase</th><th>Durata</th><th>Spinta</th><th>Guida</th><th>Descrizione</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">Launch</span></td>
            <td>launchPhaseTime</td>
            <td v-if="locale === 'en'">launchForce (initial impulse)</td>
            <td v-else>launchForce (impulso iniziale)</td>
            <td style="color: rgba(220,50,40,0.8)">Off</td>
            <td v-if="locale === 'en'">Initial impulse from the launcher. The missile travels straight to clear the launcher before guidance activates.</td>
            <td v-else>Impulso iniziale dal lanciatore. Il missile viaggia in linea retta per allontanarsi dal lanciatore prima che la guida si attivi.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Boost</span></td>
            <td>boostDuration</td>
            <td>boostThrust</td>
            <td v-if="locale === 'en'" style="color: #28DC64">Active</td>
            <td v-else style="color: #28DC64">Attiva</td>
            <td v-if="locale === 'en'">High-thrust acceleration phase. PN guidance steers the missile toward the intercept point.</td>
            <td v-else>Fase di accelerazione ad alta spinta. La guida PN dirige il missile verso il punto di intercettazione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Sustainer</span></td>
            <td>sustainerDuration</td>
            <td>sustainerThrust</td>
            <td v-if="locale === 'en'" style="color: #28DC64">Active</td>
            <td v-else style="color: #28DC64">Attiva</td>
            <td v-if="locale === 'en'">Lower-thrust cruise phase maintains speed while guidance continues to correct course.</td>
            <td v-else>La fase di crociera a bassa spinta mantiene la velocità mentre la guida continua a correggere la rotta.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Coast</span></td>
            <td v-if="locale === 'en'">Until lifetime expires</td>
            <td v-else>Fino alla scadenza del lifetime</td>
            <td v-if="locale === 'en'">None</td>
            <td v-else>Nessuna</td>
            <td v-if="locale === 'en'" style="color: #28DC64">Active</td>
            <td v-else style="color: #28DC64">Attiva</td>
            <td v-if="locale === 'en'">Motor burnout. The missile decelerates under drag while guidance still applies lateral corrections.</td>
            <td v-else>Esaurimento motore. Il missile decelera per attrito mentre la guida applica ancora correzioni laterali.</td>
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
  name: 'HMHomingMissileScript',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { locale, localePath }
  }
}
</script>
