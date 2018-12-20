<template>
  <router-link :to="typeLink">{{type}}</router-link>
</template>

<script>
import typeLinks from '@dynamic/type-links';

export default {
  props: {
    type: String
  },
  computed: {
    typeLink() {
      if (this.$versions && this.$page.version !== this.$versions[0]) {
        const link = typeLinks[this.type];
        return `${this.$page.version}/${link}`;
      } else {
        return typeLinks[this.type];
      }
    }
  }
}
</script>

<style>

</style>
