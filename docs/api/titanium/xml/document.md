---
title: Titanium.XML.Document
properties:
  - name: doctype
    type: Titanium.XML.DocumentType
    summary: >-
      An interface to the list of entities that are defined for the document,
      such as via a Document Type Definition (DTD).
    description: |
      <p>See note about Android and DTDs.</p>
  - name: documentElement
    type: Titanium.XML.Element
    summary: Root element of this document.
  - name: implementation
    type: Titanium.XML.DOMImplementation
    summary: >
      <a href="Titanium.XML.DOMImplementation">DOMImplementation</a> object
      associated with this<br>

      document.<br>
methods:
  - name: createAttribute
    summary: Creates an attribute with the given name.
    parameters:
      - name: name
        type: String
        summary: Name for the new attribute.
    returns:
      type: Titanium.XML.Attr
      summary: Attribute object, ready to be added to an element.
  - name: createAttributeNS
    summary: Creates an attribute with the given name and namespace.
    parameters:
      - name: namespaceURI
        type: String
        summary: Namespace URI for the new attribute.
      - name: name
        type: String
        summary: Qualified name for the new attribute (can include a prefix).
    returns:
      type: Titanium.XML.Attr
      summary: Attribute object, ready to be added to an element.
  - name: createCDATASection
    summary: >-
      Creates and returns a <a
      href="Titanium.XML.CDATASection">CDATASection</a>.
    parameters:
      - name: data
        type: String
        summary: String data to go into the CDATA section.
    returns:
      type: Titanium.XML.CDATASection
      summary: CDATA section with the given data, ready to be added to an element.
  - name: createComment
    summary: >-
      Creates a <a href="Titanium.XML.Comment">Comment</a> with the supplied
      string data.
    parameters:
      - name: data
        type: String
        summary: Comment text.
    returns:
      type: Titanium.XML.Comment
      summary: Comment object, ready to be appended to the DOM tree.
  - name: createDocumentFragment
    summary: >-
      Creates an empty <a
      href="Titanium.XML.DocumentFragment">DocumentFragment</a>.
    returns:
      type: Titanium.XML.DocumentFragment
      summary: The empty <Titanium.XML.DocumentFragment>.
  - name: createElement
    summary: Creates an element with the given tag name.
    parameters:
      - name: tagName
        type: String
        summary: Name for the created element.
    returns:
      type: Titanium.XML.Element
      summary: Newly created element.
  - name: createElementNS
    summary: Create a new element with the given namespace and name.
    parameters:
      - name: namespaceURI
        type: String
        summary: URI for the namespace the new element belongs to.
      - name: name
        type: String
        summary: Qualified for the new element (can include a prefix).
    returns:
      type: Titanium.XML.Element
      summary: New namespace-qualified element.
  - name: createEntityReference
    summary: >-
      Creates an <a href="Titanium.XML.EntityReference">EntityReference</a> with
      the given name.
    parameters:
      - name: name
        type: String
        summary: Name for the new entity reference.
    returns:
      type: Titanium.XML.EntityReference
      summary: Newly-created entity reference.
  - name: createProcessingInstruction
    summary: Creates a processing instruction for inserting into the DOM tree.
    parameters:
      - name: target
        type: String
        summary: Target part for the processing instruction.
      - name: data
        type: String
        summary: Data for the processing instruction node.
    returns:
      type: Titanium.XML.ProcessingInstruction
      summary: New processing instruction.
  - name: createTextNode
    summary: Creates a text node.
    parameters:
      - name: data
        type: String
        summary: The string value for the text node.
    returns:
      type: Titanium.XML.Text
      summary: Newly-created text node.
  - name: getElementById
    summary: >-
      Returns an <a href="Titanium.XML.Element">Element</a> that has an ID
      attribute with the given value.
    parameters:
      - name: elementId
        type: String
        summary: A unique ID value for an element to search for.
    returns:
      type: Titanium.XML.Element
      summary: The Element matching the given ID, if any.
  - name: getElementsByTagName
    summary: Returns a node list of elements in the document which have the given tag.
    parameters:
      - name: tagname
        type: String
        summary: Tag name to search for.
    returns:
      type: Titanium.XML.NodeList
      summary: List of elements in the document which have the given tag name.
  - name: getElementsByTagNameNS
    summary: >-
      Returns a node list of elements in the document which belong to the given
      namespace and have the given tag name.
    parameters:
      - name: namespaceURI
        type: String
        summary: Namespace URI used for matching elements.
      - name: localname
        type: String
        summary: Tag name to search for.
    returns:
      type: Titanium.XML.NodeList
      summary: >-
        List of elements in the document which belong to the given namespace and
        have the given tag name.
  - name: importNode
    summary: >
      Imports a node from another document to this document,<br>

      without altering or removing the source node from the original
      document.<br>
    description: >
      <p>This method creates a new copy of the source node, ready to be inserted
      into<br>

      this document.  The returned node has an <a
      href="Titanium.XML.Node.ownerDocument">ownerDocument</a><br>

      property that points to this document, but its <a
      href="Titanium.XML.Node.parentNode">parentNode</a><br>

      property is <code>null</code>, since it has not been inserted into the
      current document.</p>

      <p>For more on node ownership, see <a
      href="https://www.w3.org/DOM/faq.html#ownerdoc">ownerDocument
      issues</a><br>

      in the W3C DOM FAQ.</p>
    parameters:
      - name: importedNode
        type: Titanium.XML.Node
        summary: Node to import.
      - name: deep
        type: Boolean
        summary: >-
          If true, recursively import the subtree under the specified node; if
          false, import only the node itself.
    returns:
      type: Titanium.XML.Node
      summary: Imported node that belongs now to this document.
---

# Titanium.XML.Document

The DOM Document returned from [Titanium.XML.parseString](/api/titanium/xml).

Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#i-Document) on
Android and iOS.

As of version 3.1, Android does not truly support DTDs.  A document with a DTD can be
parsed, however it is not validated, its default attributes are not be automatically
added into the DOM tree, and so on.

This has been reported as [Android Issue #7395](http://code.google.com/p/android/issues/detail?id=7395).


**Extends:** `Titanium.XML.Node` · **Since:** 0.9, 0.9, 0.9, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

