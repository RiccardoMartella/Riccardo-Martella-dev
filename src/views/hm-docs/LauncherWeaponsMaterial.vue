<template>
  <div class="hm-doc-page">
    <h1 v-if="locale === 'en'" class="hm-doc-title"><span>17</span>LAUNCHER WEAPONS MATERIAL</h1>
    <h1 v-else class="hm-doc-title"><span>17</span>MATERIALE ARMI DEL LANCIATORE</h1>

    <p v-if="locale === 'en'" class="hm-text-lead">
      All materials used by the launcher weapon system are stored in
      <span class="hm-code">Prefabs/Launcher/weapons/Materials/</span>.
      This includes the bullet material, rocket launcher materials, and VFX materials
      for explosion and launch effects.
    </p>
    <p v-else class="hm-text-lead">
      Tutti i materiali utilizzati dal sistema d'arma del lanciatore si trovano in
      <span class="hm-code">Prefabs/Launcher/weapons/Materials/</span>.
      Include il materiale del proiettile, i materiali del lanciamissili e i materiali VFX
      per gli effetti di esplosione e lancio.
    </p>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Bullet Material</div>
      <div v-else class="hm-doc-section-title">Materiale Bullet</div>

      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'">
            <th>Property</th>
            <th>Description</th>
          </tr>
          <tr v-else>
            <th>Proprietà</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">File</span></td>
            <td><span class="hm-code">bullet.mat</span></td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Shader</span></td>
            <td>
              <span v-if="locale === 'en'">Universal Render Pipeline/Lit (URP Lit). Works out of the box with any URP project.</span>
              <span v-else>Universal Render Pipeline/Lit (URP Lit). Funziona immediatamente con qualsiasi progetto URP.</span>
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Textures</span></td>
            <td>
              <span v-if="locale === 'en'">
                References the PBR texture set located in
                <span class="hm-code">texture/TexturesMecha/06-bullet_MAT-bullet_*.png / *.jpg</span>
                (Albedo, Normal Map, Metallic/Smoothness).
              </span>
              <span v-else>
                Fa riferimento al set di texture PBR situato in
                <span class="hm-code">texture/TexturesMecha/06-bullet_MAT-bullet_*.png / *.jpg</span>
                (Albedo, Normal Map, Metallic/Smoothness).
              </span>
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Used By</span></td>
            <td>
              <span v-if="locale === 'en'">
                Applied to the <span class="hm-code">RocketBullet.prefab</span> mesh renderer.
                This is the missile projectile instantiated each time the launcher fires.
              </span>
              <span v-else>
                Applicato al mesh renderer del <span class="hm-code">RocketBullet.prefab</span>.
                Questo è il proiettile missile istanziato ogni volta che il lanciatore spara.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Rocket Launcher Materials</div>
      <div v-else class="hm-doc-section-title">Materiali Lanciamissili</div>

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
            <td><span class="hm-field-name">02-rocketluncher_MAT-RocketLauncher_BaseColor.mat</span></td>
            <td>
              <span v-if="locale === 'en'">Main body material for the rocket launcher model.</span>
              <span v-else>Materiale del corpo principale del modello lanciamissili.</span>
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">02-rocketluncher_MAT-RocketLauncher-upper_BaseColor.mat</span></td>
            <td>
              <span v-if="locale === 'en'">Upper section material for the rocket launcher model.</span>
              <span v-else>Materiale della sezione superiore del modello lanciamissili.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">VFX Materials</div>
      <div v-else class="hm-doc-section-title">Materiali VFX</div>

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
            <td><span class="hm-field-name">Explosion/ExplosionFX_Additive.mat</span></td>
            <td>
              <span v-if="locale === 'en'">Additive blend material for the explosion particle effect.</span>
              <span v-else>Materiale blend additivo per l'effetto particellare dell'esplosione.</span>
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Explosion/ExplosionFX_AlphaBlend.mat</span></td>
            <td>
              <span v-if="locale === 'en'">Alpha blend material for the explosion particle effect.</span>
              <span v-else>Materiale alpha blend per l'effetto particellare dell'esplosione.</span>
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Start/RocketFX_Additive.mat</span></td>
            <td>
              <span v-if="locale === 'en'">Additive blend material for the rocket launch particle effect.</span>
              <span v-else>Materiale blend additivo per l'effetto particellare del lancio del razzo.</span>
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Start/RocketFX_AlphaBlend.mat</span></td>
            <td>
              <span v-if="locale === 'en'">Alpha blend material for the rocket launch particle effect.</span>
              <span v-else>Materiale alpha blend per l'effetto particellare del lancio del razzo.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-doc-section">
      <div v-if="locale === 'en'" class="hm-doc-section-title">Folder Location</div>
      <div v-else class="hm-doc-section-title">Posizione nella Cartella</div>

      <ul class="hm-vtree">
        <li class="hm-vtree-folder">Prefabs/Launcher/weapons/
          <ul>
            <li class="hm-vtree-folder">Materials/
              <ul>
                <li class="hm-vtree-file">02-rocketluncher_MAT-RocketLauncher_BaseColor.mat</li>
                <li class="hm-vtree-file">02-rocketluncher_MAT-RocketLauncher-upper_BaseColor.mat</li>
                <li class="hm-vtree-file">bullet.mat</li>
                <li class="hm-vtree-folder">Explosion/
                  <ul>
                    <li class="hm-vtree-file">ExplosionFX_Additive.mat</li>
                    <li class="hm-vtree-file">ExplosionFX_AlphaBlend.mat</li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">Start/
                  <ul>
                    <li class="hm-vtree-file">RocketFX_Additive.mat</li>
                    <li class="hm-vtree-file">RocketFX_AlphaBlend.mat</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Customization</strong>
        You can duplicate any material and assign your own textures to create
        different visual styles. Just swap the material reference on the corresponding
        prefab's MeshRenderer or ParticleSystemRenderer.
      </template>
      <template v-else>
        <strong>Personalizzazione</strong>
        Puoi duplicare qualsiasi materiale e assegnare le tue texture per creare
        stili visivi diversi. Basta sostituire il riferimento al materiale sul
        MeshRenderer o ParticleSystemRenderer del prefab corrispondente.
      </template>
    </div>

    <div class="hm-alert hm-alert-info">
      <template v-if="locale === 'en'">
        <strong>Automatic Pipeline Conversion</strong>
        The editor script <span class="hm-code">Scripts/Editor/PipelineMaterialConverter.cs</span>
        automatically converts all materials in the asset when you switch between render pipelines
        (Built-in, URP, HDRP). You do not need to manually reassign shaders — just run the converter
        from the Unity menu and all launcher weapon materials will be updated to the correct pipeline shaders.
      </template>
      <template v-else>
        <strong>Conversione Automatica Pipeline</strong>
        Lo script editor <span class="hm-code">Scripts/Editor/PipelineMaterialConverter.cs</span>
        converte automaticamente tutti i materiali dell'asset quando si cambia pipeline di rendering
        (Built-in, URP, HDRP). Non è necessario riassegnare manualmente gli shader — basta eseguire il
        convertitore dal menu di Unity e tutti i materiali delle armi del lanciatore verranno aggiornati
        con gli shader corretti della pipeline selezionata.
      </template>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMLauncherWeaponsMaterial',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
