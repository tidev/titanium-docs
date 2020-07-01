---
title: CSS Metadata 1.0 Specification
weight: '70'
---

# CSS Metadata 1.0 Specification

## Overview

This page describes the valid elements, attributes, and attribute values for the XML-based CSS metadata format.

## Introduction

The metadata in this file helps to provide the Code Assist information for the CSS editor. This reference describes which elements, attributes, and attribute values are valid metadata.

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
<css>
  <elements>
    <element name="a" display-name="Anchor">
      <browsers>
        <browser platform="IE" version="2.0+">
          <description>IE 5-6 only supports :hover on links.</description>
        </browser>
        <browser platform="Netscape" version="1.0+"/>
        <browser platform="Mozilla" version="1.0+"/>
        <browser platform="Opera" version="4.0+"/>
        <browser platform="Chrome" version="5.0+"/>
        <browser platform="Safari" version="1.0+"/>
      </browsers>
      <description>Defines the properties for a link or a target.</description>
      <example>
      &lt;p&gt;This example shows a set styles of anchor elements that will visually change color and text-decoration depending on state and mouse behavior:&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;
a {
  color: blue;
  text-decoration: underline;
}
&lt;/code&gt;&lt;/pre&gt;
      </example>
      <property-refs>
        <property-ref name="-moz-binding"/>
        <property-ref name="-moz-border-bottom-colors"/>
      </property-refs>
      <remarks>Combine different anchor styles to create visual cues for your links.</remarks>
    </element>
  </elements>
  <properties>
    <property name="-moz-binding" type="String">
      <browsers>
        <browser platform="Netscape" version="6.0+"/>
      </browsers>
      <description>Specifies the URL of an XBL file to bind to the element.</description>
      <hint>[URL]</hint>
      <remarks>Proprietary Mozilla property.</remarks>
    </property>
  </properties>
  <pseudo-classes>
    <pseudo-class name="active">
      <browsers>
      </browsers>
      <availability>
        <specification name="W3C" version="CSS2"/>
      </availability>
      <description>The :active pseudo-class applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.</description>
      <example>a:active  { color: lime }   /* active links    */</example>
    </pseudo-class>
  </pseduo-classes>
  <pseudo-elements>
    <pseudo-element name="after" allow-pseudo-class-syntax="true">
      <browsers>
      </browsers>
      <availability>
        <specification name="W3C" version="CSS2"/>
      </availability>
      <description>The ':before' and ':after' pseudo-elements can be used to insert generated content before or after an element's content.</description>
      <example>p.special:after {content: "Special! "}</example>
    </pseudo-element>
  </pseudo-elements>
</css>
```

**Schema**

```xml
<?xml version="1.0"?>
<schema xmlns="http://www.aptana.com/2005/schema/1.0">

  <element name="availability">
    <child-element name="specification" />
  </element>

  <element name="browsers">
    <child-element name="browser" />
  </element>

  <element name="browser" onEnter="enterBrowser" onExit="exitBrowser">
    <attribute name="platform" />
    <attribute name="version" usage="optional" />
    <attribute name="os" usage="optional" />
        <child-element name="description" />
    </element>

  <element name="css" type="root">
    <child-element name="elements" />
    <child-element name="properties" />
    <child-element name="pseudo-classes" />
    <child-element name="pseudo-elements" />
  </element>

  <element name="description" onEnter="startTextBuffer" onExit="exitDescription" hasText="yes"/>

  <element name="elements">
    <child-element name="element" />
  </element>

  <element name="element" onEnter="enterElement" onExit="exitElement">
    <attribute name="name" />
    <attribute name="display-name" usage="optional" />
    <child-element name="browsers" />
    <child-element name="description" />
    <child-element name="example" />
    <child-element name="property-refs" />
    <child-element name="remarks" />
  </element>

  <element name="example" onEnter="startTextBuffer" onExit="exitExample" hasText="yes" />

  <element name="hint" onEnter="startTextBuffer" onExit="exitHint" hasText="yes" />

  <element name="property" onEnter="enterProperty" onExit="exitProperty">
    <attribute name="name" />
    <attribute name="allow-multiple-values" usage="optional" />
    <attribute name="type" usage="optional" />
    <child-element name="availability" />
    <child-element name="browsers" />
    <child-element name="description" />
    <child-element name="example" />
    <child-element name="hint" />
    <child-element name="remarks" />
    <child-element name="values" />
  </element>

  <element name="properties">
    <child-element name="property" />
  </element>

  <element name="property-refs">
    <child-element name="property-ref" />
  </element>

  <element name="property-ref" onEnter="enterPropertyReference">
    <attribute name="name" />
  </element>

  <element name="pseudo-class" onEnter="enterPseudoClass" onExit="exitPseudoClass">
    <attribute name="name" />
    <child-element name="availability" />
    <child-element name="browsers" />
    <child-element name="description" />
    <child-element name="example" />
    <child-element name="values" />
  </element>

  <element name="pseudo-classes">
    <child-element name="pseudo-class" />
  </element>

  <element name="pseudo-element" onEnter="enterPseudoElement" onExit="exitPseudoElement">
    <attribute name="name" />
    <attribute name="allow-pseudo-class-syntax" usage="optional" />
    <child-element name="availability" />
    <child-element name="browsers" />
    <child-element name="description" />
    <child-element name="example" />
  </element>

  <element name="pseudo-elements">
    <child-element name="pseudo-element" />
  </element>

  <element name="remarks" onEnter="startTextBuffer" onExit="exitRemarks" hasText="yes"/>

  <element name="specification" onEnter="enterSpecification">
    <attribute name="name" />
    <attribute name="version" usage="optional" />
  </element>

  <element name="values">
    <child-element name="value" />
  </element>

  <element name="value" onEnter="enterValue" onExit="exitValue">
    <attribute name="name" />
    <attribute name="description" usage="optional" />
    <child-element name="browsers" />
  </element>
</schema>
```
