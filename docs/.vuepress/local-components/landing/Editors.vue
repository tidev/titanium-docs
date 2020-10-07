<template>
  <feature>
    <template #content>
      <h1>Build with the editor you love.</h1>
      <p>Titanium provides IDE plugins for <a href="#">VSCode</a> and <a href="#">Atom</a> to make developing amazing apps easier than ever.</p>
      <ul class="list-disc">
        <li>Code completion</li>
        <li>Device browser</li>
        <li>Full-featured debugging tools</li>
        <li>And more!</li>
      </ul>
    </template>
    <template #image>
      <img src="images/graphics/ide.png" alt="Build with ease in VSCode" class="rounded-corners">
    </template>
  </feature>
</template>

<script>
import Feature from './Feature'

export default {
  components: {
    Feature
  }
}
</script>