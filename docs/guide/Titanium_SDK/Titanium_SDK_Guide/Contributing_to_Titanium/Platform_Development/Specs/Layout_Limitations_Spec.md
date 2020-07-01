---
title: Layout Limitations Spec
weight: '20'
---

# Layout Limitations Spec

This document provides information on layout limitations, sizes, and positioning.

## Layout limitations specification

### Definitions

**View Constrained Dimension** - a view has a dimension either fixed or SIZE.
**View Flexible Dimension** - a view has a dimension either percentage or FILL.
**Container Constrained Dimension** - a container has a dimension either fixed or relative to its parent such as percentage or FILL.
**Container Flexible Dimension** - a container has the SIZE dimension.

In these definition, for container (parent) view both _View_ and _Container_ definitions apply depending if the container is being layout as a child, or it layouts others.

## Size

### All Layouts

1. For a container with flexible height (_Container Flexible Dimension_), effective height of children with flexible height (_View Flexible Dimension_) is 0. In other words, the effective height of a container with flexible height is the sum heights of all its children with constrained height (_View Constrained Dimension_). A runtime warning should be issued for these child views.

2. For container with flexible width (_Container Flexible Dimension_), effective width of children with flexible width (_View Flexible Dimension_) is 0. In other words, the effective width of a container with flexible width is the sum widths of all its children with constrained width (_View Constrained Dimension_). A runtime warning should be issued for these child views.

### Vertical layout

For vertical container with constrained height (_Container Constrained Dimension_), only one child with FILL height is supported.
That child will occupy all the remaining vertical space of the container (container height minus heights of all other children).
Effective height for any other children with FILL height is 0. A runtime warning should be issued for these child views.

### Horizontal Layout

Horizontal layout has two modes: with wrap (default) and without wrap.

1. For horizontal non-wrapping container with constrained width (_Container Constrained Dimension_), only one child with FILL width is supported. That child will occupy all the remaining horizontal space of the container (container width minus widths of all other children). Effective width for any other children with FILL width is 0. A runtime warning should be issued for these child views.

2. No other restrictions for horizontal wrapping container with constrained width (_Container Constrained Dimension_).

### Absolute (composite) layout

No other restrictions regarding container/child view size.

## Positioning

### Vertical layout

Views are centered horizontally unless horizontal pins (left/right) specified.

### Horizontal layout

#### Without Wrap

For horizontal non-wrapping container, views are centered vertically unless vertical pins (top/bottom) specified. Vertical pins behave the same as they would in absolute layout. They are used for positioning, and can also be used to determine implicit height. Horizontal pins are used for padding only.

#### With Wrap

For horizontal wrapping container, views are centered vertically within individual layout rows. Both vertical and horizontal pins are used for padding. In the case where implicit height needs to be calculated by pins, it will follow the same precedence and behavior as the [UI Composite Layout Behavior Spec](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/UI_Composite_Layout_Behavior_Spec/).

### Absolute layout

Views are centered horizontally and vertically unless pins (left/right/top/bottom) specified.
