---
title: Appcelerator CLI 7.1.0.RC - 22 July 2019
weight: '30'
---

# Appcelerator CLI 7.1.0.RC - 22 July 2019

Appcelerator CLI 7.1.0.RC is a minor release that includes new features, improvements, and bug fixes. This release also brings **full support for Node 10** to the Appcelerator CLI.

As of this release, CLI 7.0.x will not be supported six months (2020-01-22) from 7.1.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 7.1.0:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.14.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>API Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>3.2.13</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.1.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.2.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.1.3</p></td></tr></tbody></table>

## New features

* [ALOY-1316](https://jira.appcelerator.org/browse/ALOY-1316) - Support use of $.args.\* in any XML attribute or TSS property

    * Values passed in at creation of a view can now be used as values in TSS and XML. For example, if the **name** property was passed in at creation it can be used on a label like `<Label text="$.args.foo" />`

* [ALOY-1632](https://jira.appcelerator.org/browse/ALOY-1632) - Allow importing a custom template during alloy new

    * A custom template directory can be provided to the alloy new command `alloy new . /path/to/template`. This can also be done via the appc cli using the `--template` option on `appc new` command.

* [ALOY-1646](https://jira.appcelerator.org/browse/ALOY-1646) - Allow platform xml namespaces to be used with xml attributes in Alloy

    * Attributes set in XML can now be assigned per platform by using the platform name as a prefix. For example: `<Label ios:text="Hello iOS!" android:text="Hello Android!" />`

* [ALOY-1363](https://jira.appcelerator.org/browse/ALOY-1363) - Add support to set object properties in XML

    * Previously the only way to set object properties (like `font.fontFamily` for a Label) was to use TSS. You can now use dot.notation in XML. For example: `<Label font.fontFamily="Roboto">Hello</Label>`

## Improvements

* [ALOY-1505](https://jira.appcelerator.org/browse/ALOY-1505) - Add ability to pass cancel attribute to Option element for OptionDialog

    * Added ability to pass cancel attribute to `<Option>` element

* [ALOY-1612](https://jira.appcelerator.org/browse/ALOY-1612) - CLI: Be able to use Alloy source-maps in Safari Debugger / Chrome Dev-Tools

    * Debugging Alloy applications in Chrome (for Android) or Safari (for iOS) can now be performed on iOS

* [ALOY-1648](https://jira.appcelerator.org/browse/ALOY-1648) - Include BackboneJS v1.4.0

    * Updated BackboneJS to version 1.4.0

* [ALOY-1652](https://jira.appcelerator.org/browse/ALOY-1652) - CLI: Improve handling of missing directories and files in alloy new

    * When providing an invalid template directory via the `alloy new` command, it now provides better clarification as to what is missing

* [ALOY-1682](https://jira.appcelerator.org/browse/ALOY-1682) - Alloy: MomentJS upgrading to v2.24.0

    * Updated MomentJS to version 2.24.0

* [ALOY-1683](https://jira.appcelerator.org/browse/ALOY-1683) - Alloy: UnderscoreJS upgrading to v1.9.1

    * Updated UnderscoreJS to version 1.9.1

* [CLI-1346](https://jira.appcelerator.org/browse/CLI-1346) - Improve the CLI install flow

    * Improved install process to reduce CLI install time

* [CLI-1349](https://jira.appcelerator.org/browse/CLI-1349) - Support passing a custom template directory to alloy new command

    * Added support for passing a custom template directory to `alloy new` command

## Fixed issues

* [ALOY-1535](https://jira.appcelerator.org/browse/ALOY-1535) - iOS: Warning message thrown when using `<View>` in `<AlertDialog>` (Android-only)

* [ALOY-1653](https://jira.appcelerator.org/browse/ALOY-1653) - Runtime error on Android when using optiondialog and not declaring destructive or cancel properties

* [ALOY-1684](https://jira.appcelerator.org/browse/ALOY-1684) - Calling sort for a collection does not call the dataFunction as of backbone 1.1.2 and above

* [ALOY-1690](https://jira.appcelerator.org/browse/ALOY-1690) - Sourcemaps not being generated for files under lib

* [ALOY-1691](https://jira.appcelerator.org/browse/ALOY-1691) - Source maps reports incorrect "file" value"

* [CLI-1233](https://jira.appcelerator.org/browse/CLI-1233) - If you build appc-cli with NPM 3.X and Node 6.10.3, then you will get ""listener" argument must be a function"" when creating a mobile project

* [CLI-1330](https://jira.appcelerator.org/browse/CLI-1330) - appc use --prerelease -o json will try to download version json

* [CLI-1331](https://jira.appcelerator.org/browse/CLI-1331) - Prompting for project details during arrow app creation broken on Node 10 on Windows

* [CLI-1340](https://jira.appcelerator.org/browse/CLI-1340) - Login error when using Node 10 in Windows

## Known issues

* [ALOY-1696](https://jira.appcelerator.org/browse/ALOY-1696) - CLI: Unable to see project files in Chrome debugger on Windows

    * Debugging in Chrome on Windows does not resolve the project correctly. Workaround: use Studio to debug.
