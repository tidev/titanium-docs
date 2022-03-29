# PurgeTSS

## Overview

This guide provides basic instructions on using PurgeTSS for your project. PurgeTSS is an Alloy addon with predefined classes to use in the XML views. It can used by  all Titanium developers, who want to create beautiful designed mobile apps easily.

## Command-line interface usage

```bash
alloy purgetss
```

## Key features of PurgeTSS 
- Provides more than 10600 [Tailwind-like utility classes](https://tailwindcss.com/) ready to use in your projects.
- Creates a clean `app.tss` file with only the classes used in your project by parsing all your XML files. **Your original classes will be backed up in `_app.tss`**
- You can customize any of the default classes through a simple configuration file, or you can create new *just-in-time* classes with arbitrary values within the `Views`.
- You can easily use Font Awesome, Material Design and Framework7-Icons fonts in `Buttons` and `Labels`.
- Includes an Animation module to apply a 2D Matrix animation or transformation to any element or to an `Array` of elements.
- Includes a simple two-dimensional Grid System to align and distribute elements in your views.

## Running PurgeTSS for the first time
When you run `alloy purgetss` for the first time in your project it will do the following tasks for you.

### 1. Auto-Run Hook
It will add a `hook` in `alloy.jmk` to auto-run `purgetss` everytime you compile your app. **Very useful when using `liveview`.**

### 2. "purgetss" folder
It will create a `purgetss` folder at the root of your project with the following files and folder:

#### config.js file
Where you can customize or create new classes with you own spacing, colors, and margin values and more. See [Customization and Configuration Guide](/guide/Alloy_Framework/Alloy_PurgeTSS/configuring-guide.md) for more details.

#### tailwind.tss file
Ir contains all Tailwind-like utility classes, including all your custom classes defined in `config.js`.

#### definitions.css file
Is a special `css` file that includes ALL the classes from `fonts.tss` and `tailwind.tss` files ( including the official icon fonts libraries ) to be used with [“Intellisencse for CSS class names in HTML”](/guide/Alloy_Framework/Alloy_PurgeTSS/Whats_New/v5.2.1.md#new-definitionscss-file) VS Code extension.

#### fonts folder
Where you can add any Icon, Serif, Sans-Serif, Cursive, Fantasy or Monospace icons to be used in your app. See [build-fonts command](/guide/Alloy_Framework/Alloy_PurgeTSS/Whats_New/v5.1.0.md#instructions-to-recreate-any-of-the-deleted-libraries) for a step-by-step instructions.

## Available options
These are the different options ( or subcommands ) that you can pass to `purgetss`.
### build
If you need to re-generate `tailwind.tss` and `definitions.css` files run:

```bash
alloy purgetss build
```
Note that `purgetss` checks for any changes made to `config.js` and regenerates them for you.

### fonts
It will copy the **official icon fonts files** for **PurgeTSS** in `app/assets/fonts` including the corresponding CommondJS files in `app/lib`:

```bash
alloy purgetss fonts
```

```bash
FontAwesome6Brands-Regular.ttf
FontAwesome6Free-Regular.ttf
FontAwesome6Free-Solid.ttf
Framework7-Icons.ttf
MaterialIcons-Regular.ttf
MaterialIconsOutlined-Regular.otf
MaterialIconsRound-Regular.otf
MaterialIconsSharp-Regular.otf
MaterialIconsTwoTone-Regular.otf
```
Please check all available classes for [fontawesome.tss, framework7icons.tss and materialdesign.tss](https://github.com/macCesar/purgeTSS#list-of-available-classes)

### build-fonts
To create your custom `fonts.tss` file with all the unicode characters ( for icon fonts ) and style rules from the fonts located in `purgetss/fonts`.

```bash
alloy purgetss build-fonts
```

Example of a `fonts.tss` file:
```css
'.bevan-italic': { font: { fontFamily: 'Bevan-Italic' } }
'.bevan-regular': { font: { fontFamily: 'Bevan-Regular' } }
'.roboto-regular': { font: { fontFamily: 'Roboto-Regular' } }

'.boxicons': { font: { fontFamily: 'boxicons' } }
'.lineicons': { font: { fontFamily: 'LineIcons' } }

// Unicode Characters
// To use your Icon Fonts in Buttons AND Labels each class sets 'text' and 'title' properties

// boxicons.css
'.bxl-meta': { text: '\uef27', title: '\uef27' }
'.bx-lemon': { text: '\uef28', title: '\uef28' }
'.bxs-lemon': { text: '\uef29', title: '\uef29' }
// ...

// lineicons.css
'.lni-500px': { text: '\uea03', title: '\uea03' }
'.lni-add-files': { text: '\uea01', title: '\uea01' }
'.lni-adobe': { text: '\uea06', title: '\uea06' }
// ...
```

For icon font libraries, it will also create a CommondJS module in `app/lib/` with all the unicode characters.

```javascript
// app/lib/purgetss.fonts.js file
const icons = {
  // boxicons
  'bx': {
    '2fa': '\uef27',
    '3dCubeSphere': '\uef28',
    'aB': '\uef29',
    'accessPoint': '\uef2a',
    'accessPointOff': '\uef2b',
    'accessible': '\uef2c',
    ...
  },
  // tabler-icons
  'ti': {
    '2fa': '\ueca0',
    '3dCubeSphere': '\uecd7',
    'aB': '\uec36',
    'accessPoint': '\ued1b',
    'accessPointOff': '\ued1a',
    'accessible': '\ueba9',
    ...
  },
}
```

You can use the `--modules` flag to generate a CommonJS module called `purgetss-fonts.js` in `./app/lib/`.

To avoid any conflicts with other icon libraries that you may use, **PurgeTSS will keep each icon prefix**.

```bash
alloy purgetss build-fonts --modules
```

### module
To install the `purgetss.ui.js` module in your `lib` folder.

```bash
alloy purgetss module
```

**PurgeTSS module contains:**
- **Animation**: Apply a 2D Matrix animation or transformation to any element or to an array of elements. **Please check out the new `Animation` module [here](/guide/Alloy_Framework/Alloy_PurgeTSS/Whats_New/v2.5.0.md#animation-module).**

This document was adapted from [César Estrada (macCesar)](https://github.com/macCesar/): [PurgeTSS](https://github.com/macCesar/purgeTSS)
