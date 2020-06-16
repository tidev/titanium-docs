---
title: Current Theme Scopes
weight: '20'
---

# Current Theme Scopes

## Overview

A list of all of the scopes currently available in Studio Themes.

::: warning ⚠️ Warning
You can find out the current scope by place the cursor at a particular location and choosing "Commands > Bundle Development > Show Scope".
:::

## General Tokens

We define special tokens for items that didn't fit well with this system as they aren't affiliated with an editor or language, and we extended the meaning of some of the existing tokens.

| Token | Description |
| --- | --- |
| markup.inserted | fg/bg color used for git decorations for inserted lines, added files and staged files. |
| markup.deleted | fg/bg color used for git decorations for deleted lines and unstaged changed files. |
| ansi.black | color used in Terminals when we encounter the ASNI color code for black. |
| ansi.white | color used in Terminals when we encounter the ASNI color code for white. |
| ansi.gray | color used in Terminals when we encounter the ASNI color code for gray. |
| ansi.magenta | color used in Terminals when we encounter the ASNI color code for magenta. |
| ansi.cyan | color used in Terminals when we encounter the ASNI color code for cyan. |
| ansi.yellow | color used in Terminals when we encounter the ASNI color code for yellow. |
| ansi.blue | color used in Terminals when we encounter the ASNI color code for blue. |
| ansi.green | color used in Terminals when we encounter the ASNI color code for green. |
| ansi.red | color used in Terminals when we encounter the ASNI color code for red. |

## Console Scopes

Scopes currently in use by our Terminal/Console

| Token | Description |
| --- | --- |
| console.error | Error |
| console.output | Output |
| console.input | Input, Info output |
| console.prompt | Prompt, Trace output |
| console.warning | Warning |

## CSS Scopes

Scopes currently in use by our CSS editor

| Token | Description |
| --- | --- |
| _source.css_ | _Base scope for file_ |
| _source.css.embedded.html_ | _CSS Embedded in HTML_ |
| comment.block.css | Comment |
| constant.numeric.css | Number |
| constant.other.color.rgb-value.css | RGB |
| entity.name.tag.css | Element |
| entity.other.attribute-name.class.css | Class |
| entity.other.attribute-name.id.css | ID |
| invalid.deprecated.color.w3c-non-standard-color-name.css | Deprecated color |
| keyword.control.at-rule.media.css | @ rule |
| keyword.other.unit.css | Percentage |
| punctuation.asterisk.css | Star |
| punctuation.section.property-list.css | Left curly |
| punctuation.section.property-list.css | Right curly |
| punctuation.separator.css | Comma |
| punctuation.separator.key-value.css | Colon |
| punctuation.slash.css | Slash |
| punctuation.terminator.rule.css | Semicolon |
| source.css | Identifier |
| string.quoted.double.css | Double quoted string |
| string.quoted.single.css | Single quoted string |
| support.constant.color.w3c-standard-color-name.css | Color |
| support.constant.font-name.css | Font |
| support.constant.media.css | Media |
| support.constant.property-value.css | Value |
| support.function.misc.css | Function |
| support.type.property-name.css | Property |
| undefined.css | Undefined |

## HAML Scopes

Scopes currently in use by our HAML editor

| Token | Description |
| --- | --- |
| meta.section.attributes.haml | Ruby Attributes |
| meta.prolog.haml | Doctype |
| meta.tag.haml | Tag |
| text.haml | Text |
| meta.line.ruby.haml | Ruby Eval |
| comment.line.slash.haml | HTML Comment |
| meta.section.other.haml" | Interpolation |
| source.ruby.embedded.haml | Embedded Ruby |
| meta.section.object.haml | Object |
| meta.line.ruby.haml.source.ruby.embedded.haml | Comment |

## HTML Scopes

Scopes currently in use by our HTML editor

