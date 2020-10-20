<template>
  <section>
    <h3>{{ title }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-12">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
