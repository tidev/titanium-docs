---
title: Titanium Angular - FAQ
weight: '60'
---

# Titanium Angular - FAQ

## How do I use modules with Titanium Angular?

Configure your modules as described in [Using Titanium Modules](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/) or, if it has any, follow the specific install instructions of the module itself. After that, you need to do some additional configuration in your Titanium Angular project.

First, add an entry in Webpack's [externals](https://webpack.js.org/configuration/externals/) configuration option to prevent it from trying to bundle any require statements of that native module. For example, if you want to use the [ti.map](#!/api/Modules.Map) module, add the following to your project's `webpack.config.js`:

**webpack.config.js**

```javascript
externals: {
  'ti.map': 'commonjs ti.map'
}
```

Next you need to tell TypeScript about the types of this module. Since Titanium Angular is in a very early stage, it is highly unlikely that a module has TypeScript definitions available now. But you can easily create definitions yourself in two simple steps. Create `app/src/titanium-modules.d.ts`, and for each module you want to use add a `declare module` statement. For example, to declare the ti.map module:

```
declare module 'ti.map';
```

The above will create an empty module definition with the `any` type. This is sufficient to get you started working with the module but note that the TypeScript compiler can't assist you with type checks and you won't have code completion for the module.

Finally, reference your module definitions at the top of your `AppModule.ts` to let TypeScript know about them.

```
/// <reference path="./titanium-modules.d.ts" />
```

You can now use the module in your code by importing it as usual.

```
import * as Map from 'ti.map';
```

::: tip 💡 Register third-party views as custom template elements
In future versions of Titanium Angular it will be possible to register views from modules as custom elements so you can use them inside a template. For now, you have to configure and add third-party views programmatically in your component class.
:::

## Can I use Hyperloop together with Titanium Angular?

Hyperloop is not supported in this technical preview so far. We are working on this and plan to add Hyperloop support in a later preview release.

## I don't like working with the CLI. How can I avoid that?

You can setup a custom task in VS Code that uses the Appc CLI for a more comfortable development flow.

1. Select **Configure Tasks** from the global **Tasks** menu or open the **Command Pallete** (⇧⌘P).

2. Choose **Task: Configure Task**.

3. Select **Create tasks.json file from template** entry.

VS Code will then create and open the `task.json` file which you can modify to define your own task. For example, to create a task that will use the Appc CLI to build and run your app in the iOS simulator modify it to look like this.

**task.json**

```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "ti build - iOS",
            "type": "shell",
            "command": "ti build -p ios",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

This will also define the task as the the default build task so t hat it is executed directly when triggering Run Build Task ( ⇧⌘B ). You can also define tasks for other build commands you frequently need. Please refer to the VS Code [custom task](https://code.visualstudio.com/docs/editor/tasks#_custom-tasks) documentation for detailed instructions what else you can do with tasks.

Additional Angular and TypeScript plugins are also available for both VS Code and other editors like [Atom](https://atom.io/packages/atom-typescript) or [Sublime](https://github.com/Microsoft/TypeScript-Sublime-Plugin).
