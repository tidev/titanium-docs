const fs = require('fs');
const path = require('path');

const metadataFilePath = path.resolve(__dirname, '..', '..', 'api', 'api.json');
const tiApiMetadata = JSON.parse(fs.readFileSync(metadataFilePath).toString());
let processed = {};

module.exports = (options = {}, context) => ({
  extendPageData(page) {
    if (!/^\/api\//.test(page.regularPath)) {
      return;
    }

    const typeName = page.frontmatter.metadataKey || page.title;
    const metadata = tiApiMetadata[typeName];

    if (!metadata) {
      console.log(`No type metadata found for ${typeName}`);
      return;
    }

    if (processed[typeName]) {
      page.metadata = metadata;
      return;
    }

    const metadataProcessor = new MetadataProcessor(context);
    metadataProcessor.transoformMetadataAndCollectHeaders(metadata);
    page.headers = (page.headers || []).concat(metadataProcessor.additionalHeaders);

    page.metadata = metadata;

    processed[typeName] = true;
  }
});

/**
 * Processor for metadata that powers API reference pages.
 *
 * Applies transforms to the Metadata so we can properly use it in our VuePress environment.
 * Also collects additionals headers required for the sidebar navigation on API pages.
 */
class MetadataProcessor {
  constructor(context) {
    this.markdown = context.markdown;
    this.base = context.base;
    this.additionalHeaders = [];
    this.constantNamingPattern = /^[A-Z0-9_]+$/;
  }

  transoformMetadataAndCollectHeaders(metadata) {
    this.filterInheritedMembers(metadata);

    this.sortByName(metadata.properties);
    this.sortByName(metadata.methods);

    const vueRouterLinkRule = this.markdown.renderer.rules.link_open;
    this.markdown.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    metadata.summary = this.renderMarkdown(metadata.summary);
    this.transformMembersAndCollectHeaders('properties', metadata);
    this.transformMembersAndCollectHeaders('methods', metadata);
    this.markdown.renderer.rules.link_open = vueRouterLinkRule;

    this.splitPropertiesAndConstants(metadata);
  }

  filterInheritedMembers(metadata) {
    const filterInherited = member => member.inherits === null || member.inherits === metadata.name;
    metadata.properties = metadata.properties.filter(filterInherited);
    metadata.methods = metadata.methods.filter(filterInherited);
  }

  transformMembersAndCollectHeaders(memberType, metadata) {
    const membersMetadata = metadata[memberType];
    if (!membersMetadata || membersMetadata.length === 0) {
      return;
    }

    let headers = [];
    membersMetadata.forEach((memberMetadata, index) => {
      if (memberMetadata.summary) {
        membersMetadata[index].summary = this.renderMarkdown(memberMetadata.summary);
      }
      if (memberMetadata.description) {
        membersMetadata[index].description = this.renderMarkdown(memberMetadata.description);
      }
      if (memberMetadata.examples && memberMetadata.examples.length) {
        let combinedExamplesMarkdown = '#### Examples\n\n';
        memberMetadata.examples.forEach(example => {
          combinedExamplesMarkdown += `##### ${example.description}\n${example.code}`;
        });
        memberMetadata.examples = this.renderMarkdown(combinedExamplesMarkdown);
      }

      if (memberType === 'properties' && this.constantNamingPattern.test(memberMetadata.name)) {
        // @FIXME: Currently we don't care about constants and skip header recording.
        // How do we properly show them in our docs? There are TONS of them all over the place ...
        return;
      }

      headers.push({
        level: 3,
        title: memberMetadata.name,
        slug: memberMetadata.name.toLowerCase()
      });
    });
    if (headers.length) {
      this.additionalHeaders.push({
        level: 2,
        title: memberType.charAt(0).toUpperCase() + memberType.slice(1),
        slug: memberType
      });
      this.additionalHeaders = this.additionalHeaders.concat(headers);
    }
  }

  renderMarkdown(markdownString) {
    markdownString = this.rewriteTypeLinks(markdownString);
    const { html, data: { hoistedTags, links }, dataBlockString } = this.markdown.render(markdownString);
    return html;
  }

  rewriteTypeLinks(markdownString) {
    const customLinkPattern = /<([^>\/]+)>/g;
    const mdLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

    markdownString = markdownString.replace(customLinkPattern, (match, linkValue) => {
      if (tiApiMetadata[linkValue]) {
        return `[\`${linkValue}\`](${this.base}api/${linkValue.toLowerCase().replace(/\./g, '/')}.html)`;
      }
      return match;
    });

    markdownString = markdownString.replace(mdLinkPattern, (match, linkText, linkValue) => {
      if (tiApiMetadata[linkValue]) {
        return `[${linkText}](${this.base}api/${linkValue.toLowerCase().replace(/\./g, '/')}.html)`;
      }
      return match;
    });

    return markdownString;
  }

  sortByName(unsortedArray) {
    if (!unsortedArray) {
      return;
    }
    unsortedArray.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  splitPropertiesAndConstants(metadata) {
    const properties = [];
    const constants = [];
    metadata.properties.forEach(property => {
      if (this.constantNamingPattern.test(property.name)) {
        constants.push(property);
      } else {
        properties.push(property);
      }
    });
    metadata.properties = properties;
    metadata.constants = constants;
  }
}