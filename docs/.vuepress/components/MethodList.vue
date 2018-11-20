<template>
  <div class="member-list method-list" v-if="methods.length">
    <h2 id="methods">
      <a href="#methods" class="header-anchor">#</a> Methods
    </h2>

    <template v-for="(method, index) in methods">
      <div class="member-header">
        <h3 :id="method.name.toLowerCase()">
          <a :href="`#${method.name.toLowerCase()}`" class="header-anchor">#</a> {{method.name}} <Badge v-if="method.deprecated" text="DEPRECATED" type="warn"/>
        </h3>
        <AvailabilityInfo :platforms="method.platforms"/>
      </div>
      <FunctionSignature v-bind="method"/>
      <DeprecationAlert :deprecated="method.deprecated"/>
      <p v-html="method.summary"></p>
      <p v-html="method.description"></p>
      <h4 v-if="method.parameters.length">Parameters</h4>
      <table v-if="method.parameters.length" class="parameter-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="parameter in method.parameters">
            <td>{{parameter.name}}</td>
            <td><code>{{parameter.type | formatTypes}}</code></td>
            <td>{{parameter.summary}}</td>
          </tr>
        </tbody>
      </table>
      <h4>Returns</h4>
      <p>Type: <code>{{ method.returns.type | formatTypes }}</code></p>
      <hr v-if="index < methods.length">
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
    methods: function () {
      return this.$page.metadata.methods;
    }
  }
}
</script>

<style lang="stylus">
.parameter-table
  width 100%

  & th
    text-align left

  & th, td
    font-size: 14px
    line-height 1.5
</style>
