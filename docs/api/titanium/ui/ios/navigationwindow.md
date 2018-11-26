---
breadcrumbLabel: NavigationWindow
sidebar: auto
---

# Titanium.UI.iOS.NavigationWindow

<ProxySummary/>

## Overview

You create a `NavigationWindow` with the [createNavigationWindow](Titanium.UI.iOS.createNavigationWindow) factory method, or
a `<NavigationWindow>` Alloy element.

All `NavigationWindow` objects must have at least one root window that cannot be removed. When
creating a `NavigationWindow` with the factory method, you must set its `window` property to the
root level window. Equivalently, in an Alloy application, insert a `<Window>` element as a child of the
`<NavigationWindow>` element. See examples below.

This object is not meant to be added to other windows. However, it can be used within a [Titanium.UI.iPad.SplitWindow](Titanium.UI.iPad.SplitWindow).

<ApiDocs/>
