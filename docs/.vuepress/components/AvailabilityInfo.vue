<template>
  <div class="proxy-meta availability">
    <div class="proxy-meta-name">Availability</div>
    <ul>
      <li v-for="platform in normalizedPlaforms">
        <img :src="$withBase(imageForPlatform(platform.name))" class="platform-logo"/> <span>{{platform.since}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    platforms: Array
  },
  computed: {
    normalizedPlaforms: function () {
      const normalizedPlaforms = Array.from(this.platforms);

      // Find the index of both platforms
      const iphoneIndex = this.platforms.findIndex(platform => platform.name === 'iphone');
      const ipadIndex = this.platforms.findIndex(platform => platform.name === 'ipad');

      // If iPhone or iPad platform is not supported anyway, return early
      if (iphoneIndex === -1 || ipadIndex === -1) {
        return this.platforms;
      }

      // If both platforms exist and their versions match, update iPhone to iOS and remove iPad
      if (this.platforms[iphoneIndex].version === this.platforms[ipadIndex].version) {
        const version = this.platforms[iphoneIndex].since;
        normalizedPlaforms[iphoneIndex] = { name: 'ios', pretty_name: 'iOS', since: version };
        normalizedPlaforms.splice(ipadIndex, 1);
      }

      return normalizedPlaforms;
    }
  },
  methods: {
    imageForPlatform(platformName) {
      switch (platformName) {
        case 'android': return '/android-logo.png';
        case 'ios': return '/apple-logo.png'
        case 'iphone': return '/iphone-logo.png'
        case 'ipad': return '/ipad-logo.png';
        case 'windowsphone': return '/windows-logo.png';
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
