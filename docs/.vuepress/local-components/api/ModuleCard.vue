<template>
  <div class="docs-card">
    <router-link :to="link">
      <div class="card-icon">
        <font-awesome-icon :icon="['fas', icon]" size="lg" />
      </div>
      <header class="text-xl font-medium mb-3">
        {{ title }}
      </header>
      <div class="text-sm font-normal leading-normal text-gray-500">
        <slot />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    link: String
  }
}
</script>

<style lang="stylus">
.docs-card
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12)
  border-radius 4px
  transition box-shadow 150ms ease 0s

  &:hover
    box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12), 0 4px 16px 1px rgba(14, 30, 37, .06)

  > a
    padding 1.5rem
    display block
    color inherit
    .content:not(.custom) &:hover
      text-decoration none

    .card-icon
      background-color #edf3f6
      display flex
      justify-content center
      align-items center
      width 48px
      height 48px
      margin-bottom 0.75rem
      border-radius 50%

    &:hover
      .card-icon
        background-color #FFE4E4
        svg
          color lighten($accentColor, 10%)
</style>