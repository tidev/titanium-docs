---
title: Titanium.XML.Element
properties:
  - name: tagName
    type: String
    summary: The name of the element, as defined by its tag.
  - name: text
    type: String
    summary: Content (value) of all text nodes within this node.
    deprecated: true
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: textContent
    type: String
    summary: Content (value) of all text nodes within this node.
    description: >
      <p>On Android, <code>textContent</code> is supported on <a
      href="Titanium.XML.Element">Element</a> and<br>

      <a href="Titanium.XML.Text">Text</a> nodes only.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
methods:
  - name: getAttribute
    summary: Retrieves an attribute value by name, returning it as a string.
    parameters:
      - name: name
        type: String
        summary: The name of the attribute
    returns:
      type: String
      summary: >
        The <Titanium.XML.Attr> value as a string, or empty string if the
        attribute has no specified or default value.
  - name: setAttribute
    summary: >
      Adds a new attribute. Any attribute with the same name is replaced. Throws
      an exception if the element is read-only, or if the name contains an
      illegal character.<br>
    parameters:
      - name: name
        type: String
        summary: The name of the attribute.
      - name: value
        type: String
        summary: >
          The value of the attribute. This is value is <strong>not</strong>
          parsed as part of the assignment. Any markup is treated as literal
          text, and needs to be escaped.<br>
  - name: removeAttribute
    summary: >
      Removes an attribute by name. If the attribute has a default value, it is
      immediately replaced with this default, including namespace URI and local
      name. Throws an exception if the element is read-only.<br>
    parameters:
      - name: name
        type: String
        summary: The name of the attribute to remove.
  - name: getAttributeNode
    summary: >
      Retrieves an attribute value by name, returning it as a <a
      href="/api/titanium/xml/attr">Titanium.XML.Attr</a> object.<br>
    parameters:
      - name: name
        type: String
        summary: The name of the attribute
    returns:
      type: Titanium.XML.Attr
      summary: The <Titanium.XML.Attr> value, or null if there is no such attribute.
  - name: setAttributeNode
    summary: >
      Adds a new attribute. Any attribute with the same <code>nodeName</code> as
      the argument is replaced. Throws an exception if the element is read-only,
      if <code>newAttr</code> is from a different document, or if
      <code>newAttr</code> is already an attribute of another element.<br>
    parameters:
      - name: newAttr
        type: Titanium.XML.Attr
        summary: The attribute node to add to the element.
    returns:
      type: Titanium.XML.Attr
      summary: The attribute that was replaced, or `null` otherwise.
  - name: removeAttributeNode
    summary: >
      Removes the specified attribute node. If the removed attribute has a
      default value, it is replaced immediately, with the same namespace and
      local name as the removed attribute, if applicable. Throws an exception if
      the element is read-only, or the attribute is not an attribute of the
      element.<br>
    parameters:
      - name: oldAttr
        type: Titanium.XML.Attr
        summary: The attribute to remove.
  - name: getElementsByTagName
    summary: >
      Retrieves a <a
      href="/api/titanium/xml/node-list">Titanium.XML.NodeList</a> of all
      descendant elements with a given tag name, in preorder traversal.<br>
    parameters:
      - name: name
        type: String
        summary: The name of the element. The value <code>*</code> matches all tags.
    returns:
      type: Titanium.XML.NodeList
  - name: getAttributeNS
    summary: >
      Retrieves an attribute value by local name and namespace URI, returning it
      as a string.<br>
    parameters:
      - name: namespaceURI
        type: String
        summary: The namespace URI of the attribute to retrieve.
      - name: localName
        type: String
        summary: The local name of the attribute to retrieve.
    returns:
      type: String
      summary: >
        The <Titanium.XML.Attr> value as a string, or empty string if the
        attribute has no specified or default value.
  - name: setAttributeNS
    summary: >
      Adds a new attribute. Any attribute with the same local name and namespace
      URI is present on the element is replaced, with its prefix changed to that
      of the <code>qualifiedName</code> parameter. Throws an exception if the
      element is read-only, if the name contains an illegal character, or if the
      qualified name contains an error.<br>
    parameters:
      - name: namespaceURI
        type: String
        summary: The namespace URI of the attribute.
      - name: qualifiedName
        type: String
        summary: >
          The qualified name of the attribute. If it is malformed, has a prefix
          and namespaceURI is <code>null</code>, or if the prefix is
          <code>xml</code> or <code>xmlns</code> but does not correspond to a
          property defined in the <a
          href="https://www.w3.org/XML/1998/namespace">XML</a> or <a
          href="https://www.w3.org/2000/xmlns/">XMLNS</a> specifications, then
          it contains an error.<br>
      - name: value
        type: String
        summary: >
          The value of the attribute. This is value is <strong>not</strong>
          parsed as part of the assignment. Any markup is treated as literal
          text, and needs to be escaped.<br>
  - name: removeAttributeNS
    summary: >
      Removes an attribute by local name and namespace URI. If the attribute has
      a default value, it is immediately replaced with this default, including
      namespace URI and local name. Throws an exception if the element is
      read-only.<br>
    parameters:
      - name: namespaceURI
        type: String
        summary: The namespace URI of the attribute to remove.
      - name: localName
        type: String
        summary: The local name of the attribute to remove.
  - name: getAttributeNodeNS
    summary: >
      Retrieves an attribute value by local name and namespace URI, returning it
      as a <a href="/api/titanium/xml/attr">Titanium.XML.Attr</a> object.<br>
    parameters:
      - name: namespaceURI
        type: String
        summary: The namespace URI of the attribute to retrieve.
      - name: localName
        type: String
        summary: The local name of the attribute to retrieve.
    returns:
      type: Titanium.XML.Attr
      summary: The <Titanium.XML.Attr> value, or null if there is no such attribute.
  - name: setAttributeNodeNS
    summary: >
      Adds a new attribute. Any attribute with the same local name and namespace
      URI is replaced. Throws an exception if the element is read-only, if
      <code>newAttr</code> is from a different document, or if
      <code>newAttr</code> is already an attribute of another element.<br>
    parameters:
      - name: newAttr
        type: Titanium.XML.Attr
        summary: The attribute node to add to the element.
    returns:
      type: Titanium.XML.Attr
      summary: The attribute that was replaced, or `null` otherwise.
  - name: getElementsByTagNameNS
    summary: >
      Retrieves a <a
      href="/api/titanium/xml/node-list">Titanium.XML.NodeList</a> of all
      descendant elements with a given local name and namespace URI, in preorder
      traversal.<br>
    parameters:
      - name: namespaceURI
        type: String
        summary: >-
          The namespace URI of the element. The value <code>*</code> matches all
          namespaces.
      - name: localName
        type: String
        summary: >-
          The local name of the element. The value <code>*</code> matches all
          local names.
    returns:
      type: Titanium.XML.NodeList
  - name: hasAttribute
    summary: >
      Determines whether or not an attribute with the given name is available in
      the element, or has a default value.<br>
    parameters:
      - name: name
        type: String
        summary: The name of the attribute to search for.
    returns:
      type: Boolean
  - name: hasAttributeNS
    summary: >
      Determines whether or not an attribute with the given name is available in
      the element, or has a default value.<br>
    parameters:
      - name: namespaceURI
        type: String
        summary: The namespace URI of the attribute to search for.
      - name: localName
        type: String
        summary: The local name of the attribute to search for.
    returns:
      type: Boolean
---

# Titanium.XML.Element

Represents an element in a DOM document, a [Titanium.XML.Node](/api/titanium/xml/node) defined by a start-tag and end-tag (or an empty tag). Elements may have [attributes](Titanium.XML.Attr) associated with them.
Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614) on Android and iOS with some non-standard extensions.


**Extends:** `Titanium.XML.Node` · **Since:** 0.9, 0.9, 0.9, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

