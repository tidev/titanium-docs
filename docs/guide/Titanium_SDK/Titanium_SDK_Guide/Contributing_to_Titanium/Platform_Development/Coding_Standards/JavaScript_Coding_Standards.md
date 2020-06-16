---
title: JavaScript Coding Standards
weight: '30'
---

# JavaScript Coding Standards

::: tip Contents

:::

## General

Any violation to these standards is allowed if it enhances readability.

This guide serves as the coding standard for all Appcelerator JavaScript code including the Mobile Web platform, Titanium Mobile project templates, KitchenSink, and all other sample code.

1. All variables, functions, methods, class names, and comments SHOULD be written in English.

2. Line length SHOULD be limited to a "screen width" which can vary between 100 and 200 characters.

3. BE CONSISTENT.

## Files

1. Filenames SHOULD be all lower case if the file does not contain any instantiable objects (classes).

2. Filenames SHOULD be CamelCase if the file contains an instantiable object (class).

3. Directories SHOULD be all lower case and unless the directory serves as a part of a module path (i.e. /path/to/Ti/Filesystem).

## Variables

1. Public variables SHOULD be mixedCase (i.e. containerNode, firstItem, etc).

2. Private variables SHOULD be \_underscoreMixedCase (i.e. \_position, \_layerIdx).

3. Constants SHOULD be UPPER\_CASE.

4. All variables SHOULD be defined at the top of the function with a single "var" keyword.

5. Global variables SHOULD be kept to a minimum to avoid naming collisions and scope lookups.

6. Variables SHOULD be descriptive, but short names are acceptable in small functions.

7. Variable names MUST NOT be reserved words or web browser built-in objects: window, document, etc..

8. Complementary names MUST be used for complementary entities (i.e. get/set, add/remove, create/destroy, start/stop, etc).

## Functions

1. Public functions and methods SHOULD be mixedCase (i.e. myFunction, doSomething, etc).

2. Private functions and methods SHOULD be \_underscoreMixedCase (i.e. \_init, \_destroyUI, etc).

3. Anonymous functions SHOULD be named for easier debugging (names would be removed during minification).

4. Nested functions ARE permitted.

5. Closures ARE permitted, but caution is advised to avoid memory leaks.

6. Method names SHOULD be verbs or verb phrases (i.e. getValue(), isEnabled()).

## Objects

1. Methods SHOULD be defined on the object's prototype, not via "this" in the constructor.

2. Array and object properties SHOULD be initialized in the constructor, not in the prototype.

3. Array and object properties MUST NOT be added to the prototype.

4. Properties that are boolean-ish and default to falsey (false, null, undefined, 0) do not NEED to be defined before use.

## Modules

1. Modules MUST follow the CommonJS modules or AMD (asynchronous module definition) specification.

2. Module IDs MUST NOT start with a forward slash.

3. Module IDs MAY contain periods.

4. Module IDs MUST NOT be named "require", "exports", or "module".

5. Module names SHOULD NOT begin with a number.

6. AMD modules SHOULD NOT provide a name to define() and let the loader automatically detect it.

7. AMD modules SHOULD NOT contain more than one module definition, though it is possible.

8. AMD modules MUST NOT contain more than one anonymous module definition.

## Whitespace

1. Tabs (set to 4 spaces) MUST be used for indentation rather than spaces.

2. Blank lines SHOULD NOT contain any tabs or spaces.

3. Blank lines SHOULD be used to separate blocks of logic.

4. Commas SHOULD be followed by a space.

5. Ternary operators (inline-ifs) SHOULD have spaces around both the ? and : operators.

    ```
    drink = (location == "scotland") ? "whisky" : "whiskey";
    ```

6. Semi-colons in for loops SHOULD be followed by a space.

7. There SHOULD be a space around the outside of the parentheses in if, switch, catch, while, and for constructs.

8. Operands and operators SHOULD be separated by spaces.

