<template>
  <section class="landing-content">
    <div class="center">
      <h2>Part of the AMPLIFY Platform</h2>
      <p>Easily build and deploy cross-platform apps. Extend with hybrid integration capabilities to speed the discovery, use and deployment of new integrations..</p>
    </div>
    <ul class="platform-features">
      <li>
        <a href="https://www.axway.com/en/products/api-management">
          <img src="/images/gear.png" />
          API Management
        </a>
      </li>
      <li>
        <a href="https://www.axway.com/en/products/b2b-integration">
          <img src="/images/b2b.png" />
          B2B
        </a>
      </li>
      <li>
        <a href="https://www.axway.com/en/products/application-integration">
          <img src="/images/integration.png" />
          Integrations
        </a>
      </li>
      <li>
        <a href="https://www.axway.com/en/platform/amplify">More</a>
      </li>
    </ul>
  </section>
</template>

<style lang="stylus">
.platform-features
  display flex
  list-style none
  justify-content space-around
  padding 3rem 0

  li
    a
      display flex
      flex-direction column
      align-items center

      img
        padding-bottom 20px
</style>