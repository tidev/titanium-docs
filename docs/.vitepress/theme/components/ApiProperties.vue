<script setup>
import { useData } from 'vitepress'
import PlatformHeader from './PlatformHeader.vue'

const { frontmatter } = useData()
const props = [...(frontmatter.value.properties || [])].sort((a, b) => a.name.localeCompare(b.name))
</script>

<template>
  <div v-if="props.length">
    <h2 id="properties">Properties <a class="header-anchor" href="#properties">#</a></h2>
    <div v-for="p in props" :key="p.name" class="property">
      <PlatformHeader :item="p">
        <h3 :id="p.name.toLowerCase().replace(/\s+/g, '-')">
          {{ p.name }}<span v-if="p.deprecated"> (deprecated)</span>
          <a class="header-anchor" :href="'#' + p.name.toLowerCase().replace(/\s+/g, '-')">#</a>
        </h3>
      </PlatformHeader>
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
.description {
  margin-top: 0.5rem;
}
</style>
