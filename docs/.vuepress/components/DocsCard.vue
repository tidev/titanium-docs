<template>
  <div class="docs-card">
    <router-link :to="link">
      <div class="card-icon">
        <font-awesome-icon :icon="icon" size="lg" />
      </div>
      <header>
        {{ title }}
      </header>
      <div class="card-text">
        {{ text }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data: function () {
    return {
      title: this.item.title,
      text: this.item.text,
      icon: this.item.icon,
      link: this.item.link
    }
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

  a
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
      margin-bottom 0.5em
      border-radius 50%

    &:hover
      .card-icon
        background-color #FFE4E4
        svg
          color lighten($accentColor, 10%)

  header
    font-size 1.4rem
    font-weight 500
    margin-bottom 0.5em

  .card-text
    font-size 0.9rem
</style>