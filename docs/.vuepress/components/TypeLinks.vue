<template>
  <span class="type-links">
    <template v-for="(typeName, index) in normalizedTypes">
      <template v-if="hasType(typeName)">
        <type-link :type="typeName"></type-link>
      </template>
      <template v-else>
        <span>{{typeName}}</span>
      </template>
      <template v-if="index < normalizedTypes.length - 1"> | </template>
    </template>
  </span>
</template>

<script>
import typeLinks from '@dynamic/type-links';
import TypeLink from './TypeLink';

export default {
  components: {
    TypeLink
  },
  props: {
    types: [Array, Object, String]
  },
  methods: {
    hasType(typeName) {
      return typeName in typeLinks;
    }
  },
  computed: {
    normalizedTypes: function () {
      if (typeof this.types === 'string') {
        // @todo Handle Array/Dictionary
        return this.types.split('|');
      } else if (Array.isArray(this.types)) {
        return this.types.map(type => type.type ? type.type : type)
      } else {
        return [this.types.type ? this.types.type : this.types];
      }
    }
  }
}
</script>

<style lang="stylus">
.type-links
  font-family monospace
  color #aaaaaa
</style>
