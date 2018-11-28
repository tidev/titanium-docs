---
breadcrumbLabel: ApplicationShortcuts
sidebar: auto
---

# Titanium.UI.iOS.ApplicationShortcuts

<ProxySummary/>

## Overview

3D Touch gives iOS 9 users an additional interaction dimension. On supported devices, people can quickly choose 
app-specific actions from the Home screen by pressing on the app icon. The pressing of an application shortcut
will then fire the `shortcutitemclick` <Titanium.App.iOS> event.

There are static and dynamic shortcuts to differentiate:
  * Static: Can be set in the `<ios>` section of the `tiapp.xml` before launching the app.
  * Dynamic: Can be set in the app to offer a dynamic behavior at runtime.

Here is an example how to create static application shortcuts in the `tiapp.xml`:

    <ti:app>
      ...
      <ios>
        <plist>  
          <dict>
            <key>UIApplicationShortcutItems</key>
            <array>
              <dict>
                <key>UIApplicationShortcutItemIconType</key>
                <string>UIApplicationShortcutIconTypeSearch</string>
                <key>UIApplicationShortcutItemTitle</key>
                <string>My title</string>
                <key>UIApplicationShortcutItemSubtitle</key>
                <string>My subtitle</string>
                <key>UIApplicationShortcutItemType</key>
                <string>my_identifier</string>
                <key>UIApplicationShortcutItemUserInfo</key>
                <dict/>
              </dict>
            </array>
          </dict>  
        </plist>  
      </ios>
      ...
    </ti:app>

Static shortcuts can be translated in the `i18n/<language>/app.xml` file. Dynamic shortcuts can be translated by using the
methods described [in the Wiki](https://wiki.appcelerator.org/display/guides2/Internationalization).

To use this feature make sure you have a 3D Touch compatible device running iOS 9 or later. To
check for the feature, use the <Titanium.UI.iOS.forceTouchSupported> property.
You cannot test 3D touch on the iOS simulator.

<ApiDocs/>
