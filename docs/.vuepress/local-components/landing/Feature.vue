<template>
  <section>
    <div class="container mx-auto grid grid-cols-12" :class="diamondClass">
      <div :class="this.contentClasses">
        <slot name="content" />
      </div>
      <div :class="this.imageClasses">
        <slot name="image" />
      </div>
    </div>
  </section>
</template>

<script>
const CONTENT_CLASSES = [
  'col-span-12',
  'md:col-span-5',
  'flex',
  'flex-col',
  'justify-center'
]
const IMAGE_CLASSES = [
  'col-span-10',
  'md:col-span-6',
  'mt-12 md:mt-0',
  'flex',
  'flex-col',
  'justify-center'
]

export default {
  props: {
    image: {
      type: String,
      default: 'left',
      validator: value => {
        return ['left', 'right'].includes(value)
      }
    },
    diamond: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    contentClasses() {
      return [...CONTENT_CLASSES, this.image === 'left' ? 'md:col-start-8' : 'md:col-start-1']
    },
    imageClasses() {
      let extraClasses;
      if (this.image === 'left') {
        extraClasses = [
          'md:order-first',
          'col-start-2',
          'md:col-start-1'
        ]
      } else {
        extraClasses = [
          'col-start-2',
          'md:col-start-7'
        ]
      }
      return [...IMAGE_CLASSES, ...extraClasses]
    },
    diamondClass() {
      if (!this.diamond) {
        return []
      } else {
        return [`gray-diamond-${this.image}`]
      }
    }
  }
}
</script>

