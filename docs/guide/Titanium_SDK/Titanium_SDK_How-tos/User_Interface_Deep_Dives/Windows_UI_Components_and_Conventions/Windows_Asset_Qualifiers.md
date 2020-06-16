---
title: Windows Asset Qualifiers
weight: '10'
---

# Windows Asset Qualifiers

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::
::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

## Introduction

Windows Phone OS and Windows OS have a set of qualifiers you can use to select which assets to use based on screen size, language, region, theme, etc. The qualifiers can either be used as a name for a folder or may be included in the name of the file. If you use the qualifier as part of the filename, place the qualifier between the name and extension, for example, `filename.qualifier.ext`. You may combine qualifiers by concatenating them together with an underscore (`_`). In your project, reference the files without the qualifiers.

::: warning ⚠️ Warning
Not all qualifiers are discussed in this topic, such as home region, direction layout, etc. For a complete list of qualifiers, refer to the [Windows Dev Center: How to name resources using qualifiers](https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh965324.aspx).
:::

## Scale

Use the qualifiers below to support devices with different DPIs or screen resolutions. The scaling is based on the logical density factor returned by the device. The Windows Phone DPI column is an approximate value.

| Qualifier | Logical Density Factor | Windows Phone DPI | Windows Store Resolution | Notes |
| --- | --- | --- | --- | --- |
| scale-100 | 1.0 | Up to ~96 | At least 1024x768 |  |
| scale-140 | 1.4 | Up to ~134 (WVGA emulator) | At least 1440x1080 |  |
| scale-180 | 1.8 | Up to ~172 (720p emulator) | At least 1920x1440 |  |
| scale-240 | 2.4 | Up to ~230 (WXGA and 1080p emulators) | N/A | Windows Phone OS 8.1 only |

Contrast

Windows provides a high contrast theme as an accessibility feature. Use the following qualifiers to select an asset based on the high contrast theme:

| Qualifier | Use | Notes |
| --- | --- | --- |
| `contrast_standard` | No contrast theme selected. |  |
| `contrast_high` | High contrast theme selected. |  |
| `contrast_black` | High Contrast Black theme selected. | Only available for Windows OS |
| `contrast_white` | High Contrast White theme selected. | Only available for Windows OS |

**To change the theme**:

| Windows Phone | Windows Tablet |
| --- | --- |
| 1. Open **Settings**<br />    <br />2. Tap **ease of access**<br />    <br />3. Turn the **High contrast** switch on or off | 1. Open **PC Settings**<br />    <br />2. Click **Ease of Access**<br />    <br />3. Click **High contrast**<br />    <br />4. Select a theme from the drop-down |

## Language

For the language qualifiers, the notation differs if you place them in a folder or add the qualifier to the filename.

* For folders, name the folder using the [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) standard and optionally with the country's [ISO 3166-1](https://en.wikipedia.org/?title=ISO_3166-1) Alpha-2 code, for example, place assets in either `app/assets/windows/en-US` or `Resources/windows/en-US`.

* For the file name, add the `lang-` qualifier with the [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) standard and optionally with the country's [ISO 3166-1](https://en.wikipedia.org/?title=ISO_3166-1) Alpha-2 code, for example, `name.lang-en-US.png`.

**To change the language:**

| Windows Phone | Windows Tablet |
| --- | --- |
| 1. Open **Settings**<br />    <br />2. Tap **language**<br />    <br />3. If the language is present in the list:<br />    <br />    1. Tap and hold the language you want to use and select **move up** until it is at the top<br />        <br />    2. Tap **restart phone**<br />        <br />4. If the language is not present in the list:<br />    <br />    1. Tap **+ add language**<br />        <br />    2. Select the langague you want to use<br />        <br />    3. Tap the checkmark button<br />        <br />    4. You may be prompted to download and install the language pack. Tap **OK**.<br />        <br />    5. Tap **restart phone**. | 1. Open **PC Settings**<br />    <br />2. Click **Time and language**<br />    <br />3. Click **Region and language**<br />    <br />4. If the language is present:<br />    <br />    1. Click the language<br />        <br />    2. Click **Set as primary**<br />        <br />5. If the language is not present:<br />    <br />    1. Click **\+ Add a language**<br />        <br />    2. Select the language you want to use<br />        <br />        1. If there is a status message by the language, when the status of the language says, "Language pack available," click the language.<br />            <br />        2. Click **Options**<br />            <br />        3. Click **Download** to download and install the language pack<br />            <br />    3. Click the language<br />        <br />    4. Click **Set as primary**<br />        <br />6. You will need to log out and sign in to display the new language |

## Example

A crazy technical writer decides to arrange the assets using the folders and filenames as shown below. Note that this example is to show the different ways to combine qualifiers. Do not structure your project this way.

```
app
└── assets
    └── windows
        ├── Image.lang-fr-CA_scale-100.png
        ├── Image.lang-fr-FR.png
        ├── Image.png
        ├── en-US
        │   ├── scale-100
        │   │   └── Image.png
        │   ├── scale-140
        │   │   └── Image.png
        │   ├── scale-180
        │   │   └── Image.png
        │   └── scale-240
        │       └── Image.png
        └── en-US_contrast_high
            └── Image.png
```

Each image file can be referenced by just using the filename `Image.png`.

```
// Reference the image without any of the qualifiers and the windows platform directory
imageView.image = 'Image.png';
```

The qualifiers tell Windows which image file to use.

| Image File and Path | Use |
| --- | --- |
| `./Image.lang-fr-CA_scale-100.png` | Canadian French for a device with a 1.0 scale factor |
| `./Image.lang-fr-FR.png` | French French |
| `./Image.png` | Default image |
| `./en-US/scale-100/Image.png` | American English for a device with a 1.0 scale factor |
| `./en-US/scale-140/Image.png` | American English for a device with a 1.4 scale factor |
| `./en-US/scale-180/Image.png` | American English for a device with a 1.8 scale factor |
| `./en-US/scale-240/Image.png` | American English for a device with a 2.4 scale factor |
| `./en_contrast_high/Image.png` | English with a high contrast theme |
