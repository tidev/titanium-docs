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

You'll find all APIs arranged under this root namespace. Browse the full list of available APIs via the sidebar to the left, check out the most frequently used ones in the groups below.

<ModuleGroups />

### User Interface

- [UI](/api/titanium/ui/) - Root namespace for UI related code/widgets
- [DisplayCaps](/api/titanium/platform/displaycaps) - Details on the specific hardware densities, dimensions of the device
- [Locale](/api/titanium/locale) - APIs for formatting text, numbers, currency for locales and setting current locale. Most commonly used method [Ti.Locale.getString](/api/titanium/locale#getstring) is aliased as a global [L](/api/global#l) function.
- [Intl](/api/global/intl) - Web comaptible Intl APIs for formatting dates, times, numbers and sorting strings.

### Sensors

- [Accelerometer](/api/titanium/accelerometer/) - register for events when the device's x/y/z rotation changes.
- [Geolocation](/api/titanium/geolocation/) - requesting and accessing location coordinates and geocoding addresses.
- [Gesture](/api/titanium/gesture/) - query for device orientation and register for orientation changes or shake events.

### SQLite Database

- [Database](/api/titanium/database/) - root namespace for APIs to manage Databases
- [DB](/api/titanium/database/db/) - An instance of a Database
- [ResultSet](/api/titanium/database/resultset/) - Result Sets from querying/manipulating a Database

### Network, Filesystem and I/O

- [Network](/api/titanium/network/) - Root namespace for network related code, such as an HTTP client.
- [Filesystem](/api/titanium/filesystem/) - Root namespace for interacting with the filesystem
- [Blob](/api/titanium/blob/) - A read-only instance of bytes representing binary or text data (such as images or file contents)
- [Buffer](/api/titanium/buffer/) - A read/write instance of bytes typically used in conjunction with streams
- [Codec](/api/titanium/codec/) - Utility methods for encoding/decoding bytes in buffers
- [Stream](/api/titanium/stream/) - Utility methods for reading/writing to/from streams
- [IOStream](/api/titanium/iostream/) -The base interface for streams

### Logging

- [API](/api/titanium/api/) - A Titanium-specific logger. For most developers used to the Web or Node.JS, they;d typically use [console](/api/globals/console/) instead.
- [Analytics](/api/titanium/analytics) - Built in APIs for recording app-specific analytics, to record useful data/events from your app in the Platform Dashboard backend.

### Utilities

- [App](/api/titanium/app/) - Root namespace for accessing app-specific data, such as: name, id, guid, versionm, etc. Also used to register for app-wide events such as pause/resume.
- [Properties](/api/titanium/app/properties/) - Read/write of app-specific properties
- [Utils](/api/titanium/utils/) - utility methods for base64 encode/decode, as well as sha/md5 hashing.

### Contacts, Calendars

- [Contacts](/api/titanium/contacts/) - Querying and managing contacts
- [Calendar](/api/titanium/calendar/) - Querying and managing calendars and events

### Audio and Video

- [Media](/api/titanium/media/)

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
