module.exports = {
	name: 'guides-content-sidebar',
	extendPageData (page) {
		if (page.path.startsWith('/guide/')) {
			page.frontmatter.contentSidebar = true
			page.frontmatter.sidebarDepth = 0
		}
	}
};
