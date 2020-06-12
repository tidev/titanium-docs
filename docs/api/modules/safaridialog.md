# Modules.SafariDialog

<TypeHeader/>

## Overview

The SafariDialog module provides Titanium access to the native SFSafariViewController. This enables you to 
deliver interactive web content in your app just like Safari, including the key Safari UI elements already 
familiar to your users. See how to easily bring Safari features like Reader and AutoFill into your app.

### Requirements

The SafariDialog module is available with the Titanium SDK starting with Release 5.1.0.
This module only works with devices running iOS 9.
Please make sure you have at least Xcode 7 to build to the required sources.

### Getting Started

Add the module as a dependency to your application by adding a **`<module>`** item to the
**`<modules>`** element of your `tiapp.xml` file:

    <ti:app>
      ...
      <modules>
        <module platform="iphone">ti.safaridialog</module>
      </modules>
      ...
    </ti:app>

Use `require()` to access the module from JavaScript:

    var dialog = require('ti.safaridialog');

The `dialog` variable is a reference to the module. Make API calls using this reference:

    if (dialog.isSupported()) {
        dialog.open({
            url: 'http://appcelerator.com',
            title: 'Titanium rocks!',
            tintColor: 'red'
        });
    }

### Sample Application

The module contains a sample application in the
`<TITANIUM_SDK_HOME>/modules/iphone/ti.safaridialog/<VERSION>/example/` folder.

<ApiDocs/>
