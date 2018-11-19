<template>
  <div class="property-signature">
    <span class="static" v-if="!instance">(static)</span> <span>{{name}}</span> <span class="return-type">:{{type | formatTypes}}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    instance: {
      type: Boolean,
      default: true
    },
    type: [Array, String]
  }
}
</script>

<style lang="stylus">
.property-signature
  font-family: monospace
  font-size: 16px
  padding: 20px 0 10px 0

  &>.static, .return-type
    color: #aaaaaa
</style>


