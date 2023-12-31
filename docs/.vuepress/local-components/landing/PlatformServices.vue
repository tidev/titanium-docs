<template>
  <section class="container my-32 px-6 xl:px-12 mx-auto">
    <div class="grid grid-cols-12 gap-4 mx-auto text-center mb-12">
      <div class="col-start-2 col-span-10">
        <header class="text-3xl lg:text-4xl font-bold mb-8">AMPLIFY Platform Services</header>
        <p class="md:text-xl">Titanium comes with over 20+ pre-built, scalable cloud services for easy use with Titanium, Android, iOS, and Node.js apps to get your applications launched even faster.</p>
      </div>
    </div>
    <div class="mbaas-features grid grid-cols-10 gap-8 mx-auto pb-8">
      <div
        v-for="item in items"
        class="col-span-5 md:col-span-2 flex flex-col md:flex-row items-center px-4 py-2"
      >
        <font-awesome-icon :icon="['fas', item.icon]" size="3x" class="mb-4 md:mr-4" />
        <span>{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      { label: 'Push Notification', icon: 'bell' },
      { label: 'Users', icon: 'user-friends' },
      { label: 'Photos', icon: 'camera' },
      { label: 'Files', icon: 'file-lines' },
      { label: 'Social', icon: 'share-alt' },
      { label: 'Emails', icon: 'at' },
      { label: 'Places', icon: 'location-dot' },
      { label: 'Status', icon: 'bell' },
      { label: 'Check-ins', icon: 'check-square' },
      { label: 'Posts', icon: 'pen' },
      { label: 'Client', icon: 'suitcase' },
      { label: 'Ratings', icon: 'star' },
      { label: 'ACLs', icon: 'unlock-alt' },
      { label: 'Chat', icon: 'comment-dots' },
      { label: 'Events', icon: 'calendar-week' },
      { label: 'Photo Collections', icon: 'th-large' },
      { label: 'Friends', icon: 'users' },
      { label: 'NoSQL DB', icon: 'database' },
      { label: 'Key Values', icon: 'table-list' },
      { label: 'Messages', icon: 'envelope' },
    ]
  })
}
</script>

<style lang="stylus">
.mbaas-features
  position relative

  &:before
    background-image url("../../public/images/icons/icon-titanium-grey.svg")
    background-size 95%
    background-repeat no-repeat
    content ''
    display block
    height auto
    left 50%
    opacity:0.06
    padding-bottom 50%
    position absolute
    top 45%
    transform translate(-50%, -50%)
    width 50%
</style>
