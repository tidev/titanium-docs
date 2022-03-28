---
title: Installing Titanium SDK Continuous Builds
weight: '40'
---

# Installing Titanium SDK Continuous Builds

## Summary

To take advantage of bleeding edge functionality and the most recent bug fixes to the Titanium SDKs, without waiting for an official release, you can manually download and install a **Continuous Integration Build** (also known as _CI Build_ or _Continuous Build_). Continuous Builds are packages compiled and published automatically when [Titanium's open source repository](https://github.com/tidev/titanium_mobile) has received a new code commit.

::: danger ❗️ Warning
Be aware that only **major** releases of any of our software are officially supported and therefore, by the same token, we cannot accept Jira tickets or investigate problems that result from using a Continuous Build. That said, you may find discussions and workarounds for them in our [Jira bug-tracking system](http://jira.appcelerator.org).
:::

## Obtaining the build

You can download the latest continuous builds from [http://builds.appcelerator.com](http://builds.appcelerator.com).

Use the drop-down menu at the top of the page to select between the existing development branches. The _master_ branch is the branch currently in active development, and will ultimately become a major release. You can determine the version number associated with this branch by hovering over one of the download links and inspecting the name of the file.

::: tip 💡 Hint
It's important to compare the SHA1 hash of the downloaded SDK archive with the one displayed on the download page, **before you attempt to install it**. Do not install the package if the SHA1 hashes don't match – this may indicate a corrupted package.

If you discover a corrupt package, simply download each previous day's release until you find one that is valid. There is no need to report it to us.
:::

## Installing the build

### Titanium CLI install

To install a Titanium SDK using the `ti` cli, follow these steps:

* Be sure to log in to the CLI if you are not already logged in (`ti login`)

* Run `ti sdk install -b master`

* The command above will install the latest CI build from `master` branch. You may substitute branch names seen at [http://builds.appcelerator.com](http://builds.appcelerator.com) to grab bugfix/maintenance CI builds. These are typically of the naming scheme `\d+_\d+_X,`i.e.`7_0_X`

* You can view additional command line options by executing:`ti sdk install -h`

### Studio install

To install a Titanium SDK using Studio, follow these steps:

* Using a browser, navigate the [http://builds.appcelerator.com](http://builds.appcelerator.com) website and choose the desired branch/release. Right click an SDK archive download link and copy its URL. Be sure to choose the correct zip for your host OS.

* From Studio, select the menu item, **Help** \> **Install Appcelerator SDK...**

* The **Install** dialog appears. Select **Install From URL**

* Paste the link into textbox, then click **Finish**

### Manual install

::: warning ⚠️ Warning
We strongly recommend that you use Studio or the CLI to manage SDKs. Please see the previous section.
:::

To manually install a Titanium SDK, follow these steps:

* Extract the SDK archive file

* Move the versioned directory, for example named in the format 6.0.0.v20160702162201, into your Titanium installation folder, which is contingent on your platform, as follows:

| Operating System | Target Platform Type | Local Path |
| --- | --- | --- |
| OS X (Pre-Lion) | Mobile | `/Library/Application Support/Titanium` |
| OS X (Lion+) | Mobile | `~/Library/Application Support/Titanium` |
| Windows 7+ | Mobile | `%ProgramData%\Titanium\mobilesdk\win32` |
| Windows XP | Mobile | `C:\Documents and Settings\All Users\Application Data\Titanium` |

* Restart Studio, open the project's `tiapp.xml` file, and select the new SDK from the SDK Version drop-down menu

## SDK archive file structure

Especially in corporate environments, it may be necessary to compile Titanium SDKs and make them available on a server. Be aware that Studio requires that the SDK file structure follows this convention:

```
.zip root
|--mobilesdk
   |-- osx | linux | win32
      |-- VERSION.NUMBER
```

This must be archived as `mobilesdk-VERSION.NUMBER-OS.zip`.
