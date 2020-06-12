# Titanium.App.iOS.UserDefaults

<TypeHeader/>

## Overview

Unlike Titanium.App.Properties, Titanium.App.iOS.UserDefaults does not pull properties defined in the `tiapp.xml` file.

To create a UserDefaults object, use the <Titanium.App.iOS.createUserDefaults> method.

## Examples

### Create a UserDefaults object

Creating a UserDefaults object

``` js
var props = Ti.App.iOS.createUserDefaults({
    suiteName: 'group.mySuite'
});
```

<ApiDocs/>
