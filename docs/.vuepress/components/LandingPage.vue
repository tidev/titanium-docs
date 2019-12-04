<template>
  <div class="landing-page">
    <landing-header />

    <platform-intro />

    <section class="landing-content">
      <div class="feature">
        <div class="feature-description">
          <h2 class="center">Single JavaScript codebase</h2>
          <p>Everything you need to create great, native mobile apps — <strong>all from a single JavaScript code base.</strong></p>
          <p>Use a frontend framework of your choice to get you started quickly.</p>
          <framework-list />
        </div>
        <div class="feature-media">
          <img src="" alt="image"></img>
        </div>
      </div>
    </section>

    <section class="landing-content">
      <div class="feature hyperloop">
        <div class="feature-media">
          <img src="/images/hyperloop.png" alt="hyperloop"></img>
        </div>
        <div class="feature-description">
          <h2 class="center">Full flexibility</h2>
          <p>We provide a rich and easy to use cross-platform API, ranging from UI to accessing device features.</p>
          <p>Not finding what you looking for in our API? Use <strong>Hyperloop</strong> for direct access to every iOS and Android API using JavaScript</p>
        </div>
      </div>
    </section>

    <section class="landing-content editor">
      <div class="center">
        <h2 class="center">Choose your IDE</h2>
        <p>
          <strong>Build with the editor you love</strong> — Titanium provides IDE integrations for
          <a href="https://marketplace.visualstudio.com/items?itemName=axway.vscode-titanium">VSCode</a>
          and
          <a href="https://atom.io/packages/appcelerator-titanium">Atom</a>.
        </p>
        <p>From code completion to device browser and up to fully featured debugging tools. These editor plugins contain everything you need to develop amazing native apps with Titanium.</p>
        <img src="https://user-images.githubusercontent.com/2697821/37837371-f0fc7bd6-2eac-11e8-822d-049cce038d15.png" alt="vscode"></img>
      </div>
    </section>

    <discover-modules />

    <section class="callout">
      <h2>Start free, grow from there.</h2>

      <div class="action-buttons">
        <a href="guide">Get started →</a>
        <a href="/guide">Contact Sales</a>
      </div>
    </section>
  </div>
</template>

<script>
import DiscoverModules from '@components/landing/DiscoverModules'
import FrameworkList from '@components/landing/FrameworkList'
import LandingHeader from '@components/landing/Header'
import PlatformIntro from '@components/landing/PlatformIntro'

export default {
  components: {
    DiscoverModules,
    FrameworkList,
    LandingHeader,
    PlatformIntro
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
  .page-edit
    display none

.landing-page
  h1
    font-size 2.5rem
  h2
    font-size 2.2rem
  h3
    font-size 1.8rem
    font-weight normal

  section
    padding 60px 0

  .center
    text-align center

  .landing-content
    font-size 1.2rem

    h2
      text-align center
      border-bottom none

  .feature
    display flex

    > div
      width 50%

    .feature-media
      display flex
      align-items center
      justify-content center

    .feature-description
      display flex
      flex-direction column
      justify-content center

    &.editor
      .feature-media
        width 60%
      .feature-description
        width 40%
        padding-bottom 30px

    &.hyperloop
      .feature-media
        padding-right 2rem

  .callout
    margin-top 60px
    background linear-gradient(45deg, #9F1920, #B22128);
    padding 120px 0
    color #fff
    text-align center

    h2
      margin-top 0
      font-size 3.2rem
      color #fff
      border-bottom 0

    .action-buttons
      a
        display inline-block
        font-size 1.2rem
        background-color #fff
        padding .8rem 1.6rem
        margin 0 5px
        border-radius 4px
        transition background-color .1s ease
        box-sizing border-box

        &:hover
          text-decoration none
          box-shadow 0 4px 8px rgba(0, 0, 0, .2)
          transform scale(1.02)
</style>