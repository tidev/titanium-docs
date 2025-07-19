---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ListItem.yml
---
# RowActionType

<TypeHeader/>

## Overview

Edit actions can be used to add contextual buttons to your list items / table view rows. The configuration of
this API is the same for list items (if you use <Titanium.UI.ListView>) and table view rows (if you use <Titanium.UI.TableView).

But please note that the trigger to activate these edit actions can defer based on the API you're integrating the edit actions:

*List Views*:
By default when a ListItem has [canEdit](Titanium.UI.ListItem.canEdit) set to `true`, a left swipe on the the row presens the localized 'Delete' button.
This object lets developers define custom titles for editing actions supported on the row.
This object is used in conjunction with the [editActions](Titanium.UI.ListItem.editActions) property and
[editaction](Titanium.UI.ListView.editaction) event.

*Table Views*:
By default when a TableViewRow has [editable](Titanium.UI.TableViewRow.editable) set to `true`, a left swipe on the the row presens the localized 'Delete' button.
This object lets developers define custom titles for editing actions supported on the row.
This object is used in conjunction with the [editActions](Titanium.UI.TableViewRow.editActions) property and
[editaction](Titanium.UI.TableView.editaction) event. For table views, this property was added in Titanium SDK 12.4.0.

In addition, the new property "state" was added in 12.4.0 and can either equal "leading" or "trailing" to show them on a right swipe (leading)
or left swipe (trailing). If the "state" property is not set, it defaults to "trailing" for backwards compatibility.

<ApiDocs/>
