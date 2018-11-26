---
breadcrumbLabel: PreviewContext
sidebar: auto
---

# Titanium.UI.iOS.PreviewContext

<ProxySummary/>

## Overview

The PreviewContext is created by the [createPreviewContext](Titanium.UI.iOS.createPreviewContext) method. You must set
the `pop` and `preview` properties when creating a `PreviewContext` object.

Use this class to configure the previewing context which is displayed while "peeking" a view.

Note: This feature requires iOS 9 and a 3D-Touch capable device (such as iPhone 6S or iPhone 6S Plus).
You cannot test 3D touch on the iOS simulator.
To check if the current device supports 3D touch, use the [forceTouchSupported](Titanium.UI.iOS.forceTouchSupported)
property and consider using the `longpress` event to provide a fallback to your users on
non-3D-touch devices.

See also:

* [iOS Developer Library: Adopting 3D Touch on iPhone](https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/3DTouchAPIs.html)

<ApiDocs/>
