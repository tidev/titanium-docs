const { getLinkForKeyPath, isValidType } = require('../utils/metadata');

const typeLinkPattern = /^<([a-zA-Z][a-zA-Z0-9._]+)>/;

module.exports = {
  name: 'titanium/markdown-rules',

  chainMarkdown(config) {
    config
      .plugin('convert-type-link')
      .use(linkConverterPlugin);

    config
      .plugin('type-autolink')
      .use(typeAutolink)

    config
      .plugin('vue-component-patch')
      .use(vueComponentPatch)
  }
}

/**
 * Creates a new renderer rule for link tokens to transform the href attribute
 * from a type to the matching link.
 *
 * Allows usage of type key-paths as links, e.g. `[add](Titanium.UI.View.add)`,
 * whichlinks to the `add` method of `Titanium.UI.View` by creating the complete
 * path `/api/titanium/ui/view.html#add`. Works for types and all members of a
 * type.
 *
 * @param {Object} md markdown-it instance
 */
function linkConverterPlugin(md) {
  const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href');
    if (hrefIndex === -1) {
      return defaultRender(tokens, idx, options, env, self);
    }

    const href = token.attrs[hrefIndex][1];
    if (isValidType(href)) {
      const link = getLinkForKeyPath(href, '/');
      if (link) {
        token.attrs[hrefIndex][1] = link.path;
      }
    }

    return defaultRender(tokens, idx, options, env, self);
  };
}

/**
 * Adds a new rule to the inline parser to automatically create link tokens
 * for types, e.g. `<Titanium.UI.View>`.
 *
 * This rule needs to be added before the html_inline rule to catch pseudo
 * types like `<ItemTemplate>` or they would be intepreted as HTML.
 *
 * @param {Object} md markdown-it instance
 */
function typeAutolink(md) {
  md.inline.ruler.after('autolink', 'type-autolink', (state, silent) => {
    const pos = state.pos;
    if (state.src.charCodeAt(pos) !== 0x3C/* < */) {
      return false;
    }

    const tail = state.src.slice(pos);
    if (tail.indexOf('>') === -1) {
      return false;
    }

    if (typeLinkPattern.test(tail)) {
      const linkMatch = tail.match(typeLinkPattern);
      const url = linkMatch[0].slice(1, -1);
      if (!isValidType(url)) {
        return false;
      }
      const link = getLinkForKeyPath(url, '/');
      if (!silent) {
        let token;
        token = state.push('link_open', 'a', 1);
        token.attrs = [ [ 'href', link.path ] ];
        token.markup = 'autolink';
        token.info = 'auto';

        token= state.push('text', '', 0);
        token.content = link.name;

        token = state.push('link_close', 'a', -1);
        token.markup = 'autolink';
        token.info = 'auto';
      }
      state.pos += linkMatch[0].length;
      return true;
    }

    return false;
  });
}

/**
 * Wraps the Vue html_block rule and tests for our type links first so they
 * won't be falsely turned into html_block tokens.
 *
 * @param {Object} md
 */
function vueComponentPatch(md) {
  const htmlBlockRuleIndex = md.block.ruler.__find__('html_block');
  const vueHtmlBlockRule = md.block.ruler.__rules__[htmlBlockRuleIndex].fn;
  md.block.ruler.at('html_block', (state, startLine, endLine, silent) => {
    let pos = state.bMarks[startLine] + state.tShift[startLine]
    let max = state.eMarks[startLine]
    const lineText = state.src.slice(pos, max);
    if (typeLinkPattern.test(lineText)) {
      const match = lineText.match(typeLinkPattern);
      if (isValidType(match[1])) {
        return false;
      }
    }

    return vueHtmlBlockRule(state, startLine, endLine, silent);
  });
}
