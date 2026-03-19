<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title" v-if="locale === 'en'"><span>06</span>HUD LAYOUT REFERENCE</h1>
    <h1 class="hm-doc-title" v-else><span>06</span>RIFERIMENTO LAYOUT HUD</h1>

    <p class="hm-text-lead" v-if="locale === 'en'">
      The HUD is defined by two UI Toolkit files:
      <span class="hm-code">UI/LauncherHUD.uxml</span> (layout) and
      <span class="hm-code">UI/LauncherHUD.uss</span> (stylesheet).
      The visual design is a dark navy / cyan military aesthetic derived directly from
      the asset's HUD color palette.
    </p>
    <p class="hm-text-lead" v-else>
      L'HUD è definito da due file UI Toolkit:
      <span class="hm-code">UI/LauncherHUD.uxml</span> (layout) e
      <span class="hm-code">UI/LauncherHUD.uss</span> (foglio di stile).
      Il design visivo è un'estetica militare navy scuro / ciano derivata direttamente dalla
      palette colori HUD dell'asset.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Color Palette</div>
      <div class="hm-doc-section-title" v-else>Palette Colori</div>
      <div class="hm-tag-grid" v-if="locale === 'en'">
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.4);">
          <div class="hm-tag-name" style="color: rgba(85,195,235,0.9);">Background</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(6, 10, 16, 0.80)</span><br>
            Dark navy with 80% opacity. Used for all panel backgrounds.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.4);">
          <div class="hm-tag-name" style="color: #55C3EB;">Accent Cyan</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(85, 195, 235, 0.90)</span><br>
            Primary UI color. Borders, active elements, crosshair, and text.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(225,235,242,0.2);">
          <div class="hm-tag-name" style="color: rgba(225,235,242,0.9);">Text</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(225, 235, 242, 0.95)</span><br>
            Primary text color. Labels, readouts, and status text.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(40,220,100,0.35);">
          <div class="hm-tag-name" style="color: #28DC64;">Locked Green</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(40, 220, 100, 1.0)</span><br>
            Lock acquired state. Crosshair and lock-on overlay turn this color.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(255,148,30,0.35);">
          <div class="hm-tag-name" style="color: rgba(255,148,30,0.95);">Low Ammo Orange</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(255, 148, 30, 0.95)</span><br>
            Ammo readout when count &le; lowAmmoWarningThreshold.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(220,50,40,0.35);">
          <div class="hm-tag-name" style="color: rgba(220,50,40,0.95);">No Ammo Red</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(220, 50, 40, 0.95)</span><br>
            Ammo readout when count = 0.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.15);">
          <div class="hm-tag-name" style="color: rgba(85,195,235,0.4);">Inactive Slot</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(85, 195, 235, 0.15)</span><br>
            Fired / expended ammo slot background.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.5);">
          <div class="hm-tag-name" style="color: rgba(85,195,235,0.8);">Active Slot</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(85, 195, 235, 0.85)</span><br>
            Available ammo slot fill color.
          </div>
        </div>
      </div>
      <div class="hm-tag-grid" v-else>
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.4);">
          <div class="hm-tag-name" style="color: rgba(85,195,235,0.9);">Sfondo</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(6, 10, 16, 0.80)</span><br>
            Navy scuro con opacità 80%. Usato per tutti gli sfondi dei pannelli.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.4);">
          <div class="hm-tag-name" style="color: #55C3EB;">Ciano Accento</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(85, 195, 235, 0.90)</span><br>
            Colore UI primario. Bordi, elementi attivi, mirino e testo.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(225,235,242,0.2);">
          <div class="hm-tag-name" style="color: rgba(225,235,242,0.9);">Testo</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(225, 235, 242, 0.95)</span><br>
            Colore testo primario. Etichette, letture e testo di stato.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(40,220,100,0.35);">
          <div class="hm-tag-name" style="color: #28DC64;">Verde Agganciato</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(40, 220, 100, 1.0)</span><br>
            Stato di aggancio acquisito. Il mirino e l'overlay di aggancio diventano di questo colore.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(255,148,30,0.35);">
          <div class="hm-tag-name" style="color: rgba(255,148,30,0.95);">Arancione Munizioni Basse</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(255, 148, 30, 0.95)</span><br>
            Lettura munizioni quando il conteggio &le; lowAmmoWarningThreshold.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(220,50,40,0.35);">
          <div class="hm-tag-name" style="color: rgba(220,50,40,0.95);">Rosso Munizioni Esaurite</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(220, 50, 40, 0.95)</span><br>
            Lettura munizioni quando il conteggio = 0.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.15);">
          <div class="hm-tag-name" style="color: rgba(85,195,235,0.4);">Slot Inattivo</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(85, 195, 235, 0.15)</span><br>
            Sfondo slot munizioni sparate / esaurite.
          </div>
        </div>
        <div class="hm-tag-card" style="border-color: rgba(85,195,235,0.5);">
          <div class="hm-tag-name" style="color: rgba(85,195,235,0.8);">Slot Attivo</div>
          <div class="hm-tag-desc">
            <span class="hm-code">rgba(85, 195, 235, 0.85)</span><br>
            Colore riempimento slot munizioni disponibili.
          </div>
        </div>
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">USS Base Sizes (at 1920×1080)</div>
      <div class="hm-doc-section-title" v-else>Dimensioni Base USS (a 1920×1080)</div>
      <table class="hm-field-table" v-if="locale === 'en'">
        <thead><tr><th>Element</th><th>Width</th><th>Height</th><th>Notes</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">Azimuth bar</span></td>
            <td>600 px</td>
            <td>28 px</td>
            <td>Centered at top. Each degree tick is 4 px wide.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Corner bracket (each)</span></td>
            <td>variable</td>
            <td>variable</td>
            <td>Size animated by LauncherHUDController between lockBracketStartSize and lockBracketLockedSize.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Crosshair</span></td>
            <td>40 px</td>
            <td>40 px</td>
            <td>4 lines + center dot. Centered on screen.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Lock-on overlay</span></td>
            <td>80 px</td>
            <td>80 px</td>
            <td>World-space projected via RuntimePanelUtils.ScreenToPanel().</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Bottom left panel</span></td>
            <td>auto</td>
            <td>52 px</td>
            <td>Ammo slots. Width scales with maxDisplaySlots.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Bottom centre panel</span></td>
            <td>100 px</td>
            <td>52 px</td>
            <td>Ammo count + cooldown bar.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Bottom right panel</span></td>
            <td>120 px</td>
            <td>52 px</td>
            <td>READY / RELOAD status.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Top info bar</span></td>
            <td>380 px</td>
            <td>26 px</td>
            <td>AZ, EL, RNG, LOCK status. Monospaced font.</td>
          </tr>
        </tbody>
      </table>
      <table class="hm-field-table" v-else>
        <thead><tr><th>Elemento</th><th>Larghezza</th><th>Altezza</th><th>Note</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">Barra azimut</span></td>
            <td>600 px</td>
            <td>28 px</td>
            <td>Centrata in alto. Ogni tacca di grado è larga 4 px.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Parentesi angolari (ciascuna)</span></td>
            <td>variabile</td>
            <td>variabile</td>
            <td>Dimensione animata da LauncherHUDController tra lockBracketStartSize e lockBracketLockedSize.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Mirino</span></td>
            <td>40 px</td>
            <td>40 px</td>
            <td>4 linee + punto centrale. Centrato sullo schermo.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Overlay aggancio</span></td>
            <td>80 px</td>
            <td>80 px</td>
            <td>Proiettato nello spazio mondo tramite RuntimePanelUtils.ScreenToPanel().</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Pannello in basso a sinistra</span></td>
            <td>auto</td>
            <td>52 px</td>
            <td>Slot munizioni. La larghezza scala con maxDisplaySlots.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Pannello in basso al centro</span></td>
            <td>100 px</td>
            <td>52 px</td>
            <td>Conteggio munizioni + barra di ricarica.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Pannello in basso a destra</span></td>
            <td>120 px</td>
            <td>52 px</td>
            <td>Stato READY / RELOAD.</td>
          </tr>
          <tr>
            <td><span class="hm-field-name">Barra info superiore</span></td>
            <td>380 px</td>
            <td>26 px</td>
            <td>Stato AZ, EL, RNG, LOCK. Font monospaced.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hm-alert hm-alert-info" v-if="locale === 'en'">
      <strong>Modifying the HUD</strong>
      You can open <span class="hm-code">LauncherHUD.uxml</span> directly in the
      Unity UI Builder (Window &gt; UI Toolkit &gt; UI Builder) to add, remove, or
      restyle any element. All runtime behaviour is driven by
      <span class="hm-code">LauncherHUDController</span> — elements are located by
      their USS class names, so renaming an element's class in the UXML requires updating
      the corresponding query in the controller.
    </div>
    <div class="hm-alert hm-alert-info" v-else>
      <strong>Modificare l'HUD</strong>
      Puoi aprire <span class="hm-code">LauncherHUD.uxml</span> direttamente nell'Unity UI Builder
      (Window &gt; UI Toolkit &gt; UI Builder) per aggiungere, rimuovere o restyling di qualsiasi
      elemento. Tutto il comportamento runtime è guidato da
      <span class="hm-code">LauncherHUDController</span> — gli elementi sono localizzati tramite
      i nomi delle classi USS, quindi rinominare la classe di un elemento nell'UXML richiede
      l'aggiornamento della query corrispondente nel controller.
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMHUDReference',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
