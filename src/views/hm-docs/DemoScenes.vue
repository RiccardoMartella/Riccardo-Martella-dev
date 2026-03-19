<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>15</span><template v-if="locale === 'en'">DEMO SCENES</template><template v-else>SCENE DEMO</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      Two demo scenes are included in the <span class="hm-code">Demo/</span> folder.
      Both are fully configured — open either scene and press Play to immediately
      explore the complete system with no additional setup.
    </p>
    <p class="hm-text-lead" v-else>
      Due scene demo sono incluse nella cartella <span class="hm-code">Demo/</span>.
      Entrambe sono completamente configurate — apri una qualsiasi delle scene e premi Play
      per esplorare immediatamente il sistema completo senza alcuna configurazione aggiuntiva.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title">GroundDemo.unity</div>
      <div class="hm-content-block">
        <p>
          <strong style="color: #E1EBF2;">Path:</strong> <span class="hm-code">Assets/HomingMissile/Demo/GroundDemo.unity</span>
        </p>
        <p v-if="locale === 'en'">
          The primary showcase scene. It features a fully set-up launcher station with multiple
          target objects placed at varied distances and heights. The scene demonstrates the complete
          lock-on flow, missile flight phases, and the military HUD in action.
        </p>
        <p v-else>
          La scena dimostrativa principale. Presenta una stazione di lancio completamente configurata
          con molteplici oggetti bersaglio posizionati a distanze e altezze variabili. La scena dimostra
          il flusso completo di aggancio, le fasi di volo del missile e l'HUD militare in azione.
        </p>
        <p v-if="locale === 'en'">
          The targets include both static and animated objects (controlled by
          <span class="hm-code">SessionAnimator</span>) so you can observe how the Proportional
          Navigation guidance tracks moving targets.
        </p>
        <p v-else>
          I bersagli includono sia oggetti statici che animati (controllati da
          <span class="hm-code">SessionAnimator</span>) così puoi osservare come la guida a
          Navigazione Proporzionale insegue i bersagli in movimento.
        </p>
        <p v-if="locale === 'en'">
          All missiles are pre-assigned to the launcher's <span class="hm-code">rocketList</span>.
          The scene uses default Inspector values for all parameters.
        </p>
        <p v-else>
          Tutti i missili sono pre-assegnati alla <span class="hm-code">rocketList</span> del lanciatore.
          La scena usa i valori Inspector predefiniti per tutti i parametri.
        </p>
        <table class="hm-field-table" style="margin-top: 0.5rem;" v-if="locale === 'en'">
          <tbody>
            <tr>
              <td style="width: 140px;"><span class="hm-field-name">Controls</span></td>
              <td>Mouse — aim turret &nbsp;|&nbsp; Left click — fire &nbsp;|&nbsp; Right click — zoom &nbsp;|&nbsp; 1 — switch scene</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Targets</span></td>
              <td>Multiple objects tagged "target" at short, medium, and long range</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">HUD</span></td>
              <td>Fully active with azimuth bar, lock-on brackets, ammo strip</td>
            </tr>
          </tbody>
        </table>
        <table class="hm-field-table" style="margin-top: 0.5rem;" v-else>
          <tbody>
            <tr>
              <td style="width: 140px;"><span class="hm-field-name">Controlli</span></td>
              <td>Mouse — mira torretta &nbsp;|&nbsp; Click sinistro — spara &nbsp;|&nbsp; Click destro — zoom &nbsp;|&nbsp; 1 — cambia scena</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Bersagli</span></td>
              <td>Molteplici oggetti taggati "target" a corta, media e lunga distanza</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">HUD</span></td>
              <td>Completamente attivo con barra azimutale, bracket di aggancio, striscia munizioni</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title">AirDemo.unity</div>
      <div class="hm-content-block">
        <p>
          <strong style="color: #E1EBF2;">Path:</strong> <span class="hm-code">Assets/HomingMissile/Demo/AirDemo.unity</span>
        </p>
        <p v-if="locale === 'en'">
          A minimal test environment designed for inspecting individual missile parameters.
          The scene contains a single launcher and a small number of simple target objects —
          ideal when you are tuning values such as <span class="hm-code">navigationConstant</span>,
          <span class="hm-code">boostThrust</span>, <span class="hm-code">proximityRadius</span>,
          or <span class="hm-code">lockOnTime</span>.
        </p>
        <p v-else>
          Un ambiente di test minimale progettato per ispezionare singoli parametri del missile.
          La scena contiene un singolo lanciatore e un piccolo numero di oggetti bersaglio semplici —
          ideale quando stai regolando valori come <span class="hm-code">navigationConstant</span>,
          <span class="hm-code">boostThrust</span>, <span class="hm-code">proximityRadius</span>
          o <span class="hm-code">lockOnTime</span>.
        </p>
        <p v-if="locale === 'en'">
          Because the environment is uncluttered, it is also the best scene to use when
          debugging guidance behaviour or verifying that your custom
          <span class="hm-code">TakeDamage</span> integration works correctly.
        </p>
        <p v-else>
          Poiché l'ambiente è sgombro, è anche la scena migliore da usare quando si esegue il
          debug del comportamento della guida o si verifica che la tua integrazione
          <span class="hm-code">TakeDamage</span> personalizzata funzioni correttamente.
        </p>
        <table class="hm-field-table" style="margin-top: 0.5rem;" v-if="locale === 'en'">
          <tbody>
            <tr>
              <td style="width: 140px;"><span class="hm-field-name">Controls</span></td>
              <td>Same as GroundDemo &nbsp;|&nbsp; 1 — switch back to GroundDemo</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Targets</span></td>
              <td>Minimal set of simple primitives for clean parameter testing</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Use case</span></td>
              <td>Inspector tuning, guidance algorithm observation, integration testing</td>
            </tr>
          </tbody>
        </table>
        <table class="hm-field-table" style="margin-top: 0.5rem;" v-else>
          <tbody>
            <tr>
              <td style="width: 140px;"><span class="hm-field-name">Controlli</span></td>
              <td>Come GroundDemo &nbsp;|&nbsp; 1 — torna a GroundDemo</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Bersagli</span></td>
              <td>Set minimale di primitive semplici per un test pulito dei parametri</td>
            </tr>
            <tr>
              <td><span class="hm-field-name">Caso d'uso</span></td>
              <td>Regolazione Inspector, osservazione algoritmo di guida, test di integrazione</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Scene Switching</strong>
      Both scenes include the <span class="hm-code">SceneSwitcher</span> component configured with
      <span class="hm-code">1</span>. Make sure both scenes are added to your
      <strong>Build Settings</strong> (File &gt; Build Settings &gt; Add Open Scenes) for the
      scene switch to work at runtime.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Cambio Scena</strong>
      Entrambe le scene includono il componente <span class="hm-code">SceneSwitcher</span> configurato
      con <span class="hm-code">1</span>. Assicurati che entrambe le scene siano aggiunte alle
      <strong>Build Settings</strong> (File &gt; Build Settings &gt; Add Open Scenes) perché il
      cambio scena funzioni a runtime.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMGroundDemos',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
