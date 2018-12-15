<template>
  <p class="type-signature function-signature">
    <span class="static" v-if="!instance">(static)</span> <span>{{name}}({{parameterNames.join(', ')}})</span> <span class="return-type">→ {{returnTypes | formatTypes}}</span>
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
    returns: [Array, Object]
  },
  computed: {
    parameterNames: function () {
      return this.parameters.map(value => value.name);
    },
    returnTypes: function () {
      return Array.isArray(this.returns) ? this.returns.map(returnType => returnType.type) : this.returns.type;
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

