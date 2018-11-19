<template>
  <p class="function-signature">
    <span class="static" v-if="!instance">(static)</span> <span>{{name}}({{parameterNames.join(', ')}})</span> <span class="return-type">→ {{returns.type | formatTypes}}</span>
  </p>
</template>

<script>
export default {
  props: {
    name: String,
    instance: {
      type: Boolean,
      default: true
    },
    parameters: {
      type: Array,
      default: () => []
    },
    returns: Object
  },
  computed: {
    parameterNames: function () {
      return this.parameters.map(value => value.name);
    }
  }
}
</script>

<style lang="stylus">
.function-signature
  font-family: monospace
  font-size: 16px

  &>.static, .return-type
    color: #aaaaaa
</style>

