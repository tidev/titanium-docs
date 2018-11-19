<template>
  <div class="proxy-meta availability">
    <div class="proxy-meta-name">Availability</div>
    <ul>
      <li v-for="platform in platforms">
        <img :src="imageForPlatform(platform.name)" class="platform-logo"/> <span>{{platform.since}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    platforms: Array
  },
  methods: {
    imageForPlatform(platformName) {
      switch (platformName) {
        case 'android': return '/android-logo.png';
        case 'iphone':
        case 'ipad': return '/apple-logo.png';
      }
    }
  }
}
</script>

<style lang="stylus">
  .availability
    &>ul
      list-style-type: none
      margin: 0
      display: flex
      &>li
        padding: 4px 6px
        color: #aaaaaa
        vertical-align middle
        display: flex;
        align-items:center;
    & .platform-logo
      height 16px
      width 16px
      padding-right 4px
</style>
