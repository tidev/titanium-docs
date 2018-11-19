<template>
  <div class="member-list property-list" v-if="properties.length">
    <h2 id="properties">
      <a href="#properties" class="header-anchor">#</a> Properties
    </h2>

    <div v-for="(property, index) in properties">
      <div class="property-header">
        <h3 :id="property.name.toLowerCase()">
          <a :href="`#${property.name.toLowerCase()}`" class="header-anchor">#</a> {{property.name}} <Badge v-if="property.readonly" text="READONLY"/>
        </h3>
        <AvailabilityInfo :platforms="property.platforms"/>
      </div>
      <PropertySignature v-bind="property"/>
      <p v-html="property.summary"></p>
      <p v-html="property.description"></p>
      <p v-if="property.defaultValue"><strong>Default:</strong> <code>{{property.defaultValue}}</code></p>
      <hr v-if="index < properties.length - 1">
    </div>
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
      return this.$page.metadata.properties
    }
  }
}
</script>

<style lang="stylus">
.property-header
  display: flex

  &>h3
    flex-grow: 1
</style>
