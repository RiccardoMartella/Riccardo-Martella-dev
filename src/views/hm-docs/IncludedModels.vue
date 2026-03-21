<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>18</span><template v-if="locale === 'en'">INCLUDED 3D MODELS</template><template v-else>MODELLI 3D INCLUSI</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      This asset is a <strong>missile system</strong> — the focus is entirely on the guidance algorithm,
      launcher mechanics, lock-on logic, HUD, and procedural audio. The 3D models for the launcher
      and the rocket are included so you can import the asset and start testing immediately, but they
      are not the core product.
    </p>
    <p class="hm-text-lead" v-else>
      Questo asset è un <strong>sistema missilistico</strong> — il focus è interamente sull'algoritmo di guida,
      le meccaniche del lanciatore, la logica di aggancio, l'HUD e l'audio procedurale. I modelli 3D del
      lanciatore e del razzo sono inclusi per permetterti di importare l'asset e iniziare a testare
      immediatamente, ma non sono il prodotto principale.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">What's Included</div>
      <div class="hm-doc-section-title" v-else>Cosa Include</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'">
            <th>File</th>
            <th>Description</th>
          </tr>
          <tr v-else>
            <th>File</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">RocketLauncher.fbx</span></td>
            <td v-if="locale === 'en'">The turret launcher model with base, rotating head, and cannon barrel.</td>
            <td v-else>Il modello del lanciatore a torretta con base, testa rotante e canna del cannone.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Rocket.fbx</span></td>
            <td v-if="locale === 'en'">The missile projectile model.</td>
            <td v-else>Il modello del proiettile missile.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Textures</span></td>
            <td v-if="locale === 'en'">PBR texture sets (BaseColor, Normal, Metallic, Roughness, Height) for both models inside <span class="hm-code">texture/TexturesMecha/</span>.</td>
            <td v-else>Set di texture PBR (BaseColor, Normal, Metallic, Roughness, Height) per entrambi i modelli in <span class="hm-code">texture/TexturesMecha/</span>.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Materials</span></td>
            <td v-if="locale === 'en'">Pre-configured materials inside <span class="hm-code">Prefabs/Launcher/weapons/Materials/</span>.</td>
            <td v-else>Materiali pre-configurati in <span class="hm-code">Prefabs/Launcher/weapons/Materials/</span>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Optimization Notice</div>
      <div class="hm-doc-section-title" v-else>Nota sull'Ottimizzazione</div>
      <div class="hm-content-block">
        <p v-if="locale === 'en'">
          The included models are <strong>not production-optimized</strong>. They are provided as functional
          placeholders so you can explore and test the missile system out of the box. Specifically:
        </p>
        <p v-else>
          I modelli inclusi <strong>non sono ottimizzati per la produzione</strong>. Sono forniti come
          segnaposto funzionali per permetterti di esplorare e testare il sistema missilistico immediatamente.
          Nello specifico:
        </p>
        <ul class="hm-checklist" v-if="locale === 'en'">
          <li class="hm-checklist-item">Polygon counts have not been reduced for real-time performance</li>
          <li class="hm-checklist-item">No LOD (Level of Detail) groups are configured</li>
          <li class="hm-checklist-item">Texture resolutions are not tuned for shipping builds</li>
        </ul>
        <ul class="hm-checklist" v-else>
          <li class="hm-checklist-item">Il conteggio dei poligoni non è stato ridotto per le performance in tempo reale</li>
          <li class="hm-checklist-item">Non sono configurati gruppi LOD (Level of Detail)</li>
          <li class="hm-checklist-item">Le risoluzioni delle texture non sono calibrate per build di pubblicazione</li>
        </ul>
      </div>
    </div>

    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Recommendation</strong>
      For your final project, replace the included models with your own optimized assets that match your
      game's art direction and performance budget. The missile system is completely independent from the
      visuals — any model will work as long as the prefab structure and components are preserved.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Raccomandazione</strong>
      Per il tuo progetto finale, sostituisci i modelli inclusi con i tuoi asset ottimizzati che rispecchino
      la direzione artistica e il budget di performance del tuo gioco. Il sistema missilistico è completamente
      indipendente dalla parte visiva — qualsiasi modello funzionerà purché la struttura del prefab e i
      componenti siano mantenuti.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMIncludedModels',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
