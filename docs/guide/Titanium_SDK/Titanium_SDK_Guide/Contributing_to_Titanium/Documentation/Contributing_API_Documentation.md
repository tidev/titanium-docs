---
title: Contributing API Documentation
weight: '10'
---

# Contributing API Documentation

**Contents**

## Overview

This guide describes how to submit changes to the Titanium SDK API documentation.

The process for getting the SDK source and submitting a pull request is identical to the process for code contributions, described in the [Pull Request Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Pull_Request_Guide/).

As with code contributions, you must electronically sign the [Contributors License Agreement (CLA)](http://developer.appcelerator.com/cla) before you can contribute documentation or any other materials to the project.

## Editing API Documentation

The API documentation is stored in the `apidoc` folder inside the [titanium\_mobile](https://github.com/tidev/titanium_mobile) repository.

The documentation is written in the Titanium Doc format, TDoc, which is documented in the [TDoc Specification](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/TDoc_Specification/).

API doc contributions should comply with the [Titanium API Doc Style Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Documentation/Titanium_API_Doc_Style_Guide/).

## Generating the HTML API Docs

You can build the basic HTML version of the Titanium docs using the [titanium-docgen](https://www.npmjs.com/package/titanium-docgen) tooling, as follows:

```bash
npm run build:docs
```

The HTML files are then output to the `/path/to/titanium_mobile/dist/apidoc` directory, with the index page at `dist/apidoc/index.html`.

You might find that some projects such as Titanium native modules don't have this npm script available. In that instance, you can use the following:

```
npx docgen apidoc -o ./dist
```

## Validating API Doc Modifications

After changes have been made to the API Doc source, it's important to verify that the code is free from errors using:

```bash
npm run lint:docs
```

You might find that some projects such as Titanium native modules don't have this npm script available. In that instance, you can use the following:

```
npx tdoc-validate apidoc/
```

### Validating on Windows

On Windows, as Command Line program cannot handle the UTF-8 characters of the validation report, the following error may be displayed:

```
UnicodeEncodeError: 'charmap' codec can't encode character u'\u2713' in position 1: character maps to <undefined>
```

A workaround for this is to only display a simple report, using the following command:

```
cd /path/to/titanium_mobile/apidoc
python validate.py --errors-only --style=simple
```

## Submitting Contributions

The process for contributing API Docs is the same as contributing code. Please refer to [Pull Request Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Pull_Request_Guide/) for guidance.
