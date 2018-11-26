---
breadcrumbLabel: Popover
sidebar: auto
---

# Titanium.UI.iPad.Popover

<ProxySummary/>

## Overview

A popover is created using the [createPopover](Titanium.UI.iPad.createPopover) method or **`<Popover>`** Alloy element.

Popovers are used to present information temporarily, but in a way that does not take over
the entire screen in the way that a modal view does. The popover content is layered on top of
the existing content in a special type of window. The popover remains visible until the user
taps outside of the popover window or it is explicitly dismissed.

Do not add top-level view containers, such as a `SplitWindow` or `TabGroup`, to a popover.
Adding top-level view containers may have unintended side effects. See the [contentView](Titanium.UI.iPad.Popover.contentView)
property for more information.

<ApiDocs/>
