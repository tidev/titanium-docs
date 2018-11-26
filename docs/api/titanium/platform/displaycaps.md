---
breadcrumbLabel: DisplayCaps
sidebar: auto
---

# Titanium.Platform.DisplayCaps

<ProxySummary/>

## Overview

On iPhone and iPod devices with retina display, the `density` property is `high` and the `dpi` 
property is `320`. For other iPhone and iPod devices, `density` is `medium` and `dpi` is `160`.

On iPad devices with retina display, the `density` property is `high` and the `dpi` 
property is `260`. For other iPad devices, `density` is `medium` and `dpi` is `130`.

Note that Xcode versions prior to 4.3.1 do not have the correct tools to detect the iPad 3 
retina display. Apps must be built with Xcode 4.3.1 or later to detect iPad 3 retina display.

Note that the `displayCaps` property begins with a lowercase letter, which differentiates it 
from the `DisplayCaps` object that it returns. Refer to the example to understand how it should 
be called.

<ApiDocs/>
