# Titanium.XML.Document

<TypeHeader/>

## Overview

Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#i-Document) on
Android and iOS.

As of version 3.1, Android does not truly support DTDs.  A document with a DTD can be
parsed, however it is not validated, its default attributes are not be automatically
added into the DOM tree, and so on.

This has been reported as [Android Issue #7395](http://code.google.com/p/android/issues/detail?id=7395).

<ApiDocs/>
