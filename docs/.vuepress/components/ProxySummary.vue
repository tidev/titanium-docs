<template>
  <div class="proxy-summary">
    <div class="summary"><p v-html="metadata.summary"></p></div>
    <div>
      <AvailabilityInfo :platforms="metadata.platforms"/>
      <div class="proxy-meta">
        <div class="proxy-meta-name">
          Extends
        </div>
        <div class="proxy-meta-value">
          <router-link :to="extendsFromType.url">{{extendsFromType.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvailabilityInfo from './AvailabilityInfo';
import tiApi from '../../api/api.json';
import { getLinkForType } from '../utils';

export default {
  components: { AvailabilityInfo },
  computed: {
    metadata: function () {
      return this.$store.state.metadata[this.$page.metadataKey];
    },
    extendsFromType: function() {
      return {
        name: this.metadata.extends,
        url: getLinkForType(this.metadata.extends)
      }
    }
  }
}
</script>

<style lang="stylus">
.proxy-summary
  margin: 1em 0
  display: flex

  &>.summary
    flex-grow: 1

  &>.availablity
    font-size: 14px

    &>span
      color: #aaaaaa
    &>ul
      list-style-type: none
      margin: 0
      &>li
        padding: 4px 6px
        float left
    & .platform-logo
      height 20px
      width 20px
      vertical-align middle
      filter: grayscale(80%)

</style>
