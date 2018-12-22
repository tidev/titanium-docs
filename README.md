# titanium-vuepress-docs

> Experimental approach to use [VuePress](https://vuepress.vuejs.org/) for Guides and API docs.

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

There are currently a few manual steps required to build the docs which we aim to consolidate into a single build step while this project moves foreward.

> ✅ For convenience the repo currently contains a pre-generate `api.json` so you can skip this if you just want to play with the new docs.

The following steps assume you have checked out this repo parallel to Titanium (including the Windows runtime) so that your folder structure looks like this:

```
./
├── titanium_mobile/
├── titanium_mobile_window
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

This will output the statically rendered docs into `docs/.vuepress/dist`.

### Development

VuePress supports a dev mode with hot reloading for a convenient developing experience.

```bash
npm run docs:dev
```

Now start editing the docs and you can immediatly see the results in your browser.

## Versioning

You can use the version script to cut a new documentation version based on the latest content in the `docs` directory. That specific set of documentation will then be preserved and is accessible even as the documentation in the docs directory changes moving forward.

> 💡 Versioning is heavily inspired by [Docusaurus](https://docusaurus.io/docs/en/versioningv) and was ported as a [plugin](./docs/.vuepress/plugins/version.js) to VuePress.

### How to Create New Versions

Run the script with a command line argument of the version you wish to create. e.g.,

```bash
npm run docs:version 8.0
```

This will preserve all documents currently in the `docs` directory and make them available as documentation for version `8.0`.

Documents in the `docs` directory will be considered part of version `next` and they are available, for example, at the URL `/next/doc1.html`. Documents from the latest version use the URL `/doc1.html`.

### Storing Files for Each Version

Versioned documents are placed into `versioned_docs/${version}`, where `${version}` is the version number you supplied to the version script.

The current [`sidebar.config.js`](./docs/.vuepress/sidebar.config.js) and [`api.json`](./docs/api/api.json) will also be preserved and copied into the folder of the newly created version.

## Migrating docs to VuePress

[VuePress](https://vuepress.vuejs.org/) renders gorgeously looking documentation directly from markdown files. This means that our currents guides and parts of the api docs have to be migrated to markdown files. Thanks to VuePress they can be enhanced with Vue components to bypass the restriction of markdown in terms of rendering complex HTML structures.

### Writing guides in VuePress

Guides reside under `docs/guide` and a few documents already have been ported as examples. However none of those guides are complete yet.

To add a new guide first create a new markdown file under `docs/guide`. To add it to the sidebar navigation open `docs/.vuepress/config.js` and edit the `/guide/` section under `themeConfig.sidebar`. The key you want to add is the name of the new markdown file without the `.md` extension.

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

In theory the `api.json` contains all required information to automatically generate markdown files. However, some APIs contain very detailed description and various examples which are just better to maintain directly in markdown files here than in their `.yaml` counterpart in Titanium's [apidoc](https://github.com/appcelerator/titanium_mobile/tree/master/apidoc). All other information regarding the API for a type in Titanium is then taken from the `api.json`. This creates a clear seperation of extensive documentation and simple api reference.

To automatically migrate a type over to these docs you can run the migration script.

```bash
node scripts/migrate.js
```

This will parse `docs/api/api.json` and generate the missing markdown files.

You may need to adjust the automatically generated content and fix any markdown issues or adjust the front matter section to properly display links throughout the docs.

Apart of the [predefined variables](https://vuepress.vuejs.org/guide/frontmatter.html#predefined-variables) from VuePress, API pages support the following additional variables:

| Name | Descriptions |
| --- | --- |
| `metadataKey` | Fully qualified type name which is used to find metadata for a type in `api.json`. The page title will be used if this is not set. |
| `breadcrumbLabel` | Title of this page in the breadcrumb, usually set to the last part of a fully qualified type name, e.g. `View` for `Titanium.UI.View` |


Once you have made sure the automatically generated markdown is correct you can add the new type to the sidebar in `docs/.vuepress/config.js` under the `/api/` key.

## Contributions

Open source contributions are greatly appreciated! If you have a bugfix, improvement or new feature, please create
[an issue](https://github.com/appcelerator/titanium-vuepress-docs/issues/new) first and submit a [pull request](https://github.com/appcelerator/titanium-vuepress-docs/pulls/new) against master.

## License

Apache License, Version 2.0