<template>
  <div class="proxy-summary">
    <div class="summary"><p v-html="summary"></p></div>
    <div>
      <AvailabilityInfo :platforms="platforms"/>
      <div class="proxy-meta">
        <div class="proxy-meta-name">
          Extends
        </div>
        <div class="proxy-meta-value">
          <a href="">{{extendsFrom}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvailabilityInfo from './AvailabilityInfo';
import tiApi from '../../api/api.json'

export default {
  components: { AvailabilityInfo },
  computed: {
    extendsFrom: function() {
      return this.$page.metadata.extends;
    },
    summary: function () {
      return this.$page.metadata.summary;
    },
    platforms: function () {
      return this.$page.metadata.platforms;
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
