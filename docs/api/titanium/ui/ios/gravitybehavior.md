---
breadcrumbLabel: GravityBehavior
sidebar: auto
---

# Titanium.UI.iOS.GravityBehavior

<ProxySummary/>

## Overview

A gravity behavior configures the gravity vector of one or more items. To define a gravity
behavior:

  1. Use the [createGravityBehavior](Titanium.UI.iOS.createGravityBehavior) method to create and define the behavior.
  2. To define a gravity vector, either set the
     [angle](Titanium.UI.iOS.GravityBehavior.angle) and
     [magnitude](Titanium.UI.iOS.GravityBehavior.magnitude) properties, or set the
     [gravityDirection](Titanium.UI.iOS.GravityBehavior.gravityDirection) property.
  3. Use the [addItem](Titanium.UI.iOS.GravityBehavior.addItem) method to add items to the behavior.
  4. Add the behavior to an [Animator object](Titanium.UI.iOS.Animator).

You can only define one gravity behavior per animator.

<ApiDocs/>
