---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/common/Dictionary.yml
---
# Dictionary

<TypeHeader/>

## Overview

The type `Dictionary` is used to describe a plain JavaScript object used to pass a 
set of properties.

The type `Dictionary<` _Type_ `>` is used to describe a dictionary
where the properties correspond to the properties of the named _Type_. So 
`Dictionary<` `Titanium.UI.Window` `>` refers to a dictionary of `Window`
properties. 

Property dictionaries are used extensively in the Titanium API, especially when 
creating objects. For example, You can specify the initial properties for 
a new window by passing a `Dictionary<` `Titanium.UI.Window` `>` object to the 
[createWindow](Titanium.UI.createWindow) method:

``` js
var window = Ti.UI.createWindow({
    title: "Test", 
    fullscreen: true, 
    backgroundColor: '#aea'
});
```

<ApiDocs/>
