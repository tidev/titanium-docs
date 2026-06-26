---
title: Titanium.XML.DOMImplementation
methods:
  - name: createDocument
    summary: >-
      Creates an <a href="/api/titanium/xml/document">Titanium.XML.Document</a>
      object of the specified type with its document element. Raises an
      exception if qualifiedName is malformed, contains an illegal character, or
      is inconsistent with namespaceURI. Also raises an exception if doctype has
      already been used with a different document.
    parameters:
      - name: namespaceURI
        type: String
        summary: The namespace URI of the document element to create.
      - name: qualifiedName
        type: String
        summary: The qualified name of the document element to be created.
      - name: doctype
        type: Titanium.XML.DocumentType
        summary: >-
          The type of document to be created or null. When doctype is not null,
          its Node.ownerDocument attribute is set to the document being created.
    returns:
      type: Titanium.XML.Document
      summary: A new <Titanium.XML.Document> object
  - name: createDocumentType
    summary: >-
      Creates an empty <a
      href="/api/titanium/xml/document-type">Titanium.XML.DocumentType</a> node.
      Entity declarations and notations are not made available. Entity reference
      expansions and default attribute additions do not occur. Raises an
      exception if qualifiedName is malformed or contains an illegal character.
    parameters:
      - name: qualifiedName
        type: String
        summary: The qualified name of the document type to be created.
      - name: publicId
        type: String
        summary: The external subset public identifier.
      - name: systemId
        type: String
        summary: The external subset system identifier.
    returns:
      type: Titanium.XML.DocumentType
      summary: >-
        A new <Titanium.XML.DocumentType> node with Node.ownerDocument set to
        null.
  - name: hasFeature
    summary: >-
      Test if the <a
      href="/api/titanium/xml/domimplementation">Titanium.XML.DOMImplementation</a>
      implements a specific feature.
    parameters:
      - name: feature
        type: String
        summary: >-
          The name of the feature to test (case-insensitive). The values used by
          DOM features are defined throughout the DOM Level 2 specifications and
          listed in the Conformance section. The name must be an XML name. To
          avoid possible conflicts, as a convention, names referring to features
          defined outside the DOM specification should be made unique by
          reversing the name of the Internet domain name of the person (or the
          organization that the person belongs to) who defines the feature,
          component by component, and using this as a prefix. For instance, the
          W3C SVG Working Group defines the feature &quot;org.w3c.dom.svg&quot;.
      - name: version
        type: String
        summary: >-
          This is the version number of the feature to test. In Level 2, the
          string can be either &quot;2.0&quot; or &quot;1.0&quot;. If the
          version is not specified, supporting any version of the feature causes
          the method to return true.
    returns:
      type: Boolean
      summary: >-
        true if the feature is implemented in the specified version, false
        otherwise.
---

# Titanium.XML.DOMImplementation

The [Titanium.XML.DOMImplementation](/api/titanium/xml/domimplementation) interface provides a number of methods for performing operations that are independent of any particular instance of the document object model.Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490) on Android and iOS.

**Extends:** `Titanium.Proxy` · **Since:** 1.8.0, 1.8.0, 1.8.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiMethods />

