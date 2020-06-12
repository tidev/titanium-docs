# Titanium.UI.Android

<TypeHeader/>

## Examples

### Android Preferences Example

Create preferences interface for the application.

#### `app.js`
``` js
var button = Ti.UI.createButton({
  title:	'Click to Open Preferences'
});
button.addEventListener('click', function() {
  Ti.API.info('Current value for editText: ' + Ti.App.Properties.getString('editText'));
  Ti.UI.Android.openPreferences();
});
Ti.UI.currentWindow.add(button);
```

#### `platform/android/res/xml/preferences.xml`
``` xml
<?xml version="1.0" encoding="utf-8"?>
<PreferenceScreen xmlns:android="http://schemas.android.com/apk/res/android"
    android:title="Preferences">
  <PreferenceScreen
      android:title="Misc. Preferences"
      android:summary="Click to see more options">
    <EditTextPreference
      android:title="Edit Text Preference"
      android:summary="You may enter a string"
      android:defaultValue=""
      android:key="editText" />
  </PreferenceScreen>
  <PreferenceCategory android:title="Category One">
    <CheckBoxPreference
      android:title="CheckBox Preference"
      android:defaultValue="false"
      android:summary="You may enter a boolean"
      android:key="checkbox" />
    <RingtonePreference
      android:title="Ringtone Preference"
      android:summary="You may pick a ringtone"
      android:defaultValue=""
      android:key="ringtone" />
  </PreferenceCategory>
  <PreferenceCategory android:title="Category Two">
    <ListPreference
      android:title="List Preference"
      android:summary="You may chose from multiple choices"
      android:key="list" 
    android:entries="@array/listNames"
    android:entryValues="@array/listValues" 
    />
  </PreferenceCategory>
</PreferenceScreen>
```
    
#### `platform/android/res/values/array/array.xml`
``` xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <string-array name="listNames">
    <item>5 Minutes</item>
    <item>10 Minutes</item>
    <item>15 Minutes</item>
    <item>30 Minutes</item>
    <item>60 Minutes</item>
  </string-array>
  <string-array name="listValues">
    <item>5</item>
    <item>10</item>
    <item>15</item>
    <item>30</item>
    <item>60</item>
  </string-array>
</resources>
```

<ApiDocs/>
