<template>
  <div class="landing-header">
    <div class="landing-background">
      <div class="bottom" />
      <div class="top" />
    </div>
    <div class="landing-content hero">
      <div class="hero-left">
        <h1>Native iOS-, Android- and Windows Apps with JavaScript</h1>
        <a href="guide" class="nav-link action-button">Get Started</a>
      </div>
      <div class="hero-right">
        <img src="https://s3.amazonaws.com/www.appcelerator.com.images/slides-img_DevRant.png" />
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.landing-header
  position relative
  overflow hidden
  padding-top 7rem

  .hero
    min-height 600px
    display flex
    position relative
    .hero-left
      width: 50%
      display flex
      flex-direction column
      justify-content center
      align-items center
      text-align center
    .hero-right
      width 50%
      display flex
      align-items center
      justify-content center
    .action-button
      background-color #B22128
      display inline-block
      font-size 1.2rem
      color #fff
      padding .8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      &:hover
        text-decoration none
        background-color #9F1920

  .landing-background
    > div
      position: absolute
      transform rotate(-30deg) skewX(5deg)
      border-radius 100px
      top: -500px
      width 1000px
      width calc(100vw - 400px)
      height 900px
      &.top
        left 45%
        background-image: linear-gradient(135deg, #B22128, #9F1920);
      &.bottom
        left 55%
        background-image: linear-gradient(90deg, #CC3B42, #B9333A);
</style>