---
title: Installing Node.js
weight: '10'
---

# Installing Node.js

This document contains information on how to install node.js on OS X and Windows platforms.

## OS X Install

The OS X installation should happen automatically; however, you can read the manual installation instructions here:

[https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager#osx](https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager#osx)

## Windows Install

The Windows installation should happen automatically; however, you can read the manual installation instructions here:

[https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager#windows](https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager#windows)

## Troubleshooting

If you run into issues installing or configuring Node.js, below are some common solutions.

### NPM not installed

Studio installs a version of NPM (Node Package Manager) by default, but if you installed Node yourself, you might not have done so already. Execute the following command:

```
curl https://npmjs.org/install.sh | sh
```
