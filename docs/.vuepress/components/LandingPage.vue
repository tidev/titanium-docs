<template>
  <div class="landing-page">
    <landing-header />
    <customers />
    <amplify-platform />
    <editors />
    <api-builder />
  </div>
</template>

<script>
import AmplifyPlatform from '@components/landing/AmplifyPlatform'
import ApiBuilder from '@components/landing/ApiBuilder'
import Customers from '@components/landing/Customers'
import Editors from '@components/landing/Editors'
import LandingHeader from '@components/landing/Header'

export default {
  components: {
    AmplifyPlatform,
    ApiBuilder,
    Customers,
    Editors,
    LandingHeader
  },
  mounted() {
    const navbar = document.getElementsByClassName('navbar')[0]
    this.scrollHandler = () => {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolling')
      } else {
        navbar.classList.remove('scrolling')
      }
    }
    window.addEventListener('scroll', this.scrollHandler)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="stylus">
.landing
  .page
    padding-bottom 0

.landing-page
  h1
    font-size 2.5rem
    font-weight bold
    margin-bottom 2rem
  h2
    font-size 2.2rem
  h3
    font-size 1.8rem
    font-weight normal
  section
    margin 8rem auto
  p
    font-size 1.25rem
</style>