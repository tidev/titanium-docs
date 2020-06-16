---
title: SDK Requirements JSON
weight: '60'
---

# SDK Requirements JSON

## Overview

When Studio starts up, it contacts a remote server to determine what versions of the Android and iOS SDKs must be installed in order to enable proper Titanium Development. Below, we detail the pieces of that file.

## Versioning

The versioning information follows OSGI conventions, so similar flexibility in defining version information is available here too.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>Definition</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Description</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>4.0, 4.4</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Version 4.0 to 4.4.X inclusive, but not including version 4.5.X</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>4.0, 4.4</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Version 4.0 to 4.3.X inclusive, but not including version 4.4.X</p></td></tr></tbody></table>

## Overall Structure

There are two top-level objects, once for android, one for ios. Underneath that we have separate entries for each platform. Note that we only have osx for ios, since the ios SDK is not available on any other platform.

```
{
  "android": {
    "macosx": {
    },
    "win32": {
    }
  },
  "ios": {
    "macosx": {
    }
  }
}
```

## Android SDKs

Android requires a number of different items to be installed. Due to complexities in the Titanium Mobile SDKs, we require both platform version 7 and platform version 8 to be installed simultaneously.

Structure:

* "android"

    * platform ("osx"/"win32")

        * requiredAddOns: array of strings, corresponding with Google add-on names

        * requiredSDKTools: array of integers, corresponding with Google SDK Tooling levels

        * requiredPlatformTools: array of integers, corresponding with Google Platform levels (2.1 == 7, 2.2 == 8, etc.)

        * requiredPlatforms: array of regular expression strings, corresponding with Google Platform levels

        * sdkURL: String to .zip file of latest SDK download location

        * jdkURL (Windows only): String to .zip file of latest JDK download installation

```
{
  "android": {
    "linux": {
      "requiredAddOns": [
        "addon_google_apis_google_inc_7"
      ],
      "requiredPlatformTools": "7",
      "requiredPlatforms": [
        "Android\\s*2\\.1.*"
      ],
      "requiredSDKTools": "13",
      "sdkURL":"http://dl.google.com/android/android-sdk_r13-linux_x86.tgz"
    },
    ...
  }
}
```

## iOS

iOS is a bit simpler, since we only need to verify one SDK version. Note how we use the version constraints here, not possible with Android above due to inconsistent version numbering (we use the regexes instead)

```
{
  "ios":{
    "macosx": {
      "requiredPlatforms": [
        "[4.0, 4.4)"
      ],
      "sdkURL": "http://itunes.apple.com/us/app/xcode/id448457090?mt=12#"
    }
  }
}
```

## Complete Example

A complete example of a JSON SDK requirements file.

```
{
  "android": {
    "linux": {
      "requiredAddOns": [
        "addon_google_apis_google_inc_7"
      ],
      "requiredPlatformTools": "7",
      "requiredPlatforms": [
        "Android\\s*2\\.1.*"
      ],
      "requiredSDKTools": "13",
      "sdkURL":"http://dl.google.com/android/android-sdk_r13-linux_x86.tgz"
    },
    "macosx": {
      "requiredAddOns": [
        "addon_google_apis_google_inc_7"
      ],
      "requiredPlatformTools": "7",
      "requiredPlatforms": [
        "Android\\s*2\\.1.*"
      ],
      "requiredSDKTools": "13",
      "sdkURL":"http://dl.google.com/android/android-sdk_r13-mac_x86.zip"
    },
    "win32": {
      "requiredAddOns": [
        "addon_google_apis_google_inc_7"
      ],
      "requiredPlatformTools": "7",
      "requiredPlatforms": [
        "Android\\s*2\\.1.*"
      ],
      "requiredSDKTools": "13",
      "sdkURL": "http://dl.google.com/android/android-sdk_r13-windows.zip",
      "jdkURL": "http://download.oracle.com/otn-pub/java/jdk/6u29-b11/jdk-6u29-windows-i586.exe"
    }
  },
  "ios": {
    "macosx": {
      "requiredPlatforms": [
        "[4.0, 4.4)"
      ],
      "sdkURL": "http://itunes.apple.com/us/app/xcode/id448457090?mt=12#"
    }
  }
}
```
