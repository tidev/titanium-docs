---
title: iOS Module Swift Package Manager Support
weight: '35'
---

# iOS Module Swift Package Manager Support

## Introduction

Since Titanium SDK 13.1.0, native iOS modules can declare [Swift Package Manager](https://www.swift.org/documentation/package-manager/) (SPM)
dependencies via an `spm.json` file. The Titanium CLI reads this file when packaging the module and — depending on the
configured linkage — automatically adds the declared Swift packages to the Xcode project of the consuming app at build time.

This replaces manual workarounds like vendoring pre-built `.xcframework` files in `ios/platform` or shipping a custom
`ti.spm.js` CLI hook.

## How it works

1. You add the Swift package to your module's Xcode project as usual (**File → Add Package Dependencies…**), so the module
compiles against it during development.
2. You declare the same package in an `spm.json` file placed next to your module `manifest` (inside the `ios/` folder).
3. When you build the module (`ti build -p ios --build-only`), the CLI embeds the Swift package information into the
`metadata.json` that ships inside the module distribution zip.
4. When an app that uses the module is built, the Titanium CLI reads that metadata and injects every package that declares
`"linkage": "host"` into the generated Xcode project — including the remote package reference, the product dependencies and
the link step in the Frameworks build phase. Packages declared as `"linkage": "embedded"` are considered part of the module
binary itself and nothing is added to the app project.

If several modules request the same Swift package, it is only added to the app once. If they request it with conflicting
version requirements, the CLI logs a warning and uses the first requirement it encounters.

## The `spm.json` file

Place the file next to your module `manifest`:

```
mymodule/
├── ios/
│   ├── manifest
│   ├── spm.json          <-- here
│   ├── MyModule.xcodeproj
│   └── Classes/
```

Example:

```json
{
  "dependencies": [
    {
      "remotePackageReference": "Parse-SDK-iOS-OSX",
      "repositoryURL": "https://github.com/parse-community/Parse-SDK-iOS-OSX",
      "requirementKind": "upToNextMajorVersion",
      "requirementMinimumVersion": "5.1.1",
      "products": [
        { "productName": "ParseObjC", "frameworkName": "ParseObjC", "linkage": "host" },
        { "productName": "ParseLiveQuery", "frameworkName": "ParseLiveQuery", "linkage": "embedded" }
      ]
    }
  ]
}
```

### Dependency fields

| Field | Required | Default | Description |
| --- | --- | --- | --- |
| `repositoryURL` | yes | — | The git URL of the Swift package repository. Dependencies without it are skipped with a warning. |
| `remotePackageReference` | no | Derived from the last path segment of `repositoryURL` | Human-readable reference name used in the generated Xcode project. |
| `requirementKind` | no | `upToNextMajorVersion` | The version resolution rule, e.g. `upToNextMajorVersion` or `upToNextMinorVersion`. |
| `requirementMinimumVersion` | no | `1.0.0` | The minimum package version to resolve. |
| `linkage` | no | `embedded` | Default linkage for all products of this dependency (`embedded` or `host`, see below). |
| `products` | yes | — | Non-empty array of package products to link. A dependency without valid products is skipped with a warning. |

### Product fields

| Field | Required | Default | Description |
| --- | --- | --- | --- |
| `productName` | yes | — | The product name as declared by the Swift package (what you would select in Xcode). |
| `frameworkName` | no | Same as `productName` | The framework name used in the Frameworks build phase, if it differs from the product name. |
| `linkage` | no | The dependency-level `linkage` | Per-product override: `embedded` or `host`. |

### Choosing a linkage

* **`embedded`** (default): The package product is baked into your module's binary. The module stays self-contained and the
consuming app's Xcode project is left untouched. Use this for small, module-private dependencies.
* **`host`**: The Titanium CLI adds the package to the consuming app's Xcode project at build time. Use this when the
dependency should exist only once in the app — for example when multiple modules share the same package, or when the package
ships resources or dynamic frameworks that must be embedded at the app level.

## Building and distributing

After creating or editing `spm.json`, rebuild the module so the updated metadata is packaged:

```bash
cd mymodule/ios
ti build -p ios --build-only
```

The generated zip in `dist/` now contains the Swift package metadata in its `metadata.json`. App developers simply install
the module as usual — no extra steps needed. During the app build, look for log lines prefixed with `[SPM]` to verify which
packages were added:

```
[INFO]  [SPM] Will add 1 Swift package(s) to the app project
```

## Migrating from the legacy `ti.spm.js` hook

Before `spm.json`, some modules shipped a custom `hooks/ti.spm.js` CLI hook to patch the app's Xcode project. This approach
is deprecated:

* If a module contains both an `spm.json` and a `ti.spm.js` hook, the hook is excluded from the packaged zip automatically.
* If a module still ships only the legacy hook, the app build logs a warning asking the module author to migrate.

To migrate, translate the package information from your hook into the `spm.json` format shown above, delete
`hooks/ti.spm.js` and rebuild the module.
