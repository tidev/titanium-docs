---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/NdefRecord.yml
---
# Modules.Nfc.NdefRecord

<TypeHeader/>

## Overview

**Android**:
The NDEF record is the base type for more type-specific NDEF records. You will generally
work with the type-specific NDEF records (e.g. NdefRecordText, NdefRecordUri, etc.) which have
more applicable properties for each type of record.

Use one of the <Modules.Nfc.createNdefRecordApplication>, <Modules.Nfc.createNdefRecordEmpty>, 
<Modules.Nfc.createNdefRecordExternal>, <Modules.Nfc.createNdefRecordMedia>, <Modules.Nfc.createNdefRecordSmartPoster>,
<Modules.Nfc.createNdefRecordText>, <Modules.Nfc.createNdefRecordUnknown>, or <Modules.Nfc.createNdefRecordUri> method 
variants to create an NDEF record.

**iOS**:
The NFC-functionality is available on iOS 11 and later. It currently only allows
to read specific NDEF-tags - writing tags is not supported by iOS so far.

See also:
[NdefRecord](http://developer.android.com/reference/android/nfc/NdefRecord.html)

<ApiDocs/>
