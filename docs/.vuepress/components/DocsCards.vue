<template>
  <div class="docs-cards">
    <template v-for="item in items">
      <docs-card :item="item" />
    </template>
  </div>
</template>

<script>
import DocsCard from './DocsCard.vue'

export default {
  components: { DocsCard },
  data: () => ({
    items: [
      {
        title: 'UI Elements',
        text: 'Discover all UI components',
        icon: 'layer-group',
        link: 'titanium/ui'
      },
      {
        title: 'I/O',
        text: 'File system access, buffers and blobs',
        icon: 'exchange-alt',
        link: 'titanium/'
      }
    ]
  })
}
</script>

<style lang="stylus">
.docs-cards
  margin-top 48px
  display grid
  grid-template-columns repeat(auto-fit, minmax(240px, 48%))
  gap 4%
</style>