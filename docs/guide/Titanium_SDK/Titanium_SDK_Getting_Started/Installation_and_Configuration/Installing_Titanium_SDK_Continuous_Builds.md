---
title: Installing Titanium SDK Continuous Builds
weight: '40'
---

# Installing Titanium SDK Continuous Builds

## Summary

To take advantage of bleeding edge functionality and the most recent bug fixes to the Titanium SDKs, without waiting for an official release, you can manually download and install a **Continuous Integration Build** (also known as _CI Build_ or _Continuous Build_). Continuous Builds are packages compiled and published automatically when [Titanium's open source repository](https://github.com/tidev/titanium_mobile) has received a new code commit.

## Obtaining the build

You can download the latest continuous builds from [https://downloads.titaniumsdk.com/builds](https://downloads.titaniumsdk.com/builds).

## Installing the build

### Titanium CLI install

To install a Titanium SDK using the `ti` cli, follow these steps presented on the page. The command will look like this `ti sdk install --branch master 11.1.0.v20220818220138`.

### Manual install

To manually install a Titanium SDK, follow these steps:

* Extract the SDK archive file

* Move the versioned directory, for example named in the format 6.0.0.v20160702162201, into your Titanium installation folder, which is contingent on your platform, as follows:

| Operating System | Target Platform Type | Local Path |
| --- | --- | --- |
| OS X (Pre-Lion) | Mobile | `/Library/Application Support/Titanium` |
| OS X (Lion+) | Mobile | `~/Library/Application Support/Titanium` |
| Windows 7+ | Mobile | `%ProgramData%\Titanium\mobilesdk\win32` |
| Windows XP | Mobile | `C:\Documents and Settings\All Users\Application Data\Titanium` |


## SDK archive file structure

Especially in corporate environments, it may be necessary to compile Titanium SDKs and make them available on a server. The SDK file structure follows this convention:

```
.zip root
|--mobilesdk
   |-- osx | linux | win32
      |-- VERSION.NUMBER
```

This must be archived as `mobilesdk-VERSION.NUMBER-OS.zip`.
