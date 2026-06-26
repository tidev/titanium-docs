---
title: Titanium.XML.Node
properties:
  - name: ELEMENT_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      an<br>

      <a href="Titanium.XML.Element">Element</a> node.<br>
  - name: ATTRIBUTE_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      an<br>

      <a href="Titanium.XML.Attr">Attr</a> node.<br>
  - name: TEXT_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.Text">Text</a> node.<br>
  - name: CDATA_SECTION_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.CDATASection">CDATASection</a> node.<br>
  - name: ENTITY_REFERENCE_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      an<br>

      <a href="Titanium.XML.EntityReference">EntityReference</a> node.<br>
  - name: ENTITY_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      an<br>

      <a href="Titanium.XML.Entity">Entity</a> node.<br>
  - name: PROCESSING_INSTRUCTION_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.ProcessingInstruction">ProcessingInstruction</a>
      node.<br>
  - name: COMMENT_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.Comment">Comment</a> node.<br>
  - name: DOCUMENT_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.Document">Document</a> node.<br>
  - name: DOCUMENT_TYPE_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.DocumentType">DocumentType</a> node.<br>
  - name: DOCUMENT_FRAGMENT_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.DocumentFragment">DocumentFragment</a> node.<br>
  - name: NOTATION_NODE
    type: Number
    summary: >
      Used with <a href="Titanium.XML.Node.nodeType">nodeType</a> to identify
      a<br>

      <a href="Titanium.XML.Notation">Notation</a> node.<br>
  - name: nodeName
    type: String
    summary: Name of this node.
    description: >
      <p>Certain node types have constant values defined by the DOM
      specification:</p>

      <ul>

      <li>Text node: <code>#text</code></li>

      <li>Comment node: <code>#comment</code></li>

      <li>CDATA section node: <code>#cdata-section</code></li>

      <li>Document node: <code>#document</code></li>

      <li>Document fragment node: <code>#document-fragment</code></li>

      </ul>
  - name: nodeValue
    type: String
    summary: Content (value) of this node.
    description: >
      <p>As defined in the DOM specification, the node value is always
      <code>null</code> for<br>

      Document, DocumentFragment, DocumentType, Element, Entity,
      EntityReference, and<br>

      Notation nodes.</p>
  - name: textContent
    type: String
    summary: Content (value) of all text nodes within this node.
    description: >
      <p>On Android, <code>textContent</code> is supported on <a
      href="Titanium.XML.Element">Element</a> and<br>

      <a href="Titanium.XML.Text">Text</a> nodes only.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: text
    type: String
    summary: |
      Content (value) of all text nodes within this node.<br>
    deprecated: true
    platforms:
      - iphone
      - ipad
      - macos
  - name: nodeType
    type: Number
    summary: >
      This node's type. One of <code>ELEMENT_NODE</code>,
      <code>ATTRIBUTE_NODE</code>, <code>TEXT_NODE</code>,
      <code>CDATA_SECTION_NODE</code>,<br>

      <code>ENTITY_REFERENCE_NODE</code>, <code>ENTITY_NODE</code>,
      <code>PROCESSING_INSTRUCTION_NODE</code>, <code>COMMENT_NODE</code>,<br>

      <code>DOCUMENT_NODE</code>, <code>DOCUMENT_TYPE_NODE</code>,
      <code>DOCUMENT_FRAGMENT_NODE</code>, <code>NOTATION_NODE</code>.<br>
  - name: parentNode
    type: Titanium.XML.Node
    summary: This node's parent node.
  - name: childNodes
    type: Titanium.XML.NodeList
    summary: >-
      A <a href="/api/titanium/xml/node-list">Titanium.XML.NodeList</a> of this
      node's children.
  - name: firstChild
    type: Titanium.XML.Node
    summary: This node's first child.
  - name: lastChild
    type: Titanium.XML.Node
    summary: This node's last child.
  - name: previousSibling
    type: Titanium.XML.Node
    summary: This node's previous sibling.
  - name: nextSibling
    type: Titanium.XML.Node
    summary: This node's next sibling.
  - name: attributes
    type: Titanium.XML.NamedNodeMap
    summary: A map of this node's attributes.
    description: >
      <p>As defined by the DOM specification, only <a
      href="Titanium.XML.Element">Element</a> nodes have attributes.<br>

      For all other node types, this property is always <code>null</code>.</p>
  - name: ownerDocument
    type: Titanium.XML.Document
    summary: This node's owning document.
    description: >
      <p>Note that a node always has an owning document, even if it is not part
      of the<br>

      document tree.</p>

      <p>For more on node ownership, see <a
      href="https://www.w3.org/DOM/faq.html#ownerdoc">ownerDocument
      issues</a><br>

      in the W3C DOM FAQ.</p>
  - name: namespaceURI
    type: String
    summary: Namespace URI of this node.
  - name: prefix
    type: String
    summary: Namespace prefix of this node.
    description: |
      <p>Read-only on iOS, read-write on other platforms.</p>
  - name: localName
    type: String
    summary: Local part of the qualified name of this node.
    description: >
      <p>The local part of the qualified name that comes after the colon. That
      is,<br>

      the name without the namespace prefix.</p>
