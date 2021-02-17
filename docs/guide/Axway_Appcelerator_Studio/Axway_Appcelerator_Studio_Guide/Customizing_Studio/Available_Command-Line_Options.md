---
title: Available Command-Line Options
weight: '30'
---

# Available Command-Line Options

## Overview

If you wish a user to have additional control over their environment, you can implement properties to modify the application's behavior from the command line or configuration files.

## Setting Properties

* Reference [Adding Command-Line Options](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/). These are all considered VM arguments.

* A full list of default Eclipse properties may be found [here](http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/runtime-options.html).

## Currently Available Properties

| **Property** | **Allowable Values (default in bold)** | **Description** |
| --- | --- | --- |
| **Start Page** |  |  |
| studio.portalBrowser | swt/**chromium** | Use specific browser component |
| **Editing** |  |  |
| studio.disableBackgroundReconciler | true/**false** | Disables the background presentation reconciler |
| studio.reconcilerIterationPartitionLimit | 10000 | The upper limit on the number of partitions to colorize |
| studio.reconcilerBackgroundDelay | 1000 | Time (in milliseconds) for how long to wait before running the reconciler |
| studio.reconcilerIterationDelay | 50 | Time (in milliseconds) for how long to wait between running iterations of the reconciler |
| studio.reconcilerMinimalVisibleLength | 20000 | Number of lines (from the beginning of the document) to colorize by default |
| **Scripting** |  |  |
| studio.rubleUserLocation | path on disk | Override the default location to load Rubles from disk |
