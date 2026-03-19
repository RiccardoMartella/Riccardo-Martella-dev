<template>
  <div class="hm-sidebar-container">
    <router-link :to="localePath('/')" class="hm-back-link">
      <i class="bi bi-arrow-left"></i>
      {{ $t('hmSidebar.backToHub') }}
    </router-link>

    <div class="hm-sidebar-title">{{ $t('hmSidebar.documentation') }}</div>

    <ul class="hm-sidebar-list">
      <li>
        <router-link :to="localePath('/homing-missile/docs/overview')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">01</span>
          {{ $t('hmSidebar.items.overview') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/folder-structure')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">02</span>
          {{ $t('hmSidebar.items.folderStructure') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/required-tags')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">03</span>
          {{ $t('hmSidebar.items.requiredTags') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/how-it-works')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">04</span>
          {{ $t('hmSidebar.items.howItWorks') }}
        </router-link>
      </li>
      <div class="hm-sidebar-divider"></div>
      <li>
        <router-link :to="localePath('/homing-missile/docs/homing-missile-script')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">05</span>
          {{ $t('hmSidebar.items.homingMissileScript') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/missile-launcher')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">06</span>
          {{ $t('hmSidebar.items.missileLauncherScript') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/launcher-controller')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">07</span>
          {{ $t('hmSidebar.items.launcherControllerScript') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/player-controller')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">08</span>
          {{ $t('hmSidebar.items.playerControllerScript') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/hud-controller')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">09</span>
          {{ $t('hmSidebar.items.hudControllerScript') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/target-utility')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">10</span>
          {{ $t('hmSidebar.items.targetUtilityScripts') }}
        </router-link>
      </li>
      <div class="hm-sidebar-divider"></div>
      <li>
        <router-link :to="localePath('/homing-missile/docs/hud-reference')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">11</span>
          {{ $t('hmSidebar.items.hudReference') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/integration')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">12</span>
          {{ $t('hmSidebar.items.integration') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/scriptableobject-config')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">13</span>
          {{ $t('hmSidebar.items.scriptableObjectConfig') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/setup-checklist')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">14</span>
          {{ $t('hmSidebar.items.setupChecklist') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/demo-scenes')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">15</span>
          {{ $t('hmSidebar.items.demoScenes') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/technical-notes')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">16</span>
          {{ $t('hmSidebar.items.technicalNotes') }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('/homing-missile/docs/launcher-weapons-material')" class="hm-sidebar-link">
          <span class="hm-sidebar-num">17</span>
          {{ $t('hmSidebar.items.launcherWeaponsMaterial') }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useLocalePath } from '@/composables/useLocalePath.js'

export default {
  name: 'HMDocSidebar',
  setup() {
    const { localePath } = useLocalePath()
    return { localePath }
  }
}
</script>
