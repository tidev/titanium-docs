<template>
  <div class="member-list property-list" v-if="properties.length">
    <h2 id="properties">
      <a href="#properties" class="header-anchor">#</a> Properties
    </h2>

    <div v-for="(property, index) in properties">
      <div class="property-header">
        <h3 :id="property.name.toLowerCase()">
          <a :href="`#${property.name.toLowerCase()}`" class="header-anchor">#</a> {{property.name}} <Badge v-if="property.permission === 'read-only'" text="READONLY"/> <Badge v-if="property.deprecated" text="DEPRECATED" type="warn"/>
        </h3>
        <AvailabilityInfo :platforms="property.platforms"/>
      </div>
      <PropertySignature v-bind="property"/>
      <div v-if="property.deprecated" class="warning custom-block">
        <p class="custom-block-title">DEPRECATED SINCE {{property.deprecated.since}}</p>
        <p>{{property.deprecated.note || 'Sorry, no additonal deprecation info available.'}}</p>
      </div>
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
      console.log(this.$page.metadata.properties);
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