methods:
  - name: appendChild
    summary: Appends the node <code>newChild</code> as a child of this node.
    description: >
      <p>On iOS, <code>appendChild</code> is supported on <a
      href="Titanium.XML.Element">Element</a><br>

      nodes <strong>only</strong>.</p>
    parameters:
      - name: newChild
        type: Titanium.XML.Node
        summary: New node to append.
    returns:
      type: Titanium.XML.Node
      summary: Newly-appended node.
  - name: cloneNode
    summary: Returns a duplicate of this node.
    parameters:
      - name: deep
        type: Boolean
        summary: Whether or not to perform a deep copy of this node.
    returns:
      type: Titanium.XML.Node
      summary: Cloned node.
  - name: hasAttributes
    summary: Returns <code>true</code> if this node has attributes.
    returns:
      type: Boolean
      summary: True if this node has attributes, false if it does not.
  - name: hasChildNodes
    summary: Returns <code>true</code> if this node has child nodes.
    returns:
      type: Boolean
      summary: True if this node has children, false if it does not.
  - name: insertBefore
    summary: >-
      Inserts the node <code>newChild</code> before the node
      <code>refChild</code>.
    description: >
      <p>On iOS, <code>insertBefore</code> is supported on <a
      href="Titanium.XML.Element">Element</a><br>

      nodes <strong>only</strong>.</p>
    parameters:
      - name: newChild
        type: Titanium.XML.Node
        summary: Node to insert.
      - name: refChild
        type: Titanium.XML.Node
        summary: Node to insert <code>newChild</code> before.
    returns:
      type: Titanium.XML.Node
      summary: The inserted node.
  - name: isSupported
    summary: Tests whether the DOM implementation supports a specific feature.
    parameters:
      - name: feature
        type: String
        summary: Name of the feature.
      - name: version
        type: String
        summary: Version number of the feature.
    returns:
      type: Boolean
      summary: True if the feature is supported, false if it is not.
  - name: normalize
    summary: Normalizes text and attribute nodes in this node's child hierarchy.
  - name: removeChild
    summary: Removes a child node from this node.
    description: >
      <p>On iOS, <code>removeChild</code> is supported on <a
      href="Titanium.XML.Element">Element</a><br>

      nodes <strong>only</strong>.</p>
    parameters:
      - name: oldChild
        type: Titanium.XML.Node
        summary: Node to remove.
    returns:
      type: Titanium.XML.Node
      summary: Node that was removed.
  - name: replaceChild
    summary: >-
      Replaces the node <code>oldChild</code> with the node
      <code>newChild</code>.
    description: >
      <p>On iOS, <code>replaceChild</code> is supported on <a
      href="Titanium.XML.Element">Element</a><br>

      nodes <strong>only</strong>.</p>
    parameters:
      - name: newChild
        type: Titanium.XML.Node
        summary: New node.
      - name: oldChild
        type: Titanium.XML.Node
        summary: Node being replaced.
    returns:
      type: Titanium.XML.Node
      summary: Node that was replaced.
---

# Titanium.XML.Node

A single node in the [Document](Titanium.XML.Document) tree.

Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247)
on Android and iOS.

Note that on iOS, only [Element](Titanium.XML.Element) nodes are mutable. This means
that the methods `appendChild`, `insertBefore`, `removeChild`, and
`replaceChild` only work on `Element` objects. If one of these methods is called on
another type of node, it throws an exception.


**Extends:** `Titanium.Proxy` · **Since:** 0.9, 0.9, 0.9, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

