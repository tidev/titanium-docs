<template>
  <ParentLayout>
    <Breadcrumb slot="page-top" v-if="$page.metadataKey"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Breadcrumb from '../components/Breadcrumb.vue'

export default {
  components: {
    Breadcrumb,
    ParentLayout
  }
}
</script>

<style lang="stylus">
.api-page
  &>.page
    &>.content
      &>h1:first-child
        padding-top 0

</style>
