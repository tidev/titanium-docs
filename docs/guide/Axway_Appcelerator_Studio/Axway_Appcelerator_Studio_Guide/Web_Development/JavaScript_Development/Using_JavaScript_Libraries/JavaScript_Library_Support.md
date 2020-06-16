---
title: JavaScript Library Support
weight: '10'
---

# JavaScript Library Support

## Libraries

Studio ships with the ability for users to extend support for JavaScript libraries in content assist. Below is a list of libraries and content assist files we've located that should be compatible with Studio. This is not a complete list, and compatibility is not guaranteed, but if you see something on this list and it doesn't work, please let us know.

### Dojo ( http://dojotoolkit.org )

The XML files Dojo ships require a little bit of massaging to be readable by the Studio content assist processor.

Drop the SDOCML file anywhere into your Web Project (feel free to put it in a special folder).

* 1.6.0: [https://raw.github.com/aptana/dojo.ruble/master/support/dojo.1.6.0.sdocml](https://raw.github.com/aptana/dojo.ruble/master/support/dojo.1.6.0.sdocml)

Alternately, to update docs to a newer version (should one come out):

1. Download the latest API file from [https://github.com/aptana/studio3-sdk/blob/master/tools/frameworks/dojo/1.6/api.xml](https://github.com/aptana/studio3-sdk/blob/master/tools/frameworks/dojo/1.6/api.xml).

2. Download the XSL transform file from [https://github.com/aptana/studio3-sdk/blob/master/tools/frameworks/dojo/1.6/update\_dojo\_metadata\_1.6.xsl](https://github.com/aptana/studio3-sdk/blob/master/tools/frameworks/dojo/1.6/update_dojo_metadata_1.6.xsl).

3. Follow instructions in the XSL file to generate an api.sdocml file. Drop this into your JavaScript project.

### ExtJS/Sencha ( http://extjs.com )

Drop the SDOCML file anywhere into your Web Project (feel free to put it in a special folder).

* ExtJS 3.3.0: [https://raw.github.com/aptana/sencha.ruble/master/support/ext-js-3.3.0.sdocml](https://raw.github.com/aptana/sencha.ruble/master/support/ext-js-3.3.0.sdocml)

* Sencha Touch RC 1: [https://github.com/aptana/sencha.ruble/raw/master/support/sencha-touch-rc1.sdocml](https://github.com/aptana/sencha.ruble/raw/master/support/sencha-touch-rc1.sdocml)

### Google

Drop the VSDoc files into your Web Project.

* V3 Maps API: [http://gmapvsdoc.codeplex.com/](http://gmapvsdoc.codeplex.com/)

### jQuery ( http://jquery.org )

#### 3.0.1+

Drop the SDOCML file anywhere into your Web Project (feel free to put it in a special folder).

* 1.4.2: [https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.4.2.sdocml](https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.4.2.sdocml)

* 1.6.2: [https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.6.2.sdocml](https://github.com/aptana/javascript-jquery.ruble/blob/master/support/jquery.1.6.2.sdocml)

#### 3.0.5+

Install the jQuery ruble and reference it:

1. **Commands > Install Bundle > jQuery.**

2. Right click on a project, select **Properties > Project Build Path** and select the checkbox for jQuery 1.6.2.

If you already have the jQuery bundle:

1. Choose **Commands > Bundle Development > Update User Bundles.**

or

1. Find the **Aptana Rubles** folder on your system.

2. Delete the Ruble.

3. Restart Studio.

4. Install the Ruble again as above.

### OpenLayers ( http://openlayers.org/ )

There is a current bug with adding the single [http://www.openlayers.org/api/OpenLayers.js](http://www.openlayers.org/api/OpenLayers.js) file to a project to get content assist. As a workaround:

* Download the last stable release: [https://github.com/openlayers/openlayers/releases/](https://github.com/openlayers/openlayers/releases/)

* Unzip the folder.

* Drop the folder named **lib/OpenLayers** into your project.

* You will see API methods and classes shown.

Note that this technique will not actually show documentation on the classes. For that, we need a SDOCML file which could be created from the source Natural Docs.

### YUI ( http://developer.yahoo.com/yui/ )

Drop the SDOCML file into your Web Project.

* 3.0: [https://github.com/aptana/yui.ruble/raw/master/support/yui.3.0.sdocml](https://github.com/aptana/yui.ruble/raw/master/support/yui.3.0.sdocml)

* 2.8: [https://github.com/aptana/yui.ruble/raw/master/support/yui.2.8.sdocml](https://github.com/aptana/yui.ruble/raw/master/support/yui.2.8.sdocml)

## Not currently supported with API Docs

The libraries below may have supported SDOC files in [https://github.com/aptana/frameworks/tree/master/plugins/](https://github.com/aptana/frameworks/tree/master/plugins/), however, we are in the process of converted them to SDOCML or JSCA formats. If you'd like to assist, please let us know.

* AFLAX

* MooTools ([http://mootools.net/](http://mootools.net/)).

* facebook.jscl

* Scriptaculous

* Prototype

* Rico

* Spry

* ms.ajax
