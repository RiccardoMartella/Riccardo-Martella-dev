<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>07</span><template v-if="locale === 'en'">CUSTOM INTEGRATION</template><template v-else>INTEGRAZIONE PERSONALIZZATA</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      Homing Missile is designed to integrate with any existing damage or game system
      with minimal friction. The core integration surface is the
      <span class="hm-code">TakeDamage</span> message and the four C# events exposed by
      <span class="hm-code">MissileLauncher</span>.
    </p>
    <p class="hm-text-lead" v-else>
      Homing Missile è progettato per integrarsi con qualsiasi sistema di danno o di gioco
      esistente con il minimo attrito. La superficie di integrazione principale è il messaggio
      <span class="hm-code">TakeDamage</span> e i quattro eventi C# esposti da
      <span class="hm-code">MissileLauncher</span>.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Damage Integration via SendMessage</div>
      <div class="hm-doc-section-title" v-else>Integrazione Danni tramite SendMessage</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          When a missile detonates, it calls <span class="hm-code">SendMessage</span> on every
          GameObject within <span class="hm-code">explosionRadius</span>. If your objects already
          have a <span class="hm-code">TakeDamage</span> method, they will receive missile damage
          automatically — no changes required.
        </p>
        <p v-else>
          Quando un missile detona, chiama <span class="hm-code">SendMessage</span> su ogni
          GameObject entro <span class="hm-code">explosionRadius</span>. Se i tuoi oggetti hanno
          già un metodo <span class="hm-code">TakeDamage</span>, riceveranno automaticamente il
          danno del missile — nessuna modifica necessaria.
        </p>
      </div>
      <div class="hm-code-block">
<pre>// What the missile calls on detonation:
target.SendMessage(
    "TakeDamage",
    explosionDamage,
    SendMessageOptions.DontRequireReceiver
);

// Add this method to any MonoBehaviour to receive damage:
void TakeDamage(float amount)
{
    health -= amount;
    if (health &lt;= 0f) Die();
}</pre>
      </div>
      <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
        <strong>DontRequireReceiver</strong>
        The <span class="hm-code">SendMessageOptions.DontRequireReceiver</span> flag means objects
        that do not have a <span class="hm-code">TakeDamage</span> method are silently skipped —
        no null-reference errors or warnings. The missile works safely against any GameObject,
        whether it is destructible or not.
      </div>
      <div class="hm-alert hm-alert-info" v-else>
        <strong>DontRequireReceiver</strong>
        Il flag <span class="hm-code">SendMessageOptions.DontRequireReceiver</span> significa che
        gli oggetti che non hanno un metodo <span class="hm-code">TakeDamage</span> vengono saltati
        silenziosamente — nessun errore null-reference o warning. Il missile funziona in sicurezza
        contro qualsiasi GameObject, sia esso distruttibile o meno.
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Subscribing to MissileLauncher Events</div>
      <div class="hm-doc-section-title" v-else>Sottoscrivere gli Eventi di MissileLauncher</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          All four public events on <span class="hm-code">MissileLauncher</span> are standard C#
          <span class="hm-code">Action</span> delegates. Subscribe in <span class="hm-code">Awake()</span>
          or <span class="hm-code">Start()</span> and unsubscribe in <span class="hm-code">OnDestroy()</span>
          to avoid memory leaks.
        </p>
        <p v-else>
          Tutti e quattro gli eventi pubblici su <span class="hm-code">MissileLauncher</span> sono
          delegati <span class="hm-code">Action</span> C# standard. Iscriviti in <span class="hm-code">Awake()</span>
          o <span class="hm-code">Start()</span> e disiscriviti in <span class="hm-code">OnDestroy()</span>
          per evitare memory leak.
        </p>
      </div>
      <div class="hm-code-block">
<pre>using HomingMissile;
using UnityEngine;

public class MyGameManager : MonoBehaviour
{
    [SerializeField] private MissileLauncher launcher;

    private void Awake()
    {
        launcher.OnFire               += HandleFire;
        launcher.OnLockProgressChanged += HandleLockProgress;
        launcher.OnTargetLocked        += HandleTargetLocked;
        launcher.OnTargetLost          += HandleTargetLost;
    }

    private void OnDestroy()
    {
        launcher.OnFire               -= HandleFire;
        launcher.OnLockProgressChanged -= HandleLockProgress;
        launcher.OnTargetLocked        -= HandleTargetLocked;
        launcher.OnTargetLost          -= HandleTargetLost;
    }

    private void HandleFire(GameObject missile)
    {
        Debug.Log($"Missile fired: {missile.name}");
        // e.g. trigger a muzzle flash, score deduction, etc.
    }

    private void HandleLockProgress(float progress)
    {
        // progress is 0.0 to 1.0
        // e.g. update a custom UI element
    }

    private void HandleTargetLocked(Transform target)
    {
        Debug.Log($"Target locked: {target.name}");
        // e.g. play a UI sound, trigger enemy AI response
    }

    private void HandleTargetLost()
    {
        // e.g. update score multiplier, reset UI
    }
}</pre>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Replacing the Input System</div>
      <div class="hm-doc-section-title" v-else>Sostituire l'Input System</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          If you prefer not to use Unity's new Input System, you can replace
          <span class="hm-code">PlayerController.cs</span> entirely with a custom
          script that calls the same public API:
        </p>
        <p v-else>
          Se preferisci non usare il nuovo Input System di Unity, puoi sostituire
          <span class="hm-code">PlayerController.cs</span> interamente con uno script
          personalizzato che chiama la stessa API pubblica:
        </p>
        <ul class="hm-checklist" style="margin-top: 0.75rem;" v-if="locale === 'en'">
          <li class="hm-checklist-item"><span class="hm-code">launcherController.SetLookInput(Vector2 delta)</span> — called each Update with mouse/joystick delta to rotate the turret.</li>
          <li class="hm-checklist-item"><span class="hm-code">missileLauncher.TryFire()</span> — call when the fire button is pressed. Internally checks fire-rate cooldown and ammo count.</li>
        </ul>
        <ul class="hm-checklist" style="margin-top: 0.75rem;" v-else>
          <li class="hm-checklist-item"><span class="hm-code">launcherController.SetLookInput(Vector2 delta)</span> — chiamato ad ogni Update con il delta di mouse/joystick per ruotare la torretta.</li>
          <li class="hm-checklist-item"><span class="hm-code">missileLauncher.TryFire()</span> — chiamare quando il pulsante di fuoco è premuto. Controlla internamente il cooldown del rateo di fuoco e il conteggio munizioni.</li>
        </ul>
        <p style="margin-top: 0.75rem;" v-if="locale === 'en'">
          No other changes are needed — the guidance, HUD, and audio all continue to work
          through events and properties.
        </p>
        <p style="margin-top: 0.75rem;" v-else>
          Nessun'altra modifica è necessaria — la guida, l'HUD e l'audio continuano a
          funzionare tramite eventi e proprietà.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMIntegration',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
