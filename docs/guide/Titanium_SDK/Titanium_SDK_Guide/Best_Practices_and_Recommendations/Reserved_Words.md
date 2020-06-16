---
title: Reserved Words
weight: '70'
---

# Reserved Words

## Overview

This article lists keywords that may not be used as variables, functions, methods, or object identifiers, because either Titanium or another source specifies its usage.

## ECMAScript Specification

The following keywords cannot be used as identifiers according to the ECMAScript Language Specification:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><ul class=" "><li class=" "><p><code>abstract</code></p></li><li class=" "><p><code>boolean</code></p></li><li class=" "><p><code>break</code></p></li><li class=" "><p><code>byte</code></p></li><li class=" "><p><code>case</code></p></li><li class=" "><p><code>catch</code></p></li><li class=" "><p><code>char</code></p></li><li class=" "><p><code>class</code></p></li><li class=" "><p><code>const</code></p></li><li class=" "><p><code>continue</code></p></li><li class=" "><p><code>debugger</code></p></li><li class=" "><p><code>default</code></p></li><li class=" "><p><code>delete</code></p></li><li class=" "><p><code>do</code></p></li><li class=" "><p><code>double</code></p></li><li class=" "><p><code>else</code></p></li><li class=" "><p><code>enum</code></p></li><li class=" "><p><code>export</code></p></li><li class=" "><p><code>extends</code></p></li><li class=" "><p><code>finally</code></p></li></ul></td><td class="confluenceTd" rowspan="1" colspan="1"><ul class=" "><li class=" "><p><code>for</code></p></li><li class=" "><p><code>function</code></p></li><li class=" "><p><code>goto</code></p></li><li class=" "><p><code>if</code></p></li><li class=" "><p><code>implements</code></p></li><li class=" "><p><code>import</code></p></li><li class=" "><p><code>in</code></p></li><li class=" "><p><code>instanceof</code></p></li><li class=" "><p><code>int</code></p></li><li class=" "><p><code>interface</code></p></li><li class=" "><p><code>let</code></p></li><li class=" "><p><code>long</code></p></li><li class=" "><p><code>native</code></p></li><li class=" "><p><code>new</code></p></li><li class=" "><p><code>package</code></p></li><li class=" "><p><code>private</code></p></li><li class=" "><p><code>protected</code></p></li><li class=" "><p><code>public</code></p></li><li class=" "><p><code>return</code></p></li><li class=" "><p><code>short</code></p></li></ul></td><td class="confluenceTd" rowspan="1" colspan="1"><ul class=" "><li class=" "><p><code>static</code></p></li><li class=" "><p><code>super</code></p></li><li class=" "><p><code>switch</code></p></li><li class=" "><p><code>synchronized</code></p></li><li class=" "><p><code>this</code></p></li><li class=" "><p><code>throw</code></p></li><li class=" "><p><code>throws</code></p></li><li class=" "><p><code>transient</code></p></li><li class=" "><p><code>try</code></p></li><li class=" "><p><code>typeof</code></p></li><li class=" "><p><code>with</code></p></li><li class=" "><p><code>while</code></p></li><li class=" "><p><code>var</code></p></li><li class=" "><p><code>void</code></p></li><li class=" "><p><code>volatile</code></p></li><li class=" "><p><code>yield</code></p></li></ul></td></tr></tbody></table>

## iOS

The following keywords are exposed to JavaScript from Objective C and may not be used as identifiers:

* `_configure`

* `_destroy`

* `_initProperties`

* `autorelease`

* `deadlock`

* `dealloc`

* `description`

* `id`

* `init`

* `release`

* `startup`

## Alloy

Do not use double underscore prefixes on variables, properties, or function names (e.g., \_\_foo). They are reserved for use in Alloy.
