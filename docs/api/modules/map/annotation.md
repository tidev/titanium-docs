---
editUrl: https://github.com/appcelerator-modules/ti.map/edit/master/apidoc/Annotation.yml
---
# Modules.Map.Annotation

<TypeHeader/>

## Overview

The `Annotation` object gives you low-level control over annotations that can be added to
[map view](Modules.Map.View). An annotation must have its `latitude` and `longitude`
properties set to appear on a map.

Use the <Modules.Map.createAnnotation> method to create an annotation.  Starting with Alloy
1.4.0, use the **`<Annotation>`** Alloy element to define one in XML markup.

An annotation can also have a title, a subtitle, and two inset buttons or views on the left
and right side of the title. All of these items are optional.

The controls on the left and right side of the annotation can be specified in one of two
ways:

* To display an image, set the [leftButton](Titanium.Map.Annotation.leftButton) or
  [rightButton](Titanium.Map.Annotation.rightButton) property to an image URL. (On
  iOS, you can also use a [SystemButton](Titanium.UI.iPhone.SystemButton) constant
  to use one of the native system button icons.)

* To add another type of view to the annotation, set the
  [leftView](Titanium.Map.Annotation.leftView) or
  [rightView](Titanium.Map.Annotation.rightView) property to a [View](Titanium.UI.View)
  object.

An annotation has two states: selected and deselected. A deselected annotation
is marked by a pin image. When the user selects the pin, the full annotation is
displayed.

You can specify a custom image for the map pin by setting the
[image](Modules.Map.Annotation.image) property.

When the user clicks on an annotation, a `click` event is generated.

On iOS, You can add a click event listener to a specific annotation, or add a
click event listener to the map view to receive click events from all annotations
on the map.

On Android, you must add the click event listener to the map view; the annotation
itself does not generate these events.

<ApiDocs/>
