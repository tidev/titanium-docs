---
title: HTML Metadata 1.0 Specification
weight: '70'
---

# HTML Metadata 1.0 Specification

## Overview

This page describes the valid elements, attributes, and attribute values for the XML-based HTML metadata format.

## Introduction

The metadata in this file helps to provide the Code Assist information for the HTML editor. This reference describes which elements, attributes, and attribute values are valid metadata.

The section for each element includes the following information:

* Short description of the element

* Syntax

* Element parents and children

* Element attributes and their valid values

* Longer explanation of the element

* Example(s)

This file is currently for internal use only, but Studio may in the future, allow users to contribute additions to this file.

## Short Example

This example is not meant to be exhaustive, but will give you an example of what a simple file looks like.

```xml
<?xml version="1.0"?>
<html>
  <elements>
    <element name="abbr" related-class="HTMLElement" display-name="Abbreviation">
      <attribute-refs>
        <attribute-ref name="class"/>
        <attribute-ref name="dir"/>
        <attribute-ref name="id"/>
        <attribute-ref name="lang"/>
        <attribute-ref name="style"/>
        <attribute-ref name="title"/>
      </attribute-refs>
      <availability>
        <specification name="W3C" version="HTML 4.01"/>
      </availability>
      <browsers>
        <browser platform="Netscape" version="6.0+"/>
        <browser platform="Mozilla" version="1.0+"/>
        <browser platform="Opera" version="6.0+"/>
        <browser platform="Chrome" version="5.0+"/>
        <browser platform="Safari" version="1.0+"/>
      </browsers>
      <description>Specifies that a string is an abbreviation for a longer word or phrase.</description>
      <event-refs>
        <event-ref name="onclick"/>
        <event-ref name="ondblclick"/>
        <event-ref name="onkeydown"/>
        <event-ref name="onkeypress"/>
        <event-ref name="onkeyup"/>
        <event-ref name="onmousedown"/>
        <event-ref name="onmousemove"/>
        <event-ref name="onmouseout"/>
        <event-ref name="onmouseover"/>
        <event-ref name="onmouseup"/>
      </event-refs>
      <example>
      &lt;p&gt;This example defines "lab" as an abbreviation for "labrador retriever":&lt;/p&gt;
      &lt;pre&gt;&lt;code&gt;My dog is a &amp;lt;abbr title="labrador retriever"&amp;gt;lab&amp;lt;/abbr&amp;gt;. &lt;/code&gt;&lt;/pre&gt;
      </example>
      <references>
        <reference name="HTMLElement.abbr"/>
      </references>
      <remarks>The &amp;lt;abbr&amp;gt;&amp;lt;/abbr&amp;gt; tag is typically only used in formatting with CSS style sheets and with scripts. Similar to the &amp;lt;acronym&amp;gt;&amp;lt;/acronym&amp;gt; tag.</remarks>
    </element>
  </elements>
  <attributes>
    <attribute name="abbr" type="String">
      <availability>
        <specification name="W3C" version="HTML 4.01"/>
      </availability>
      <browsers>
        <browser platform="IE" version="2.0+"/>
        <browser platform="Netscape" version="1.1+"/>
        <browser platform="Mozilla" version="1.0+"/>
        <browser platform="Opera" version="4.0+"/>
        <browser platform="Chrome" version="5.0+"/>
        <browser platform="Safari" version="1.0+"/>
      </browsers>
      <description>Abbreviation for a header cell in a table.</description>
      <hint>[abbreviation]. Example values: ROI, PE, etc.</hint>
    </attribute>
   </attributes>
  <events>
    <event name="onabort" type="Function">
      <browsers>
        <browser platform="IE" version="4.0+"/>
        <browser platform="Chrome" version="5.0+"/>
        <browser platform="Safari" version="1.0+"/>
      </browsers>
      <description>Fires when the loading of the element is cancelled before it finishes loading.</description>
    </event>
  </events>
  <entities>
    <entity name="&amp;AElig;" decimal="&amp;#198;" hex="&amp;#xC6;">
      <description>AE Ligature.</description>
    </entity>
  </entities>
</html>
```

