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

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Property</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">Allowable Values (default in bold)</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">Description</strong></p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Start Page</strong></p></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>studio.portalBrowser</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>swt/<strong class=" ">chromium</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Use specific browser component</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Editing</strong></p></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>studio.disableBackgroundReconciler</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>true/<strong class=" ">false</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Disables the background presentation reconciler</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>studio.reconcilerIterationPartitionLimit</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>10000</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>The upper limit on the number of partitions to colorize</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>studio.reconcilerBackgroundDelay</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1000</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Time (in milliseconds) for how long to wait before running the reconciler</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>studio.reconcilerIterationDelay</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>50</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Time (in milliseconds) for how long to wait between running iterations of the reconciler</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>studio.reconcilerMinimalVisibleLength</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>20000</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Number of lines (from the beginning of the document) to colorize by default</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Scripting</strong></p></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>studio.rubleUserLocation</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>path on disk</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Override the default location to load Rubles from disk</p></td></tr></tbody></table>
