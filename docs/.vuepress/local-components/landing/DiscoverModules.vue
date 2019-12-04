<template>
  <section class="landing-content platform">
    <div class="center">
      <h2>Module Ecosystem</h2>
      <p>Need a third-party native library in your app? Titanium modules have your covered. Choose from a wide selection of community modules or our premium support integrations.</p>
      <ul class="module-examples">
        <li>
          <a href="https://github.com/hansemannn/titanium-firebase" class="firebase">
            <img src="/images/firebase-logo.png" />
          </a>
        </li>
        <li>
          <a href="https://github.com/appcelerator-modules/ti.map">
            <img src="/images/google-maps-logo.png" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/images/firebase-logo.png" />
          </a>
        </li>
        <li>
          <a href="https://github.com/appcelerator-modules/ti.facebook">
            <img src="/images/facebook-logo.png" />
          </a>
        </li>
      </ul>
      <a href="">Discover modules</a>
    </div>
  </section>
</template>

<style lang="stylus">
.module-examples
  display flex
  list-style none
  padding 20px 0 40px 0

  li
    display flex
    flex 1 1 auto
    justify-content center
    padding 10px

    a
      display flex
      align-items center
      justify-content center
      width 150px
      height 150px
      border-radius 75px
      box-shadow 0 6px 24px rgba(0, 0, 0, .1)
      img
        max-height 60%
      &.firebase
        background-color #159BE5
</style>