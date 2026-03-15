---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/XML/Node.yml
---
# Titanium.XML.Node

<TypeHeader/>

## Overview

Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247)
on Android and iOS.

Note that on iOS, only [Element](Titanium.XML.Element) nodes are mutable. This means
that the methods `appendChild`, `insertBefore`, `removeChild`, and
`replaceChild` only work on `Element` objects. If one of these methods is called on
another type of node, it throws an exception.

<ApiDocs/>
