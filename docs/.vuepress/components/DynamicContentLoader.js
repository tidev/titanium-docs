import Vue from 'vue'

export default {
  functional: true,
  props: {
    contentKey: String
  },
  render (h, { parent, props, data }) {
    const contentKey = props.contentKey
    if (Vue.$dynamicContent.doesContentExists(contentKey)) {
      // In SSR, if a component is not registered with the component option
      // vue-server-renderer will not be able to resovle it.
      if (!parent.$ssrContext) {
        Vue.$dynamicContent.registerContentAsyncComponent(contentKey)
      }

      return h(contentKey)
    }
    return h('<div>Not found</div>')
  }
}