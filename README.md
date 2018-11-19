# titanium-vuepress-docs

> Experimental approach to use VuePress for Guides and API docs.

## Getting started

These docs aim to be a hybrid solution of Markdown bases guides and dynamically generated docs for API references using the existing [apidoc](https://github.com/appcelerator/titanium_mobile/tree/master/apidoc) from Titanium.

> ⚠️ This repo is highly experimental. The doc in here are not complete and are powered by VuePress 1.0 alpha. For currently stable and live documentation please visit https://docs.appcelerator.com/

### Installation

```bash
git clone https://github.com/appcelerator/titanium-vuepress-docs.git
cd titanium-vuepress-docs
npm i
```

### Building the docs

There are currently a few manual steps required to build the docs which we aim to consolidate into a single build step while this project moves foreward. The following steps assume you have checked out this repo parallel to Titanium so that your folder structure looks like this:

```
./
├── titanium_mobile/
└── titanium-vuepress-docs/
```

If you haven't done so, first checkout the following branch of Titanium which includes a new generator for an `api.json` which contains the raw markdown data.

```bash
cd titanium_mobile
git checkout -b raw-docs-generator master
git pull https://github.com/janvennemann/titanium_mobile raw-docs-generator
```

Now generate the `api.json` into the `docs/api` folder

```bash
node apidoc/docgen.js -f json-raw -o ../titanium-vuepress-docs/docs/api/
```

Finally, let VuePress build the awesome new docs.

```bash
cd ../titanium-vuepress-docs
npm run docs:build
```

This will output the statically rendered docs into `docs/.vuepress/dist`. See <https://vuepress.vuejs.org/guide/deploy.html#github-pagesv> how to deploy the generated docs to the GitHub pages of this repo.

### Development

VuePress supports a dev mode with hot reloading for a convenient developing experience.

```bash
npm run docs:dev
```

Now start editing the docs and you can immediatly see the results in your browser. This assumes you have done the previous

## Migrating docs to VuePress

[VuePress](https://vuepress.vuejs.org/) renders gorgeously looking documentation directly from markdown files. This means that our currents guides and parts of the api docs have to be migrated to markdown files. Thanks to VuePress they can be enhanced with Vue components to bypass the restriction of markdown in terms of rendering complex HTML structures.

### Writing guides in VuePress

Guides reside under `docs/guide` and a few documents already have been ported as examples. However none of those the guides is complete yet.

The add a new guide first create a new markdown file under `docs/guide`. To add it to the sidebar navigation open `docs/.vuepress/config.js` and edit the `/guide/` section under `themeConfig.sidebar`. The key you want to add is the name of the new markdown file without the `.md` extension.

```js
module.exports = {
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          title: 'Titanium Guides',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'first-app'
            'my-new-guide'
          ]
        }
      ],
     // ...
    }
  }
}
```

### Adding API docs

In theory the `api.json` contains all required information to automatically generate markdown files. However, some APIs contain very detailed description and various examples which are just better to maintain directly in the markdwon files here than in their `.yaml` counterpart in Titanium's [apidoc](https://github.com/appcelerator/titanium_mobile/tree/master/apidoc). All other information regarding the API for a type in Titanium is then taken from the `api.json`. This creates a clear seperation of extensive documentation and simple api reference.

To migrate a type over to these docs you need to perform the following steps:

1. Create a new markdown file under `docs/api` which follows these naming rules:
  * Make everything lowercase
  * Replace `.` in the fully qualified type name with `/`
  * Append the `.md` extension
  * Example: The markdown file for `Titanium.Buffer` is `docs/api/titanium/buffer.md`
2. Add frontmatter and heading by pasting the follwing to the new markdown file and adjust it for the type you are documenting.
    ```md
    ---
    title: Titanium.Buffer
    breadcrumbLabel: Buffer
    sidebar: auto
    ---

    <Breadcrumb/>

    # Titanium.Buffer

    <ProxySummary/>
    ```
3. Now extract the `description` part of the matching apidoc yaml file and add it to the markdown file under the `## Overview` heading. For example, `Titanium.Buffer` is documented in `titanium_mobile/apidoc/Titanium/Buffer.yaml`. You want to make sure the formatting matches the document an makes use of all markdown features in VuePress, including
  * Adjust header levels
  * Fix links to point to the correct document
  * Use proper code highlighting by moving from indented code examples to triple backticks and specificy the language
4. Now add the `<PropertyList/>` and `<MethodList/>` Vue components at the end of your file to pull in the rest of the api documentation.
5. Add the new type to the sidebar in `docs/.vuepress/config.js` under the `/api/` key.

If you followed these steps your file sould look like this at then end:
```md
---
title: Titanium.Buffer
breadcrumbLabel: Buffer
sidebar: auto
---

<Breadcrumb/>

# Titanium.Buffer

<ProxySummary/>

## Overview

A `Buffer` works like a resizable array of byte values. Use the [createBuffer](/api/titanium.md#createBuffer) method to create a buffer.

<PropertyList/>
<MethodList/>
```





