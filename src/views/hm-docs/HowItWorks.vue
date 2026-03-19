<template>
  <div class="hm-doc-page">
    <h1 v-if="locale === 'en'" class="hm-doc-title"><span>04</span>HOW IT WORKS</h1>
    <h1 v-else class="hm-doc-title"><span>04</span>COME FUNZIONA</h1>

    <p v-if="locale === 'en'" class="hm-text-lead">
      Complete data flow from scene start to missile detonation. Understanding this sequence
      will help you integrate the system with your own project and extend it beyond the
      out-of-the-box configuration.
    </p>
    <p v-else class="hm-text-lead">
      Flusso dati completo dall'avvio della scena alla detonazione del missile. Comprendere questa sequenza
      ti aiuterà a integrare il sistema con il tuo progetto ed estenderlo oltre la configurazione predefinita.
    </p>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Full System Flow</div>
      <div v-else class="hm-doc-section-title">Flusso Completo del Sistema</div>
      <ol class="hm-step-list">
        <li class="hm-step-item">
          <span class="hm-step-num">1</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Scene Start:</strong> <span class="hm-code">PlayerController.Start()</span> finds the GameObject tagged
            <span class="hm-code">"Rocket"</span> and retrieves references to both
            <span class="hm-code">LauncherController</span> and <span class="hm-code">MissileLauncher</span>.
            It also locates the camera rig transforms via the
            <span class="hm-code">"CameraLookRocket"</span> and <span class="hm-code">"CameraTransformRocket"</span> tags.
          </span>
          <span v-else class="hm-step-text">
            <strong>Avvio Scena:</strong> <span class="hm-code">PlayerController.Start()</span> trova il GameObject taggato
            <span class="hm-code">"Rocket"</span> e recupera i riferimenti a entrambi
            <span class="hm-code">LauncherController</span> e <span class="hm-code">MissileLauncher</span>.
            Individua inoltre i transform del rig della camera tramite i tag
            <span class="hm-code">"CameraLookRocket"</span> e <span class="hm-code">"CameraTransformRocket"</span>.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">2</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Target Discovery:</strong> <span class="hm-code">MissileLauncher.Start()</span> calls
            <span class="hm-code">GameObject.FindGameObjectsWithTag("target")</span> and caches the result
            as the list of valid lock-on candidates. Destroyed targets are automatically removed from this list.
          </span>
          <span v-else class="hm-step-text">
            <strong>Scoperta Bersagli:</strong> <span class="hm-code">MissileLauncher.Start()</span> chiama
            <span class="hm-code">GameObject.FindGameObjectsWithTag("target")</span> e memorizza il risultato
            come lista dei candidati di aggancio validi. I bersagli distrutti vengono automaticamente rimossi da questa lista.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">3</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Player Input:</strong> Each frame, <span class="hm-code">PlayerController</span> reads the
            <span class="hm-code">Look</span> action from the <span class="hm-code">"Rocket"</span> Input Action Map
            and forwards the delta as a 2D vector to <span class="hm-code">LauncherController.SetLookInput()</span>.
          </span>
          <span v-else class="hm-step-text">
            <strong>Input Giocatore:</strong> Ad ogni frame, <span class="hm-code">PlayerController</span> legge l'azione
            <span class="hm-code">Look</span> dalla Input Action Map <span class="hm-code">"Rocket"</span>
            e inoltra il delta come vettore 2D a <span class="hm-code">LauncherController.SetLookInput()</span>.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">4</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Turret Rotation:</strong> <span class="hm-code">LauncherController.Update()</span> applies
            exponential smoothing to the look input and rotates the turret GameObject around Y and the cannon
            around X, clamped to <span class="hm-code">minElevation</span> / <span class="hm-code">maxElevation</span>.
          </span>
          <span v-else class="hm-step-text">
            <strong>Rotazione Torretta:</strong> <span class="hm-code">LauncherController.Update()</span> applica
            uno smoothing esponenziale all'input di vista e ruota il GameObject della torretta sull'asse Y e il cannone
            sull'asse X, limitato a <span class="hm-code">minElevation</span> / <span class="hm-code">maxElevation</span>.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">5</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Lock-On Scan:</strong> Every frame, <span class="hm-code">MissileLauncher</span> checks all
            cached targets. For each candidate it tests distance (&le; <span class="hm-code">lockOnRange</span>)
            and angle from the cannon forward vector (&le; <span class="hm-code">lockOnAngle</span> / 2).
            The nearest valid candidate becomes the <span class="hm-code">CurrentTarget</span>.
          </span>
          <span v-else class="hm-step-text">
            <strong>Scansione Aggancio:</strong> Ad ogni frame, <span class="hm-code">MissileLauncher</span> controlla tutti
            i bersagli memorizzati. Per ogni candidato verifica la distanza (&le; <span class="hm-code">lockOnRange</span>)
            e l'angolo dal vettore forward del cannone (&le; <span class="hm-code">lockOnAngle</span> / 2).
            Il candidato valido più vicino diventa il <span class="hm-code">CurrentTarget</span>.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">6</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Lock Progress &amp; Audio:</strong> While a target is in the cone,
            <span class="hm-code">LockProgress</span> (0–1) accumulates over
            <span class="hm-code">lockOnTime</span> seconds. A procedural beep tone is generated
            using sine waves at <span class="hm-code">beepFrequency</span> Hz; the interval shrinks
            as <span class="hm-code">LockProgress</span> increases. <span class="hm-code">OnLockProgressChanged</span>
            fires every frame with the new value, driving the HUD bracket animation.
          </span>
          <span v-else class="hm-step-text">
            <strong>Progresso Aggancio &amp; Audio:</strong> Mentre un bersaglio è nel cono,
            <span class="hm-code">LockProgress</span> (0–1) si accumula in
            <span class="hm-code">lockOnTime</span> secondi. Un tono di beep procedurale viene generato
            usando onde sinusoidali a <span class="hm-code">beepFrequency</span> Hz; l'intervallo si riduce
            man mano che <span class="hm-code">LockProgress</span> aumenta. <span class="hm-code">OnLockProgressChanged</span>
            viene emesso ad ogni frame con il nuovo valore, pilotando l'animazione delle parentesi HUD.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">7</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Lock Acquired:</strong> When <span class="hm-code">LockProgress</span> reaches 1.0,
            <span class="hm-code">IsLocked</span> becomes true and <span class="hm-code">OnTargetLocked</span> fires.
            A continuous tone replaces the beeps. The HUD brackets snap to their locked size and begin
            rotating at <span class="hm-code">lockBracketRotation</span> deg/s.
          </span>
          <span v-else class="hm-step-text">
            <strong>Aggancio Acquisito:</strong> Quando <span class="hm-code">LockProgress</span> raggiunge 1.0,
            <span class="hm-code">IsLocked</span> diventa true e <span class="hm-code">OnTargetLocked</span> viene emesso.
            Un tono continuo sostituisce i beep. Le parentesi HUD si bloccano alla dimensione di aggancio e iniziano
            a ruotare a <span class="hm-code">lockBracketRotation</span> gradi/s.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">8</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Fire:</strong> The player presses the <span class="hm-code">Attack</span> action.
            <span class="hm-code">MissileLauncher</span> instantiates the next missile prefab from
            <span class="hm-code">rocketList</span>, applies <span class="hm-code">rocketLaunchForce</span>
            forward, and calls <span class="hm-code">HomingMissile.Initialize(currentTarget)</span>.
            <span class="hm-code">OnFire</span> fires. Recoil force is applied to the launcher Rigidbody.
          </span>
          <span v-else class="hm-step-text">
            <strong>Fuoco:</strong> Il giocatore preme l'azione <span class="hm-code">Attack</span>.
            <span class="hm-code">MissileLauncher</span> istanzia il prossimo prefab del missile da
            <span class="hm-code">rocketList</span>, applica <span class="hm-code">rocketLaunchForce</span>
            in avanti e chiama <span class="hm-code">HomingMissile.Initialize(currentTarget)</span>.
            <span class="hm-code">OnFire</span> viene emesso. La forza di rinculo viene applicata al Rigidbody del lanciatore.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">9</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Missile Flight:</strong> <span class="hm-code">HomingMissile.FixedUpdate()</span>
            runs the four-phase engine (Launch &rarr; Boost &rarr; Sustainer &rarr; Coast) and, once in the
            Boost phase, applies Proportional Navigation lateral acceleration:
            <span class="hm-code">a_lateral = N' &times; V_closing &times; &omega;_LOS</span>.
            The missile steers toward the predicted intercept point.
          </span>
          <span v-else class="hm-step-text">
            <strong>Volo del Missile:</strong> <span class="hm-code">HomingMissile.FixedUpdate()</span>
            esegue il motore a quattro fasi (Launch &rarr; Boost &rarr; Sustainer &rarr; Coast) e, una volta nella
            fase Boost, applica l'accelerazione laterale di Navigazione Proporzionale:
            <span class="hm-code">a_lateral = N' &times; V_closing &times; &omega;_LOS</span>.
            Il missile vira verso il punto di intercettazione previsto.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">10</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Detonation:</strong> On every frame, <span class="hm-code">HomingMissile</span> checks
            whether any collider within <span class="hm-code">proximityRadius</span> (excluding the launcher's
            own colliders) belongs to a target. On detection — or on direct collision — it calls
            <span class="hm-code">Explode()</span>: spawns <span class="hm-code">explosionPrefab</span>,
            applies <span class="hm-code">explosionForce</span> to nearby Rigidbodies, and calls
            <span class="hm-code">SendMessage("TakeDamage", explosionDamage)</span> on all objects in
            <span class="hm-code">explosionRadius</span>.
          </span>
          <span v-else class="hm-step-text">
            <strong>Detonazione:</strong> Ad ogni frame, <span class="hm-code">HomingMissile</span> verifica
            se qualche collider entro <span class="hm-code">proximityRadius</span> (escludendo i collider
            del lanciatore stesso) appartiene a un bersaglio. Al rilevamento — o alla collisione diretta — chiama
            <span class="hm-code">Explode()</span>: genera <span class="hm-code">explosionPrefab</span>,
            applica <span class="hm-code">explosionForce</span> ai Rigidbody vicini e chiama
            <span class="hm-code">SendMessage("TakeDamage", explosionDamage)</span> su tutti gli oggetti in
            <span class="hm-code">explosionRadius</span>.
          </span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">11</span>
          <span v-if="locale === 'en'" class="hm-step-text">
            <strong>Target Destruction:</strong> <span class="hm-code">TargetHealth.TakeDamage()</span>
            decrements <span class="hm-code">hitsToDestroy</span>. At zero it spawns an optional explosion prefab,
            plays the destruction sound, removes the <span class="hm-code">"target"</span> tag, and destroys
            the GameObject. <span class="hm-code">MissileLauncher</span> receives
            <span class="hm-code">OnTargetLost</span> and resumes scanning for the next target.
          </span>
          <span v-else class="hm-step-text">
            <strong>Distruzione Bersaglio:</strong> <span class="hm-code">TargetHealth.TakeDamage()</span>
            decrementa <span class="hm-code">hitsToDestroy</span>. A zero genera un prefab di esplosione opzionale,
            riproduce il suono di distruzione, rimuove il tag <span class="hm-code">"target"</span> e distrugge
            il GameObject. <span class="hm-code">MissileLauncher</span> riceve
            <span class="hm-code">OnTargetLost</span> e riprende la scansione per il prossimo bersaglio.
          </span>
        </li>
      </ol>
    </div>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Miss Detection</strong>
        If the missile passes the target without triggering the proximity fuze, it uses a closest-approach
        algorithm: when the missile-to-target distance starts increasing rather than decreasing,
        the missile has missed and self-destructs via <span class="hm-code">lifetime</span> expiry.
      </template>
      <template v-else>
        <strong>Rilevamento Mancato</strong>
        Se il missile supera il bersaglio senza attivare la spoletta di prossimità, utilizza un algoritmo
        di avvicinamento massimo: quando la distanza missile-bersaglio inizia ad aumentare anziché diminuire,
        il missile ha mancato il bersaglio e si autodistrugge tramite scadenza del <span class="hm-code">lifetime</span>.
      </template>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMHowItWorks',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
