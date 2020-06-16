---
title: Disable Ruble Caching
weight: '60'
---

# Disable Ruble Caching

By default, Studio attempts to cache the contents of a bundle for faster subsequent loading. However, there may be situations where you will want to disable this functionality.

1. Follow the instructions [here](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/) for adding a launcher argument.

2. Add the following VM argument: -Duse.bundle.cache=false (true is the default value).
