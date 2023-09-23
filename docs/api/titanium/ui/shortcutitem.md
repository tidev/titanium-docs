---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ShortcutItem.yml
---
# Titanium.UI.ShortcutItem

<TypeHeader/>

## Overview

Allows the creation of dynamic application shortcut items which can be set in the app to 
offer a dynamic behavior at runtime.

Use the <Titanium.UI.createShortcutItem> method to create a shortcut item and pass it to
the <Titanium.UI.Shortcut.add> method to add it to the application.

### Android Static Shortcuts
Google documents how to add static shortcuts
[here](https://developer.android.com/guide/topics/ui/shortcuts/creating-shortcuts#static).

In the `tiapp.xml` file, you will need to add a shortcuts `<meta-data/>` element to your main activity.
``` xml
<ti:app>
    <android>
        <manifest>
            <application>
                <activity android:name=".<Yourapplicationname>Activity">
                    <intent-filter>
                        <action android:name="android.intent.action.MAIN"/>
                        <category android:name="android.intent.category.LAUNCHER"/>
                    </intent-filter>
                    <meta-data android:name="android.app.shortcuts" android:resource="@xml/shortcuts"/>
                </activity>
            </application>
        </manifest>
    </android>
</ti:app>
```

You will also need to create a `shortcuts.xml` file as shown below, defining all of the app's static shortcuts.
This file must reside in the Titanium project's `./platform/android/res/xml` folder. Note that XML attributes
`icon`, `shortcutShortLabel`, `shortcutLongLabel`, and `shortcutDisabledMessage` must be defined as string
resources under the project's `i18n` folders or `./platform/android/res/values` folders.
Attributes `targetPackage` and `targetClass` need to be set to your project id and app name.
``` xml
<shortcuts xmlns:android="http://schemas.android.com/apk/res/android">
  <shortcut
    android:shortcutId="my_unique_string_id"
    android:enabled="true"
    android:icon="@drawable/my_shortcut_icon"
    android:shortcutShortLabel="@string/my_shortcut_short_label"
    android:shortcutLongLabel="@string/my_shortcut_long_label"
    android:shortcutDisabledMessage="@string/my_shortcut_disabled_message">
    <intent
      android:action="android.intent.action.VIEW"
      android:targetPackage="<id_from_tiapp_xml>"
      android:targetClass="<id_from_tiapp_xml>.<Yourapplicationname>Activity" />
    <categories android:name="android.shortcut.conversation" />
  </shortcut>
  <!-- Add more shortcuts here. -->
</shortcuts>
```

### iOS Static Shortcuts
Static shortcut items can be set in the `<ios>` section of the `tiapp.xml` before launching the app.

Here is an example how to create static application shortcuts in the `tiapp.xml`:
``` xml
<ti:app>
    <!-- ... -->
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
    <!-- ... -->
</ti:app>
```
Static shortcuts can be translated in the `i18n/<language>/app.xml` file. Dynamic shortcuts can be translated by using the
methods described in the Wiki.

<ApiDocs/>