| Token | Description |
| --- | --- |
| _text.html.basic_ | _Base scope for file_ |
| comment.block.html | HTML Comment |
| constant.character.entity.html | Entities |
| entity.name.tag.block.any.html | Block tag element name |
| entity.name.tag.inline.any.html | Inline tag element name |
| entity.name.tag.script.html | Script tag 'script' name |
| entity.name.tag.structure.any.html | Structure tag element name |
| entity.name.tag.style.html | Style tag 'style' name |
| entity.other.attribute-name.class.html | Class attribute in tag |
| entity.other.attribute-name.html | Attribute in tag |
| entity.other.attribute-name.id.html | ID attribute in tag |
| invalid.illegal.bad-ampersand.html | bare/unescaped ampersand |
| meta.tag.block.any.html | scope for the tag (applies to anything inside brackets) |
| meta.tag.other.html | Meta tag |
| meta.tag.sgml.html meta.tag.sgml.doctype.html | !DOCTYPE |
| punctuation.definition.tag.begin.html | Tag start '<' |
| punctuation.definition.tag.end.html | Tag end '>' |
| punctuation.definition.tag.self\_close.html | Self-closing tag |
| punctuation.separator.key-value.html | Equal sign '=' |
| source.css.embedded.html | style tag contents |
| source.js.embedded.html | Javascript script tag contents |
| source.svg.embedded.html | SVG tag contents |
| string.quoted.double.html | Double-quoted string |
| string.quoted.single.html | Single-quoted string |
| string.unquoted.cdata.xml | CDATA |
| text | Text (inside tag pairs) |
| undefined.html | Undefined |

## IDL Scopes

Scopes currently in use by our IDL editor

| Token | Description |
| --- | --- |
| source.idl | _Base scope for file_ |
| comment.line.double-slash.idl | IDL Single Line Comment |
| comment.block.documentation.idl | IDL Doc Comment |
| comment.block.idl | IDL Multi-line Comment |

## JavaScript Scopes

Scopes currently in use by our JavaScript editor

| Token | Description |
| --- | --- |
| _source.js_ | _Base scope for file_ |
| _source.js.embedded.html_ | _JavaScript Embedded in HTML_ |
| constant.language.boolean.false.js | False |
| constant.language.boolean.true.js | True |
| constant.language.js | Constant |
| constant.language.null.js | Null |
| constant.numeric.js | Number |
| keyword.control.js | Control keywords (break, case, if, else, return switch, goto, import, package, etc.) |
| keyword.operator.js | Operators (?, !, +, >>, &, ++, +=, etc.) |
| keyword.other.js | "Other" keywords (debugger) |
| meta.brace.curly.js | Curly brace |
| meta.brace.round.js | Parenthesis |
| meta.brace.square.js | Square brace |
| meta.delimiter.object.comma.js | Comma |
| operator.dot.js | Dot |
| punctuation.terminator.statement.js | Semicolon |
| source.js | Source |
| storage.modifier.js | Storage modifier |
| storage.type.js | Storage type |
| support.class.js | Support class |
| support.constant.dom.js | DOM constant |
| support.constant.dom.js | Support DOM constant |
| support.constant.js | Support constant |
| support.function.dom.js | DOM function |
| support.function.event-handler.js | Event handler function |
| support.function.js.firebug | Firebug function |
| support.function.js | Support function |
| undefined.js | Undefined |
| variable.language.js | Variable |

## PHP Scopes

Scopes currently in use by our PHP editor:

| Token | Description |
| --- | --- |
| keyword.php | Language keywords, such as 'use', 'clone', 'declare', 'new', etc. |
| keyword.namespace.php | 'namespace' keyword |
| keyword.control.php | Control-keywords such as 'if', 'continue', 'while', 'return', etc. |
| keyword.other.class.php | 'instanceof', 'extends' and 'implements' keywords |
| keyword.control.import.php | 'include', 'include\_once', 'require' and 'require\_once' keywords |
| keyword.operator.logical.php | Logical keywords and operators, such as 'and', 'at', 'as', '&&', '^', etc. |
| keyword.operator.bitwise.php | Bitwise operators, such as '<<', '&', etc. |
| keyword.operator.assignment.php | Assignments operators, such as '=', '%=', '^=', etc. |
| keyword.operator.comparison.php | Comparison operators, such as '<', '<=', '===', etc. |
| keyword.operator.arithmetic.php | Arthmetic operators, such as '+', '\*', etc. |
| keyword.operator.increment-decrement.php | '++' and '--' operators |
| keyword.operator.string.php | String operation functions, such as 'dirname', 'printf', etc. |
| keyword.operator.class.php | The '->' object operator |
| meta.function-call.static.php | Double-colon operator '::' |
| variable.language.php | 'this', 'self' and 'parent' keywords |
| variable.other.php | Other variables, like $my\_variable |
| variable.other.global.php | Super-Global variables, like $\_COOKIE, $\_FILES, etc. |
| variable.other.global.safer.php | 'Safer' PHP globals. Include: $GLOBAL, $\_ENV, $\_SERVER and $\_SESSION |
| constant.language.php | PHP language constants, such as '\__FILE__', '__LINE_\_', etc. |
| constant.language.other.php | 'True', 'False', 'Null', 'On', 'Yes', etc. |
| constant.php | The 'const' keyword |
| constant.numeric.php | For all types of numbers |
| constant.other.php | Constant name |
| storage.type.php | 'var', 'global' and 'interface' keywords |
| storage.type.function.php | 'function' keyword |
| storage.type.class.php | 'class' keyword |
| storage.modifier.public.php | 'public' modifier |
| storage.modifier.private.php | 'private' modifier |
| storage.modifier.protected.php | 'protected' modifier |
| storage.modifier.static.php | 'static' modifier |
| storage.modifier.final.php | 'final' modifier |
| storage.modifier.abstract.php | 'abstract' modifier |
| support.function.construct.php | 'echo' and 'eval' |
| support.function.builtin\_functions.php | 'define' |
| support.class.php | Built-in PHP API classes |
| support.constant.php | Built-in PHP API constants |
| support.function.php | Built-in PHP API functions |
| punctuation.terminator.expression.php | Semicolon |
| comment.block.documentation.phpdoc.php | PHPDoc block |
| comment.block.php | Block comment |
| comment.line.double-slash.php | Line comment that starts with // |
| comment.line.number-sign.php | Line comment that starts with # |

