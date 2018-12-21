<template>
  <div class="api-docs">
    <PropertyList :properties="metadata.properties"/>
    <MethodList :methods="metadata.methods"/>
    <EventList :events="metadata.events"/>
    <ConstantList :constants="metadata.constants"/>
  </div>
</template>

<script>
export default {
  computed: {
    metadata() {
      const key = `${this.$page.version || 'next'}/${this.$page.metadataKey}`;
      return this.$store.state.metadata[key] || {};
    }
  }
}
</script>
