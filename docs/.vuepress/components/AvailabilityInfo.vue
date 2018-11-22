<template>
  <div class="proxy-meta availability">
    <div class="proxy-meta-name">Availability</div>
    <ul>
      <li v-for="platform in normalizedPlaforms(platforms)">
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
  methods: {
    normalizedPlaforms(platforms) {
      // Find the index of both platforms
      const iphoneIndex = platforms.findIndex(platform => platform.name === 'iphone');
      const ipadIndex = platforms.findIndex(platform => platform.name === 'ipad');

      // If iPhone or iPad platform is not supported anyway, return early
      if (iphoneIndex === -1 || ipadIndex === -1) {
        return platforms;
      }

      // If both platforms exist and their versions match, compute the array
      if (platforms[iphoneIndex].version === platforms[ipadIndex].version) {
        const version = platforms[iphoneIndex].since;
  
        platforms.splice(iphoneIndex, 1);
        platforms.splice(platforms.findIndex(platform => platform.name === 'ipad'), 1); // use again since index changed
        platforms.push({ name: 'ios', pretty_name: 'iOS', since: version });
      }

      return platforms;
    },
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
