<template>
  <ul class="framework-list mt-12">
    <li>
      <a href="">
        <img :src="$withBase('/images/icons/icon-alloy.svg')" />
      </a>
    </li>
    <li>
      <a href="">
        <span class="framework-badge">Beta</span>
        <img :src="$withBase('/images/vue-logo.png')" />
      </a>
    </li>
    <li>
      <a href="">
        <span class="framework-badge">Beta</span>
        <img :src="$withBase('/images/angular-logo.png')" />
      </a>
    </li>
    <li>
      <a href="">
        <img :src="$withBase('/images/js-logo.png')" />
      </a>
    </li>
  </ul>
</template>

<style lang="stylus">
.framework-list
  display flex

  li
    position relative
    display flex
    align-items center
    padding 10px

    img
      width 70px

    .framework-badge
      position absolute
      font-size .6rem
      line-height 1rem
      top 5px
      right 5px
      background-color $accentColor
      color #fff
      padding 0 6px
      border-radius 3px
</style>