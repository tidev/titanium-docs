---
title: Debugger Protocol
weight: '10'
---

# Debugger Protocol

## Overview

A reference to the Studio Debugger Protocol used in Aptana Studio, Titanium Studio and Appcelerator Studio.

Request packet format:

```
length*request_id*command*arg0*arg1*arg2*...argN
```

Reply packet format:

```
length*request_id*arg0*arg1*arg2*...argN
```

Unsolicited message format:

```
length*message*arg0*arg1*arg2*...argN
```

where:

* _length_ : integer value of the remaining part of a packet

* _request\_id_ : any string identifying request/response

* _command_ : request command name

* _message_ : unsolicited message name

* _arg0..N_ : command/response specific arguments

An argument could be split into sub-arguments:

```
arg=subarg0|subarg1|subarg2|...subargN
```

::: warning ⚠️ Warning
Requests with empty _request\_id_ should not be replied.
:::

## Arguments encoding

All the arguments (args and subargs) should have the following set of characters encoded:

* \# => #0

* | => #1

* \* => #2

## Commands

### Get debugger extension version

Command: **version**
Request arguments: _none_
Reply arguments:

* _arg0_ : debugger protocol version (currently are **1** or **2**)

* _arg1_ : debugger extension/addon version

Example:

```
=> 1176979825719*version
 <= 1176979825719*1*0.2.8.14083
```

### Force debugger extension update

Command: **update**
Request arguments: _none_
Reply arguments:

* _arg0_ : _(optional)_ version of updated debugger extension/addon (if available)

Example:

```
=> 1176979825720*update
 <= 1176979825720*0.2.8.15000
```

### Set debugger options

Command: **option**
Request arguments:

* _arg0_ : name of an option

* _arg1_ : new value of an option

Reply arguments: _none_
Example:

```
=> 1176979825721*option*suspendOnFirstLine*false
 <= 1176979825721
```

### Turn on debug mode

Command: **enable**
Request arguments: _none_
Reply arguments: _none_
Example:

```
=> 1176979825726*enable
 <= 1176979825726
```

### Turn off debug mode

Command: **disable**
Request arguments: _none_
Reply arguments: _none_
Example:

```
=> 1176979825727*disable
 <= 1176979825727
```

### Terminate session

Command: **terminate**
Request arguments: _none_
Reply arguments: _none_
Example:

```
=> 1176979825820*terminate
 <= 1176979825820
```

### Create/modify/remove breakpoint

Command: **breakpoint**
Request arguments:

* _arg0_ : name of an action (allowed actions: _create_, _change_, _remove_)

* _arg1_ : URI of a file

* _arg2_ : line number

* _arg3_ : breakpoint state (_1_ - enabled, _0_ - disabled)

* _arg4_ : hit count (no hit count if value is less or equal to 0)

* _arg5_ : condition expression string (no condition if empty)

* _arg6_ : condition meaning (_1_ - on true, _0_ - on expression value change)

Reply arguments:

* _arg0_ : action result status (_created_, _changed_, _removed_)

Example:

```
=> 1176979825728*breakpoint*create*http://127.0.0.1:8000/debug_tests.html*116*1*0**1
 <= 1176979825728*created

 => 1176979825729*breakpoint*remove*http://127.0.0.1:8000/debug_tests.html*116
 <= 1176979825729*removed
```

### Create/modify/remove exception breakpoints

Command: **exception**
Request arguments:

* _arg0_ : name of an action (allowed actions: _create_, _change_, _remove_)

* _arg1_ : exception type name

Reply arguments:

* _arg0_ : action result status (_created_, _changed_, _removed_)

Example:

```
=> 1176979825729*exception*create*TypeError
 <= 1176979825729*created
```

### Set detail formatters

Command: **detailFormatters**
Request arguments:

* _arg0..argN_ : detail formatters 0-N

* _subarg0_ : type name

* _subarg1_ : formatter expression text

Reply arguments: _none_
Example:

```
=> 1176979825730*detailFormatters*Date|this.toGMTString();
 <= 1176979825730
```

