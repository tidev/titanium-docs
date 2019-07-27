# Titanium.XML.DocumentType

<TypeHeader/>

## Overview

This provides an interface to the list of entities that are defined for the document. Implements the
[DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-412266927) on Android and iOS.

As of version 3.1, Android still does not truly support DTDs.  A document with a DTD can be
parsed, however it is not validated, none of its default attributes will automatically be put
into the tree, etc.  [Google is aware of the issue](http://code.google.com/p/android/issues/detail?id=7395).

<ApiDocs/>
