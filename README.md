# titanium-docs

> Website with Guides and API docs for the [Titanium Mobile SDK](https://github.com/tidev/titanium_mobile) (Powered by [VuePress](https://vuepress.vuejs.org/)).

## Getting started

These docs aim to be a hybrid solution of Markdown bases guides and dynamically generated docs for API references using the existing [apidoc](https://github.com/tidev/titanium_mobile/tree/master/apidoc) from Titanium.

### Installation

```bash
git clone https://github.com/tidev/titanium-docs.git
cd titanium-docs
npm i
```

### Development

VuePress supports a dev mode with hot reloading for a convenient developing experience.

```bash
npm run docs:dev
```

Now start editing the docs and you can immediatly see the results in your browser.

### Building the docs

There are currently a few manual steps required to build the docs which we aim to consolidate into a single build step while this project moves foreward.

> ✅ For convenience the repo currently contains a pre-generate `api.json` so you can skip this if you just want to play with the new docs.

The following steps assume you have checked out this repo parallel to Titanium (including the Windows runtime) so that your folder structure looks like this:

```
./
├── titanium_mobile/
├── titanium_mobile_window
└── titanium-docs/
```

Now generate the `api.json` into the `docs/api` folder

```bash
npm run docs:metadata
```

Finally, let VuePress build the awesome new docs.

```bash
cd ../titanium-docs
npm run docs:build
```

This will output the statically rendered docs into `docs/.vuepress/dist`.

## Versioning

Run the script with a command line argument of the version you wish to create. e.g.,

```bash
npm run docs:version 8.0
```

This will preserve all documents currently in the `docs` directory and make them available as documentation for version `8.0`.

For more info please refer to the [versioning guide](https://titanium-docs-devkit.netlify.com/guide/versioning.html).

## Migrating docs to VuePress

[VuePress](https://vuepress.vuejs.org/) renders gorgeously looking documentation directly from markdown files. This means that our currents guides and parts of the api docs have to be migrated to markdown files. Thanks to VuePress they can be enhanced with Vue components to bypass the restriction of markdown in terms of rendering complex HTML structures.

### Writing guides in VuePress

Guides reside under `docs/guide` and a few documents already have been ported as examples. However none of those guides are complete yet.

To add a new guide first create a new markdown file under `docs/guide`. To add it to the sidebar navigation open `docs/.vuepress/config.js` and edit the `/guide/` section under `themeConfig.sidebar`. The key you want to add is the name of the new markdown file without the `.md` extension.

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

In theory the `api.json` contains all required information to automatically generate markdown files. However, some APIs contain very detailed description and various examples which are just better to maintain directly in markdown files here than in their `.yaml` counterpart in Titanium's [apidoc](https://github.com/tidev/titanium_mobile/tree/master/apidoc). All other information regarding the API for a type in Titanium is then taken from the `api.json`. This creates a clear seperation of extensive documentation and simple api reference.

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

Once you have made sure the automatically generated markdown is correct you can add the new type to the sidebar in `docs/.vuepress/config.js` under the `/api/` key.

## Deploy

One time:

	git remote add dokku dokku@titaniumsdk.com:titaniumsdk.com

Then to release:

	git push dokku main

## Contributions

Open source contributions are greatly appreciated! If you have a bugfix, improvement or new feature, first make sure you have signed the [TiDev CLA](https://github.com/tidev/organization-docs/blob/main/AUTHORIZED_CONTRIBUTORS.md), then create
[an issue](https://github.com/tidev/titanium-docs/issues/new) first and submit a [pull request](https://github.com/tidev/titanium-docs/pulls/new) against master.

## License

Apache License, Version 2.0
