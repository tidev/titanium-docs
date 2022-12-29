---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/App/iOS/ActivityAttributes.yml
---
# Titanium.App.iOS.ActivityAttributes

<TypeHeader/>

## Overview

To properly use these APIs, you need to habe your Widget Extension ready.
You can follow this [sample repository](https://github.com/hansemannn/titanium-widget-kit-sample-app) for an extended example.

## Examples

### Start a new activity

``` js
const attributes = Ti.App.iOS.createActivityAttributes();
attributes.startActivity({
  param1: "Hello",
  param2: "World",
  data: JSON.stringify({ intKey: 1, boolKey: true })
});
```

<ApiDocs/>
