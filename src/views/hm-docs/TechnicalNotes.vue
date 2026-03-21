<template>
  <div class="hm-doc-page">
    <h1 class="hm-doc-title"><span>16</span><template v-if="locale === 'en'">TECHNICAL NOTES</template><template v-else>NOTE TECNICHE</template></h1>
    <p class="hm-text-lead" v-if="locale === 'en'">
      Implementation details and architectural decisions that are useful to understand
      when extending the system or diagnosing unexpected behaviour.
    </p>
    <p class="hm-text-lead" v-else>
      Dettagli implementativi e decisioni architetturali utili da comprendere quando si estende
      il sistema o si diagnostica un comportamento inatteso.
    </p>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Assembly Definitions (.asmdef)</div>
      <div class="hm-doc-section-title" v-else>Assembly Definition (.asmdef)</div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-if="locale === 'en'">
        <strong>Why Assembly Definitions?</strong>
        Without <span class="hm-code">.asmdef</span> files, all scripts end up in
        <span class="hm-code">Assembly-CSharp.dll</span> (Unity's default assembly). This causes a
        full recompilation on every script change and potential naming conflicts with other imported
        assets. With Assembly Definitions the code is isolated into separate DLLs.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-else>
        <strong>Perché le Assembly Definition?</strong>
        Senza i file <span class="hm-code">.asmdef</span>, tutti gli script finiscono in
        <span class="hm-code">Assembly-CSharp.dll</span> (l'assembly di default di Unity). Questo
        causa una ricompilazione completa ad ogni modifica e possibili conflitti di nomi con altri
        asset importati. Con le Assembly Definition il codice viene isolato in DLL separate.
      </div>

      <table class="hm-field-table">
        <thead>
          <tr v-if="locale === 'en'">
            <th>File</th>
            <th>Details</th>
          </tr>
          <tr v-else>
            <th>File</th>
            <th>Dettagli</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="hm-field-name">HomingMissile.asmdef</span></td>
            <td v-if="locale === 'en'">
              <strong>Runtime assembly.</strong> Located at <span class="hm-code">Assets/HomingMissile/HomingMissile.asmdef</span>.
              Assembly name: <span class="hm-code">HomingMissile</span>.
              Root namespace: <span class="hm-code">HomingMissile</span>.
              References: <span class="hm-code">Unity.InputSystem</span> (required by InputSystem_Actions and PlayerController).
              Platforms: all. <span class="hm-code">autoReferenced: true</span> — other assemblies in the project can use it without manual configuration.
              Covers: <span class="hm-code">Scripts/Core</span>, <span class="hm-code">Scripts/Player</span>, <span class="hm-code">Scripts/UI</span>, <span class="hm-code">Scripts/Utility</span>, <span class="hm-code">Input/</span>.
            </td>
            <td v-else>
              <strong>Assembly runtime.</strong> Posizionato in <span class="hm-code">Assets/HomingMissile/HomingMissile.asmdef</span>.
              Nome assembly: <span class="hm-code">HomingMissile</span>.
              Root namespace: <span class="hm-code">HomingMissile</span>.
              Riferimenti: <span class="hm-code">Unity.InputSystem</span> (necessario per InputSystem_Actions e PlayerController).
              Piattaforme: tutte. <span class="hm-code">autoReferenced: true</span> — altri assembly del progetto possono usarlo senza configurazione manuale.
              Copre: <span class="hm-code">Scripts/Core</span>, <span class="hm-code">Scripts/Player</span>, <span class="hm-code">Scripts/UI</span>, <span class="hm-code">Scripts/Utility</span>, <span class="hm-code">Input/</span>.
            </td>
          </tr>
          <tr>
            <td><span class="hm-field-name">HomingMissile.Editor.asmdef</span></td>
            <td v-if="locale === 'en'">
              <strong>Editor-only assembly.</strong> Located at <span class="hm-code">Assets/HomingMissile/Scripts/Editor/HomingMissile.Editor.asmdef</span>.
              References: <span class="hm-code">HomingMissile</span> (the runtime assembly, for accessing project types).
              Platforms: <span class="hm-code">Editor</span> only — excluded from the final game build.
              Covers: <span class="hm-code">Scripts/Editor/</span> (<span class="hm-code">PipelineMaterialConverter.cs</span>).
            </td>
            <td v-else>
              <strong>Assembly solo per l'Editor.</strong> Posizionato in <span class="hm-code">Assets/HomingMissile/Scripts/Editor/HomingMissile.Editor.asmdef</span>.
              Riferimenti: <span class="hm-code">HomingMissile</span> (l'assembly runtime, per accedere ai tipi del progetto).
              Piattaforme: solo <span class="hm-code">Editor</span> — escluso dal build finale del gioco.
              Copre: <span class="hm-code">Scripts/Editor/</span> (<span class="hm-code">PipelineMaterialConverter.cs</span>).
            </td>
          </tr>
        </tbody>
      </table>

      <div class="hm-alert hm-alert-info" style="margin-top: 0.75rem;" v-if="locale === 'en'">
        <strong>Placement Note</strong>
        The runtime <span class="hm-code">.asmdef</span> is placed at the root
        <span class="hm-code">Assets/HomingMissile/</span> (not inside <span class="hm-code">Scripts/</span>)
        because <span class="hm-code">InputSystem_Actions.cs</span> lives in
        <span class="hm-code">Input/</span>, which is outside <span class="hm-code">Scripts/</span>.
        Unity applies the <span class="hm-code">.asmdef</span> to all scripts in its folder and subfolders.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-top: 0.75rem;" v-else>
        <strong>Nota sul Posizionamento</strong>
        L'<span class="hm-code">.asmdef</span> runtime è posizionato alla radice
        <span class="hm-code">Assets/HomingMissile/</span> (non dentro <span class="hm-code">Scripts/</span>)
        perché <span class="hm-code">InputSystem_Actions.cs</span> si trova in
        <span class="hm-code">Input/</span>, che è fuori da <span class="hm-code">Scripts/</span>.
        Unity applica l'<span class="hm-code">.asmdef</span> a tutti gli script nella cartella e sottocartelle.
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Architecture &amp; Namespacing</div>
      <div class="hm-doc-section-title" v-else>Architettura &amp; Namespacing</div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-if="locale === 'en'">
        <strong>C# Namespace: HomingMissile</strong>
        All nine scripts are wrapped in the <span class="hm-code">HomingMissile</span> namespace.
        When referencing any class from outside the asset folder, add
        <span class="hm-code">using HomingMissile;</span> at the top of your script. This prevents
        naming conflicts with other assets or your own code.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-else>
        <strong>Namespace C#: HomingMissile</strong>
        Tutti e nove gli script sono racchiusi nel namespace <span class="hm-code">HomingMissile</span>.
        Quando si referenzia qualsiasi classe dall'esterno della cartella dell'asset, aggiungi
        <span class="hm-code">using HomingMissile;</span> in cima al tuo script. Questo previene
        conflitti di nomi con altri asset o il tuo codice.
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Rigidbody Runtime Configuration</div>
      <div class="hm-doc-section-title" v-else>Configurazione Rigidbody a Runtime</div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-if="locale === 'en'">
        <strong>Rigidbody Settings Applied at Runtime</strong>
        The missile prefab's <span class="hm-code">Rigidbody</span> is configured programmatically
        by <span class="hm-code">HomingMissile.Initialize()</span>, not in the prefab Inspector.
        This includes <span class="hm-code">drag</span>, <span class="hm-code">useGravity</span>,
        <span class="hm-code">interpolation</span>, and
        <span class="hm-code">collisionDetectionMode</span>. Do not change these values on the
        prefab Rigidbody — they will be overwritten on instantiation. Use the Inspector fields
        on <span class="hm-code">HomingMissile.cs</span> instead.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-else>
        <strong>Impostazioni Rigidbody Applicate a Runtime</strong>
        Il Rigidbody del prefab del missile è configurato programmaticamente da
        <span class="hm-code">HomingMissile.Initialize()</span>, non nel prefab Inspector.
        Questo include <span class="hm-code">drag</span>, <span class="hm-code">useGravity</span>,
        <span class="hm-code">interpolation</span> e
        <span class="hm-code">collisionDetectionMode</span>. Non modificare questi valori sul
        Rigidbody del prefab — verranno sovrascritti all'istanziazione. Usa invece i campi Inspector
        su <span class="hm-code">HomingMissile.cs</span>.
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Procedural Audio Architecture</div>
      <div class="hm-doc-section-title" v-else>Architettura Audio Procedurale</div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-if="locale === 'en'">
        <strong>Sine-Wave Lock-On Audio — No Audio Files Required</strong>
        The beep tones and lock-on continuous tone are generated entirely in code via
        <span class="hm-code">AudioClip.Create()</span> with a 44100 Hz sample rate and a
        single-period sine wave buffer. The waveform is computed once per unique frequency
        and cached. This means you get consistent, clean tones on all platforms with zero
        audio asset overhead. To change the pitch, adjust <span class="hm-code">beepFrequency</span>
        or <span class="hm-code">lockedToneFrequency</span> in the Inspector — no new audio files
        are needed.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-else>
        <strong>Audio di Aggancio a Onda Sinusoidale — Nessun File Audio Necessario</strong>
        I toni beep e il tono continuo di aggancio sono generati interamente nel codice tramite
        <span class="hm-code">AudioClip.Create()</span> con un sample rate di 44100 Hz e un buffer
        di onda sinusoidale a singolo periodo. La forma d'onda viene calcolata una volta per ogni
        frequenza unica e memorizzata in cache. Questo significa che ottieni toni consistenti e puliti
        su tutte le piattaforme con zero overhead di asset audio. Per cambiare l'intonazione, regola
        <span class="hm-code">beepFrequency</span> o <span class="hm-code">lockedToneFrequency</span>
        nell'Inspector — nessun nuovo file audio è necessario.
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Miss Detection Algorithm</div>
      <div class="hm-doc-section-title" v-else>Algoritmo di Rilevamento Mancato</div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-if="locale === 'en'">
        <strong>Closest-Approach Miss Detection</strong>
        The missile monitors the rate of change of the distance to its target every
        <span class="hm-code">FixedUpdate</span>. When the distance begins
        <em>increasing</em> rather than decreasing — meaning the missile has passed the target
        without triggering the proximity fuze — the missile is classified as a miss and
        self-destructs immediately rather than continuing to fly until <span class="hm-code">lifetime</span>
        expires. This keeps the scene clean and prevents orphaned missiles from causing
        unexpected late-detonations.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-else>
        <strong>Rilevamento Mancato per Avvicinamento Massimo</strong>
        Il missile monitora il tasso di variazione della distanza dal bersaglio ad ogni
        <span class="hm-code">FixedUpdate</span>. Quando la distanza inizia ad
        <em>aumentare</em> invece che diminuire — il che significa che il missile ha superato il
        bersaglio senza attivare la spoletta di prossimità — il missile viene classificato come
        mancato e si autodistrugge immediatamente invece di continuare a volare fino alla scadenza
        del <span class="hm-code">lifetime</span>. Questo mantiene la scena pulita e previene missili
        orfani che causano detonazioni tardive inattese.
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">Proximity Fuze &amp; Collider Exclusion</div>
      <div class="hm-doc-section-title" v-else>Spoletta di Prossimità &amp; Esclusione Collider</div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-if="locale === 'en'">
        <strong>Launcher Colliders Excluded from Proximity Check</strong>
        When the proximity fuze sphere-casts each frame, it excludes all colliders that belong
        to the launcher station (identified by the <span class="hm-code">"Rocket"</span> tag on the
        root). Without this exclusion, missiles launched from within the station's collider
        bounding box would immediately self-detonate. If your launcher setup has an unusual
        hierarchy, ensure the root is correctly tagged so the exclusion list is built correctly.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-else>
        <strong>Collider del Lanciatore Esclusi dal Controllo di Prossimità</strong>
        Quando la spoletta di prossimità esegue uno sphere-cast ad ogni frame, esclude tutti i
        collider che appartengono alla stazione di lancio (identificati dal tag
        <span class="hm-code">"Rocket"</span> sul root). Senza questa esclusione, i missili lanciati
        dall'interno del bounding box del collider della stazione si autodistruggerebbero immediatamente.
        Se la tua configurazione del lanciatore ha una gerarchia insolita, assicurati che il root sia
        taggato correttamente in modo che la lista di esclusione venga costruita correttamente.
      </div>
    </div>

    <div class="hm-doc-section">
      <div class="hm-doc-section-title" v-if="locale === 'en'">HUD World-Space Projection</div>
      <div class="hm-doc-section-title" v-else>Proiezione HUD nel World-Space</div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-if="locale === 'en'">
        <strong>Lock-On Overlay via RuntimePanelUtils.ScreenToPanel()</strong>
        The lock-on overlay bracket that appears over the locked target in world space is
        positioned using <span class="hm-code">RuntimePanelUtils.ScreenToPanel()</span> —
        the UI Toolkit equivalent of converting a world position to screen position.
        This is the correct API for UI Toolkit in Unity 6 (it replaces the legacy
        <span class="hm-code">Camera.WorldToScreenPoint</span> workflow for UIDocument
        elements). The overlay updates every <span class="hm-code">Update()</span> call,
        so it tracks smoothly even for fast-moving targets.
      </div>
      <div class="hm-alert hm-alert-info" style="margin-bottom: 0.75rem;" v-else>
        <strong>Overlay di Aggancio tramite RuntimePanelUtils.ScreenToPanel()</strong>
        Il bracket overlay di aggancio che appare sopra il bersaglio agganciato nello spazio mondo è
        posizionato usando <span class="hm-code">RuntimePanelUtils.ScreenToPanel()</span> —
        l'equivalente in UI Toolkit della conversione di una posizione mondo in posizione schermo.
        Questa è l'API corretta per UI Toolkit in Unity 6 (sostituisce il workflow legacy
        <span class="hm-code">Camera.WorldToScreenPoint</span> per gli elementi UIDocument).
        L'overlay si aggiorna ad ogni chiamata <span class="hm-code">Update()</span>, quindi traccia
        fluidamente anche i bersagli veloci.
      </div>
    </div>

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMTechnicalNotes',
  setup() {
    const { locale } = useI18n()
    return { locale }
  }
}
</script>
