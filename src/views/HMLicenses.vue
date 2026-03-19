<template>
  <div class="hm-licenses-page">
    <div class="hm-grid-bg"></div>
    <div class="container position-relative py-5" style="z-index: 1;">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h1 class="hm-page-title">{{ $t('licenses.title') }}</h1>
          <p class="hm-page-lead">{{ $t('licenses.lead') }}</p>

          <div class="hm-license-section">
            <h2 class="hm-section-label">{{ $t('licenses.unityComponents') }}</h2>
            <div class="hm-license-item">
              <p>{{ $t('licenses.textMeshPro') }}<br>
              {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://unity.com/legal/licenses/unity-companion-license" target="_blank">https://unity.com/legal/licenses/unity-companion-license</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}</p>
            </div>
            <div class="hm-license-item">
              <p>{{ $t('licenses.playerInput') }}<br>
              {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://unity.com/legal/licenses/unity-companion-license" target="_blank">https://unity.com/legal/licenses/unity-companion-license</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}</p>
            </div>
          </div>

          <div class="hm-license-section">
            <h2 class="hm-section-label">{{ $t('licenses.audioTitle') }}</h2>
            <div class="hm-license-item">
              <p>{{ $t('licenses.audioHammer') }}<br>
              {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://freesound.org/s/347841/" target="_blank">https://freesound.org/s/347841/</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}</p>
            </div>
          </div>

          <div class="hm-license-section">
            <h2 class="hm-section-label">{{ $t('licenses.fiverrTitle') }}</h2>
            <div class="hm-license-item">
              <p>{{ $t('licenses.fiverrDesc') }}<br>
              {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://help.fiverr.com/hc/it/articles/360011569298-Dettagli-della-licenza-per-uso-commerciale" target="_blank">https://help.fiverr.com/hc/it/articles/360011569298</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}</p>
            </div>
            <div class="hm-license-item">
              <p><a href="https://it.fiverr.com/pxl_dynamics">PIXEL DYNAMICS STUDIO LTD</a> {{ $t('licenses.fiverrPixel') }}</p>
            </div>
          </div>

          <div class="hm-license-section">
            <h2 class="hm-section-label">{{ $t('licenses.iconsTitle') }}</h2>
            <div class="hm-license-item">
              <p>
                {{ $t('licenses.iconsSmash') }}<br>
                {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://www.flaticon.com/free-icons/steel" target="_blank">flaticon.com/free-icons/steel</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}<br>
                {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://www.flaticon.com/free-icons/plastic-film" target="_blank">flaticon.com/free-icons/plastic-film</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}<br>
                {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://www.flaticon.com/free-icons/rubber" target="_blank">flaticon.com/free-icons/rubber</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}<br>
                {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://www.flaticon.com/free-icons/coin" target="_blank">flaticon.com/free-icons/coin</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}<br>
                {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://www.flaticon.com/free-icons/padlock" target="_blank">flaticon.com/free-icons/padlock</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}
              </p>
            </div>
            <div class="hm-license-item">
              <p>{{ $t('licenses.iconsCraiyon') }}<br>
              {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="https://www.craiyon.com" target="_blank">https://www.craiyon.com</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}</p>
            </div>
          </div>

          <div class="hm-license-section">
            <h2 class="hm-section-label">{{ $t('licenses.fontsTitle') }}</h2>
            <div class="hm-license-item">
              <p>{{ $t('licenses.fontsLiberation') }}<br>
              {{ $t('licenses.seeDetails').split('{0}')[0] }}<a href="http://scripts.sil.org/OFL" target="_blank">http://scripts.sil.org/OFL</a>{{ $t('licenses.seeDetails').split('{0}')[1] }}</p>
            </div>
            <div class="hm-license-item">
              <p>{{ $t('licenses.fontsInter') }}<br>
              {{ $t('licenses.fontsInterTm') }}<br>
              <a href="https://github.com/rsms/inter" target="_blank">https://github.com/rsms/inter</a></p>
              <p>{{ $t('licenses.fontsInterLicense') }}<br>
              {{ $t('licenses.fontsInterFaq') }}<br>
              <a href="http://scripts.sil.org/OFL" target="_blank">http://scripts.sil.org/OFL</a></p>
            </div>
          </div>

          <div class="hm-license-section">
            <h2 class="hm-section-label">SIL OPEN FONT LICENSE</h2>
            <div class="hm-license-text">
              <h3>SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007</h3>

              <h4>PREAMBLE</h4>
              <p>The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others.</p>
              <p>The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.</p>

              <h4>DEFINITIONS</h4>
              <p>"Font Software" refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may include source files, build scripts and documentation.</p>
              <p>"Reserved Font Name" refers to any names specified as such after the copyright statement(s).</p>
              <p>"Original Version" refers to the collection of Font Software components as distributed by the Copyright Holder(s).</p>
              <p>"Modified Version" refers to any derivative made by adding to, deleting, or substituting -- in part or in whole -- any of the components of the Original Version, by changing formats or by porting the Font Software to a new environment.</p>
              <p>"Author" refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software.</p>

              <h4>PERMISSION AND CONDITIONS</h4>
              <p>Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:</p>
              <ol>
                <li>Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.</li>
                <li>Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license.</li>
                <li>No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder.</li>
                <li>The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written permission.</li>
                <li>The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be distributed under any other license.</li>
              </ol>

              <h4>TERMINATION</h4>
              <p>This license becomes null and void if any of the above conditions are not met.</p>

              <h4>DISCLAIMER</h4>
              <p>THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HMLicenses',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { localePath, locale }
  }
}
</script>

<style scoped>
.hm-licenses-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hm-grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(85, 195, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 195, 235, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.hm-page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #E1EBF2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.hm-page-lead {
  font-size: 1.1rem;
  color: rgba(225, 235, 242, 0.5);
  margin-bottom: 3rem;
}

.hm-section-label {
  color: #55C3EB;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(85, 195, 235, 0.2);
}

.hm-license-section {
  margin-bottom: 2.5rem;
}

.hm-license-item {
  background: rgba(13, 21, 32, 0.6);
  border: 1px solid rgba(85, 195, 235, 0.1);
  border-left: 4px solid #55C3EB;
  border-radius: 10px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  color: rgba(225, 235, 242, 0.7);
  line-height: 1.6;
}

.hm-license-item a {
  color: #55C3EB;
  text-decoration: none;
}

.hm-license-item a:hover {
  text-decoration: underline;
}

.hm-license-text {
  background: rgba(13, 21, 32, 0.6);
  border: 1px solid rgba(85, 195, 235, 0.1);
  border-left: 4px solid rgba(225, 235, 242, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  color: rgba(225, 235, 242, 0.6);
  font-size: 0.9rem;
  line-height: 1.6;
}

.hm-license-text h3 {
  font-size: 1.15rem;
  color: #E1EBF2;
  text-align: center;
  margin-bottom: 1.5rem;
}

.hm-license-text h4 {
  font-size: 1rem;
  color: rgba(225, 235, 242, 0.8);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.hm-license-text ol {
  padding-left: 1.5rem;
}

.hm-license-text li {
  margin-bottom: 0.75rem;
}

@media (max-width: 767px) {
  .hm-page-title { font-size: 2rem; }
  .hm-section-label { font-size: 1.2rem; }
  .hm-license-item { padding: 1rem; }
  .hm-license-text { padding: 1rem; font-size: 0.8rem; }
}
</style>
