<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  item: { type: Object, required: true }
})

const PLAT_ICONS = { android: 'icon_android.png', iphone: 'icon_ios.png', ipad: 'icon_ios.png', macos: 'icon_macos.png' }
const PLAT_NAMES = { android: 'Android', iphone: 'iOS', ipad: 'iPad', macos: 'macOS' }

function platLabel(plat, ver) {
  const icon = PLAT_ICONS[plat]
  const name = PLAT_NAMES[plat] || plat.charAt(0).toUpperCase() + plat.slice(1)
  if (icon) {
    return `<div class="platform-item"><img src="${withBase('/' + icon)}" alt="${name}" title="${name} ${ver}" class="plat-icon" width="17" height="17"/> ${ver}</div>`
  }
  return `${name}: ${ver}`
}

function platformInfo(item) {
  const PLATFORM_DEFAULT_SINCE = { android: '0.9', iphone: '0.9', ipad: '0.9', macos: '9.2.0' }
  const platforms = item.platforms ? (Array.isArray(item.platforms) ? item.platforms : [item.platforms]) : Object.keys(PLATFORM_DEFAULT_SINCE)
  const info = []
  if (typeof item.since === 'object') {
    const parts = Object.entries(item.since).map(([plat, ver]) => platLabel(plat, ver))
    info.push(parts.join(''))
  } else if (item.since && platforms.length) {
    const parts = platforms.map(plat => platLabel(plat, item.since))
    info.push(parts.join(''))
  } else if (item.since) {
    info.push(`Since: ${item.since}`)
  } else if (platforms.length) {
    const parts = platforms.map(plat => platLabel(plat, PLATFORM_DEFAULT_SINCE[plat] || '?'))
    info.push(parts.join(''))
  }
  return info.join(' · ')
}
</script>

<template>
  <div class="platform-header">
    <slot></slot>
    <div class="badge-container">
      <span v-if="item.extended" class="extended-badge">extended</span>
      <span v-if="item.availability === 'creation'" class="creation-badge">creation only</span>
    </div>
    <aside v-if="platformInfo(item)" class="platforms" v-html="platformInfo(item)"></aside>
  </div>
</template>

<style scoped>
.platform-header {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.platforms {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}
:deep(.plat-icon) {
  vertical-align: middle;
  margin: 0;
}
:deep(.platform-item) {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
}
.extended-badge {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 3px;
  padding: 0 0.35em;
  margin-left: 0.5em;
  vertical-align: middle;
}
.creation-badge {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--vp-c-warning-1);
  border: 1px solid var(--vp-c-warning-1);
  border-radius: 3px;
  padding: 0 0.35em;
  margin-left: 0.5em;
  vertical-align: middle;
}
.badge-container {
  width: 100%;
}
:deep(.platform-item) + :deep(.platform-item) {
  margin-left: 0.35rem;
}
</style>
