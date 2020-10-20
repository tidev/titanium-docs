# API Reference

Welcome to the API documentation for Titanium Mobile!

## Titanium

Titanium SDK provides a root namespace object, [Titanium](/api/titanium/) as the base/root for the APIs.
This object is also frequently accessed by its alias, `Ti`.

``` js
const button = Titanium.UI.createButton({ title: 'Send' });
// `Ti` convenience shorthand
const win = Ti.UI.createWindow({ title: 'Home' });
```

You'll find all APIs arranged under this root namespace. Browse the full list of available APIs via the sidebar to the left or check out the most frequently used ones in the groups below.

<ModuleGroups />

## Modules

Titanium SDK also has a concept of [Native Modules](/api/modules/) - these are 1st and 3rd-party APIs that may be added on/imported.

Some of these modules get shipped with the SDK, but must be opted-in to be used in your app. Others you may need to download and install into your app or in your Titanium SDK global modules directory.

You opt-in to use of a module per-app by adding a reference to the module in your tiapp.xml file:

``` xml
<!-- ... -->
<modules>
  <module>ti.map</module>
</modules>
<!-- ... -->
```

## Globals

In addition to the root `Titanium` namespace hanging off the `global`, we also supplement the global object with additional APIs/extensions commonly used on Node.JS and on the web.

Most notable:

- [console](/api/global/console) - a Node.JS and Web-compatible implementation of the `console` object, used primarly for logging.
- [global](/api/global) - The global object is hung off of itself to allow for typical explicit access, i.e. `global.console`.
