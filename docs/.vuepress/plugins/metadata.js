const fs = require('fs-extra');
const path = require('path');
const { logger } = require('@vuepress/shared-utils');

const metadataFilePath = path.resolve(__dirname, '..', '..', 'api', 'api.json');
const apiMetadata = JSON.parse(fs.readFileSync(metadataFilePath).toString());
let processed = {};

/**
 * Metadata plugin
 */
module.exports = (options = {}, context) => ({
  name: 'titanium/metadata',

  /**
   * Extend page data of pages under /api/ with metadata key, process the metadata
   * required by that page and then adds additonal headers to the page
   *
   * @param {Page} page
   */
  extendPageData(page) {
    if (!/^\/api\//.test(page.regularPath)) {
      return;
    }

    const typeName = page.frontmatter.metadataKey || page.title;
    const metadata = apiMetadata[typeName];

    if (!metadata) {
      return;
    }

    page.metadataKey = typeName;
    page.frontmatter.pageClass = 'api-page';

    if (processed[typeName]) {
      const metadataProcessor = processed[typeName];
      metadataProcessor.appendAdditionalHeaders(page);
      return;
    }

    const metadataProcessor = new MetadataProcessor(context);
    metadataProcessor.transoformMetadataAndCollectHeaders(metadata);
    metadataProcessor.appendAdditionalHeaders(page);

    processed[typeName] = metadataProcessor;
  },

  /**
   * Create dynamic module with processed metadata which is used in webpack server entry
   * to pre-populate the store
   */
  clientDynamicModules() {
    return {
      name: 'metadata.js',
      content: `export default ${JSON.stringify(apiMetadata)}`
    }
  },

  enhanceDevServer (app) {
    app.use((ctx, next) => {
      ctx.assert(ctx.request.accepts('json'), 406);
      const metadataRoutePattern = /\/([\w.]+).json$/;
      const match = ctx.path.match(metadataRoutePattern);
      if (!match) {
        return next();
      }

      const typeName = match[1];
      const metadata = findMetadataWithLowerCasedKey(typeName);
      if (metadata) {
        ctx.body = JSON.stringify(metadata);
        return;
      }

      return;
    });
  },

  async generated () {
    const tempMetadataPath = path.resolve(context.tempPath, 'metadata');
    fs.ensureDirSync(tempMetadataPath);
    for(let typeName in processed) {
      const metadata = apiMetadata[typeName];
      const destPath = path.resolve(tempMetadataPath, `${typeName.toLowerCase()}.json`);
      fs.writeFileSync(destPath, JSON.stringify(metadata));
    }

    await fs.copy(tempMetadataPath, path.resolve(context.outDir, 'metadata'));
  }
});

function findMetadataWithLowerCasedKey(lowerCasedTypeName) {
  for(let typeName in apiMetadata) {
    if (typeName.toLowerCase() === lowerCasedTypeName) {
      return apiMetadata[typeName];
    }
  }

  return null;
}

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
    this.hasConstants = false;
  }

  transoformMetadataAndCollectHeaders(metadata) {
    delete metadata.description;

    this.filterInheritedMembers(metadata);

    this.sortByName(metadata.properties);
    this.sortByName(metadata.methods);

    // We need to temporarily disbale the vue router link rule since the rendered markdown
    // will be directly inserted via v-html so Vue components won't work
    const vueRouterLinkRule = this.markdown.renderer.rules.link_open;
    this.markdown.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    metadata.summary = this.renderMarkdown(metadata.summary);
    this.transformMembersAndCollectHeaders('properties', metadata);
    this.transformMembersAndCollectHeaders('methods', metadata);
    this.transformMembersAndCollectHeaders('events', metadata);
    this.markdown.renderer.rules.link_open = vueRouterLinkRule;

    this.splitPropertiesAndConstants(metadata);
  }

  appendAdditionalHeaders(page) {
    page.headers = (page.headers || []).concat(this.additionalHeaders);
    if (this.hasConstants) {
      page.headers.push({
        level: 2,
        title: 'Constants',
        slug: 'constants'
      });
    }
  }

  filterInheritedMembers(metadata) {
    const filterInherited = member => member.inherits === null || member.inherits === metadata.name;
    metadata.properties = metadata.properties.filter(filterInherited);
    metadata.methods = metadata.methods.filter(filterInherited);
    metadata.events = metadata.events.filter(filterInherited);
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
      if (memberMetadata.deprecated && memberMetadata.deprecated.notes) {
        memberMetadata.deprecated.notes = this.renderMarkdown(memberMetadata.deprecated.notes);
      }

      if (memberType === 'properties' && this.constantNamingPattern.test(memberMetadata.name)) {
        this.hasConstants = true;
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
    // @FIXME: This can be removed once we have a means to generate client dynamic modules
    markdownString = this.rewriteTypeLinks(markdownString);
    const { html, data: { hoistedTags, links }, dataBlockString } = this.markdown.render(markdownString);
    return html;
  }

  rewriteTypeLinks(markdownString) {
    const customLinkPattern = /<([^>\/]+)>/g;
    const mdLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

    markdownString = markdownString.replace(customLinkPattern, (match, linkValue) => {
      const link = this.getTypeLinkForKeyPath(linkValue);
      if (link) {
        return `[${link.name}](${this.base}${link.relativeUrl})`;
      }
      return match;
    });

    markdownString = markdownString.replace(mdLinkPattern, (match, linkText, linkValue) => {
      const link = this.getTypeLinkForKeyPath(linkValue);
      if (link) {
        return `[${link.name}](${this.base}${link.relativeUrl})`;
      }
      return match;
    });

    return markdownString;
  }

  getTypeLinkForKeyPath(keyPath) {
    const prefix = 'api';

    if (apiMetadata[keyPath]) {
      const metadata = apiMetadata[keyPath];
      return {
        name: metadata.name,
        relativeUrl: `${prefix}/${metadata.name.toLowerCase().replace(/\./g, '/')}.html`
      }
    }

    const parentKeyPath = keyPath.substring(0, keyPath.lastIndexOf('.'));
    const memberName = keyPath.substring(parentKeyPath.length + 1);
    const parentMetadata = apiMetadata[parentKeyPath];
    if (!parentMetadata) {
      return null;
    }

    const memberTypeCandidates = ['properties', 'methods', 'events'];
    for (let i = 0; i < memberTypeCandidates.length; i++) {
      const members = parentMetadata[memberTypeCandidates[i]];
      if (!members) {
        continue;
      }

      const match = members.find(memberMetadata => memberMetadata.name === memberName);
      if (match) {
        return {
          name: match.name,
          relativeUrl: `${prefix}/${parentMetadata.name.toLowerCase().replace(/\./g, '/')}.html#${match.name.toLowerCase()}`
        }
      }
    }

    return null;
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