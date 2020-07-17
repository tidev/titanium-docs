# Titanium.UI.ShortcutItem

<TypeHeader/>

## Overview

Allows the creation of dynamic application shortcut items which can be set in the app to 
offer a dynamic behavior at runtime.

Use the <Titanium.UI.createShortcutItem> method to create a shortcut
and <Titanium.UI.createShortcut> to manage shortcuts.

### iOS static shortcuts
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
methods described [in the Wiki](https://wiki.appcelerator.org/display/guides2/Internationalization).

<ApiDocs/>
