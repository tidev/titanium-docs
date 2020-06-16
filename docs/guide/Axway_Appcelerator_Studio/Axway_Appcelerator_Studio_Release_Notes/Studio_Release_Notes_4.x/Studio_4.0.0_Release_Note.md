---
title: Studio 4.0.0 - 21 May 2015
weight: '260'
---

# Studio 4.0.0 - 21 May 2015

Studio 4.0.0 is a feature release of Studio, introducing a number of new features, improvements, and bug fixes. See the [full list of issues addressed in Release 4.0.0](https://jira.appcelerator.org/issues/?filter=16719).

As of this release, Studio 3.x will not be supported one calendar year from 4.0.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

* Integration with the Appcelerator CLI.

* New installers for OS X and Windows with silent installation capabilities, and prerequisite detection and installation, as well as a new UI for the OS X installer. For details, see [Setting up Studio: Installing Studio](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Setting_up_Studio/#installingstudioInstallingStudio).

* Update Eclipse base from 4.3 (Kepler) to 4.4 (Lunar).

* Update content assist in Alloy to suggest:

    * `<ActionBar/>` element as child of a `<TabGroup/>` or `<Window/>` element

    * `<AndroidView/>` element as a child of a `<AlertDialog/>` element

    * `Titanium.Andriod.ActionBar` properties as attributes in the `<Menu/>` element

    * `<FixedSpace/>` as a shorthand for `<Button systemButton=“Ti.UI.iPhone.SystemButton.FIXED_SPACE>`

    * <KeyboardToolbar/> element as a child of a <TextArea/> element

    * `<LeftNavButtons/>` and `<RightNavButtons/>` as a child of a `<Window/>` element

    * Shorthand notation for `Ti.UI.KEYBOARD_*` and `Ti.UI.RETURNKEY_*` constants

* Add hyperlink detector to jump from i18n translation keys in JavaScript properties, TSS attributes, XML node text and XML localized attributes, such as `titleid`, to their definition in `strings.xml` files. In an Alloy JavaScript, TSS or XML file, hold the **Command** key for Macs or **Control** key for Linux and Windows, then hover over a localized function with an i18n translation key. The localized function turns into a hyperlink. Click the hyperlink to jump to the entry in the `i18n/en/strings.xml` file. You can also click on the i18n translation key and hit the **F3** key. Previously, this feature was only supported with the localization functions in the XML files.

## Known issues

### Mobile web application does not launch in the browser

After building a mobile web application in Studio, Studio does not launch the application in a browser ([TISTUD-7428](https://jira.appcelerator.org/browse/TISTUD-7428)). To workaround this issue, create your own web server to launch the application. Instructions will be available in the linked ticket.
