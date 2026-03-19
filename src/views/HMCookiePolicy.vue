<template>
  <div class="hm-cookie-page">
    <div class="hm-grid-bg"></div>
    <div class="container position-relative py-5" style="z-index: 1;">
      <div class="row justify-content-center">
        <!-- English: full cookie policy -->
        <div v-if="locale === 'en'" class="col-lg-10">
          <h1 class="hm-page-title">{{ $t('cookiePolicy.title') }}</h1>
          <p class="hm-page-lead">{{ $t('cookiePolicy.lead') }}</p>
          <p class="hm-page-date">{{ $t('cookiePolicy.lastUpdated') }}</p>

          <div class="hm-policy-card">

            <section class="hm-section">
              <h2 class="hm-section-label">Introduction</h2>
              <p>This document contains information regarding the technologies that enable this Application to achieve the purposes described below. Such technologies allow the Owner to collect and save information (for example through the use of Cookies) or to use resources (for example by running a script) on the User's device when the User interacts with this Application.</p>
              <p>For simplicity, in this document such technologies are briefly defined as "Tracking Tools", unless there is a reason to differentiate.</p>
              <p>For example, while Cookies can be used in both web and mobile browsers, it would be inappropriate to talk about Cookies in the context of mobile device applications, since these are Tracking Tools that require the presence of a browser. For this reason, within this document the term Cookie is only used to specifically indicate that particular type of Tracking Tool.</p>
              <p>Some of the purposes for which Tracking Tools are used may also require the User's consent. If consent is given, it can be freely withdrawn at any time following the instructions contained in this document.</p>
              <p>This Application uses Tracking Tools managed directly by the Owner (commonly called "first-party" Tracking Tools) and Tracking Tools that enable services provided by third parties (commonly called "third-party" Tracking Tools). Unless otherwise specified within this document, such third parties have access to their respective Tracking Tools.</p>
              <p>The duration and expiration of Cookies and other similar Tracking Tools may vary depending on what is set by the Owner or each third-party provider. Some of them expire at the end of the User's browsing session.</p>
              <p>In addition to what is specified in the description of each of the categories below, Users can obtain more detailed and updated information on the duration, as well as any other relevant information - such as the presence of other Tracking Tools - in the privacy policies of the respective third-party providers (through the links provided) or by contacting the Owner.</p>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">Data Controller</h2>
              <p><strong>Riccardo Martella</strong><br>
              Via Monte Sant' Anna 18<br>
              Atri (TE), Italy</p>
              <p><strong>Email:</strong> riccardomartella77@gmail.com</p>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">How This Application Uses Tracking Tools</h2>

              <h3>Necessary</h3>
              <p>This Application uses Cookies commonly called "technical" or other similar Tracking Tools to carry out activities strictly necessary to ensure the operation or provision of the Service.</p>

              <h3>Measurement</h3>
              <p>This Application uses Tracking Tools to measure traffic and analyze User behavior to improve the Service.</p>

              <div class="hm-data-block">
                <h4>Tracking Tools managed by third parties</h4>
                <p><strong>Google Analytics 4 (Google LLC)</strong><br>
                Company: Google LLC<br>
                Place of processing: United States<br>
                Personal Data processed: Usage Data, Tracking Tools, Device information, Number of sessions</p>
              </div>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">How to Manage Preferences and Provide or Withdraw Consent on This Application</h2>
              <p>If the use of Trackers is based on consent, the User can provide or withdraw such consent by setting or updating their preferences through the relevant privacy choices panel available on this Application.</p>
              <p>Regarding third-party Tracking Tools, Users can manage their preferences by visiting the relevant opt-out link (if available), using the tools described in the third party's privacy policy, or by contacting the third party directly.</p>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">How to Control or Delete Cookies and Similar Technologies Through Your Device Settings</h2>
              <p>Users can use their browser settings to:</p>
              <ul>
                <li>See which Cookies or other similar technologies have been set on the device;</li>
                <li>Block Cookies or similar technologies;</li>
                <li>Clear Cookies or similar technologies from the browser.</li>
              </ul>
              <p>Browser settings, however, do not allow granular control of consent by category.</p>
              <p>Users can, for example, find information on how to manage Cookies in some of the most popular browsers at the following addresses:</p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/" target="_blank">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank">Microsoft Edge</a></li>
                <li><a href="https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing" target="_blank">Brave</a></li>
                <li><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank">Opera</a></li>
              </ul>
              <p>Users can also manage some Tracking Tools for mobile applications by disabling them through the appropriate device settings, such as mobile device advertising settings or tracking settings in general (Users can consult the device settings to find the relevant one).</p>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">Consequences of Refusing to Use Tracking Tools</h2>
              <p>Users are free to decide whether or not to allow the use of Tracking Tools. However, please note that Tracking Tools enable this Application to provide Users with a better experience and advanced features (in line with the purposes outlined in this document). Therefore, if the User decides to block the use of Tracking Tools, the Owner may not be able to provide the related features.</p>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">Definitions and Legal References</h2>

              <h3>Personal Data (or Data)</h3>
              <p>Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</p>

              <h3>Usage Data</h3>
              <p>Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p>

              <h3>User</h3>
              <p>The individual using this Application who, unless otherwise specified, coincides with the Data Subject.</p>

              <h3>Data Subject</h3>
              <p>The natural person to whom the Personal Data refers.</p>

              <h3>Data Processor (or Processor)</h3>
              <p>The natural or legal person, public authority, agency, or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.</p>

              <h3>Data Controller (or Owner)</h3>
              <p>The natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the owner of this Application.</p>

              <h3>This Application</h3>
              <p>The means by which the Personal Data of the User is collected and processed.</p>

              <h3>Service</h3>
              <p>The service provided by this Application as described in the relative terms (if available) and on this site/application.</p>

              <h3>European Union (or EU)</h3>
              <p>Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.</p>

              <h3>Cookie</h3>
              <p>Cookies are Tracking Tools consisting of small sets of data stored in the User's browser.</p>

              <h3>Tracking Tool</h3>
              <p>Tracking Tool indicates any technology - e.g. Cookies, unique identifiers, web beacons, embedded scripts, e-tags, and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User's device.</p>

              <h3>Legal References</h3>
              <p>Unless otherwise specified, this privacy notice applies exclusively to this Application.</p>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">How Can We Help?</h2>

              <h3>What You Can Do</h3>
              <h4>Your Data</h4>
              <ul>
                <li>Ask us to know and access the information we have about you</li>
                <li>Ask us to correct the information we have about you</li>
                <li>Ask us to exercise the right to be forgotten (deleting the information we have about you)</li>
                <li>Ask us to transfer data to another service</li>
              </ul>

              <h4>In Case of Problems</h4>
              <p>Although we strive to create a positive user experience, we know that problems can occasionally occur between us and our users. If this is the case, please don't hesitate to contact us.</p>
            </section>

            <section class="hm-section">
              <h2 class="hm-section-label">Contact Us</h2>
              <p><strong>Riccardo Martella</strong><br>
              Via Monte Sant' Anna 18<br>
              Atri (TE), Italy</p>
              <p><strong>Email:</strong> riccardomartella77@gmail.com</p>
            </section>

          </div>

          <div class="text-center mt-5">
            <RouterLink :to="localePath('/homing-missile')" class="hm-btn-back">
              <i class="bi bi-arrow-left me-2"></i> {{ $t('cookiePolicy.returnHome') }}
            </RouterLink>
          </div>
        </div>

        <!-- Italian: iubenda stub -->
        <div v-else class="col-lg-8">
          <h1 class="hm-page-title">{{ $t('cookiePolicy.itTitle') }}</h1>
          <p class="hm-page-lead">{{ $t('cookiePolicy.itLead') }}</p>

          <div class="hm-policy-card">
            <div class="hm-iubenda-container">
              <a href="https://www.iubenda.com/privacy-policy/82562185/cookie-policy" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">{{ $t('cookiePolicy.itIubendaTitle') }}</a>
            </div>

            <div class="mt-4">
              <p>{{ $t('cookiePolicy.itDesc1') }}</p>
              <p>{{ $t('cookiePolicy.itDesc2') }}</p>
            </div>
          </div>

          <div class="text-center mt-5">
            <RouterLink :to="localePath('/homing-missile')" class="hm-btn-back">
              <i class="bi bi-arrow-left me-2"></i> {{ $t('cookiePolicy.itReturnHome') }}
            </RouterLink>
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
  name: 'HMCookiePolicy',
  setup() {
    const { locale } = useI18n()
    const { localePath } = useLocalePath()
    return { localePath, locale }
  },
  mounted() {
    if (this.locale === 'it') {
      (function (w,d) {
        var loader = function () {
          var s = d.createElement("script"),
          tag = d.getElementsByTagName("script")[0];
          s.src="https://cdn.iubenda.com/iubenda.js";
          tag.parentNode.insertBefore(s,tag);
        };
        if(w.addEventListener){
          w.addEventListener("load", loader, false);
        } else if(w.attachEvent){
          w.attachEvent("onload", loader);
        } else {
          w.onload = loader;
        }
      })(window, document);
    }
  }
}
</script>

