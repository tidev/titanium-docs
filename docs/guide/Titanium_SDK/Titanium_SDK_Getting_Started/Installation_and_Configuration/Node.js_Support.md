---
title: Node.js Support
weight: '80'
---

# Node.js Support

Titanium SDK has full NodeJS support so users can use NPM modules Android and iOS platforms.

## Minor differences

This implementation includes the NodeJS require algorithm with some minor differences:

* SDK doesn't attempt to load \*.node files

* SDK doesn't have replacements for Node's core modules

* If the required string doesn't have the prefix of `./`, `/`, or `../`, and its not a native module, the SDK will fall back to legacy Titanium behavior of assuming the require is meant as "absolute" inside the app (as in starting at "`Resources/`")

* The SDK will load JSON files and directories (package.json's main property (look at it, resolve it, and try to load it), index.js, and index.json)

## Algorithm summary

To summarize the algorithm the SDK uses, here are three summaries for requiring a module, loading as file, and loading as directory:

### Require(X) from module at path Y

1. If X is a core module,

    1. return the core module

    2. STOP

2. If X begins with ./, or ../,

    1. LOAD\_AS\_FILE(Y + X)

    2. LOAD\_AS\_DIRECTORY(Y + X)

3. If X begins with /,

    1. LOAD\_AS\_FILE(X)

    2. LOAD\_AS\_DIRECTORY(X)

4. If X does not contain '/', assume it should try and load CommonJS module first....

    1. LOAD\_AS\_FILE(X/X.js): try to load "legacy" CommonJS file named `module.id/module.id.js`.

    2. LOAD\_AS\_DIRECTORY(X): try to load CommonJS module as a directory

5. WARN user about possible bad require being treated as absolute THROW "not found"

    1. LOAD\_AS\_FILE(X)

    2. LOAD\_AS\_DIRECTORY(X)

### LOAD\_AS\_FILE(X)

1. If X is a file, load X as JavaScript text or JavaScript Object (JSON). STOP

2. If X.js is a file, load X.js as JavaScript text. STOP

3. If X.json is a file, parse X.json to a JavaScript Object. STOP

### LOAD\_AS\_DIRECTORY(X)

1. If X/package.json is a file, If X/index.js is a file, load X/index.js as JavaScript text. STOP

    1. Parse X/package.json and look for "main" field.

    2. let M = X + (json main field)

    3. LOAD\_AS\_FILE(M)

2. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP
