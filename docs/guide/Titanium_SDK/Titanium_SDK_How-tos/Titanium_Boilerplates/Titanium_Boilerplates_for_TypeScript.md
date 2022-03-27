---
title: Titanium Boilerplates for TypeScript
weight: '10'
---

# Titanium Boilerplates for TypeScript

This tutorial introduces the first in a series of Titanium boilerplate projects. In this document, we'll cover [TypeScript](https://www.typescriptlang.org/) in both Alloy and classic apps.

## Getting started with our templates

All that is required is the TypeScript compiler and a CLI plugin that will compile your `.ts` files down to JavaScript.

To get you started quickly with TypeScript, we have prepared two example apps:

* [typescript-alloy-app](https://github.com/tidev/titanium-boilerplates/tree/master/templates/typescript-alloy-app#readme)

* [typescript-classic-app](https://github.com/tidev/titanium-boilerplates/tree/master/templates/typescript-classic-app#readme)

You can also find them in our new [titanium-boilerplates](https://github.com/tidev/titanium-boilerplates) repository on GitHub.

These are simple greeter app examples written in TypeScript that is already setup with typings for all Titanium APIs, including Alloy, a base configuration for TypeScript, and linting using TSLint.

## TypeScript Support for Existing Projects

Enabling TypeScript support in your existing project can be done with the following steps:

1. [Install TypeScript compiler](#install-typescript-compiler)

2. [Create tsconfig.json](#create-tsconfig.json)

3. [Migrating your JavaScript files](#migrating-your-javascript-files)

4. [Installing the pre-compile hook](#installing-the-pre-compile-hook)

## Install TypeScript compiler

First, install the required dependencies via `npm` in your project root directory. To save your installed dependencies, create a minimal `package.json` with the following content (if your project does not already have one):

```
{
  "name": "my-typescript-app",
  "version": "1.0.0",
  "main": "index.js",
  "private": true
}
```

Now install the TypeScript compiler and the required typings for Titanium and save them to your dev dependencies:

`npm i typescript @types/titanium -D`

## Create tsconfig.json

Next, create a `tsconfig.json` for your project. The configuration slightly differs depending whether you use Alloy or a classic project.

For Alloy projects, the `tsconfig.json` looks like this:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": [
        "*",
        "app/lib/*"
      ]
    },
    "target": "es5",
    "module": "commonjs",
    "lib": [
      "es2015",
      "es2015.iterable"
    ],
    "downlevelIteration": true,
    "strict": true,
    "esModuleInterop": true,
    "noImplicitAny": false
  },
  "include": [
    "app/**/*"
  ]
}
```

In classic projects, you can omit the `paths` compiler options and need to adjust the `include` setting to `Resources/**/*`.

The compiler settings are just reasonable defaults and you can adjust them depending on your needs.

### ALLOY ONLY: copy Alloy typings

Alloy currently does not provide typings on its own. However, you can copy the typings from the Alloy boilerplate project. Copy the [globals.d.ts](https://github.com/tidev/titanium-boilerplates/blob/master/templates/typescript-alloy-app/app/globals.d.ts) file over to your project’s `app` folder.

## Migrating your JavaScript files

Now you can start migrating your JavaScript files. Don’t worry though – in the first step, you won’t have to touch any of your code. However, it is required that you rename at least one `.js` file to `.ts`. Otherwise the TypeScript compiler would complain that there are no input files.

You didn’t really migrate anything, yet. We recommend reading through [Migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#moving-to-typescript-files) for further guidelines how to continue from here.

## Installing the pre-compile hook

Finally, the CLI hook triggers the compilation of the TypeScript files. Create a new file `hooks/pre-compile.js` in your project and paste the following content to it:

```javascript
'use strict';

const path = require('path');
const spawn = require('child_process').spawn;

exports.id = 'ti.typescript';
exports.init = (logger, config, cli) => {
  cli.on('build.pre.compile', {
    priority: 900, // explicitly lower priority to make sure this hook runs before the Alloy compiler
    post: (builder, callback) => {
      const tscPath = path.resolve(__dirname, '..', 'node_modules', '.bin', 'tsc')
      const args = [ tscPath ];
      logger.info('Compiling TypeScript files');
      logger.trace(`Executing: node ${args.join(' ')}`);
      const child = spawn('node', args, {
        stdio: 'inherit',
        cwd: cli.argv['project-dir']
      });
      child.on('close', code => {
        if (code === 0) {
          callback();
        } else {
          const error = new Error(`TypeScript compiler exited with non-zero exit code ${code}`);
          error.code = code;
          callback(error);
        }
      });
    }
  });
};
```

You can now use TypeScript in your project.
