<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>03</span><template v-if="locale === 'en'">REQUIRED TAGS</template><template v-else>TAG RICHIESTI</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      Four Unity tags must exist in your project before the system can function.
      These tags are used by the scripts to locate specific GameObjects at runtime via
      <span class="hm-code">GameObject.FindWithTag()</span>. The system will throw errors
      on startup if any of these tags are missing.
    </p>
    <p class="hm-text-lead" v-else>
      Quattro tag Unity devono esistere nel tuo progetto prima che il sistema possa funzionare.
      Questi tag vengono utilizzati dagli script per localizzare specifici GameObject a runtime tramite
      <span class="hm-code">GameObject.FindWithTag()</span>. Il sistema genererà errori
      all'avvio se uno qualsiasi di questi tag è mancante.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Tag Reference</div>
      <div class="hm-doc-section-title" v-else>Riferimento Tag</div>
      <div class="hm-tag-grid">
        <div class="hm-tag-card">
          <div class="hm-tag-name">"Rocket"</div>
          <div class="hm-tag-desc" v-if="locale === 'en'">
            Applied to the <strong>root GameObject</strong> of the launcher station prefab.
            <span class="hm-code">PlayerController</span> uses this tag at startup to locate
            and reference the <span class="hm-code">LauncherController</span> and
            <span class="hm-code">MissileLauncher</span> components.
          </div>
          <div class="hm-tag-desc" v-else>
            Applicato al <strong>GameObject root</strong> del prefab della stazione di lancio.
            <span class="hm-code">PlayerController</span> usa questo tag all'avvio per localizzare
            e referenziare i componenti <span class="hm-code">LauncherController</span> e
            <span class="hm-code">MissileLauncher</span>.
          </div>
        </div>
        <div class="hm-tag-card">
          <div class="hm-tag-name">"target"</div>
          <div class="hm-tag-desc" v-if="locale === 'en'">
            Applied to any GameObject that can be <strong>locked on to and destroyed</strong>.
            <span class="hm-code">MissileLauncher</span> calls
            <span class="hm-code">GameObject.FindGameObjectsWithTag("target")</span> to
            build the list of valid lock-on targets. Add this tag to all enemy units or
            destructible objects in your scene.
          </div>
          <div class="hm-tag-desc" v-else>
            Applicato a qualsiasi GameObject che può essere <strong>agganciato e distrutto</strong>.
            <span class="hm-code">MissileLauncher</span> chiama
            <span class="hm-code">GameObject.FindGameObjectsWithTag("target")</span> per
            costruire la lista dei bersagli di aggancio validi. Aggiungi questo tag a tutte le
            unità nemiche o oggetti distruttibili nella tua scena.
          </div>
        </div>
        <div class="hm-tag-card">
          <div class="hm-tag-name">"CameraLookRocket"</div>
          <div class="hm-tag-desc" v-if="locale === 'en'">
            A <strong>Transform</strong> that the player camera continuously looks at.
            Typically placed a few metres in front of the cannon barrel so the camera always
            faces the firing direction. <span class="hm-code">PlayerController</span> uses
            this as the camera's <span class="hm-code">LookAt</span> target.
          </div>
          <div class="hm-tag-desc" v-else>
            Un <strong>Transform</strong> che la camera del giocatore guarda continuamente.
            Tipicamente posizionato qualche metro davanti alla canna del cannone in modo che
            la camera sia sempre rivolta nella direzione di fuoco.
            <span class="hm-code">PlayerController</span> usa questo come target
            <span class="hm-code">LookAt</span> della camera.
          </div>
        </div>
        <div class="hm-tag-card">
          <div class="hm-tag-name">"CameraTransformRocket"</div>
          <div class="hm-tag-desc" v-if="locale === 'en'">
            A <strong>Transform</strong> that defines the <strong>camera's world position</strong>.
            Typically mounted behind and above the launcher.
            <span class="hm-code">PlayerController</span> lerps the camera to this Transform's
            position every frame, giving a smooth follow-cam effect.
          </div>
          <div class="hm-tag-desc" v-else>
            Un <strong>Transform</strong> che definisce la <strong>posizione nel mondo della camera</strong>.
            Tipicamente montato dietro e sopra il lanciatore.
            <span class="hm-code">PlayerController</span> interpola la camera verso la posizione
            di questo Transform ad ogni frame, creando un effetto di camera di inseguimento fluido.
          </div>
        </div>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">How to Create Tags</div>
      <div class="hm-doc-section-title" v-else>Come Creare i Tag</div>
      <ol class="hm-step-list">
        <li class="hm-step-item">
          <span class="hm-step-num">1</span>
          <span class="hm-step-text" v-if="locale === 'en'">Open the Unity menu: <strong>Edit &gt; Project Settings &gt; Tags and Layers</strong></span>
          <span class="hm-step-text" v-else>Apri il menu di Unity: <strong>Edit &gt; Project Settings &gt; Tags and Layers</strong></span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">2</span>
          <span class="hm-step-text" v-if="locale === 'en'">Expand the <strong>Tags</strong> section and click the <strong>+</strong> button to add a new tag.</span>
          <span class="hm-step-text" v-else>Espandi la sezione <strong>Tags</strong> e clicca il pulsante <strong>+</strong> per aggiungere un nuovo tag.</span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">3</span>
          <span class="hm-step-text" v-if="locale === 'en'">Type the tag name <em>exactly</em> as shown above — these are case-sensitive. Repeat for all four tags.</span>
          <span class="hm-step-text" v-else>Digita il nome del tag <em>esattamente</em> come mostrato sopra — sono sensibili alle maiuscole. Ripeti per tutti e quattro i tag.</span>
        </li>
        <li class="hm-step-item">
          <span class="hm-step-num">4</span>
          <span class="hm-step-text" v-if="locale === 'en'">Select the relevant GameObjects in your scene and assign the tags via the <strong>Tag</strong> dropdown at the top of the Inspector.</span>
          <span class="hm-step-text" v-else>Seleziona i GameObject rilevanti nella tua scena e assegna i tag tramite il menu a tendina <strong>Tag</strong> in cima all'Inspector.</span>
        </li>
      </ol>
    </div>

    <div class="hm-alert hm-alert-warning" v-if="locale === 'en'">
      <strong>Case-Sensitive</strong>
      Unity tags are case-sensitive. <span class="hm-code">"rocket"</span> and
      <span class="hm-code">"Rocket"</span> are different tags. Use the exact capitalisation shown:
      <span class="hm-code">Rocket</span>, <span class="hm-code">target</span>,
      <span class="hm-code">CameraLookRocket</span>, <span class="hm-code">CameraTransformRocket</span>.
    </div>
    <div class="hm-alert hm-alert-warning" v-else>
      <strong>Sensibile alle Maiuscole</strong>
      I tag di Unity sono sensibili alle maiuscole. <span class="hm-code">"rocket"</span> e
      <span class="hm-code">"Rocket"</span> sono tag diversi. Usa esattamente le maiuscole mostrate:
      <span class="hm-code">Rocket</span>, <span class="hm-code">target</span>,
      <span class="hm-code">CameraLookRocket</span>, <span class="hm-code">CameraTransformRocket</span>.
    </div>

    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Multiple Targets</strong>
      You can tag as many GameObjects as you like with <span class="hm-code">"target"</span>.
      The <span class="hm-code">MissileLauncher</span> scans all of them to find the closest one
      within <span class="hm-code">lockOnRange</span> and within the
      <span class="hm-code">lockOnAngle</span> cone in front of the cannon.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Bersagli Multipli</strong>
      Puoi taggare quanti GameObject desideri con <span class="hm-code">"target"</span>.
      Il <span class="hm-code">MissileLauncher</span> li scansiona tutti per trovare il più vicino
      entro <span class="hm-code">lockOnRange</span> e all'interno del cono
      <span class="hm-code">lockOnAngle</span> davanti al cannone.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMRequiredTags',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
