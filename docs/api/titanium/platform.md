---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Platform/Platform.yml
---
# Titanium.Platform

<TypeHeader/>

## Examples

### Battery Event Example

Obtaining battery data when the battery state changes.

``` js
Titanium.Platform.addEventListener('battery', function(e){
  Ti.API.info('The battery state has changed to ' + e.state);
  Ti.API.info('The battery level is ' + e.level);
  Ti.API.info('The battery event source is ' + e.source);
  Ti.API.info('The battery event name ' + e.type);
});
```

<ApiDocs/>
