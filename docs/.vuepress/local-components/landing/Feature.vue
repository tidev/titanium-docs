<template>
  <section class="feature my-32">
    <div class="container px-6 mx-auto grid grid-cols-12" :class="diamondClass">
      <div :class="this.contentClasses">
        <header class="text-3xl lg:text-4xl font-bold mb-8">{{header}}</header>
        <div class="lg:text-xl">
          <slot />
        </div>
        <div v-if="btnTitle" class="mt-10">
          <a :href="btnLink" class="btn btn-lg btn-red btn-pill">{{btnTitle}}</a>
        </div>
      </div>
      <div :class="this.imageClasses">
        <img :src="imgSrc" :alt="imgAlt" class="rounded-corners">
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
    header: String,
    imgSrc: String,
    imgAlt: String,
    imgAlign: {
      type: String,
      default: 'left',
      validator: value => {
        return ['left', 'right'].includes(value)
      }
    },
    btnTitle: {
      type: String,
      required: false
    },
    btnLink: {
      type: String,
      required: false
    },
    diamond: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    contentClasses() {
      return [...CONTENT_CLASSES, this.imgAlign === 'left' ? 'md:col-start-8' : 'md:col-start-1']
    },
    imageClasses() {
      let extraClasses;
      if (this.imgAlign === 'left') {
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
        return [`gray-diamond-${this.imgAlign}`]
      }
    }
  }
}
</script>

<style lang="stylus">
.feature
  position relative

  .gray-diamond-left,
  .gray-diamond-right
    position relative

  .gray-diamond-left::before,
  .gray-diamond-right::before
    background-color #34495E
    border-radius 14%
    content:''
    display block
    height 0
    opacity 0.06
    padding-bottom 65%
    position absolute
    top:50%
    width 65%

  .gray-diamond-left::before
    left 1rem
    transform translate(-50%, -50%) rotate(45deg)

  .gray-diamond-right::before
    transform translate(50%, -50%) rotate(45deg)
    right 1rem

  .rounded-corners
    border-radius 0.25rem

  @media (min-width: ($MQMobile + 1px))
    .rounded-corners
      border-radius 0.375rem
</style>
