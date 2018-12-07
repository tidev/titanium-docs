<template>
  <div ref="breadcrumb" class="breadcrumb" :class="{ stuck: stuck }">
    <ul>
      <li v-for="page in path"><a :href="$withBase(page.path)">{{page.title}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      stuck: false,
      path: []
    }
  },
  created() {
    const fullPagePath = this.$page.regularPath;
    let nextSlashIndex = fullPagePath.substring(1).indexOf('/');
    let currentPath = fullPagePath.substring(0, nextSlashIndex + 2);
    while (nextSlashIndex !== -1) {
      this.addPageForPath(currentPath);
      nextSlashIndex = fullPagePath.indexOf('/', nextSlashIndex + 2);
      currentPath = fullPagePath.substring(0, nextSlashIndex);
    }
    this.addPageForPath(fullPagePath);
  },
  mounted() {
    const breadcrumb = this.$refs.breadcrumb;
    this.stickPoint = 25
    window.addEventListener('scroll', () => {
      const pageOffset = window.pageYOffset;
      if (!this.stuck && pageOffset >= this.stickPoint) {
        this.stuck = true;
      } else if (this.stuck && pageOffset < this.stickPoint) {
        this.stuck = false;
      }
    });
  },
  methods: {
    addPageForPath(path) {
      let page = this.$site.pages.find(value => value.path === path);
      if (!page) {
        path += '.html';
        page = this.$site.pages.find(value => value.path === path );
      }
      if (page) {
        // FIXME: the current page somehow as no title
        let title = page.frontmatter.breadcrumbLabel ? page.frontmatter.breadcrumbLabel : page.title;
        if (!title) {
          title = page.frontmatter.label
        }
        this.path.push({
          title: title,
          path: page.path
        });
      }
    }
  }
}
</script>

<style lang="stylus">
@require '~@vuepress/theme-default/styles/wrapper.styl'

.breadcrumb
  @extend $wrapper
  color #aaa
  background-color white
  padding-top 6rem

  &.stuck
    position fixed
    top $navbarHeight
    right 0
    left $sidebarWidth
    @media (max-width: $MQNarrow)
      left 0
    padding: 0.6rem

  &>ul
    padding-left 0
    max-width 740px
    margin: 0 auto
    &>li
      list-style-type none
      display inline

      &>a
        font-weight normal
        padding 0 4px

      &:after
        content " › "
        color #aaaaaa
        position relative
        top -1px

      &:last-child:after
        content ""

.api-page
  &>.page
    &>.breadcrumb.stuck
      &~.content
          &>h1:first-child
            padding-top 5.6rem + $navbarHeight
</style>
