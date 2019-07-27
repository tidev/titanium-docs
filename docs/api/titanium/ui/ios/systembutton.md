# Titanium.UI.iOS.SystemButton

<TypeHeader/>

## Overview

Most of these constants are used with the
[Button.systemButton](Titanium.UI.Button.systemButton) property to define a standard
iOS system buttons for use in navigation bars and toolbars.

See <Titanium.UI.Button> for more information on the `systemButton` property, including details
on where system buttons can be used. In an Alloy application you can omit the `Ti.UI.iOS.SystemButton`
namespace when assigning a value to the `<Button>` element's `systemButton` attribute,
for example:

    <Button systemButton="CAMERA"/>
    <!-- Instead of -->
    <Button systemButton="Titanium.UI.iOS.SystemButton.CAMERA"/>

A few of these constants are used with [Button.style](Titanium.UI.Button.style) to
create standard iOS buttons that can be used in other places, including table view rows.
Note: Starting at Titanium SDK 5.0, all icons have are automatically sized in the native behavior and are not distorted any more. These standard button types are:

* [CONTACT_ADD](Titanium.UI.iOS.SystemButton.CONTACT_ADD)
* [DISCLOSURE](Titanium.UI.iOS.SystemButton.DISCLOSURE)
* [INFO_DARK](Titanium.UI.iOS.SystemButton.INFO_DARK)
* [INFO_LIGHT](Titanium.UI.iOS.SystemButton.INFO_LIGHT)

See Apple's
[iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/) in the iOS Developer Library for details on the proper usage of iOS standard buttons and icons.

<ApiDocs/>
