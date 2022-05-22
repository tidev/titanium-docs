<template>
  <div class="landing-header">
    <div class="landing-background">
      <div class="bottom" />
      <div class="top" />
    </div>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 mt-16 mb-2 px-6">
      <div class="md:col-span-7 lg:col-span-5 flex flex-col justify-center sm:text-center md:text-left landing-header-text">
        <h1>Write in JavaScript.<br>Run native everywhere.</h1> 
        <p class="text-xl pb-4">
          TiDev's Titanium lets you develop cross-platform native mobile applications and build great mobile experiences using JavaScript.
        </p>
        <div class="w-full flex items-start justify-center md:justify-start">
          <a href="./guide/Titanium_SDK/Titanium_SDK_Getting_Started" class="btn btn-red btn-pill btn-lg">Get Started</a>
          <a href="https://platform.axway.com" target="_blank" class="btn btn-red btn-pill btn-outline btn-lg ml-4">Login</a>
        </div>
        <framework-list />
      </div>
      <div class="mt-10 md:md-16 lg:mt-0 md:col-span-5 lg:col-span-6 lg:col-start-7 flex flex-col justify-center relative">
        <img :src="$withBase('images/home-hero-code.png')" class="invisible" />
        <img :src="$withBase('images/home-hero-code.png')" class="hero-code" />
        <img :src="$withBase('images/home-app-without-shadow.png')" class="hero-device" />
      </div>
    </div>
  </div>
</template>

<script>
import FrameworkList from './FrameworkList'

export default {
  components: { FrameworkList }
}
</script>

<style lang="stylus">
.landing-header
  position relative
  overflow hidden
  padding-top 7rem

  .landing-background
    > div
      position: absolute
      border-radius 14%
      width calc(100vw / 2)
      &.top
        transform translate(110%, -45%) rotate(-45deg)
        background-image: linear-gradient(135deg, $danger, $danger-dk)
        height calc(100vw / 1.3)
      &.bottom
        transform translate(92%, -40%) rotate(-45deg)
        height calc(100vw / 2)
        background-image: linear-gradient(90deg, $gray-lt, $gray)

  .landing-header-text
    z-index 1

  .hero-code
    backface-visibility: hidden
    border-radius: 0.5rem
    left: 0
    position: absolute
    top: 0
    transform: perspective(48rem) rotate3d(0.25, 1, -0.6, 15deg)
    width: 90%

  .hero-device
    position: absolute
    right: 0
    top: 1rem
    width: 46%
</style>
