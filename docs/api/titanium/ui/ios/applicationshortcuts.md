# Titanium.UI.iOS.ApplicationShortcuts

<TypeHeader/>

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

## Examples

### Full example (get shortcuts, add shortcuts, remove shortcuts, check shortcuts).

Ti.App.iOS.addEventListener("shortcutitemclick", function(e){
    Ti.API.info("shortcutitemclick Event Fired");
    Ti.API.info("event payload:" + JSON.stringify(e));
});

var win = Titanium.UI.createWindow({
    title:'Test', backgroundColor:'#fff', layout:"vertical"
});

var btn1 = Ti.UI.createButton({
    top: 50, height:45, title:"Add Contact Us Application Shortcut"
});
win.add(btn1);

btn1.addEventListener("click",function(){
    var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
    appShortcuts.addDynamicShortcut({
        itemtype:"contact_us",
        title:"Contact Us",
        subtitle:"Tap to reach us",
        icon: Ti.UI.iOS.SHORTCUT_ICON_TYPE_ADD,
        userInfo:{
            infoKey:"contact_us"
        }
    });
});

var btn2 = Ti.UI.createButton({
    top: 10, height:45, title:"Remove Contact Us Application Shortcut"
});
win.add(btn2);

btn2.addEventListener("click",function(){
    var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
    appShortcuts.removeDynamicShortcut("contact_us");
});

var btn3 = Ti.UI.createButton({
    top: 10, height:45, title:"Count Dynamic App Shortcuts"
});
win.add(btn3);

btn3.addEventListener("click",function(){
    var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
    var shortcuts = appShortcuts.listDynamicShortcuts();
    Ti.API.info("Dynamic App Shortcut count:" + shortcuts.length);
    Ti.API.info("Dynamic App Shortcut as JSON:" + JSON.stringify(shortcuts));
});

var btn4 = Ti.UI.createButton({
    top: 10, height:45, title:"Count Static App Shortcuts"
});
win.add(btn4);

btn4.addEventListener("click",function(){
    var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
    var shortcuts = appShortcuts.listStaticShortcuts();
    Ti.API.info("Static App Shortcut count:" + shortcuts.length);
    Ti.API.info("Static App Shortcut as JSON:" + JSON.stringify(shortcuts));
});

var btn5 = Ti.UI.createButton({
    top: 10, height:45, title:"Dynamic Shortcut Exists?"
});
win.add(btn5);

btn5.addEventListener("click",function(){
    var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
    var exists = appShortcuts.dynamicShortcutExists("contact_us");
    var msg = (exists) ? "Icon exists" : "Sorry isn't there";
    alert(msg);
});

var btn6 = Ti.UI.createButton({
    top: 10, height:45, title:"Remove All Dynamic Shortcuts"
});
win.add(btn6);

btn6.addEventListener("click",function(){
    var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
    appShortcuts.removeAllDynamicShortcuts();
});

var btn7 = Ti.UI.createButton({
    top: 10, height:45, title:"Get shortcut by itemtype \"contact_us\""
});
win.add(btn7);

btn7.addEventListener("click",function(){
    var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
    var shortcut = appShortcuts.getDynamicShortcut("contact_us");
    alert(shortcut);
});

win.open();

### Add a Titanium.Contact.Person as icon.

Example:

    Ti.App.iOS.addEventListener("shortcutitemclick", function(e){
        Ti.API.info("shortcutitemclick Event Fired");
        Ti.API.info("person:" + JSON.stringify(e.userInfo.person));
    });

    var win = Titanium.UI.createWindow({
        title:'Test', backgroundColor:'#fff', layout:"vertical"
    });

    var btn1 = Ti.UI.createButton({
        top: 50, height:45, title:"Add Ti.Contacts Application Shortcut"
    });
    win.add(btn1);

    btn1.addEventListener("click", function() {
        if(!Ti.Contacts.hasContactsPermissions()) {
            Ti.Contacts.requestContactsPermissions(function(e) {
                if(e.success) {
                    createShortcut();
                }
            })
        } else {
            createShortcut();
        }
    });

    var btn2 = Ti.UI.createButton({
        top: 10, height:45, title:"Remove Ti.Contacts Application Shortcut"
    });
    win.add(btn2);

    btn2.addEventListener("click", function(){
        var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
        appShortcuts.removeDynamicShortcut("contact_us");
    });

    function createShortcut() {
        Ti.Contacts.showContacts({
            selectedPerson: function(e) {
                var person = e.person;

                var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();
                appShortcuts.addDynamicShortcut({
                    itemtype:"contact_us",
                    title: person.fullName,
                    subtitle: "Tap to call",
                    icon: person,
                    userInfo: {
                        person: {
                            firstName: person.firstName,
                            lastName: person.lastName
                        }
                    }
                });
            }
        });
    }

    win.open();

<ApiDocs/>
