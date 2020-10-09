<template>
  <section class="container my-32 px-6 xl:px-12 mx-auto">
    <div class="grid grid-cols-12 gap-4 mx-auto text-center mb-12">
      <div class="col-start-2 col-span-10">
        <header class="text-3xl lg:text-4xl font-bold mb-8">Module Ecosystem</header>
        <p class="md:text-xl">Need a third-party native library in your app? Titanium modules have your covered. Choose from a wide selection of community modules or our premium support integrations.</p>
      </div>
    </div>
    <div class="module-examples grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="module in modules" class="flex items-center justify-center">
        <a :href="module.link" class="flex flex-col lg:flex-row items-center justify-center rounded-full w-24 h-24 lg:w-48 lg:h-48 px-4" target="_blank">
          <font-awesome-icon v-if="Array.isArray(module.icon)" :icon="module.icon" size="3x" />
          <img v-else :src="$withBase(module.icon)" />
          <span v-if="module.name" class="hidden lg:inline ml-2">{{ module.name }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    modules: [
      { icon: 'images/google-maps-logo.png', link: './api/modules/map.html' },
      { name: 'Barcode', icon: ['fas', 'barcode'], link: './api/modules/barcode.html' },
      { icon: 'images/facebook-logo.png', link: './api/modules/facebook.html' },
      { name: 'ImageView', icon: ['fas', 'image'], link: 'https://github.com/AndreaVitale/av.imageview' },
      { name: 'Crash Reporting', icon: ['fas', 'car-crash'], link: './api/modules/aca.html' },
      { icon: 'images/lottie-logo.png', link: 'https://github.com/m1ga/ti.animation#readme' },
      { name: 'Encrypted Database', icon: ['fas', 'database'], link: './api/modules/encrypteddatabase.html' },
      { icon: 'images/firebase-logo.png', link: 'https://github.com/hansemannn/titanium-firebase-core#readme' },
    ]
  })
}
</script>

<style lang="stylus">
.module-examples
  a
    box-shadow: 0 0 15px -3px rgba(0, 0, 0, 0.1), 0 0 6px -2px rgba(0, 0, 0, 0.05);
    color: $textColor
    &:hover
      text-decoration none !important
    img
      max-height: 60%
</style>