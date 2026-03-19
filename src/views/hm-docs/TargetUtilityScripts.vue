<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title" v-if="locale === 'en'"><span>5.6–5.9</span>TARGET &amp; UTILITY SCRIPTS</h1>
    <h1 class="hm-doc-title" v-else><span>5.6–5.9</span>SCRIPT BERSAGLIO &amp; UTILITÀ</h1>

    <p class="hm-text-lead" v-if="locale === 'en'">
      Four lightweight helper scripts that handle target destruction, scene animation,
      explosion lighting, and scene switching. All live under
      <span class="hm-code">Scripts/Utility/</span>.
    </p>
    <p class="hm-text-lead" v-else>
      Quattro script di utilità leggeri che gestiscono la distruzione dei bersagli, l'animazione della scena,
      l'illuminazione delle esplosioni e il cambio scena. Tutti risiedono sotto
      <span class="hm-code">Scripts/Utility/</span>.
    </p>

    <!-- 5.6 TargetHealth -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title">5.6 — TargetHealth.cs</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          Receives damage from missile explosions via
          <span class="hm-code">SendMessage("TakeDamage", float)</span>.
          When the accumulated hit count reaches <span class="hm-code">hitsToDestroy</span>, the
          GameObject plays the destruction effects, removes the <span class="hm-code">"target"</span>
          tag, and destroys itself. Attach this script to any object you want to be destructible.
        </p>
        <p v-else>
          Riceve danno dalle esplosioni dei missili tramite
          <span class="hm-code">SendMessage("TakeDamage", float)</span>.
          Quando il conteggio colpi accumulati raggiunge <span class="hm-code">hitsToDestroy</span>, il
          GameObject riproduce gli effetti di distruzione, rimuove il tag <span class="hm-code">"target"</span>
          e si distrugge. Collega questo script a qualsiasi oggetto che vuoi rendere distruttibile.
        </p>
      </div>
      <table class="hm-field-table" v-if="locale === 'en'">
        <thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">hitsToDestroy</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td><span class="hm-field-default">1</span></td>
            <td>Number of TakeDamage calls before the target is destroyed. Set to 1 for single-hit destruction.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionPrefab</span></td>
            <td><span class="hm-field-type">GameObject</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td>Optional particle effect instantiated at the target's position on destruction.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionSound</span></td>
            <td><span class="hm-field-type">AudioClip</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td>Optional one-shot sound played on destruction using AudioSource.PlayClipAtPoint().</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionVolume</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td>Volume of the destruction sound.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">hitEffectPrefab</span></td>
            <td><span class="hm-field-type">GameObject</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td>Optional hit spark effect instantiated on each TakeDamage call that doesn't destroy the target.</td>
          </tr>
        </tbody>
      </table>
      <table class="hm-field-table" v-else>
        <thead><tr><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">hitsToDestroy</span></td>
            <td><span class="hm-field-type">int</span></td>
            <td><span class="hm-field-default">1</span></td>
            <td>Numero di chiamate TakeDamage necessarie per attivare la distruzione. Impostare a 1 per distruzione a colpo singolo.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionPrefab</span></td>
            <td><span class="hm-field-type">GameObject</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td>Prefab opzionale da istanziare alla posizione del bersaglio al momento della distruzione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionSound</span></td>
            <td><span class="hm-field-type">AudioClip</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td>Clip audio opzionale riprodotta alla distruzione tramite AudioSource.PlayClipAtPoint().</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">explosionVolume</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td>Volume del suono di distruzione.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">hitEffectPrefab</span></td>
            <td><span class="hm-field-type">GameObject</span></td>
            <td><span class="hm-field-default">null</span></td>
            <td>Effetto scintilla opzionale istanziato ad ogni chiamata TakeDamage che non distrugge il bersaglio.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 5.7 SessionAnimator -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title">5.7 — SessionAnimator.cs</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          Finds all <span class="hm-code">Animator</span> components in the scene at
          <span class="hm-code">Start()</span> and immediately calls <span class="hm-code">Play(0)</span>
          on each one. This ensures all scene animations (ambient props, fans, moving platforms)
          are playing from the first frame without requiring manual setup on each Animator.
        </p>
        <p v-else>
          Trova tutti i componenti <span class="hm-code">Animator</span> nella scena all'avvio
          <span class="hm-code">Start()</span> e chiama immediatamente <span class="hm-code">Play(0)</span>
          su ciascuno. Questo assicura che tutte le animazioni della scena (oggetti ambientali, ventilatori, piattaforme mobili)
          siano in riproduzione dal primo frame senza richiedere una configurazione manuale su ogni Animator.
        </p>
      </div>
      <table class="hm-field-table" v-if="locale === 'en'">
        <thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">includeInactive</span></td>
            <td><span class="hm-field-type">bool</span></td>
            <td><span class="hm-field-default">false</span></td>
            <td>When true, FindObjectsOfType is called with includeInactive = true, also activating animators on disabled GameObjects.</td>
          </tr>
        </tbody>
      </table>
      <table class="hm-field-table" v-else>
        <thead><tr><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">includeInactive</span></td>
            <td><span class="hm-field-type">bool</span></td>
            <td><span class="hm-field-default">false</span></td>
            <td>Quando true, FindObjectsOfType viene chiamato con includeInactive = true, attivando anche gli animator su GameObject disabilitati.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 5.8 ExplosionLightFade -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title">5.8 — ExplosionLightFade.cs</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          Attach to any <span class="hm-code">Light</span> component inside an explosion prefab.
          On <span class="hm-code">Start()</span> the script records the initial light intensity,
          then fades it to zero over <span class="hm-code">fadeDuration</span> seconds using
          a coroutine. The light's initial intensity is set in the Inspector on the Light component itself.
        </p>
        <p v-else>
          Collega a qualsiasi componente <span class="hm-code">Light</span> all'interno di un prefab esplosione.
          All'avvio <span class="hm-code">Start()</span> lo script registra l'intensità iniziale della luce,
          poi la dissolve a zero in <span class="hm-code">fadeDuration</span> secondi usando una coroutine.
          L'intensità iniziale della luce viene impostata nell'Inspector sul componente Light stesso.
        </p>
      </div>
      <table class="hm-field-table" v-if="locale === 'en'">
        <thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">fadeDuration</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td>Time in seconds to fade the light intensity from its initial value to zero.</td>
          </tr>
        </tbody>
      </table>
      <table class="hm-field-table" v-else>
        <thead><tr><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">fadeDuration</span></td>
            <td><span class="hm-field-type">float</span></td>
            <td><span class="hm-field-default">1.0</span></td>
            <td>Tempo in secondi per dissolvere l'intensità della luce dal suo valore iniziale a zero.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 5.9 SceneSwitcher -->
    <div class="hm-doc-section">
      <div class="hm-doc-section-title">5.9 — SceneSwitcher.cs</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          A convenience script for the demo scenes. When the player presses
          <span class="hm-code">switchKey</span> (default <span class="hm-code">1</span>),
          the next scene in the Unity Build Settings list is loaded. If the current scene is
          the last in the list, it wraps back to scene index 0. Both demo scenes include this
          script so the player can cycle between them at any time.
        </p>
        <p v-else>
          Uno script di convenienza per le scene demo. Quando il giocatore preme
          <span class="hm-code">switchKey</span> (predefinito <span class="hm-code">1</span>),
          la scena successiva nella lista Build Settings di Unity viene caricata. Se la scena corrente è
          l'ultima nella lista, ritorna all'indice di scena 0. Entrambe le scene demo includono questo
          script così il giocatore può ciclare tra di esse in qualsiasi momento.
        </p>
      </div>
      <table class="hm-field-table" v-if="locale === 'en'">
        <thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">switchKey</span></td>
            <td><span class="hm-field-type">Key</span></td>
            <td><span class="hm-field-default">1</span></td>
            <td>The keyboard key (from UnityEngine.InputSystem.Key enum) that triggers the scene switch.</td>
          </tr>
        </tbody>
      </table>
      <table class="hm-field-table" v-else>
        <thead><tr><th>Campo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">switchKey</span></td>
            <td><span class="hm-field-type">Key</span></td>
            <td><span class="hm-field-default">1</span></td>
            <td>Il tasto della tastiera (dall'enum UnityEngine.InputSystem.Key) che attiva il cambio scena.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMTargetUtilityScripts',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
