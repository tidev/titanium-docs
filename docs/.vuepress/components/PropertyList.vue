<template>
  <div class="member-list property-list" v-if="properties && properties.length">
    <h2 id="properties">
      <a href="#properties" class="header-anchor">#</a> Properties
    </h2>

    <template v-for="(property, index) in properties">
      <div class="member-header">
        <h3 :id="property.name.toLowerCase()">
          <a :href="`#${property.name.toLowerCase()}`" class="header-anchor">#</a> {{property.name}} <Badge v-if="property.permission === 'read-only'" text="READONLY"/> <Badge v-if="property.deprecated" text="DEPRECATED" type="warn"/>
        </h3>
        <AvailabilityInfo :platforms="property.platforms"/>
      </div>
      <PropertySignature v-bind="property"/>
      <DeprecationAlert :deprecated="property.deprecated"/>
      <p v-html="property.summary"></p>
      <p v-html="property.description"></p>
      <p v-if="property.defaultValue"><strong>Default:</strong> <code>{{property.defaultValue}}</code></p>
      <hr v-if="index < properties.length - 1">
    </template>
  </div>
</template>

<script>
import AvailabilityInfo from './AvailabilityInfo';

export default {
  components: {
    AvailabilityInfo
  },
  computed: {
    properties: function() {
      return this.$store.state.metadata[this.$page.metadataKey].properties;
    }
  }
}
</script>