<style scoped>
.hm-cookie-page {
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
  margin-bottom: 1rem;
}

.hm-page-date {
  font-size: 0.9rem;
  color: rgba(225, 235, 242, 0.35);
  margin-bottom: 3rem;
}

.hm-policy-card {
  background: rgba(13, 21, 32, 0.6);
  border: 1px solid rgba(85, 195, 235, 0.1);
  border-radius: 12px;
  padding: 2rem;
  color: rgba(225, 235, 242, 0.7);
  line-height: 1.6;
}

.hm-section {
  margin-bottom: 2.5rem;
}

.hm-section-label {
  color: #55C3EB;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(85, 195, 235, 0.2);
}

.hm-section h3 {
  color: rgba(225, 235, 242, 0.9);
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.hm-section h4 {
  color: rgba(225, 235, 242, 0.7);
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.hm-section p {
  margin-bottom: 1rem;
}

.hm-section ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.hm-section ul li {
  margin-bottom: 0.4rem;
}

.hm-section strong {
  color: rgba(225, 235, 242, 0.9);
}

.hm-section a {
  color: #55C3EB;
  text-decoration: none;
}

.hm-section a:hover {
  text-decoration: underline;
}

.hm-data-block {
  background: rgba(85, 195, 235, 0.05);
  border: 1px solid rgba(85, 195, 235, 0.1);
  border-left: 4px solid #55C3EB;
  border-radius: 10px;
  padding: 1.25rem;
  margin-top: 1rem;
}

.hm-iubenda-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.hm-btn-back {
  display: inline-block;
  color: #55C3EB;
  border: 1px solid rgba(85, 195, 235, 0.3);
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
}

.hm-btn-back:hover {
  background: rgba(85, 195, 235, 0.1);
  border-color: #55C3EB;
  color: #55C3EB;
}

@media (max-width: 767px) {
  .hm-page-title { font-size: 2rem; }
  .hm-section-label { font-size: 1.2rem; }
  .hm-policy-card { padding: 1.25rem; }
  .hm-data-block { padding: 1rem; }
}
</style>