### Open page URL

Command: **openURL**
Request arguments:

* _arg0_ : page URI to open

Reply arguments: _none_
Example:

```
=> 1176979825729*openUrl*http://127.0.0.1:8000/debug_tests.html
 <= 1176979825729
```

### Get file sources

Command: **getSource**
Request arguments:

* _arg0_ : file URI to retrieve sources

Reply arguments:

* _arg0_ : command status (_success_, _failure_)

* _arg1_ : file contents

Example:

```
=> 1176979825730*getSource*http://127.0.0.1:8000/debug_tests.html
 <= 1176979825730*success*<html><body></body></html>
```

### Suspend script execution

Command: **suspend**
Request arguments (**version 1**): _none_
Request arguments (**version 2**):

* _arg0_ : thread id

Reply arguments: _none_
Example:

```
=> 1176979825731*suspend
 <= 1176979825731
 => 1176979825731*suspend*2
 <= 1176979825731
```

### Resume script execution

Command: **resume**
Request arguments (**version 1**): _none_
Request arguments (**version 2**):

* _arg0_ : thread id

Reply arguments: _none_
Example:

```
=> 1176979825732*resume
 <= 1176979825732
 => 1176979825732*resume*2
 <= 1176979825732
```

### Step into

Command: **stepInto**
Request arguments (**version 1**): _none_
Request arguments (**version 2**):

* _arg0_ : thread id

Reply arguments: _none_
Example:

```
=> 1176979825733*stepInto
 <= 1176979825733
 => 1176979825733*stepInto*2
 <= 1176979825733
```

### Step over

Command: **stepOver**
Request arguments (**version 1**): _none_
Request arguments (**version 2**):

* _arg0_ : thread id

Reply arguments: _none_
Example:

```
=> 1176979825734*stepOver
 <= 1176979825734
 => 1176979825734*stepOver*2
 <= 1176979825734
```

### Step return

Command: **stepReturn**
Request arguments (**version 1**): _none_
Request arguments (**version 2**):

* _arg0_ : thread id

Reply arguments: _none_
Example:

```
=> 1176979825735*stepReturn
 <= 1176979825735
 => 1176979825735*stepReturn*2
 <= 1176979825735
```

### Step to frame

Command: **stepToFrame**
Request arguments (**version 1**):

* _arg0_ : frame id to step to

Request arguments (**version 2**):

* _arg0_ : thread id

* _arg1_ : frame id to step to

Reply arguments: _none_
Example:

```
=> 1176979825736*stepToFrame*2
 <= 1176979825736
 => 1176979825736*stepToFrame*2*2
 <= 1176979825736
```

### Get stack frames

Command: **frames**
Request arguments (**version 1**): _none_
Request arguments (**version 2**):

* _arg0_ : thread id

Reply arguments:

* _arg0..argN_ : frames 0-N

* _subarg0_ : frame id

* _subarg1_ : frame/function name

* _subarg2_ : function arguments separated by ", "

* _subarg3_ : file URI

* _subarg4_ : line number

* _subarg5_ : function native flag (_temporary unused_)

* _subarg6_ : engine's internal frame PC (if available)

* _subarg7_ : function's script id

Example:

```
=> 1176979825740*frames
 <= 1176979825740*0|testVariables||http://127.0.0.1:8000/debug_tests.html|166|false|226|238*1|onclick|MouseEvent|http://127.0.0.1:8000/debug_tests.html|1|false|4|261
 => 1176979825740*frames*2
 <= 1176979825740*0|testVariables||http://127.0.0.1:8000/debug_tests.html|166|false|226|238*1|onclick|MouseEvent|http://127.0.0.1:8000/debug_tests.html|1|false|4|261
```

### Get variables

Command: **variables**
Request arguments (**version 1**):

* _arg0_ : variable name

Request arguments (**version 2**):

* _arg0_ : thread id

* _arg1_ : variable name

Reply arguments:

* _arg0..argN_ : variable properties 0-N

* _subarg0_ : property name

* _subarg1_ : property type

