---
title: ES6 in Titanium SDK 6.1.0
weight: '10'
---

# ES6 in Titanium SDK 6.1.0

We're introducing the ability to write ES6 (or 7) user code in Titanium SDK 6.1.0 and Alloy 1.10.0. This is a "feature preview" since the feature is not fully implemented across all of our tooling, and because it requires some flags and/or caveats. Specifically, we have moved our tooling from using uglifyjs to babylon to parse (and sometimes transform) your JS code. While this allows us to handle newer JS versions and syntax, we have not **yet** included transpilation in our build pipeline.

So what does this mean? It means you could write ES6/7 code that the target platform's JS engine does not yet support and the code will error at runtime. Or that you could write code that works on iOS 9, but not iOS 8. We have plans to eventually include transpilation during the build to convert any unsupported code and/or features down to ES5 for the older JS engines ([TIMOB-24610](https://jira.appcelerator.org/browse/TIMOB-24610)).

For now, you will need to be aware of the JS support levels in each platform. [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/) is a great resource for this.

## Great, how do I use it now?!

* On Android, we're using V8 5.1.281.59 (equivalent to Chrome browser version 51) in Titanium SDK 6.1.0, so any language support in that version of V8 should be supported by default (outside of tail call optimization).

* On iOS, by default we use the TiCore JS engine, which is essentially an old fork of JavaScriptCore engine - and does not support ES6 features. However, you can "turn on" the JavaScriptCore engine bundled with iOS by setting a value in your tiapp.xml:

    ```xml
    <ti:app>
      <ios>
        <use-jscore-framework>true</use-jscore-framework>
      </ios>
    </ti:app>
    ```

    See [tiapp.xml and timodule.xml Reference: use-jscore-framework](/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/#use-jscore-framework). As a general reference: iOS 8 only supports 17% of ES6, iOS 9 supports 54%, and iOS 10+ supports 100%.

* On Windows, we use a relatively recent fork of JavaScriptCore that should support most of ES6

## Known issues

* You can write code that the CLI may accept but that the underlying JS engine doesn't support yet. That may work on versions of the SDK/OS you test with but not on older versions. We need to support transpilation down to ES5 for older engines: [TIMOB-24610](https://jira.appcelerator.org/browse/TIMOB-24610)

* Liveview doesn't yet handle ES6 ([CLI-1216](https://jira.appcelerator.org/browse/CLI-1216))

* Using some things like import/export inside Alloy controllers may fail anyways due to the way we generate code by not hoisting those to the top-level.

* There is a performance hit for using babylon and babel to handle code (over uglifyjs) in Alloy compiles resulting in a slower build time. ([ALOY-1312](https://jira.appcelerator.org/browse/ALOY-1312))

* Studio does not yet support ES6 grammar and may improperly mark such code as having errors: [TISTUD-8764](https://jira.appcelerator.org/browse/TISTUD-8764)

* Currently the version of Alloy in the Appcelerator CLI has not been upgraded to 1.10.0. So for now Alloy applications run using this are unable to use ES6 code ([CLI-1213](https://jira.appcelerator.org/browse/CLI-1213))
