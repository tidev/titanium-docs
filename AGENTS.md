# Titanium SDK Documentation

This repo builds the https://titaniumsdk.com VitePress site.

## Directory structure

```
docs/
  index.md                      # Home page
  .vitepress/
    config.js                   # VitePress config (nav, theme, search)
    sidebar.mjs                 # Auto-generated sidebar (do not edit)
    theme/
      index.js                  # Theme entry — registers ApiProperties/Methods/Events/Examples
      custom.css                # Layout overrides
      components/
        ApiProperties.vue       # Properties table from frontmatter
        ApiMethods.vue          # Methods table from frontmatter
        ApiEvents.vue           # Events table from frontmatter
        ApiExamples.vue         # Code examples
  api/
    titanium/                   # Generated: Titanium SDK API reference
    modules/                    # Generated: Native module API reference
    alloy/                      # Generated: Alloy Framework API reference
  public/
    images/                     # Copied from YAML source dirs during convert
scripts/
  convert.mjs                   # Main build script: clones sources, converts YAML/JSCA→MD, writes sidebar
titanium-sdk-cache/             # Cloned tidev/titanium-sdk
modules-cache/                  # Cloned module repos (ti.map, ti.facebook, etc.)
alloy-cache/                    # Cloned tidev/alloy
```

## How to build

```sh
npm run convert    # Clone sources + generate all markdown + sidebar
npm run build      # Vitepress static build (outputs to docs/.vitepress/dist)
npm run dev        # Dev server at http://localhost:5173
npm run preview    # Preview production build
npm run clean      # rm -rf docs/.vitepress/dist
```

## Source formats

### Titanium SDK / Modules: YAML
- Individual `.yml` files per API type in `apidoc/` dirs
- Each YAML doc: `name`, `summary`, `description`, `properties[]`, `methods[]`, `events[]`, `examples[]`
- Converted by `docToMd()` in `scripts/convert.mjs`

### Alloy Framework: JSCA (JSON)
- Single `api.jsca` file containing `{ types: [...], version: "1.0" }`
- Each type: `name`, `description` (HTML), `properties[]`, `functions[]` (= methods), `events[]`
- Preprocessed by `jscaToDoc()` then passed to `docToMd()`

## Sidebar

Auto-generated in `docs/.vitepress/sidebar.mjs` by `sidebarTree(items)`.
Order: Titanium → Alloy → Modules (enforced by reordering in `run()`).
Sections are configured with `collapsed` and `link` properties after generation.

## Adding a new doc source

1. Add cache dir constant at top of `scripts/convert.mjs`
2. Clone repo in the `run()` function
3. Parse source format (YAML/JSCA/JS)
4. Convert to doc objects matching `docToMd()` input format
5. Push `{ text, path }` items to the shared `items` array
6. Sidebar tree is built automatically from all items

## Markdown frontmatter

Each generated `.md` file has:
```yaml
---
title: Titanium.UI.Button
properties:        # optional, used by <ApiProperties />
  - name: ...
    type: ...
    summary: ...
methods:           # optional, used by <ApiMethods />
  - name: ...
    summary: ...
    parameters: ...
    returns: ...
events:            # optional, used by <ApiEvents />
  - name: ...
    summary: ...
examples:          # optional, used by <ApiExamples />
  - title: ...
    code: ...
---
```
