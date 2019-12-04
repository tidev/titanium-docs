<template>
  <ul class="framework-list">
    <li>
      <a href="">
        <img src="/images/appc-logo.png" />
      </a>
    </li>
    <li>
      <a href="">
        <span class="framework-badge">Beta</span>
        <img src="/images/vue-logo.png" />
      </a>
    </li>
    <li>
      <a href="">
        <span class="framework-badge">Beta</span>
        <img src="/images/angular-logo.png" />
      </a>
    </li>
    <li>
      <a href="">
        <img src="/images/js-logo.png" />
      </a>
    </li>
  </ul>
</template>

<style lang="stylus">
.framework-list
  display flex
  list-style none
  padding-left 0

  li
    position relative
    display flex
    align-items center
    max-width 48px
    padding 10px

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