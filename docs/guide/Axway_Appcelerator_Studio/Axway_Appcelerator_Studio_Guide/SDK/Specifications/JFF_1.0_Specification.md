---
title: JFF 1.0 Specification
weight: '30'
---

# JFF 1.0 Specification

## Overview

This is a brief description of the JFF file format. This JSON-based format is used to describe the structure of other JSON files.

## Top-Level Properties

The JFF file format consists of a single top-level object with the following properties: name, version, description, and types. Below is a description of each of these properties

### Name Property

This property names the format the JFF file describes.

### Version Property

This property provides a version number for the format the JFF file describes.

### Description Property

This property gives a brief description of the format the JFF file describes.

### Result Property

This property indicates the top-level type that is returned when processing the format the JFF file describes.

### Types Property

This property lists all types used within the format the JFF file describes. The type referenced in the "result" property must be in this list and all types referenced by that type must also exist, excluding the built-in types: Boolean, Number, Null, Object, and String.

## Types

Below is a list of types declared in the JFF file. These types are what are used to describe the format being described by the JFF file.

### Schema Type

This is the top-level type that encapsulates metadata about the format being described. A Schema types consists of the following properties: name, version, description, result, and types.

#### Name Property

The name property names the format the JFF file describes This property is required.

#### Version Property

This property provides a version number for the format the JFF file describes. This property is required.

#### Description Property

This property gives a brief description of the format the JFF file describes. This property is optional.

#### Result Property

This property indicates the top-level type that is returned when processing the format the JFF file describes. This property is required.

#### Types Property

This property lists all types used within the format the JFF file describes. The type referenced in the "result" property must be in this list and all types referenced by that type must also exist, excluding the built-in types: Boolean, Number, Null, Object, and String. This property is optional.

### Type Type

A Type type captures the structure of a given item in the structure being described by the JFF file. A Type consists of the following properties: name, description, and properties.

#### Name Property

This property gives the type a unique name. This property is required.

#### Description Property

This property briefly describes what this type encapsulates. This property is optional.

#### Properties Property

This property lists all properties that make up this type. This property is optional.

### Property Type

The Property Type captures information about each property on a Type. A Property consists of the following properties: name, type, description, and example.

#### Name Property

The name property names the Property instance of a type. This property is required.

#### Type Property

The type property specifies the type of the Property. This property is required.

#### Description Property

This property gives a brief description of the Property. This property is optional.

#### Example Property

This property provides examples of the Property in use. This property is optional.

#### Optional Property

The optional property is a flag indicating if this property is required or not. This property is optional.
