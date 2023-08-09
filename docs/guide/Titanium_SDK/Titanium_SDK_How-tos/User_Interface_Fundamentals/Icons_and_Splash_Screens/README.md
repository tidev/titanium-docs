---
title: Icons and Splash Screens
weight: '40'
---

# Icons and Splash Screens

## Objective

In this chapter, you will learn how to set a custom icon and splash screen for your Titanium app. App icons are required by the Google Play, Apple App Store, and Microsoft App Store when you submit your apps. Splash screens add a critically important notification to users that your app is in the process of loading.

To help quickly generate assets for your project, we recommend using the [TiCons website tool](http://ticons.fokkezb.nl/) or the [TiCons CLI](https://www.npmjs.org/package/ticons), created by Titan Fokke Zandbergen.

## Icons, splash screens, and store requirements

Titanium provides you with a default icons and splash screens for development purposes. But you'll obviously want to include your own when it comes time to distribute. Depending on your app type, target platform, and distribution choices, you might need to create many variations of these graphics. First, let's cover some basic considerations.

### Location for your graphics

Generally, graphics files can all be put in the Resources directory. However, if you want to provide different app icons for iOS and Android (both get called `appicon.png`), you could instead put them into the `Resources/android` and `Resources/iphone` directories. For Alloy, it is `app/assets/iphone` and `app/assets/android`. If you're providing Android density-specific versions of splash screens (launch images), you'll need to put them within the correct folder within the `Resources/android/images` (or `app/assets/android/images` for Alloy) hierarchy as shown in the tables below. If you're providing density-specific app icons for Android, you'll need to follow the instructions below to create a folder hierarchy into which you'll place your icons. For Alloy, place your icons in `app/assets` or the related platform-specific sub-directory. It is recommended to use a centralized `DefaultIcon.png` icon with 1024 x 1024 pixels that will generate all app-icons automatically.

Google Play, App Store, or Microsoft Store graphics aren't bundled into your finished app, only within your project directory. Instead, you upload them to the respective app store control panels. As such, you can store those files anywhere and name them with any logical name.

### Build scripts for iOS icons

To include an icon in your iOS .ipa file, all you need to do is include the correctly-named file in your `Resources/` (Alloy: `app/assets/`) folder. The Titanium build scripts will copy those icons to the final `.ipa`, ready for you to upload to Apple.

### Splash screens

You can change but not remove the splash screen that is shown as your app loads. To do so, simply replace the default.png file with your own graphic. You can provide platform-specific versions by placing this file in the Resources/platform\_name (Alloy: `app/assets/platform_name`) directory. There are a couple of platform specific considerations:

#### Android splash screen considerations

##### Android 12+

Beginning with Android 12 you will see the icon as a splash screen. For more details check [the Android guides](https://developer.android.com/develop/ui/views/launch/splash-screen). Make sure you use [Adaptive icons](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive). A useful tutorial can be found at [from zero to app](https://fromzerotoapp.com/android-adaptive-icons/).

If you want to change the background color use this in your theme:

tiapp.xml (adjust the name to match our app activity in this form: `xx.xx.<AppName>Activity`:
```xml
<application >
	<activity android:name="com.myapp.MyAppActivity" android:theme="@style/Theme.Custom.Splash" />
</application>
```

theme:
```xml
<style name="Theme.Custom.Splash" parent="@style/Theme.MaterialComponents.NoActionBar">
  <item name="android:windowBackground">@drawable/background_cropped</item>
  <item name="android:windowSplashScreenBackground">@color/orange</item>
</style>
```
drawable/background_cropped.xml:
```xml
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
	<item android:drawable="@color/orange"/>
	<item>
		<bitmap android:src="@drawable/background" android:gravity="center"/>
	</item>
</layer-list>
```
(drawable/background.png is the logo).

##### Android <12

For Android, you can either use the `default.png` file or create a [nine-patch image](https://developer.android.com/studio/write/draw9patch).

Since Android devices are available in different screen sizes and densities, Google recommends using a nine-patch image as the recommended graphics format to support different devices. A nine-patch image is a PNG with regions specified as stretchable or not stretchable. For example, if you have an image with a logo centered against a solid background, you can create a nine-patch image with the area around the logo as stretchable. If the image needs to be stretched for a larger device, the solid background color will be stretched, leaving the logo untouched.

To create a nine-patch image, you can either use the Android SDK draw9patch tool or a graphics editor. If you are using a graphics editor, create a one-pixel transparent or white border around your PNG image, then change the top and left border to black pixels where you want the image to stretch. Mark the entire right and bottom borders with black pixels to indicate the drawable areas when the image is scaled. If you do not specify the whole image as drawable, the image may not scale properly, causing it to be squished in part of the screen. For more information, refer to the [Android Draw 9-Patch help tutorial](http://developer.android.com/tools/help/draw9patch.html) for directions on using the draw9patch tool or refer to the [Android nine-patch image specification](http://developer.android.com/guide/topics/graphics/2d-graphics.html#nine-patch) for information on creating a nine-patch image in a graphics editor.

Name the file `default.9.png`, place it in the `Resources/android` folder and remove the `default.png` image. If both of these files exist, the build will fail with an error.

To use multiple density-specific splash screen images, copy your nine-patch image(s) to `.` / `platform/android/res/drawable[-xdpi]/` (Alloy: `app/platform/android/...`) in your project root directory (not the `Resources` folder), where `xdpi` can be a density group to specify more than one image for different screen densities or use the `-nodpi` suffix to have it support all resolutions. Rename the file(s) to `background.9.png`. For example, the following project specifies splash images for multiple densities (note: For Alloy, it's relative to your `app/` directory as described above):

```
SampleProjectClassic
├── app
├── platform
│   └── android
│       └── res
│           ├── drawable-ldpi
│           │   └─── background.9.png
│           ├── drawable-mdpi
│           │   └─── background.9.png
│           ├── drawable-hdpi
│           │   └─── background.9.png
│           └── drawable-xhdpi
│           │   └─── background.9.png
│           └── drawable-xxhdpi
│           │   └─── background.9.png
│           └── drawable-xxxhdpi
│               └─── background.9.png
├── Resources
└── tiapp.xml
```

::: warning ⚠️ Warning
Do not place the splash screen image in the `drawable` folder (without a suffix). Android may scale the image improperly. If you want to use one image for the entire application, place it in the `drawable-nodpi` folder.
:::

#### Splash screen with a custom theme

If you are using a custom theme to display the splash screen, override the default root activity to use the custom theme:

1. Create a theme XML file in the `./platform/android/res/values/` (Alloy: `app` `/platform/android/res/values/`) folder. Do NOT name the file `theme.xml`. Titanium uses this name as its default theme file, which is required to build the application. If you create a file called `theme.xml`, it will overwrite the default Titanium one and break the build process. Add the `windowBackground` items to the custom theme referencing the background nine-patch image.

    ::: warning ⚠️ Warning
    Only add the `windowBackground` items only to the theme of the default root activity. If you add `windowBackground` items to other themes for other activities, the image may not be displayed properly.
    :::

    **platform/android/res/values/mytheme.xml**

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <resources>
      <style name="Theme.MyTheme" parent="Theme.AppCompat">
          <item name="windowBackground">@drawable/background</item>
          <item name="android:windowBackground">@drawable/background</item>
      </style>
    </resources>
    ```

2. Build your application once to generate the `build/android/AndroidManifest.xml`. Open the file and copy the `activity` node that contains your default root activity. The `android:name` attribute will contain the name of your application.

    **build/android/AndroidManifest.xml**

    ```xml
    <manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.example.sample" android:versionCode="1" android:versionName="1.0">
      <uses-sdk android:minSdkVersion="17" android:targetSdkVersion="25"/>
      <application android:icon="@drawable/appicon" android:label="AlloyNinePatch" android:name="AlloyninepatchApplication" android:debuggable="false" android:theme="@style/Theme.AppCompat">
        <activity android:name=".YourapplicationnameActivity" android:label="@string/app_name" android:theme="@style/Theme.Titanium" android:configChanges="keyboardHidden|orientation|screenSize">
          <intent-filter>
            <action android:name="android.intent.action.MAIN"/>
            <category android:name="android.intent.category.LAUNCHER"/>
          </intent-filter>
        </activity>
        <activity android:name="org.appcelerator.titanium.TiActivity" android:configChanges="keyboardHidden|orientation|screenSize"/>
        <activity android:name="org.appcelerator.titanium.TiTranslucentActivity" android:configChanges="keyboardHidden|orientation|screenSize" android:theme="@style/Theme.AppCompat.Translucent"/>
        <activity android:name="ti.modules.titanium.ui.android.TiPreferencesActivity" android:configChanges="screenSize"/>
      </application>
      <uses-permission android:name="android.permission.INTERNET"/>
      <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
      <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
      <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
      <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
      <uses-permission android:name="android.permission.ACCESS_MOCK_LOCATION"/>
    </manifest>
    ```

3. Paste the default root activity into the Android section of your `tiapp.xml` file inside the `<application>` element. You may need to add the <`manifest>` and <`application>` elements to the <`android>` element of your `tiapp.xml` file. In the activity's `android:theme` attribute, replace `Theme.Titanium` with the name of your custom theme:

    **tiapp.xml**

    ```xml
    <ti:app xmlns:ti="http://ti.appcelerator.org">
        ...
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <manifest>
                <application>
                    <activity android:name=".YourapplicationnameActivity" android:label="@string/app_name" android:theme="@style/Theme.MyTheme" android:configChanges="keyboardHidden|orientation|screenSize">
                        <intent-filter>
                            <action android:name="android.intent.action.MAIN"/>
                            <category android:name="android.intent.category.LAUNCHER"/>
                        </intent-filter>
                    </activity>
                </application>
            </manifest>
        </android>
        ...
    </ti:app>
    ```

For additional information on themes, see [Android Themes](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Android_UI_Components_and_Conventions/Android_Themes/).

By default, when you create a new project, Android uses the name `default.png` for the splash screen (with a lowercase "d"). The dimensions and location where you place that that file vary according to the target device density and screen size. These characteristics correspond to the density and [generalized size](http://developer.android.com/guide/practices/screens_support.html#range) of the user's display. Examine the `Resources/android/images` (Alloy: `app/assets/android/images`) folder and you'll find a series of folders with names like `res-long-land-hdpi` (which corresponds to a device with a "long"/rectangular screen in landscape orientation with an HDPI screen).

Titanium provides default splash screen graphics of the appropriate size in each of the folders inside `Resources/android/images`(Alloy: `app/assets/android/images`). You can use those as a guide to creating the images for your app. Simply create each graphic with your own, matching the size and density.

If you do not want to provide separate images for each density and orientation in your project, delete the folders. Then, provide a single `default.png` file in either `Resources` (Alloy: `app/assets`) or `Resources/android` `(`Alloy:`app/assets/android)` to match the dimensions that most closely match the device you expect most of your users to be running. Keep in mind that this could result in a splash screen that is stretched or compressed suboptimally for your users' devices.

::: danger ❗️ Warning
Do not use the `<supports-screens/>` element with the `android:anyDensity` attribute set to false to disable multiple density support. Google does not recommend [changing the default value](http://developer.android.com/guide/topics/manifest/supports-screens-element.html#any). Setting this attribute to false may cause undesired behavior.
:::

#### iOS splash screen considerations

iOS uses various splash screen (launch) images depending on the target device. The naming details are provided in the tables below. Match case and naming precisely.

## iOS graphic asset requirements and options

The following table summarizes some of the requirements for application graphic assets. All files must be in PNG format. Any non-PNG file will be ignored. For Alloy projects, place the assets in the `app/assets`, `app/assets/iphone` or `app/assets/ios` folder. For classic Titanium projects, place the assets in the `Resources`, `Resources/iphone` or `Resources/ios` folder.

For all icon files (image files prefixed with `appicon`), the images need to be square, that is, the height and width must be equal. Icon files cannot have an alpha channel. If you omit any appicon files and have a file called `DefaultIcon.png` in the root folder of the project that is 1024 x 1024px, the Titanium SDK will generate any missing icon files from the file. If any app icon files are missing, the build will fail. The build will not fail if you omit spotlight and settings icons.

For launch image files (image files prefixed with `Default`), if you omit any files, the build will not fail.

For the iTuneArtwork files, if you omit any iTunesArtwork file and have a file called `DefaultIcon.png` in the root folder of the project, the Titanium SDK will generate any missing iTuneArtwork files. The image must be at least 1024 x 1024px to generate the iTunesArtwork and iTunesArtwork@2x files. If any files are omitted, the build will not fail.

Application icons and launch images are added to the Asset Catalog to support App Thinning. Due to this change, you can no longer reference the image assets from the filesystem. For example, you can no longer set the `backgroundImage` property to a launch image. Note that the localized launch images in the `i18n` folder are not supported in Asset Catalog.

For more information, see [iOS Human Interface Guidelines: Icons and Image Sizes](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/IconMatrix.html#//apple_ref/doc/uid/TP40006556-CH27-SW1).

| iOS Device | Purpose | Dimensions | File name |
| --- | --- | --- | --- |
| iPhone 4/4S/5/5C/5S/6  <br />iPod touch 5th generation | App icon | 120 x 120 | appicon-60@2x.png |
| iPhone 6 Plus | App Icon | 180 x 180 | appicon-60@3x.png |
| iPad non-retina | App icon | 76 x 76 | appicon-76.png |
| iPad retina | App icon | 152 x 152 | appicon-76@2x.png |
| iPad Pro | App icon | 167 x 167 | appicon-83.5@2x.png[](#!/guide/mailto:appicon-83.5@2x.png) |
| Universal non-retina | Spotlight | 40 x 40 | appicon-Small-40.png |
| Universal retina | Spotlight | 80 x 80 | appicon-Small-40@2x.png |
| iPhone 6 Plus | Spotlight | 120 x 120 | appicon-Small-40@3x.png |
| Universal non-retina | Settings | 29 x 29 | appicon-Small.png |
| Universal retina | Settings | 58 x 58 | appicon-Small@2x.png |
| iPhone 6 Plus | Settings | 87 x 87 | appicon-Small@3x.png |
| iPhone 4/4S | Splash screen | 640 x 960 | Default@2x.png |
| iPhone 5/5C/5S  <br />iPod touch 5th generation | Splash screen | 640 x 1136 | Default-568h@2x.png |
| iPhone 6 and 7 | Splash screen | 750 x 1334 | Default-667h@2x.png |
| iPhone 6 and 7 Plus landscape | Splash screen | 2208 x 1242 | Default-Landscape-736h@3x.png |
| iPhone 6 and 7 Plus portrait | Splash screen | 1242 x 2208 | Default-Portrait-736h@3x.png |
| iPhone 8 portrait | Splash screen | 750 x 1334 | Default-Portrait-750h@2x.png |
| iPhone 8 landscape | Splash screen | 1334 x 750 | Default-Landscape-1134@2x.png |
| iPhone 8 Plus portrait | Splash screen | 1242 x 2208 | Default-Portrait-1242h@3x.png |
| iPhone 8 Plus landscape | Splash screen | 2208 x 1242 | Default-Landscape-2208h@3x.png |
| iPhone SE portrait | Splash screen | 640 x 1136 | Default-Portrait-640h@2x.png |
| iPhone SE landscape | Splash screen | 1136 x 640 | Default-Landscape-1136h@2x.png |
| iPhone X portrait | Splash screen | 1125 x 2436 | Default-Portrait-2436h@3x.png |
| iPhone X landscape | Splash screen | 2436 x 1125 | Default-Landscape-2436h@3x.png |
| iPhone Xs Max portrait | Splash screen | 1242 x 2688 | Default-Portrait-2688h@3x.png |
| iPhone Xs Max landscape | Splash screen | 2688 x 1242 | Default-Landscape-2688h@3x.png |
| iPhone Xs portrait | Splash screen | 1125 x 2436 | Default-Portrait-1125h@3x.png |
| iPhone Xs landscape | Splash screen | 2436 x 1125 | Default-Landscape-2426h@3x.png |
| iPhone Xr portrait | Splash screen | 828 x 1792 | Default-Portrait-1792h@2x.png |
| iPhone Xr landscape | Splash screen | 1792 x 828 | Default-Landscape-1792h@2x.png |
| iPhone 11 portrait | Splash screen | 1792 x 828 | Default-Landscape-1792h@2x.png |
| iPhone 11 landscape | Splash screen | 828 x 1792 | Default-Landscape-1792h@2x.png |
| iPhone 11 Pro portrait | Splash screen | 1125 x 2436 | Default-Portrait-2436h@3x.png |
| iPhone 11 Pro landscape | Splash screen | 2436 x 1125 | Default-Landscape-2436h@3x.png |
| iPhone 11 Pro Max portrait | Splash screen | 1242 x 2688 | Default-Portrait-2688@3x.png |
| iPhone 11 Pro Max landscape | Splash screen | 2688 x 1242 | Default-Landscape-2688@3x.png |
| iPhone SE 2nd, 3rd Gen portrait | Splash screen | 750 x 1334 | Default-Portrait-1334@2x.png |
| iPhone SE 2nd, 3rd Gen landscape | Splash screen | 1334 x 750 | Default-Landscape-1334@2x.png |
| iPhone 12, 13 mini landscape | Splash screen | 1125 × 2436 | Default-Portrait-2436@3x.png |
| iPhone 12, 13 mini portrait | Splash screen | 2436 x 1125 | Default-Landscape-2436@3x.png |
| iPhone 12, 13, 14 landscape | Splash screen | 1170 × 2532 | Default-Landscape-2532@3x.png |
| iPhone 12, 13, 14 portrait | Splash screen | 2532 × 1170 | Default-Portrait-2532@3x.png |
| iPhone 12, 13 Pro landscape | Splash screen | 1170 × 2532 | Default-Landscape-2532@3x.png |
| iPhone 12, 13 Pro portrait | Splash screen | 2532 x 1170 | Default-Portrait-2532@3x.png |
| iPhone 12, 13 Pro Max, 14-Plus landscape | Splash screen | 2778 x 1284 | Default-Landscape-2778@3x.png |
| iPhone 12, 13 Pro Max, 14-Plus portrait | Splash screen | 1284 × 2778 | Default-Portrait-2778@3x.png |
| iPhone 14 Pro landscape | Splash screen | 2556 x 1179 | Default-Landscape-2556@3x.png |
| iPhone 14 Pro portrait | Splash screen | 1179 × 2556 | Default-Portrait-2556@3x.png |
| iPhone 14 Max landscape | Splash screen | 2796 x 1290 | Default-Landscape-2796@3x.png |
| iPhone 14 Max portrait | Splash screen | 1290 × 2796 | Default-Portrait-2796@3x.png |
| iPad non-retina landscape | Splash screen | 1024 x 768 | Default-Landscape.png |
| iPad non-retina portrait | Splash screen | 768 x 1024 | Default-Portrait.png |
| iPad retina landscape | Splash screen | 2048 x 1536 | Default-Landscape@2x.png |
| iPad retina portrait | Splash screen | 1536 x 2048 | Default-Portrait@2x.png |
| iPad 9.7" portrait | Splash screen | 1536 x 2048 | Default-Portrait-1536h@2x.png |
| iPad 9.7" landscape | Splash screen | 2048 x 1536 | Default-Landscape-2048h@2x.png |
| iPad 7.9" mini 4 portrait | Splash screen | 1536 x 2048 | Default-Portrait-1536h@2x.png |
| iPad 7.9" mini 4 landscape | Splash screen | 2048 x 1536 | Default-Landscape-2048h@2x.png |
| Any device with a non-retina display for ad-hoc builds | App list in iTunes | 512 x 512 | iTunesArtwork (no extension) |
| Any device with a retina display for ad-hoc builds | App list in iTunes | 1024 x 1024 | iTunesArtwork@2x (no extension) |

### iTunes Connect assets

![appstore-image](./appstore-image.png)

The following table summarizes the iTunes Connect requirements for submitting an application. You need to provide at least one screenshot for each device the application supports.

For more information, see [iTunes Connect Developer Guide: Screenshot specifications](http://help.apple.com/itunes-connect/developer/#/devd274dd925).

| iTunes Connect graphics | Purpose | Dimensions | Filename | Specs |
| --- | --- | --- | --- | --- |
| One (1) required | Large app icon | 1024 x 1024 | any | JPG or PNG, flattened, no transparency |
| One (1) required | iPhone 6 and 7 Plus screenshot | 2208 x 1242, 1242 x 2208 | any | JPG or PNG, flattened, no transparency |
| One (1) required | iPhone X screenshot | 2436 x 1125, 1125 x 2436 | and | JPG or PNG, flattened, no transparency |
| One (1) required | iPad screenshot | * non-retina, fullscreen: 1024x768 or 768x1024<br />    <br />* non-retina, no status bar: 1024x728 or 768x1004<br />    <br />* retina, fullscreen: 2048x1536 or 1536x2048<br />    <br />* retina, no status bar: 2048x1496 or 1536x2008 | any | JPG or PNG, flattened, no transparency |

### Older devices

The following table summarizes the graphic assets for devices no longer supported by the current Titanium SDK.

| iOS Device | Purpose | Dimensions | DPI | File name |
| --- | --- | --- | --- | --- |
| iPhone/iPod non-retina | App icon | 57 x 57 | 72 | appicon.png |
| iPhone/iPod retina (iOS 6 and prior) | App icon | 114 x 114 | 72 | appicon@2x.png |
| iPad 1 & 2 (iOS 6 and prior) | App icon | 72 x 72 | 72 | appicon-72.png |
| iPad 3 (iOS 6 and prior) | App icon | 144 x 144 | 72 | appicon-72@2x.png |
| iPhone/iPod non-retina | Spotlight & settings | 29 x 29 | 72 | appicon-Small.png |
| iPhone/iPod retina (iOS 6 and prior) | Spotlight & settings | 58 x 58 | 72 | appicon-Small@2x.png |
| iPad 1 & 2 (iOS 6 and prior) | Spotlight & settings | 50 x 50 | 72 | appicon-Small-50.png |
| iPad Retina (iOS 6 and prior) | Spotlight | 100 x 100 | 72 | appicon-Small-50@2x.png |
| iPad Retina (iOS 6 and prior) | Settings | 58 x 58 | 72 | appicon-Small@2x.png |
| iPhone non-retina | Splash screen | 320 x 480 | 72 | Default.png |
| iPad 1 landscape | Splash screen | 1024 x 768 | 72 | Default-Landscape.png |
| iPad 1 portrait | Splash screen | 768 x 1024 | 72 | Default-Portrait.png |

## Android graphic asset requirements and options

::: tip 💡 Hint
To quickly generate Android icon assets for your application, use the [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/index.html) (this is not an Appcelerator product).
:::

### Splash Screen

See the [Android splash screen considerations](#android-splash-screen-considerations) section for details!

### Launcher icon

The launcher icon is used by the user to start your application. It should be a 32-bit PNG with an optional alpha channel for transparency. For more information, see the [Android Launcher Icons design guide](http://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html).

By default, a newly created Titanium application uses the `Resources/android/appicon.png` file. The filename must match the name specified in the `icon` element in your `tiapp.xml` file.

| Density | DPI | Dimensions | Titanium folder location and filename |
| --- | --- | --- | --- |
| ldpi | 120 | 36 x 36 | `platform/android/res/drawable-ldpi/appicon.png` |
| mdpi | 160 | 48 x 48 | `platform/android/res/drawable-mdpi/appicon.png` |
| hdpi | 240 | 72 x 72 | `platform/android/res/drawable-hdpi/appicon.png` |
| xhdpi | 320 | 96 x 96 | `platform/android/res/drawable-xhdpi/appicon.png` |
| xxhdpi | 480 | 144 x 144 | `platform/android/res/drawable-xxhdpi/appicon.png` |
| xxxhdpi | 640 | 512 x 512 | `platform/android/res/drawable-xxxhdpi/appicon.png` |

### Action bar icons

The action bar icons represent individual actions in the action bar. They should be a 32-bit PNG with an alpha channel for transparency. To reference the images in your JavaScript code, prefix the image name with the `/images/` directory (with the leading slash). For more information, see the [Android Action Bar Icons design guide](http://developer.android.com/guide/practices/ui_guidelines/icon_design_action_bar.html) and [Android Action Bar](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Android_UI_Components_and_Conventions/Android_Action_Bar/). If you set the target SDK to Android 5.0 (API 21) or higher, the action bar icons may not display. Google is discouraging the use of icons in toolbars starting with API 21.

| Density | DPI | Dimensions | Titanium folder location | Alloy folder location |
| --- | --- | --- | --- | --- |
| ldpi | 120 | 18 x 18 | `Resources/android/images/res-ldpi/` | `app/assets/android/images/res-ldpi/` |
| mdpi | 160 | 24 x 24 | `Resources/android/images/res-mdpi/` | `app/assets/android/images/res-mdpi/` |
| hdpi | 240 | 36 x 36 | `Resources/android/images/res-hdpi/` | `app/assets/android/images/res-hdpi/` |
| xhdpi | 320 | 48 x 48 | `Resources/android/images/res-xhdpi/` | `app/assets/android/images/res-xhdpi/` |
| xxhdpi | 480 | 72 x 72 | `Resources/android/images/res-xxhdpi/` | `app/assets/android/images/res-xxhdpi/` |
| xxxhdpi | 640 | 144 x 144 | `Resources/android/images/res-xxxhdpi/` | `app/assets/android/images/res-xxxhdpi/` |

### Notification icons

The notification icon is displayed on the status bar when the application generates a notification. Notification icons should only be a **white-on-transparent background image**. For more information, see [Android Notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/Android_Notifications/).

| Density | DPI | Dimensions | Titanium folder location | Alloy folder location |
| --- | --- | --- | --- | --- |
| ldpi | 120 | 18 x 18 | `platform/android/res/drawable-ldpi/` | `app/platform/android/res/drawable-ldpi/` |
| mdpi | 160 | 24 x 24 | `platform/android/res/drawable-mdpi/` | `app/platform/android/res/drawable-mdpi/` |
| hdpi | 240 | 36 x 36 | `platform/android/res/drawable-hdpi/` | `app/platform/android/res/drawable-hdpi/` |
| xhdpi | 320 | 48 x 48 | `platform/android/res/drawable-xhdpi/` | `app/platform/android/res/drawable-xhdpi/` |
| xxhdpi | 480 | 72 x 72 | `platform/android/res/drawable-xxhdpi/` | `app/platform/android/res/drawable-xxhdpi/` |
| xxxhdpi | 640 | 144 x 144 | `platform/android/res/drawable-xxxhdpi/` | `app/platform/android/res/drawable-xxxhdpi/` |

### Small and contextual icons

These icons are used to display the status of actions or items. To reference the images in your JavaScript code, prefix the image name with the `/images/` directory (with the leading slash). For more information, see the [Android Iconography guide](http://developer.android.com/design/style/iconography.html).

| Density | DPI | Dimensions | Titanium folder location | Alloy folder location |
| --- | --- | --- | --- | --- |
| ldpi | 120 | 12 x 12 | `Resources/android/images/res-ldpi/` | `app/assets/android/images/res-ldpi/` |
| mdpi | 160 | 16 x 16 | `Resources/android/images/res-mdpi/` | `app/assets/android/images/res-mdpi/` |
| hdpi | 240 | 24 x 24 | `Resources/android/images/res-hdpi/` | `app/assets/android/images/res-hdpi/` |
| xhdpi | 320 | 32 x 32 | `Resources/android/images/res-xhdpi/` | `app/assets/android/images/res-xhdpi/` |
| xxhdpi | 480 | 48 x 48 | `Resources/android/images/res-xxhdpi/` | `app/assets/android/images/res-xxhdpi/` |
| xxxhdpi | 640 | 92 x 92 | `Resources/android/images/res-xxxhdpi/` | `app/assets/android/images/res-xxxhdpi/` |

### Google Play assets

The following table summarizes the [Google Play requirements](https://support.google.com/googleplay/android-developer/answer/1078870) when submitting an application.

| Google Play graphics | Purpose | Dimensions | DPI | File name | Specs |
| --- | --- | --- | --- | --- | --- |
| One (1) required | Large app icon | 512 x 512 | 72 | max. 1.024 KB | 32-bit PNG or JPG |
| Min of two (2) required | Screenshots | 320 - 3.840 | 72 | any | 24-bit PNG or JPG, no alpha channel |
| Optional | Promotional graphic | 180 x 120 | 72 | any | 24-bit PNG or JPG, no alpha channel |
| Required if you want to be featured in Google Play | Feature graphic | 1024 x 500 | 72 | any | 24-bit PNG or JPG, no alpha channel |
| Optional | YouTube link |  |  |  | 30 sec to 2 min works best |

### Previous Recommendations

The following table lists the current file attributes created and used for a default Titanium project. These specifications work well as a baseline for handheld devices but not for tablet devices. Tablet devices need images with larger dimension. You need to experiment with multiple devices to see what works well for your application.

| Android screen type | Purpose | Dimensions | DPI | File name |
| --- | --- | --- | --- | --- |
| Any | App icon | 128 x 128 | 72 | appicon.png |
| Rectangular, landscape, HDPI | Splash screen | 800 x 480 | 240 | default.png |
| Rectangular, landscape, LDPI | Splash screen | 400 x 240 | 120 | default.png |
| Rectangular, portrait, HDPI | Splash screen | 480 x 800 | 240 | default.png |
| Rectangular, portrait, LDPI | Splash screen | 240 x 400 | 120 | default.png |
| Square-ish, landscape, HDPI | Splash screen | 800 x 480 | 240 | default.png |
| Square-ish, landscape, LDPI | Splash screen | 320 x 240 | 120 | default.png |
| Square-ish, landscape, MDPI | Splash screen | 480 x 320 | 160 | default.png |
| Square-ish, portrait, HDPI | Splash screen | 480 x 800 | 240 | default.png |
| Square-ish, portrait, LDPI | Splash screen | 240 x 320 | 120 | default.png |
| Square-ish, portrait, MDPI | Splash screen | 320 x 480 | 160 | default.png |

## Localized splash screens

The Android and iOS platforms support using localized splash screen images, that is, displaying a different splash screen based on the user's language or locale.

### Android

For the Android platform, place the images in `res` subfolders suffixed with the [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) standard name in the `Resources/android/images` (Alloy: `app/assets/android/images)` directory. These folder names may also include the screen qualifiers for `density-`, `orientation-`, and ratio-specific resources. The localized splash screen images take precedence over non-localized splash screen images in the `Resources/android/images` (Alloy: `app/assets/android/images`) directory.

For example, suppose you have the following filesystem (classic app, for Alloy relatively to the `app/assets/android` directory):

* `Resources`

    * `android`

        * `images`

            * `res-en`

                * default.png

            * `res-es`

                * default.png

            * `res-fr-long-land-hdpi`

                * default.png

            * `res-long-land-hdpi`

                * `default.png`

In this example, both English and Spanish use one splash screen image to support all screen types. For French, the localized splash screen image is only used for high-density, long screens in landscape mode. The image in the `res-long-land-hdpi` folder is ignored for English, French, and Spanish.

### iOS

For the iOS platform, place your splash screen images in the individual language folders in the `i18n` (Alloy: `app/i18n`) directory. Name the files using the same naming convention as described in the [iOS graphic asset requirements and options section](#ios-graphic-asset-requirements-and-options).

For example, suppose you have the following filesystem:

* `i18n`

    * `en`

        * Default@2x.png

        * Default-568h@2x.png

        * Default-667h@2x.png

        * Default-Portrait-736h@3x.png

        * Default-Portrait-2436h@3x.png

    * `es`

        * `Default@2x.png`

        * `Default-568h@2x.png`

        * `Default-667h@2x.png`

        * `Default-Portrait-736h@3x.png`

        * `Default-Portrait-2436h@3x.png`

In this example, each iOS device has a unique splash screen image for English and Spanish. Add more languages like "es" for Spain for "de" for Germany.

## Density-specific Android icons

On Android, the `appicon.png` is referenced directly from the Android project and does not pass through Titanium. To use density specific versions of the appicon you will need to create a folder structure in the root of the app that looks something like this:

* `<app>/platform/android/res/drawable`

* `<app>/platform/android/res/drawable-hdpi`

As you can see, you'd place density-specific versions of the `appicon.png` in the respective folders. Additional information about directory naming and device characteristic qualifiers can be found in the Android documentation at [http://developer.android.com/guide/practices/screens\_support.html#qualifiers](http://developer.android.com/guide/practices/screens_support.html#qualifiers).

## Adding your iTunes artwork to your project

Adding iTunes artwork to your project gives your app a polished look when you are testing or deploying to end users. iTunes artwork is only used for Ad-Hoc builds. Do not include this file when distributing your application to the App Store. In order to get your application's icon to appear in iTunes there are a few simple steps to follow.

1. Create a 512 x 512px and 1024 x 1024px (Retina) version of your applications icon in PNG format.

2. Save the PNG file to your application `Resources/iphone` (Alloy: `app/assets/iphone`) folder as `iTunesArtwork.png` and `iTunesArtwork@2x.png`

3. Right-click the file in Studio and choose **rename**. Remove the **.png** extension from the filename, make it simply `iTunesArtwork` and `iTunesArtwork`.

4. Do a clean build of your project for device.

With those steps you should see your application icon show up in iTunes.

## References and further reading

* Additional information about resolution-specific and platform-specific images is covered in [Images and ImageView APIs](/guide/Titanium_SDK/Titanium_SDK_How-tos/Working_with_Media_APIs/Images_and_ImageView_APIs/)

* [Supporting multiple screen sizes in Android](http://developer.android.com/guide/practices/screens_support.html)

* [App Icons on iPhone, iPad and Apple Watch](https://developer.apple.com/library/content/qa/qa1686/_index.html)

* [iOS Design Themes & Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/)

## Summary

In this document, you learned how to set a custom icon and splash screen for your Titanium app. With this material covered, we move on to the final section of this chapter, which discusses how we deal with the platform specific UI components in a cross platform manner with Titanium.
