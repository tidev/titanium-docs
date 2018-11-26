---
breadcrumbLabel: Contacts
sidebar: auto
---

# Titanium.Contacts

<ProxySummary/>

## Overview

See examples for more information.

### iOS Platform Notes

On iOS, the contacts database may be modified by an external application, causing any `Person` or
`Group` objects you've retrieved to be out of sync with the database. The IDs of these objects are
not guaranteed to remain the same, so updating an object when it is out of sync may have
unpredictable results.

To avoid this, listen for the [reload](Titanium.Contacts.reload) event. When you receive a
`reload` event, you should assume that any existing `Person` or `Group` objects are invalid and
reload them from the `Contacts` module before modifying them.

See the examples for a sample use of the `reload` event.

If 'ABAddressBookErrorDomain error 0' occurs, it implies that you are not allowed to add or edit 
certain fields. Check your default account in the iOS settings under contacts. If it's not 'iCloud',
most likely it will not support fields such as alternateBirthday or socialProfile.

<ApiDocs/>
