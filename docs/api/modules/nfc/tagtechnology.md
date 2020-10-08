---
editUrl: https://github.com/appcelerator-modules/ti.nfc/edit/master/apidoc/TagTechnology.yml
---
# Modules.Nfc.TagTechnology

<TypeHeader/>

## Overview

NFC tags are based on a number of independently developed technologies and offer a wide range of
capabilities. The TagTechnology proxies provide access to these different technologies and capabilities.
The TagTechnology proxy is the base type for more type-specific tag technologies. You will
work with the type-specific tag technology proxies which provide capabilities for each tag technology.

Use one of the <Modules.Nfc.createTagTechnologyIsoDep>, <Modules.Nfc.createTagTechnologyMifareClassic>,
<Modules.Nfc.createTagTechnologyMifareUltralight>, <Modules.Nfc.createTagTechnologyNdefFormatable>,
<Modules.Nfc.createTagTechnologyNdef>, <Modules.Nfc.createTagTechnologyNfcA>,
<Modules.Nfc.createTagTechnologyNfcB>, <Modules.Nfc.createTagTechnologyNfcF>, <Modules.Nfc.createTagTechnologyNfcV>
method variants to create a tag technology proxy.

See also:
[TagTechnology](http://developer.android.com/reference/android/nfc/tech/TagTechnology.html)

## Examples

### Write Ndef Tag

This example uses the TECH_NDEF tag technology to write a <Modules.Nfc.NdefMessage> message to a tag.

``` javascript
var tech = nfc.createTagTechnologyNdef({
    tag: scannedTag
});

if (!tech.isValid()) {
    alert("Failed to create Ndef tag type");
    return;
}

// Attempt to write an Ndef record to the tag
try {
    tech.connect();

    // It's possible that the tag is not writable, so we need to check first.
    if (!tech.isWritable()) {
        alert ("Tag is not writable");
    } else {
        // Create a new message to write to the tag
        var date = new Date();
        var textRecord = nfc.createNdefRecordText({
            text: "Titanium NFC module. Tag updated on " + date.toLocaleString() + "!!!"
        });
        var msg = nfc.createNdefMessage({
            records: [ textRecord ]
        });
    
        // Write to the tag
        tech.writeNdefMessage(msg);
    }
} catch (e) {
    alert("Error: " + e.message);
} finally {
    if (tech.isConnected()) {
        tech.close();
    }
}
```

<ApiDocs/>
