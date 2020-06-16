---
title: Alloy 1.9.3 - 8 October 2016
weight: '30'
---

# Alloy 1.9.3 - 8 October 2016

Alloy 1.9.3 is a patch release that includes new features, improvements, and bug fixes.

As of this release, the previous Alloy patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

* [ALOY-1493](https://jira.appcelerator.org/browse/ALOY-1493) - \[Alloy\] Alloy sql adapter db\_file to be function

    * The db\_file not accepts function

    * Example:

        <table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><code>exports.definition = {</code><code></code><code>config: {</code><code></code><code>columns: {},</code><code></code><code>adapter: {</code><code></code><code>type:</code><code>"sql"</code><code>,</code><code></code><code>collection_name:</code><code>"mytable"</code><code>,</code><code></code><code>db_file:</code><code>function</code><code>() {</code><code></code><code>var</code> <code>myFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,</code><code>'file1.sql'</code><code>);</code><code></code><code>return</code> <code>myFile.exists() ? myFile.nativePath : Titanium.Filesystem.applicationDataDirectory +</code><code>'file2.sql'</code><code>;</code><code></code><code>},</code><code></code><code>db_name:</code><code>"projectsDB"</code><code>,</code><code></code><code>idAttribute:</code><code>"UserID"</code><code>,</code><code></code><code>remoteBackup:</code><code>false</code><code></code><code>}</code><code></code><code>}</code><code>};</code></p></td></tr></tbody></table>

## Improvements

* [ALOY-1519](https://jira.appcelerator.org/browse/ALOY-1519) - Alloy: Support iOS 10 <RefreshControl> tag in Ti.UI.ScrollView

    * Added support for iOS 10's `<RefreshControl>` element in `Ti.UI.ScrollView`

## Fixed issues

* [ALOY-1520](https://jira.appcelerator.org/browse/ALOY-1520) - Replace Ti.Ui.iPhone with Ti.Ui.iOS in Alloy
