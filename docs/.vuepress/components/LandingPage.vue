<template>
  <div class="landing-page">
    <landing-header />
    <customers />
    <amplify-platform />

    <feature
      header="Build with the editor you love."
      imgSrc="images/graphics/ide.png"
      imgAlt="Build with ease in VSCode"
      diamond
    >
      <p class="mb-6">Titanium provides IDE plugins for <a href="https://marketplace.visualstudio.com/items?itemName=axway.vscode-titanium" target="_blank">VSCode</a> and <a href="https://atom.io/packages/appcelerator-titanium" target="_blank">Atom</a> to make developing amazing apps easier than ever.</p>
      <ul class="list-disc">
        <li>Code completion</li>
        <li>Device browser</li>
        <li>Full-featured debugging tools</li>
        <li>And more!</li>
      </ul>
    </feature>

    <feature
      header="Create custom APIs in minutes, not days."
      imgSrc="images/graphics/create-custom-apis.jpg"
      imgAlt="Speed up your development"
      imgAlign="right"
      btnTitle="Learn More"
      btnLink="https://www.axway.com/en/products/api-management/build-apis"
    >
      <p>API Builder (formerly Arrow) lets you quickly create and deploy mobile-ready API endpoints that can be consumed by any client applications—locally, in the cloud, or anywhere.</p>
    </feature>

    <feature
      header="Bring your apps to life in real time."
      imgSrc="images/graphics/bring-apps-to-life.jpg"
      imgAlt="App Designer"
    >
      <p class="mb-6">Studio's <a href="#">App Designer</a> lets you visually create beautiful designs and layouts for your applications, and switch back and forth between visual and code editing as you need.</p>
      <p>Then, see changes happen on your device in real time as you develop with <a href="#">LiveView</a>.</p>
    </feature>

    <platform-services />

    <feature
      header="Real-time analytics for your mobile apps."
      imgSrc="images/graphics/analytics-poster.jpg"
      imgAlt="Mobile Analytics"
      btnTitle="Learn More"
      btnLink="https://www.axway.com/en/products/analytics"
    >
      <p class="mb-6">Titanium gives you real-time insights into how your apps are performing—from installations to session lengths, cloud API calls to crash rates, and more.</p>
    </feature>

    <feature
      header="Loved by developers. Trusted by enterprise."
      imgSrc="images/graphics/create-custom-apis.jpg"
      imgAlt="Enterprise"
      imgAlign="right"
      btnTitle="Titanium for Enterprise"
      btnLink="https://www.appcelerator.com/pricing/"
      diamond
    >
      <p class="mb-6">Today's biggest enterprises are using Titanium to scale their app development, manage their mobile integrations, and drive success with their mobile applications.</p>
    </feature>

    <sign-up-call />
  </div>
</template>

<script>
import AmplifyPlatform from '@components/landing/AmplifyPlatform'
import Customers from '@components/landing/Customers'
import Feature from '@components/landing/Feature'
import LandingHeader from '@components/landing/Header'
import PlatformServices from '@components/landing/PlatformServices'
import SignUpCall from '@components/landing/SignUpCall'

export default {
  components: {
    AmplifyPlatform,
    Customers,
    Feature,
    LandingHeader,
    PlatformServices,
    SignUpCall
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
  footer
    padding 0

.landing-page
  h1
    font-size 2.5rem
    font-weight bold
    margin-bottom 2rem
</style>