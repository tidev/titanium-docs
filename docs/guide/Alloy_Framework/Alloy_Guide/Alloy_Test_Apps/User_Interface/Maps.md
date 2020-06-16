---
title: Maps
weight: '90'
---

# Maps

Demonstrates how to use the Maps module and display annotations on iOS and Android.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/map](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

Android and iOS applications use the [Ti.Maps](#!/api/Modules.Map) add-on module, which is included with Titanium SDK, but needs to be added as a dependency to your project's tiapp.xml file.

![ios](./ios.png)

To use the Ti.Map module in your iOS or Android project you need to declare your module in the tiapp.xml file:

**app/tiapp.xml**

```xml
<modules>
    <module platform="iphone">ti.map</module>
    <module platform="android">ti.map</module>
</modules>
```

Alternatively, you add the module to your project by clicking the green ![add](./add.png) in the Module section of the tiapp.xml overview screen, selecting the **ti.map** module in the Mobile Modules dialog, and clicking OK.

![map_add](./map_add.png)

## Android setup

To use the Maps module on Android, there are some setup tasks you first need to complete:

* [Install the Google Play Services SDK](/guide/Titanium_SDK/Titanium_SDK_How-tos/Location_Services/Google_Maps_v2_for_Android/#install-the-google-play-services-sdk)

* [Obtain and Add a Google API Key](/guide/Titanium_SDK/Titanium_SDK_How-tos/Location_Services/Google_Maps_v2_for_Android/#obtain-and-add-a-google-api-key)

* [Obtain the SHA-1 certificate fingerprint](/guide/Titanium_SDK/Titanium_SDK_How-tos/Location_Services/Google_Maps_v2_for_Android/#obtain-the-sha-1-certificate-fingerprint)

* [Add the Google API key and permissions to the tiapp.xml file](/guide/Titanium_SDK/Titanium_SDK_How-tos/Location_Services/Google_Maps_v2_for_Android/#add-the-google-api-key-and-permissions-to-the-tiapp.xml-file)

Once these steps are complete, using the Map module is the same on Android or iOS.

## App configuration

As shown in the sample, app to use the Map module on iOS or Android, add a `<Module/>` element to your XML view with its **`module`** attribute set to "**ti.map**". The sample app also declares several `<Annotation/>` elements with named "id" attributes.

**app/views/index.xml**

```xml
<Alloy>
  <Window class='container'>
      <Module id="map" module="ti.map" method="createView">
      <!-- annotation styled via tss file -->
      <Annotation id="annotation1"/>
      <!-- annotation styles via inline style -->
      <Annotation title="Palo Alto" latitude="37.47" longitude="-122.12"/>
      <!-- platform-specific annotations -->
      <Annotation id="annotation2" platform="android"/>
      <Annotation id="annotation3" platform="ios"/>
      <!-- annotation via <Require> tag -->
      <Require src="annotationView" title="Sunnyvale" latitude="37.37" longitude="-122.03"/>
      <!--
        Lets add a UI component to show Annotations being declared
          side-by-side with child components. Map subviews will appear
          on iOS only.
      -->
      <Require src="overlay" platform="ios"/>
    </Module>
  </Window>
</Alloy>
```

The `index.tss` file assigns values to properties of the Map object, and to the Annotation objects defined in the XML view.

**app/styles/index.tss**

```javascript
".container": {
    backgroundColor:"white"
},
"#map": {
    region: {
        latitude: 37.38,
        latitudeDelta: 0.2,
        longitude: -122.05,
        longitudeDelta: 0.2
    },
    mapType: Alloy.Globals.Map.SATELLITE_TYPE
},
"#annotation1": {
    title:"Mountain View",
    latitude:37.389569,
    longitude:-122.050212
},
"#annotation2": {
    title:"Google HQ",
    latitude:37.4231054,
    longitude:-122.0823988
},
"#annotation3": {
    title:"Apple HQ",
    latitude:37.3308525,
    longitude:-122.0296837
}
```

## See also

* [Google Maps v2 for Android](/guide/Titanium_SDK/Titanium_SDK_How-tos/Location_Services/Google_Maps_v2_for_Android/)

* [iOS Map Kit](/guide/Titanium_SDK/Titanium_SDK_How-tos/Location_Services/iOS_Map_Kit/)

* [Native Maps and Annotations](/guide/Titanium_SDK/Titanium_SDK_How-tos/Location_Services/Native_Maps_and_Annotations/)
