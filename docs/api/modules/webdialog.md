# Modules.WebDialog

<TypeHeader/>

## Overview

The WebDialog module provides Titanium access to the native `SFSafariViewController` (iOS) and `ChromeTabs` (Android). 
This enables you to deliver interactive web content in your app just like the built-in browser, including the native UI elements already 
familiar to your users.

### Requirements

The WebDialog module is available with the Titanium SDK starting with Release 7.1.0.
This module only works with devices running iOS 9 / Android 4.1 and later.
Please make sure you have at least Xcode 7 to build to the required iOS sources.

### Getting Started

Add the module as a dependency to your application by adding a **`<module>`** item to the
**`<modules>`** element of your `tiapp.xml` file:

``` xml
<ti:app>
  <!-- ... -->
  <modules>
    <module platform="iphone">ti.webdialog</module>
  </modules>
  <!-- ... -->
</ti:app>
```

Use `require()` to access the module from JavaScript:

``` javascript
var dialog = require('ti.webdialog');
```

The `dialog` variable is a reference to the module. Make API calls using this reference:

``` javascript
if (dialog.isSupported()) {
    dialog.open({
        url: 'https://appcelerator.com'
    });
}
```

### Sample Application

The module contains a sample application in the
`<TITANIUM_SDK_HOME>/modules/iphone/ti.webdialog/<VERSION>/example/` folder.

<ApiDocs/>