## Ruby Scopes

Scopes currently in use by our Ruby editor

| Token | Description |
| --- | --- |
| _source.ruby.rails_ | _Base scope for file_ |
| character.ruby | '?a' characters |
| comment.block.documentation.ruby | \=begin..=end block comments |
| comment.line.number-sign.ruby | \# single line comments |
| constant.language.ruby |  |
| constant.numeric.ruby | fixum, bignum, floats |
| constant.other.symbol.ruby | :symbol |
| default.ruby |  |
| entity.name.function.ruby | method name in definition |
| entity.name.type.class.ruby | class name in definition |
| entity.name.type.module.ruby | module name in definition |
| error.ruby |  |
| keyword.control.class.ruby | 'class' keyword |
| keyword.control.def.ruby | 'def' keyword |
| keyword.control.module.ruby | 'module' keyword |
| keyword.control.ruby |  |
| keyword.control.start-block.ruby | 'do' keyword |
| keyword.operator.arithmetic.ruby | plus, minus, divide, multiply, etc. |
| keyword.operator.assignment.augmented.ruby |  |
| keyword.operator.assignment.ruby |  |
| keyword.operator.comparison.ruby |  |
| keyword.operator.logical.ruby |  |
| punctuation.separator.inheritance.ruby |  |
| punctuation.separator.key-value |  |
| string.interpolated.ruby | Commands (inside backticks) |
| string.quoted.double.ruby | Double quoted string contents |
| string.quoted.single.ruby | Single quoted string contents |
| support.class.ruby |  |
| variable.language.ruby |  |
| variable.other.block.ruby | block arguments/variables |
| variable.other.constant.ruby | Constants |
| variable.other.readwrite.class.ruby | Class Variables |
| variable.other.readwrite.global.ruby | Global variables |
| variable.other.readwrite.instance.ruby | Instance variables |
| variable.parameter.ruby | Parameters in method definitions |

## SVG Scopes

Scopes currently in use by our SVG editor

| Token | Description |
| --- | --- |
| text.xml.svg | _Base scope for file_ |
| source.js.embedded.svg | JS Tag Contents |
| source.css.embedded.svg | CSS Tag Contents |
| comment.block.xml.svg | SVG Comment |
| meta.tag.preprocessor.xml.svg | SVG Processing Instruction |
| meta.tag.xml.svg | SVG Tag |
| meta.tag.block.any.xml.svg | SVG Block |
| string.unquoted.cdata.xml.svg | SVG CDATA |
| meta.tag.sgml.doctype.xml.svg | SVG DocType |

## XML Scopes

Scopes currently in use by our XML editor

| Token | Description |
| --- | --- |
| text.xml | _Base scope for file_ |
| comment.block.xml | XML Comment |
| meta.tag.preprocessor.xml | XML Pre Processor |
| meta.tag.xml | XML Tag |
| string.unquoted.cdata.xml | XML CDATA |
| meta.tag.sgml.doctype.xml | XML DocType |

## YAML Scopes

Scopes currently in use by our YAML editor

| Token | Description |
| --- | --- |
| source.yaml | _Base scope for file_ |
| comment.line.number-sign.yaml | YAML Comment |
| string.quoted.single.yaml | YAML Single Quoted String |
| string.quoted.double.yaml | YAML Double Quoted String |
| string.interpolated.yaml | YAML Interpolated String |
| meta.tage.directive.yaml | YAML Directive |