* _subarg2_ : property flags (see [#Variable property flags](#variable-property-flags))

* _subarg3_ : property value

See [#Special variables](#special-variables).

Example:

```
=> 1176979825731*variables*frame[0]
 <= 1176979825731*this|Window|o|[object Window]*vArray|Array|lowpv|item0,,,itemN*vBool|Boolean|lwpv|false*vDate|Date|lwpv|Thu Apr 19 2007 17:50:33 GMT+0700*vError|Error|lowpv|Error*vMyObj|MyObject|lowpv|[object Object]*vNum|Number|lwpv|7*vObj|Object|lowpv|[object Object]*vObj2|Object|lowpv|Object toString() method is used here*vRect|Shape|lowpv|[object Object]*vStr|String|lwpv|"Hello, World!"

 => 1176979825733*variables*eval[0]
 <= 1176979825733*height|integer|wn|1*type|String|wn|"rect"*width|integer|wn|1*x|integer|wn|0*y|integer|wn|0
 => 1176979825733*variables*2*eval[0]
 <= 1176979825733*height|integer|wn|1*type|String|wn|"rect"*width|integer|wn|1*x|integer|wn|0*y|integer|wn|0
```

### Get variable details

Command: **details**
Request arguments (**version 1**):

* _arg0_ : variable name

Request arguments (**version 2**):

* _arg0_ : thread id

* _arg1_ : variable name

Reply arguments:

* _arg0_ : command status (_result_)

* _arg1_ : detailed value (toString representation)

Example:

```
=> 1176979825734*details*frame[0].vRect
 <= 1176979825734*result*{x: 0, y: 0, w: 10, h: 10}
 => 1176979825734*details*2*frame[0].vRect
 <= 1176979825734*result*{x: 0, y: 0, w: 10, h: 10}
```

### Evaluate expression

Command: **eval**
Request arguments (**version 1**):

* _arg0_ : evaluation context (variable name)

* _arg1_ : expression

Request arguments (**version 2**):

* _arg0_ : thread id

* _arg1_ : evaluation context (variable name)

* _arg2_ : expression

Reply arguments:

* _arg0_ : command status (_result_, _exception_)

* _arg1_ : evaluation id or exception text

* _arg2_ : evaluation result

* _subarg0_ : property type

* _subarg1_ : property flags (see [#Variable property flags](#variable-property-flags))

* _subarg2_ : property value

Example:

```
=> 1176979825732*eval*frame[0]*vRect
 <= 1176979825732*result*0*Shape|ow|[object Object]
 or
 <= 1176979825732*exception*Undefined variable
 => 1176979825732*eval*2*frame[0]*vRect
 <= 1176979825732*result*0*Shape|ow|[object Object]
```

### Change variable value

Command: **setValue**
Request arguments (**version 1**):

* _arg0_ : variable name

* _arg1_ : value reference name

Request arguments (**version 2**):

* _arg0_ : thread id

* _arg1_ : variable name

* _arg2_ : value reference name

Reply arguments:

* _arg0_ : command status (_result_, _exception_)

* _arg1_ : value property or exception text

* _subarg0_ : property type

* _subarg1_ : property flags (see \[aptanastudiodev:[#Variable property flags](#variable-property-flags)\])

* _subarg2_ : property value

Example:

```
=> 1176979825735*setValue*frame[0].vRect2*eval[1]
 <= 1176979825735*result*String|w|Hello!
 => 1176979825735*setValue*2*frame[0].vRect2*eval[1]
 <= 1176979825735*result*String|w|Hello!
```

## Unsolicited messages

### Suspend notification

Message: **suspended**
Message arguments (**version 1**):

* _arg0_ : suspend reason (_breakpoint_, _keyword_, _requested_, _exception_, _firstLine_ or any of stepping command names)

* _arg1_ : top frame's file URI

* _arg2_ : top frame's line number

Message arguments (**version 2**):

* _arg0_ : thread id

* _arg1_ : suspend reason (_breakpoint_, _keyword_, _requested_, _exception_, _firstLine_ or any of stepping command names)

* _arg2_ : top frame's file URI

* _arg3_ : top frame's line number

Example:

```xml
<= suspended*keyword*http://127.0.0.1:8000/debug_tests.html*166
 <= suspended*stepInto*http://127.0.0.1:8000/debug_tests.html*167
 <= suspended*2*keyword*http://127.0.0.1:8000/debug_tests.html*166
 <= suspended*2*stepInto*http://127.0.0.1:8000/debug_tests.html*167
```

### Resume notification

Message: **resumed**
Message arguments (**version 1**):

* _arg0_ : resume reason (_started_, _abort_ or any of stepping command names)

Message arguments (**version 2**):

* _arg0_ : thread id

* _arg1_ : resume reason (_started_, _abort_ or any of stepping command names)

Example:

```xml
<= resumed*start
 <= resumed*stepInto
 <= resumed*resume
 <= resumed*2*start
 <= resumed*2*stepInto
 <= resumed*2*resume
```

### Client action notifications

Message: **client**
Message arguments:

* _arg0_ : action (_suspend_, _terminate_, _open_)

* _arg1..argN_ : optional action arguments

**suspend** : request to suspend debugger (all threads)
**terminate** : request to terminate debugger session
**open** : request to open file/URI in IDE editor

* _arg1_ : file URI

Example:

```xml
<= threads*created*1*main
 <= threads*created*2*worker
 <= threads*destroyed*2
```

### Log console message

Message: **log**
Message arguments:

* _arg0_ : log type (_out_, _warn_, _err_)

* _arg1_ : message text

* _arg2_ : (optional) source context (_src_, _trace_)

**src**:

* _arg3_ : file URI

* _arg4_ : line number

**trace**:

* _arg3..argN_ : trace frame descriptions 3-N

* _subarg0_ : frame/function name

* _subarg1_ : function arguments separated by ", "

* _subarg2_ : file URI

* _subarg3_ : line number

Example:

```xml
<= log*out*Start message
 <= log*out*src*http://127.0.0.1:8000/debug_tests.html*170
 <= log*out*trace*testVariables||http://127.0.0.1:8000/debug_tests.html|166*onclick|MouseEvent|http://127.0.0.1:8000/debug_tests.html|1
```

### Scripts notification

Message: **scripts**
Message arguments:

* _arg0_ : action (_created_, _resolved_, _destroyed_)

* _arg1..argN_ : scripts definitions 1-N

**created**:

* _subarg0_ : script id

* _subarg1_ : file URI

* _subarg2_ : function name

* _subarg3_ : base script line number

* _subarg4_ : script line count

**resolved**:

* _subarg0_ : script id

* _subarg1_ : function name

**destroyed**:

* _subarg0_ : script id

Example:

```xml
<= scripts*created*225|http://127.0.0.1:8000/debug_tests.html|testStepping|26|8
 <= scripts*created*234|http://127.0.0.1:8000/debug_tests.html|anonymous|137|1
 <= scripts*resolved*234|toString*240|myFunc0*241|myFunc1*242|myFunc2*252|onreadystatechange
 <= scripts*destroyed*234*235*236
```

### Threads notification (Version 2)

Message: **threads**
Message arguments:

* _arg0_ : action (_created_, _destroyed_)

* _arg1_ : thread id

* _arg2_ : thread name (optional)

Example:

```xml
<= threads*created*1*main
 <= threads*created*2*worker
 <= threads*destroyed*2
```

## Appendix

### Variable property flags

* w : writable (assignment will lead to an error)

* c : constant (the property is a real constant, may not be supported on all platforms)

* n : enumeratable (visible to for/in loop)

* p : permanent (property cannot be deleted)

* a : argument to function

* v : local variable in function

* l : local/scope variable (top-level in scope)

* e : exception (exception occurred, value is exception)

* r : error (error occurred, value is error)

* o : object/composite value (expandable, has properties)

### Special variables

When the debugger suspend was caused by an exception and the exception details are available, the exception variable (with the 'e' property flag) should be returned on the top scope. If the debugger allows to change/reject the exception, the variable should also have 'w' writable property.
