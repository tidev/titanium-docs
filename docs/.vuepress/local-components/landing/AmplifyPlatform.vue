<template>
  <section class="container">
    <div class="grid">
      <div class="grid-col-10 grid-start-1 text-center">
        <h1>Part of the AMPLIFY platform.</h1>
        <p>Speed the discovery, use, and deployment of new integrations in your apps with <a href="#">AMPLIFY</a>.</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-features mt-8">
      <div class="features">
          <div class="features-item">
              <h2>
                  <img src="images/icons/icon-titanium.svg" class="features__icon lg:order-last" alt="">
                  Titanium SDK
              </h2>
              <p>Node.js-based utilities to compile your JavaScript code and static assets into a native iOS and Android application.</p>
          </div>
          <div class="features-item">
              <h2>
                  <img src="images/icons/icon-modules.svg" class="features__icon lg:order-last" alt="">
                  Module Ecosystem
              </h2>
              <p>Easily include third-party modules in your apps with Titanium's wide selection of community modules and premium support integrations.</p>
          </div>
          <div class="features-item">
              <h2>
                  <img src="images/icons/icon-hyperloop.svg" class="features__icon lg:order-last" alt="">
                  Hyperloop
              </h2>
              <p>Need to use an API not already covered by Titanium SDK? Hyperloop gives you direct access to every native API on your device.</p>
          </div>
      </div>
      <img src="images/iphone.png" alt="Build great apps with Titanium" class="feature-showcase__demo hidden md:inline">
      <div class="features">
          <div class="features-item">
              <h2>
                  <img src="images/icons/icon-api.svg" class="features__icon" alt="">
                  Titanium APIs
              </h2>
              <p>Access hundreds of native UI and non-visual components (such as networks and media APIs) within your application.</p>
          </div>
          <div class="features-item">
              <h2>
                  <img src="images/icons/icon-cli.svg" class="features__icon" alt="">
                  Command-line Tools
              </h2>
              <p>The Appcelerator CLI provides a unified interface for using the rest of the CLI tools, such as Titanium CLI and AMPLIFY Runtime Services.</p>
          </div>
          <div class="features-item">
              <h2>
                  <img src="images/icons/icon-alloy.svg" class="features__icon" alt="">
                  Titanium Alloy
              </h2>
              <p>Develop quality Titanium applications quickly and cleanly with the Alloy framework (with support for Backbone.js and Underscore.js).</p>
          </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.features
  .features-item
    margin 1rem 0 3rem
    h2
      display flex
      font-size 1.75rem
      margin-bottom 0.5rem
      padding-bottom 0
      border-bottom 0
      .features__icon
        flex: 0 0 2.5rem;
        margin-right: 0.75rem;
        width: 2.5rem;
    p
      margin 0
  @screen sm
    &:first-of-type
      .features-item
        h2
          align-items center
  @screen lg
    &:first-of-type
      .features-item
        text-align right
        h2
          justify-content flex-end
          .features__icon
            margin-left 0.75rem
            margin-right 0
.feature-showcase__demo
  align-self center
</style>