9. Statements MAY be aligned wherever it improves readability.

## Braces

1. All block structures including if, else, switch, try, catch, function, while, for, and so on MUST use braces around body.

2. Opening braces SHOULD be at the end of the first line of the block statement.

3. Closing braces SHOULD be on a separate line and indented to match indentation of the opening brace's line.

```
if (error) {
   crashAndBurn();
}
```

## Semicolons

1. All lines of code MUST end with one and only one semicolon.

    1. A compile-time JavaScript minifier may remove semicolons to reduce file size.

## Loops

1. Generally, index variables SHOULD be defined with all other variables at the top of the function.

2. Empty for and while loops SHOULD have empty braces or a semicolon at the end of the line.

3. When looping over arrays, for loops SHOULD pre-determine the length (i.e. for (var i = 0, len = arr.length; i < len; i++) {}).

4. for loops SHOULD be used instead of for-in loops when looping over arrays.

    1. for-in is acceptable for looping over objects, though it is preferred to use the ECMAScript 5 Object.keys() method.

5. You SHOULD use a for loop instead of Array.forEach().

    1. The overhead of calling a function for each items is significant.

6. Iterator variables SHOULD be named i, j, k, etc.

## Conditionals

1. Short circuiting conditionals are acceptable (i.e. hasX && doSomething()).

2. The last statements in a switch SHOULD NOT end with a break statement.

3. switch cases MAY be broken with either a break or return.

4. Ternary operators should be used for simple code conditions (i.e. var y = x ? 1 : 2; isEnabled() ? doSomething() : doSomethingElse();).

5. Use !~ with an indexOf() to check if it contains a value.

6. Use !(a<b || b<a) to check if two dates or arrays are equal.

## Data Types

1. Non-boolean variables SHOULD be cast to boolean using !! or ! operators.

2. Non-integer variables SHOULD be cast to integer using |0 (i.e. "123.4"|0 outputs 123).

3. Non-string variables SHOULD be cast to strings using ''+ (i.e. ''+123 outputs "123").

4. Multiline strings SHOULD be broken up into separate concatenated strings instead of using backslashes at the end of lines.

5. Strings SHOULD generally use single quotes, though double quotes are acceptable unless the string contains zero or one characters or contains HTML/XML/JSON codes.

6. Literals SHOULD be used instead of constructors (i.e. use \[\] instead of Array(), {} instead of Object(), '' instead of String()).

7. Object literal keys SHOULD only use quotes if the key is a reserved word or contains a space.

8. Custom object MAY have toString() methods as long as they return a string without error.

9. Arrays and objects SHOULD NOT have hanging commas.

10. Floating point constants SHOULD be written with a digit, followed by a decimal point, and at least one decimal (i.e. 1.0).

## Allowed Constructs

1. Use built-in standard functions (i.e. string.charAt(3) instead of string\[pe:3\]).

## Disallowed Constructs

1. with statements ARE NOT permitted.

2. You SHOULD NOT modify prototypes of internal objects.

    1. Possible exception when trying to shim a standardized function that is missing in the given implementation.

3. You SHOULD NOT use parenthesis when using delete, typeof, void or calling return, throw, case, in, or new.

4. You SHOULD NOT use commas at the beginning of a line; they should be at the end of the line.

## Comments

1. Single line comments MUST use C++ style single-line comments, introduced by two slashes:

    ```
    // my comment
    ```

1. Multi-line comments MUST use C-style comments, beginning with /\* and ending with \*/:

    ```
    /* my multi-
    line comment */
    ```

## Documentation

1. Code SHOULD be documented using JSDoc annotations ([https://github.com/jsdoc3/jsdoc](https://github.com/jsdoc3/jsdoc)).

## Exception Handling

1. try/catch SHOULD be used instead of return codes for complex routines.

2. Thrown exceptions SHOULD use built-in exception types: a string, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError.

    1. Custom exceptions are acceptable as long as they define their own toString() function.
