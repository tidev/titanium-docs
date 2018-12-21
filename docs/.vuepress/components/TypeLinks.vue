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
    types: {
      type: [Array, Object, String],
      required: true
    }
  },
  methods: {
    hasType(typeName) {
      let isKnownType = typeName in typeLinks;
      if (!isKnownType) {
        isKnownType = /^(Array|Callback|Dictionary)</.test(typeName);
      }
      return isKnownType;
    }
  },
  computed: {
    normalizedTypes: function () {
      if (typeof this.types === 'string') {
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

</style>
