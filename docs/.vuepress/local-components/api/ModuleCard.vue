<template>
  <div class="docs-card rounded">
    <router-link :to="link" class="block p-6">
      <div class="flex justify-between items-center">
        <header class="text-xl font-medium mb-3">
          {{ title }}
        </header>
        <div class="card-icon text-2xl flex justify-center items-center rounded-full mb-3 w-12 h-12 text-gray-700">
          <font-awesome-icon :icon="['fas', icon]" />
        </div>
      </div>
      <div class="text-sm font-normal leading-normal text-gray-600">
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
  transition box-shadow 150ms ease 0s

  &:hover
    box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12), 0 4px 16px 1px rgba(14, 30, 37, .06)

  > a
    color inherit
    .content:not(.custom) &:hover
      text-decoration none

    .card-icon
      background-color $primary-ltr
      svg
        color $primary

    &:hover
      .card-icon
        background-color $danger-ltr
        svg
          color $accentColor
</style>