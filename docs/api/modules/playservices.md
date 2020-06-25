# Modules.PlayServices

<TypeHeader/>

## Overview

Google Play Services is required by application developers to access Google service APIs such as
Google Maps, Google Analytics, Firebase, etc.

## Getting Started

Add the module as a dependency to your application by adding a **`<module>`** item to the
**`<modules>`** element of your `tiapp.xml` file:

``` xml
<ti:app>
  <!-- ... -->
  <modules>
    <module platform="android">ti.playservices</module>
  </modules>
  <!-- ... -->
</ti:app>
```

Or include the module as a dependency to a native module by adding a **`<module>`** item to the
**`<modules>`** element of your `timodule.xml` file:

``` xml
<ti:module>
  <!-- ... -->
  <modules>
    <module platform="android">ti.playservices</module>
  </modules>
  <!-- ... -->
</ti:module>
```

Use `require()` to access the module from JavaScript:

``` javascript
var PlayServices = require('ti.playservices');
```

The `PlayServices` variable is a reference to the module. Make API calls using this reference:

``` javascript
var playServicesAvailable = PlayServices.isGooglePlayServicesAvailable();
```

<ApiDocs/>
