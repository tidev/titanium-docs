<script setup>
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()
const props = [...(frontmatter.value.properties || [])].sort((a, b) => a.name.localeCompare(b.name))

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

function platformInfo(p) {
  const PLATFORM_DEFAULT_SINCE = { android: '1.0', iphone: '1.0', ipad: '1.0', macos: '9.2.0' }
  const platforms = p.platforms ? (Array.isArray(p.platforms) ? p.platforms : [p.platforms]) : []
  const info = []
  if (typeof p.since === 'object') {
    const parts = Object.entries(p.since).map(([plat, ver]) => platLabel(plat, ver))
    info.push(parts.join(''))
  } else if (p.since && platforms.length) {
    const parts = platforms.map(plat => platLabel(plat, p.since))
    info.push(parts.join(''))
  } else if (p.since) {
    info.push(`Since: ${p.since}`)
  } else if (platforms.length) {
    const parts = platforms.map(plat => platLabel(plat, PLATFORM_DEFAULT_SINCE[plat] || '?'))
    info.push(parts.join(''))
  }
  return info.join(' · ')
}
</script>

<template>
  <div v-if="props.length">
    <h2 id="properties">Properties <a class="header-anchor" href="#properties">#</a></h2>
    <div v-for="p in props" :key="p.name" class="property">
      <div class="property-header">
      <h3 :id="p.name.toLowerCase().replace(/\s+/g, '-')">
        {{ p.name }}<span v-if="p.deprecated"> (deprecated)</span>
        <a class="header-anchor" :href="'#' + p.name.toLowerCase().replace(/\s+/g, '-')">#</a>
      </h3>
      <div class="badge-container">
      <span v-if="p.extended" class="extended-badge">extended</span>
      <span v-if="p.availability === 'creation'" class="creation-badge">creation only</span>
      </div>
      <aside v-if="platformInfo(p)" class="platforms" v-html="platformInfo(p)"></aside>
      </div>
      <p><strong>Type:</strong> <code>{{ p.type }}</code></p>
      <p v-if="p.summary" v-html="p.summary"></p>
      <div v-if="p.description" class="description" v-html="p.description"></div>

    </div>
  </div>
</template>

<style scoped>
.property {
  margin-bottom: 1rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.property h3 {
  margin-top: 0;
}
.property-header {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.description {
  margin-top: 0.5rem;
}
.platforms {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 1rem;
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
