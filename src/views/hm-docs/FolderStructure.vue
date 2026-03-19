<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>02</span><template v-if="locale === 'en'">FOLDER STRUCTURE</template><template v-else>STRUTTURA DELLE CARTELLE</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      All asset files are organized under <span class="hm-code">Assets/HomingMissile/</span>.
      The layout keeps scripts, prefabs, scenes, and UI assets cleanly separated so nothing
      spills into your project's own folders.
    </p>
    <p class="hm-text-lead" v-else>
      Tutti i file dell'asset sono organizzati sotto <span class="hm-code">Assets/HomingMissile/</span>.
      La struttura mantiene script, prefab, scene e asset UI separati in modo ordinato,
      così nulla si mescola con le cartelle del tuo progetto.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Directory Tree</div>
      <div class="hm-doc-section-title" v-else>Albero delle Directory</div>
      <ul class="hm-vtree">
        <li class="hm-vtree-folder">Assets/
          <ul>
            <li class="hm-vtree-folder">HomingMissile/
              <ul>
                <li class="hm-vtree-folder">Animation/
                  <ul>
                    <li class="hm-vtree-file">AirAnimator.controller</li>
                    <li class="hm-vtree-file">CubeTargetMove.controller</li>
                    <li class="hm-vtree-file">CubeTargetUpDown.controller</li>
                    <li class="hm-vtree-file">MoveAir.anim</li>
                    <li class="hm-vtree-file">MoveTarget.anim</li>
                    <li class="hm-vtree-file">MoveUpDown.anim</li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">Demo/
                  <ul>
                    <li class="hm-vtree-file">AirDemo.unity</li>
                    <li class="hm-vtree-file">GroundDemo.unity</li>
                  </ul>
                </li>
                <li class="hm-vtree-file">Documentation.pdf</li>
                <li class="hm-vtree-folder">Input/
                  <ul>
                    <li class="hm-vtree-file">InputSystem_Actions.cs</li>
                    <li class="hm-vtree-file">InputSystem_Actions.inputactions</li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">Licenses/
                  <ul>
                    <li class="hm-vtree-file">A Third-Party Notices.txt</li>
                    <li class="hm-vtree-folder">Font/
                      <ul>
                        <li class="hm-vtree-file">License.txt</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">Materials/
                  <ul>
                    <li class="hm-vtree-file">Blue.mat</li>
                    <li class="hm-vtree-file">BlueTarget.mat</li>
                    <li class="hm-vtree-file">RedTarget.mat</li>
                    <li class="hm-vtree-file">Test.mat</li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">Prefabs/
                  <ul>
                    <li class="hm-vtree-folder">Launcher/
                      <ul>
                        <li class="hm-vtree-folder">weapons/
                          <ul>
                            <li class="hm-vtree-folder">Effects/
                              <ul>
                                <li class="hm-vtree-folder">Explosion/
                                  <ul>
                                    <li class="hm-vtree-file">ExplosionFX.prefab</li>
                                    <li class="hm-vtree-folder">Materials/
                                      <ul>
                                        <li class="hm-vtree-file">explosion.mat</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li class="hm-vtree-folder">Rocket/
                                  <ul>
                                    <li class="hm-vtree-file">RocketLaunchFX.prefab</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
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
                            <li class="hm-vtree-folder">Sounds/
                              <ul>
                                <li class="hm-vtree-file">explosion.wav</li>
                                <li class="hm-vtree-file">missile-navigazione.wav</li>
                                <li class="hm-vtree-file">partenza.wav</li>
                                <li class="hm-vtree-file">partenza2.wav</li>
                              </ul>
                            </li>
                            <li class="hm-vtree-file">RocketBullet.prefab</li>
                            <li class="hm-vtree-file">rocket_bullet.fbx</li>
                            <li class="hm-vtree-file">rocket-luncher.fbx</li>
                            <li class="hm-vtree-file">RocketLauncher.prefab</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">Scripts/
                  <ul>
                    <li class="hm-vtree-folder">Core/
                      <ul>
                        <li class="hm-vtree-file">HomingMissile.cs</li>
                        <li class="hm-vtree-file">LauncherConfig.cs</li>
                        <li class="hm-vtree-file">LauncherController.cs</li>
                        <li class="hm-vtree-file">LauncherControllerConfig.cs</li>
                        <li class="hm-vtree-file">MissileConfig.cs</li>
                        <li class="hm-vtree-file">MissileLauncher.cs</li>
                        <li class="hm-vtree-file">TargetHealth.cs</li>
                      </ul>
                    </li>
                    <li class="hm-vtree-folder">Editor/
                      <ul>
                        <li class="hm-vtree-file">PipelineMaterialConverter.cs</li>
                      </ul>
                    </li>
                    <li class="hm-vtree-folder">Player/
                      <ul>
                        <li class="hm-vtree-file">PlayerController.cs</li>
                      </ul>
                    </li>
                    <li class="hm-vtree-folder">UI/
                      <ul>
                        <li class="hm-vtree-file">LauncherHUDController.cs</li>
                      </ul>
                    </li>
                    <li class="hm-vtree-folder">Utility/
                      <ul>
                        <li class="hm-vtree-file">ExplosionLightFade.cs</li>
                        <li class="hm-vtree-file">SceneSwitcher.cs</li>
                        <li class="hm-vtree-file">SessionAnimator.cs</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">texture/
                  <ul>
                    <li class="hm-vtree-folder">Plane/
                      <ul>
                        <li class="hm-vtree-file">Tiles106_4K-JPG_AmbientOcclusion.jpg</li>
                        <li class="hm-vtree-file">Tiles106_4K-JPG_Color.jpg</li>
                        <li class="hm-vtree-file">Tiles106_4K-JPG_Displacement.jpg</li>
                        <li class="hm-vtree-file">Tiles106_4K-JPG_NormalDX.jpg</li>
                        <li class="hm-vtree-file">Tiles106_4K-JPG_NormalGL.jpg</li>
                        <li class="hm-vtree-file">Tiles106_4K-JPG_Roughness.jpg</li>
                      </ul>
                    </li>
                    <li class="hm-vtree-folder">TexturesMecha/
                      <ul>
                        <li class="hm-vtree-file">02-rocketluncher_MAT-RocketLauncher_*.png</li>
                        <li class="hm-vtree-file">02-rocketluncher_MAT-RocketLauncher-upper_*.png</li>
                        <li class="hm-vtree-file">06-bullet_MAT-bullet_*.png / *.jpg</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="hm-vtree-folder">UI/
                  <ul>
                    <li class="hm-vtree-folder">LauncherHUD/
                      <ul>
                        <li class="hm-vtree-file">LauncherHUD.uss</li>
                        <li class="hm-vtree-file">LauncherHUD.uxml</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Subfolder Reference</div>
      <div class="hm-doc-section-title" v-else>Riferimento Sottocartelle</div>
      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'">
            <th>Folder</th>
            <th>Contents</th>
          </tr>
          <tr v-else>
            <th>Cartella</th>
            <th>Contenuti</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">Animation/</span></td>
            <td v-if="locale === 'en'">Animator controllers and animation clips used by moving targets in the demo scenes.</td>
            <td v-else>Controller degli animator e clip di animazione usati dai bersagli mobili nelle scene demo.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Demo/</span></td>
            <td v-if="locale === 'en'">The two playable demo scenes: <span class="hm-code">GroundDemo.unity</span> and <span class="hm-code">AirDemo.unity</span>. Open either scene and press Play to explore the system immediately.</td>
            <td v-else>Le due scene demo giocabili: <span class="hm-code">GroundDemo.unity</span> e <span class="hm-code">AirDemo.unity</span>. Apri una qualsiasi delle scene e premi Play per esplorare il sistema immediatamente.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Input/</span></td>
            <td v-if="locale === 'en'">Auto-generated Input System actions asset and its C# wrapper.</td>
            <td v-else>Asset delle azioni Input System auto-generato e il suo wrapper C#.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Materials/</span></td>
            <td v-if="locale === 'en'">Shared materials used by targets and demo environment objects.</td>
            <td v-else>Materiali condivisi usati dai bersagli e dagli oggetti dell'ambiente demo.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Prefabs/</span></td>
            <td v-if="locale === 'en'">
              <span class="hm-code">RocketLauncher.prefab</span> — the complete launcher station.
              <span class="hm-code">RocketBullet.prefab</span> — the missile projectile with all required components.
              Also contains VFX prefabs (<span class="hm-code">ExplosionFX</span>, <span class="hm-code">RocketLaunchFX</span>), VFX materials (additive and alpha-blend for explosion and launch effects), sound files, and 3D models.
            </td>
            <td v-else>
              <span class="hm-code">RocketLauncher.prefab</span> — la stazione di lancio completa.
              <span class="hm-code">RocketBullet.prefab</span> — il proiettile missile con tutti i componenti necessari.
              Contiene anche prefab VFX (<span class="hm-code">ExplosionFX</span>, <span class="hm-code">RocketLaunchFX</span>), materiali VFX (additive e alpha-blend per gli effetti di esplosione e lancio), file audio e modelli 3D.
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Scripts/Core/</span></td>
            <td v-if="locale === 'en'">The primary runtime scripts: missile flight controller, launcher manager, turret rotation controller, ScriptableObject configs (<span class="hm-code">MissileConfig</span>, <span class="hm-code">LauncherConfig</span>, <span class="hm-code">LauncherControllerConfig</span>), and target health.</td>
            <td v-else>Gli script runtime principali: controllore di volo del missile, gestore del lanciatore, controllore di rotazione della torretta, configurazioni ScriptableObject (<span class="hm-code">MissileConfig</span>, <span class="hm-code">LauncherConfig</span>, <span class="hm-code">LauncherControllerConfig</span>) e salute del bersaglio.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Scripts/Editor/</span></td>
            <td v-if="locale === 'en'">Editor-only utility: <span class="hm-code">PipelineMaterialConverter.cs</span> automatically converts materials when switching between render pipelines.</td>
            <td v-else>Utilità solo per l'Editor: <span class="hm-code">PipelineMaterialConverter.cs</span> converte automaticamente i materiali quando si cambia pipeline di rendering.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Scripts/Player/</span></td>
            <td v-if="locale === 'en'">Player input handler. Bridges Unity's new Input System to the launcher and camera rig.</td>
            <td v-else>Gestore input del giocatore. Collega il nuovo Input System di Unity al lanciatore e al rig della camera.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Scripts/UI/</span></td>
            <td v-if="locale === 'en'">The HUD controller. Subscribes to launcher events and updates the UI Toolkit document each frame.</td>
            <td v-else>Il controllore dell'HUD. Si iscrive agli eventi del lanciatore e aggiorna il documento UI Toolkit ad ogni frame.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Scripts/Utility/</span></td>
            <td v-if="locale === 'en'">Three helper scripts: explosion light fade, scene switching, and animator auto-play.</td>
            <td v-else>Tre script di utilità: dissolvenza luce esplosione, cambio scena e auto-play dell'animator.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">texture/</span></td>
            <td v-if="locale === 'en'">PBR texture sets for the ground plane and the launcher/missile 3D models.</td>
            <td v-else>Set di texture PBR per il piano del terreno e i modelli 3D del lanciatore/missile.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">UI/</span></td>
            <td v-if="locale === 'en'">The UI Toolkit source files for the HUD — the UXML layout and USS stylesheet inside <span class="hm-code">LauncherHUD/</span>.</td>
            <td v-else>I file sorgente UI Toolkit per l'HUD — il layout UXML e il foglio di stile USS dentro <span class="hm-code">LauncherHUD/</span>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Non-Destructive Import</strong>
      The <span class="hm-code">HomingMissile/</span> root folder is entirely self-contained.
      You can safely place it alongside your own project folders without any naming conflicts,
      provided you don't already have a namespace called <span class="hm-code">HomingMissile</span> in your codebase.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Importazione Non-Distruttiva</strong>
      La cartella root <span class="hm-code">HomingMissile/</span> è completamente autonoma.
      Puoi posizionarla in sicurezza accanto alle cartelle del tuo progetto senza alcun conflitto di nomi,
      a condizione che tu non abbia già un namespace chiamato <span class="hm-code">HomingMissile</span> nel tuo codice.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMFolderStructure',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
