<template>
  <div class="proxy-summary">
    <div class="summary-content"><p v-html="metadata.summary"></p></div>
    <div class="proxy-metas">
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
  margin 1rem 0
  display flex
  justify-content space-between

  &>.summary-content
    padding-right 1rem

  &>.proxy-metas
    flex-shrink 0

@media (max-width: $MQMobile)
  .proxy-summary
    flex-direction column

    &>.summary-content
      padding 0

</style>
