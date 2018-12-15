<template>
  <div class="member-list method-list" v-if="methods && methods.length">
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
      <div class="member-summary" v-html="method.summary"></div>
      <div class="member-description" v-html="method.description"></div>
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
            <td><code>{{parameter.name}}</code></td>
            <td><TypeLink :types="parameter.type"/></td>
            <td>{{parameter.summary}}</td>
          </tr>
        </tbody>
      </table>
      <h4>Returns</h4>
      <p v-if="method.returns && method.returns.summary" v-html="method.returns.summary"></p>
      <p>
        <dl class="type-info">
          <dt>Type</dt>
          <dd><TypeLink :types="method.returns"/></dd>
        </dl>
      </p>
      <hr v-if="index < methods.length - 1">
    </template>
  </div>
</template>

<script>
import AvailabilityInfo from './AvailabilityInfo';
import TypeLink from './TypeLink';

export default {
  components: {
    AvailabilityInfo,
    TypeLink
  },
  computed: {
    methods: function () {
      return this.$store.state.metadata[this.$page.metadataKey].methods;
    }
  }
}
</script>

<style lang="stylus">
.parameter-table
  width 100%

  th
    text-align left

  th, td
    font-size: 14px
    line-height 1.5

  td:last-child
    width 100%

.type-info
  dt
    display inline-block
  dd
    display inline-block
</style>
