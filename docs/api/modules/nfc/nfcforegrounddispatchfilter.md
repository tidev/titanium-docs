---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/NfcForegroundDispatchFilter.yml
---
# Modules.Nfc.NfcForegroundDispatchFilter

<TypeHeader/>

## Overview

The <Modules.Nfc.NfcAdapter.enableForegroundDispatch> method is used to give priority to the foreground activity when dispatching
a discovered tag to an application. This proxy is used to specify the intent, intent filters, and technology
lists used to filter the dispatched intents. This proxy automatically creates the required pending intent and
will create an intent for the current activity if one is not provided.

Use the <Modules.Nfc.createNfcForegroundDispatchFilter> method to create a foreground dispatch filter.

See also:
[enableForegroundDispatch](http://developer.android.com/reference/android/nfc/NfcAdapter.html#enableForegroundDispatch(android.app.Activity,%20android.app.PendingIntent,%20android.content.IntentFilter[],%20java.lang.String[][]))

## Examples

### Foreground Dispatch filter

This example creates a dispatch filter used to filter NDEF messages that are of mime type 'text/plain' or
URI from 'http://www.appcelerator.com'. Additionally, the filter will match tags with the specified
technologies. The dispatch filter is then used when calling the `enableForegroundDispatch` API of the
<Modules.Nfc.NfcAdapter> proxy.

``` javascript
dispatchFilter = nfc.createNfcForegroundDispatchFilter({
    intentFilters: [
        { action: nfc.ACTION_NDEF_DISCOVERED, mimeType: 'text/plain' },
        { action: nfc.ACTION_NDEF_DISCOVERED, scheme: 'http', host: 'www.appcelerator.com' }
    ],
    techLists: [
        [ "android.nfc.tech.NfcF", "android.nfc.tech.NfcA", "android.nfc.Ndef" ],
        [ "android.nfc.tech.Ndef" ],
        [ "android.nfc.tech.MifareClassic" ],
        [ "android.nfc.tech.NfcA" ]
    ]
});

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
```

<ApiDocs/>
