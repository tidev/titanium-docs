---
title: Adhere to the iOS 17+ Privacy Requirements
weight: '140'
---

# Adhere to the iOS 17+ Privacy Requirements

## Overview

In iOS 17, Apple added some new requirements to protect users from being targeted by finger-printing, a technique
to uniquely identify a device even after a reinstall. Bad players used several APIs that are now being flagged when used.

There are currently five categories that are flagged:

- **File timestamp APIs**: APIs around file system monitoring, e.g. timestamps.
- **System boot time APIs**: APIs around uptime of the device.
- **Disk space APIs**: APIs about the remaining space on the device.
- **Active keyboard APIs**: APIs about active input modes.
- **User defaults APIs**: APIs around storing key-value data across app launches.

Some of the APIs used in Titanium are affected by these changes, e.g. `Ti.Filesystem.File.createdAt` and `Ti.App.Properties` / `Ti.App.iOS.UserDefaults`.
When using these APIs, you need to declare the reason(s) for using them inside a new `PrivacyInfo.xcprivacy` file that can be edited inside Xcode.

## Required Steps

### Existing Apps

For existing apps, you can use the default `PrivacyInfo.xcprivacy`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
      <key>NSPrivacyAccessedAPITypes</key>
      <array>
          <dict>
              <key>NSPrivacyAccessedAPITypeReasons</key>
              <array>
                  <string>AC6B.1</string>
              </array>
              <key>NSPrivacyAccessedAPIType</key>
              <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
          </dict>
      </array>
  </dict>
</plist>
```
and place them into the following folder:
- Alloy apps: app/assets/iphone/
- Classic apps: Resources/iphone/

That's it! The Titanium build does the rest for you.

### New Apps

For new apps built with Titanium SDK 12.4.0 and later, the default PrivacyInfo.xcprivacy file is generated automatically for you.

## More Details

- [Apple: Privacy manifest files](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files?language=objc)
- [Apple: Describing use of required reason API](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)
