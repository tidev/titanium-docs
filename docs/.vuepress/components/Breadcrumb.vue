<template>
  <div ref="breadcrumb" class="breadcrumb">
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
    this.stickPoint = breadcrumb.offsetTop;
    /* @TODO stick to top when scrolling
    window.addEventListener('scroll', () => {
      const distance = breadcrumb.offsetTop - window.pageYOffset;
      console.log(distance);
    });
    */
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