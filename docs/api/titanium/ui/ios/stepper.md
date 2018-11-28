---
breadcrumbLabel: Stepper
sidebar: auto
---

# Titanium.UI.iOS.Stepper

<ProxySummary/>

## Overview

<table id="iOS Stepper">
  <tr>
    <td><img src="images/stepper/stepper.png" height="25" /></td>
    <td><img src="images/stepper/stepper_custom.png" height="25" /></td>
  </tr>
</table>

A Stepper displays its selected state while it is being pressed.
You can specify background images for each state on iOS.
Use the <Titanium.UI.iOS.createStepper> method or a **`<Stepper>`** Alloy element to create a stepper
(see the "Examples" section details).

* When assigning a custom image to the `backgroundImage` property, the image must be
partially or wholly transparent for the background color or background gradient to be visible.
* Similarly, for an assigned background gradient to show through, the `backgroundColor` may need to be
set to 'transparent'.

* Note that the stepper cannot be re-sized.

<ApiDocs/>