**Schema**

```xml
<?xml version="1.0"?>
<schema xmlns="http://www.aptana.com/2005/schema/1.0">

  <element name="attributes">
    <child-element name="attribute" />
  </element>

  <element name="attribute" onEnter="enterAttribute" onExit="exitAttribute">
    <attribute name="name" />
    <attribute name="type" usage="optional" />
    <attribute name="element" usage="optional" />
    <child-element name="availability" />
    <child-element name="browsers" />
        <child-element name="deprecated" />
    <child-element name="description" />
        <child-element name="hint" />
    <child-element name="references" />
    <child-element name="remarks" />
    <child-element name="values" />
        <child-element name="example" />
  </element>

  <element name="attribute-refs">
    <child-element name="attribute-ref"/>
  </element>

  <element name="attribute-ref" onEnter="enterAttributeReference">
    <attribute name="name" />
  </element>

  <element name="availability" onExit="exitAvailability">
    <child-element name="specification" />
  </element>

  <element name="browsers">
    <child-element name="browser" />
  </element>

  <element name="browser" onEnter="enterBrowser" onExit="exitBrowser">
    <attribute name="platform" />
    <attribute name="version" usage="optional" />
    </element>

  <element name="html" type="root">
    <child-element name="elements" />
    <child-element name="attributes" />
    <child-element name="events" />
    <child-element name="entities" />
    <child-element name="escape-codes" />
  </element>

  <element name="elements">
    <child-element name="element" />
  </element>

  <element name="element" onEnter="enterElement" onExit="exitElement">
    <attribute name="display-name" usage="optional" />
    <attribute name="name" />
    <attribute name="related-class" usage="optional" />
    <child-element name="attribute-refs" />
    <child-element name="availability" />
    <child-element name="browsers" />
        <child-element name="deprecated" />
        <child-element name="description" />
    <child-element name="event-refs" />
        <child-element name="example" />
    <child-element name="references" />
        <child-element name="remarks" />
  </element>

  <element name="entities">
    <child-element name="entity"/>
  </element>

  <element name="entity" onEnter="enterEntity" onExit="exitEntity">
    <attribute name="name"/>
    <attribute name="decimal"/>
    <attribute name="hex"/>
    <child-element name="description"/>
  </element>

  <element name="escape-codes">
    <child-element name="escape_code"/>
  </element>

  <element name="escape-code">
    <attribute name="code"/>
    <child-element name="description"/>
  </element>

  <element name="events">
    <child-element name="event" />
  </element>

  <element name="event" onEnter="enterEvent" onExit="exitEvent">
    <attribute name="name" />
    <attribute name="type" usage="optional" />
    <child-element name="availability" />
    <child-element name="browsers" />
        <child-element name="description" />
        <child-element name="remarks" />
  </element>

  <element name="event-refs">
    <child-element name="event-ref"/>
  </element>

  <element name="event-ref" onEnter="enterEventReference">
    <attribute name="name" />
  </element>

  <element name="example" onEnter="startTextBuffer" onExit="exitExample" hasText="yes" />

  <element name="values">
    <child-element name="value" />
  </element>

  <element name="value" onEnter="enterValue" onExit="exitValue">
    <attribute name="name" />
    <attribute name="description" usage="optional" />
  </element>

  <element name="references">
    <child-element name="reference" />
  </element>

  <element name="reference" onEnter="enterReference">
    <attribute name="name" />
  </element>

  <element name="remarks" onEnter="startTextBuffer" onExit="exitRemarks" hasText="yes"/>

  <element name="specification" onEnter="enterSpecification">
    <attribute name="name" />
    <attribute name="version" usage="optional" />
  </element>

  <element name="description" onEnter="startTextBuffer" onExit="exitDescription" />

  <element name="deprecated" onEnter="startTextBuffer" onExit="exitDeprecated" />

  <element name="hint" onEnter="startTextBuffer" onExit="exitHint" />
</schema>
```
