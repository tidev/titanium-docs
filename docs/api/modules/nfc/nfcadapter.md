---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/NfcAdapter.yml
---
# Modules.Nfc.NfcAdapter

<TypeHeader/>

## Overview

The NFC adapter gives you access to the features of the NFC device. The NFC adapter proxy is always
associated with the activity that was the current activity when it was created. The NFC Adapter must
be created after the activity has been opened. You can use the window `open` event to know when the
activity has been opened.

Use the <Modules.Nfc.createNfcAdapter> method to create an NFC adapter.

See also:
[NfcAdapter](http://developer.android.com/reference/android/nfc/NfcAdapter.html)

## Examples

### Foreground Dispatch (Android)

This example uses foreground dispatch to receive NDEF messages only when the application is in the foreground.

``` javascript
// Create the NFC adapter to be associated with this activity. 
// There should only be ONE adapter created per activity.
nfcAdapter = nfc.createNfcAdapter({
    onNdefDiscovered: handleDiscovery,
    onTagDiscovered: handleDiscovery,
    onTechDiscovered: handleDiscovery
});

// It's possible that the device does not support NFC. Check it here
// before we go any further.
if (!nfcAdapter.isEnabled()) {
    alert('NFC is not enabled on this device');
    return;
}

// All tag scans are received by the activity as a new intent. Each
// scan intent needs to be passed to the nfc adapter for processing.
var act = Ti.Android.currentActivity;
act.addEventListener('newintent', function(e) {
    nfcAdapter.onNewIntent(e.intent);
});

// To enable NFC dispatching only while the application is in the foreground,
// the application must signal the module whenever the application state changes.
act.addEventListener('resume', function(e) {
    nfcAdapter.enableForegroundDispatch(dispatchFilter);
});
act.addEventListener('pause', function(e) {
    nfcAdapter.disableForegroundDispatch();
});

// This application is only interested in receiving NFC messages while
// in the foreground. So the dispatch filter must be defined to identify
// what types of NFC messages to receive.
dispatchFilter = nfc.createNfcForegroundDispatchFilter({
    intentFilters: [
        { action: nfc.ACTION_NDEF_DISCOVERED, mimeType: 'text/plain' },
        { action: nfc.ACTION_NDEF_DISCOVERED, scheme: 'http', host: 'www.appcelerator.com' }
    ],
    techLists: [
        [ "android.nfc.tech.NfcF" ],
        [ "android.nfc.tech.Ndef" ],
        [ "android.nfc.tech.MifareClassic" ],
        [ "android.nfc.tech.NfcA" ]
    ]
});
```

### Push Message (Android)

This example sets a default push message to send using Android Beam.

``` javascript
// Create the NFC adapter to be associated with this activity. 
// There should only be ONE adapter created per activity.
nfcAdapter = nfc.createNfcAdapter({});

// It's possible that the device does not support NFC. Check it here
// before we go any further.
if (!nfcAdapter.isNdefPushEnabled()) {
    alert('NFC is not enabled on this device');
    return;
}

// Set the default Ndef message to send when tapped
var textRecord = nfc.createNdefRecordText({
    text: "NDEF Push Sample"
});
var msg = nfc.createNdefMessage({
    records: [ textRecord ]
});
nfcAdapter.setNdefPushMessage(msg);
```

### Push Message Callback (Android)

This example uses the push message callback to dynamically create the NDEF message as needed.

``` javascript
// Create the NFC adapter to be associated with this activity. 
// There should only be ONE adapter created per activity.
nfcAdapter = nfc.createNfcAdapter({
    onPushMessage: function() {
        if (sendText) {
            ndefRecord = nfc.createNdefRecordText({
                text: "Hello"
            });
        } else {
            ndefRecord = nfc.createNdefRecordUri({
                uri: "http://www.appcelerator.com"
            });
        }
        return nfc.createNdefMessage({
            records: [
                ndefRecord 
            ]
        });
    }
});

// It's possible that the device does not support NFC. Check it here
// before we go any further.
if (!nfcAdapter.isEnabled()) {
    alert('NFC is not enabled on this device');
    return;
}
```

<ApiDocs/>
