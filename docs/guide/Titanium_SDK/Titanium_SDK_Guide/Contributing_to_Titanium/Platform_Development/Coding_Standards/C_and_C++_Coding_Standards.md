---
title: C and C++ Coding Standards
weight: '10'
---

# C and C++ Coding Standards

::: tip Contents

:::

## Synopsis

This document is intended to provide a base standard for all languages derived from C and C++ that we work with at Appcelerator, allowing us to write clean, consistent-looking, readable code. Due to the lack of well-defined common C coding standards, we have grown our own from scratch, as opposed to the Java and Objective-C standards, which are based on well-defined existing standards that have modifications made to them.

This document does not include platform- or product-specific conventions for C or C++.

## Standards

The following is a set of standard formatting and naming conventions which we expect to be followed for C or C++ source code.

### Column width

We do not enforce column width. However, you should make a best effort to keep your source readable on 15" monitors, which have approximately 200 columns (based off of Andale Mono 12pt.)

### Indentation

* Indentation is done in tabstops (`\t`) to allow for configurable spacing in modern IDEs. For the purposes of all indentation, one tabstop is considered to be 4 spaces.

#### Whitespace

* Consecutive lines of whitespace should be avoided within blocks of code, but may be used to separate logical sections of definitions.

* Whitespace should be used to separate logical code blocks. Use your best judgement.

* Blocks which are used solely for scoping must be both preceded and followed by one line of whitespace.

* Whitespace should be placed between function definitions.

    **Example**

    ```
    void f(x)
    {
    //....
    }

    void g(x)
    {
    //....
    }
    ```

* Comments should be preceded by a line of whitespace, unless they are inline.

* Complete flow control statements (`do...while`, `while`, `if...else if...else`, `switch`) should be followed by whitespace.

* `return` statements should not be followed by whitespace.

#### Alignment

* All alignment must be on tabstops.

### Comments

There are two types of comment styles: Comments formatted for internal documentation, and comments formatted for documentation generation.

#### Documentation generation

* Comments must follow the general formatting rules below, **except** for where they conflict with the documentation generation rules (appledoc requires that the comment open with `/**` on a single line to be processed, for example, and some may not allow for leading splats or require other keywords.)

#### Internal documentation

* Commenting style:

    * Methods or functions are documented with `/* ... */`, where each line has aligned splats

    * Code is documented with aligned `//...` statements

    * Commented-out code is documented with `/* ... */`

**Example**

```javascript
/*
 * Describe your function here
 */
void myfunctin()
{
    //
    //
    //
    do something here

    //
    //
    //
    do something else really complex

   /*
    * Why didn't we delete this?
    *
        dead_code()
    */
}
```

#### Forbidden words

The following words are not allowed in comments:

* hack

* temporary

* workaround (**exception:** In conjunction with an explanation of an issue we have no control over)

* "implement later" or other TODO-equivalent statements (use TODO)

* Any words you would not say in front of a nice grandma

* "Why do we...?" (check the blame, ask the original committer, and document or remove the questionable code)

* Words or phrases which could be considered as detrimental to the platform

In addition it is expected that all of your comments will contain correct spelling (and reasonable grammar for the intent of the comment)

#### When to write comments

* Exposed API (public, protected, or a C function in a header file)? **Write a comment, and make sure the docgen can pick it up.**

* Done something strange? **Write a comment.**

* Need to write pseudocode or logic flow? **Write a comment.**

* Handling a unique edge case? **Write a comment.**

* Is your code a platform "workaround" of some kind? **Write a comment.**

* Did you have to ask a colleague about the intent of code they wrote? **Write a comment for it.**

* When in doubt? **Write a comment.**

#### When not to write a comment

* If your comment has absolutely nothing useful to say about the source, **don't write a comment.**

* If your comment is redundant, **don't write a comment.**

* If your comment explains something obvious in the source, **don't write a comment.**

### Braces

* Closing braces must be on their own line, and followed by whitespace.

    * **Exception**: Closing braces immediately followed by another closing brace are not followed by whitespace.

* Opening braces must be on their own line, aligned with the previous statement.

    * Opening braces should not be followed by whitespace.

**Example**

```
void f(x)
{
    if (x)
    {
      // ...
      //
      //
      //
    }
    else
    {
      // ...
    }

  while (true)
    {
    }
}
```

### namespace

NEVER use "using namespace x". This include "std" in C++

#### namespace ordering

Namespaces should follow the following declaration/definition ordering, with each section separated by whitespace:

namespace-contents:

* `namespace`

* `const` variables

* `enum`

* typedefs (including `struct` / `union`)

* function declarations

* inlined functions

* class information

    * definitions

    * implementation (inline & template)

* namespace-contents

#### namespace implementation

When using a namespace in a implementation file, use the following style:

```
// this is what we want
namespace
{
  MyType1 myFunc1(MyType2 x, MyType3 y)
  {
    // impl
  }
}

//here is what we don't want (even worse if you have nested namespaces):
namespace::MyType1 namespace::myFunc1(namespace::MyType2 x, namespace::MyType3 y)
{
  // impl
}
```

### Headers

* You are expected to include standard `#ifndef / #define / #endif` guards in your header files, where the macro is named: `[pe:file_basename]h``_`

    **Example**

    ```
    // hello.h
    #ifndef __hello_h__
    #define __hello_h__

    //your_header_here

    #endif
    ```

* Headers must be `extern "C"` if intended to be interoperable with C code.

* Headers should contain logically grouped macros, typedefs, classes, and function definitions only, which are intended to be used by code from outside of the implementation file.

    * **Exception:** Headers must also contain implementations for templated code, as required by C++.

    * **Exception:** Headers must contain implementations for inline functions, but these should be used sparingly. Remember that `inline` is only a compiler hint.

* Headers **must**contain an up-to-date copyright notice. If you modify a header with an incorrect copyright date, you are expected to update it.

    * If you modify the source for a 3rd party library, you are expected to include a copyright header which mentions that "some modifications" were performed by Appcelerator, and those changes are available under the same license as the original source (or a compatible license).

#### Order of declarations

Headers should have their definitions/declarations ordered in the following way (with `namespace-contents` as above), with whitespace between sections:

* copyright notice

* header include check

* system `#include`

* 3rd party `#include`

* project `#include`

* macros

* namespace-contents (same ordering of contents, `namespace` optional)

### Preprocessor

The preprocessor deserves its own detailed section. However, you are **discouraged** from using the preprocessor except where absolutely necessary.

#### Naming

Macro names must:

* Be in all caps

* Have words separated by underscores

* Be descriptive

#### Indentation

All preprocessor directives must not be indented (start at column 0) although their contents may be aligned with surrounding code.

#### The include Directive

* For system headers: `#include <...>`

* For project/3rd party headers: `#include "..."`

#### Constants

Do not define global constants with `#define`. Use `const` variables only, and ideally constants are in a `namespace` as well (when writing C++.)

#### The define Directive

* Do not include a semicolon at the end of a `#define`

* Use `#define` **only** for situations in which you cannot use `const` or `inline`functions. Such examples may include:

    * `DEBUG` or other conditional-compilation checks

    * Function-like calls which cannot be easily abstracted into functions (such as our Objective-C macro `RELEASE_TO_NIL`)

    * Function generators (such as `getX` / `setX` pairs, or defining a function which returns a constant value)

* `#define`statements which perform any sort of inline operation must be enclosed in parenthesis

    **Example**

    ```
    #define ADD(x,y) (x+y)
    ```

* Multi-line `#define` statements are expected to be formatted according to the usual rules, with the first statement of the `#define`not being indented.

    **Example**

    ```
    #define NAMED_PROPERTY(name) \
    void* name = NULL; \
    void set_##name(void* value) \
    { \
      name = value;
    } \
    \
    void* get_##name(void) \
    { \
      return name;
    }
    ```

#### Conditionals

* Prefer `#ifdef` and `#ifndef` over `#if defined(...)` and `#if !defined(...)`.

* Conditionals should have their contents aligned with surrounding code, or if the conditional does not have surrounding code, their first line should not be indented.

### Flow control

* All flow control statements must have a logical block associated with them (no single-statement if)

* Checking for validity of a pointer or value directly is allowed: `if (ptr)` and `if (ptr != NULL)`are both acceptable. Where clarity is a primary concern (such as compound conditionals) the latter is preferred.

    **Example**

    ```
    if (x)
    {
      // ...
    }
    else if (y ||
             z)
    {
      // ...
    }
    ```

#### switch/case

* Each `case` must have a logical block associated with it unless it is fallthrough-only.

* `default:` should be the final case of your `switch`statement.

    * **Corollary** : `default` should never be a fallthrough statement. Even if it does nothing, it should consist of a `break` or `return`.

* Fallthrough `case` must have their final line be the comment `// FALLTHROUGH`, or have the comment inline if they are fallthrough-only.

* `case` statements which early-`return` do not have to end with a `break`statement.

    **Example**

    ```
    char token;
    int x;
    int y;
    // code
    switch (token)
    {
      case '-':
      {
        y = -y;
        // FALLTHROUGH
      }

      case '+':
      {
        return x + y;
      }

      // TODO: Implement these ops
      case '*': // FALLTHROUGH
      case '/': // FALLTHROUGH
      default:
      {
        printf("Unknown operator");
        break;
      }
    }
    ```

#### goto

Usage of `goto` is necessary sometimes but each usage must:

* Be preceded by a comment indicating the necessity of `goto`

* Use a well-named label

Only use `goto` when it is absolutely required and you have no other option.

### Looping constructs

Looping constructs follow all the rules for flow control, as far as placement of braces and organization of multi-line conditionals.

Whether or not to use inline variable declarations for any looping construct (but especially for your `for` loop iterator(s)) is at your discretion.

### Functions

* Function names should not be camel-case; they should have words separated by \_.

* No space between the method name and opening parenthesis

* There must be a single space (or newline) between a `,` and the next variable in the arguments list

* Every function is expected to have a declaration. Functions which are to be exported or otherwise publicly available are to be declared in an associated header file; all other functions are declared in the implementation.

* Declarations should include both a type and a name for all parameters.

* Functions which take no arguments do not need to be declared as `f(void)`; can be `f()` instead.

* Functions should be named as "actions" rather than things (`get_x()` vs. `x()`)

**Example**

```
void foo_bar(int x, int y,
        int z);
int f();

void foo_bar(int x, int y, int z)
{
  // func goes here
}

int f()
{
  return 0;
}
```

#### return

Functions which `return` a compound statement should have that expression wrapped in parenthesis.

### Variables

* Variables should not be camel-case; they should have words separated by \_.

* Variables should have descriptive names; the exception is for pure iterators, which are allowed to be `i, j, k`.

* Variables must be defined at the beginning of a block.

* Only one variable should be defined per line (no comma operator when defining variables.)

* Only one variable should be assigned to per line (no chained `=`.)

* Variables should be named as "things" rather than actions or gerunds.

* Variable types should follow these rules:

    * Pointer types should have the \* after the type, followed by a space

    * Reference types should have the & after the type, followed by a space

    * Array types should have the `[]` after the variable name

    * Array types should be preferred over pointer types where the intended use of the object is as an array.

**Example**

```
int x;
int* x_ptr;
int& x_ref;
char* argv[];
```

### enum

* Names of `enum`constructs should be capitalized camel-case, and placed on the same line as the closing brace.

    **Example**

    ```
    enum {
        ONE = 1,
        TWO,
        THREE
    } FooValues; // name should be camelcase with leading cap
    ```

### typdef

* Names of type constructs should be capitalized camel-case

### struct and union

* **Do not use** `struct` **as a C++ construct.** `struct`should be used only in the way that it is defined by the C specification.

    * In particular, **do not include functions as part of your** `struct`**!** `structs` are POD (plain old data). Do not use the `public` access specifier in your structs, either.

* `struct` and `union` should only be used as part of a `typedef`.

* The name of the type associated with the construct should be on the same line as the closing brace, not on its own line.

    **Example**

    ```
    typedef struct
    {
        int x;
    } X;

    typedef union
    {
        int x;
        float y;
    } Y;
    ```

### Operators

* Always put a space both before and after binary operators.

* Always put a space before any unary prefix operators, unless immediately preceded by a parenthesis.

    * All casts (C-style and C++ `x_cast<>()`) are considered unary prefix operators for this purpose.

* Always put a space after any unary suffix operators, unless they are immediately followed by a `;`.

* Always place parenthesis around compound statements where order of operations may be ambiguous (such as mixing binary and arithmetic operators.)

* Expressions spanning multiple lines should have their continuing lines indented to one tabstop beyond the initial `=`or parenthesis.

    **Example**

    ```
    int x = 1 + 2;
    int* x_ptr = &x;
    double d = (float)(*x_ptr) / 2.0;
    ++x;
    long example = d /
            (d+1);
    ```

#### Prefix/postfix increment/decrement

* Prefix increment/decrement is preferred over postfix increment/decrement.

* Make a best effort to avoid usage of these operators in compound statements.

#### Ternary

Usage of ternary is discouraged, but it is often useful for certain cases (such as assignment or return value based on a condition.) When using ternary, you should:

* Consider ternary to always be a compound statement in and of itself

* Place any compound statements within parenthesis

* Treat both the `?` and `:` characters as binary operators

* Avoid obvious side-effects within ternary, unless they are intended.

**Example**

```
int f(boolean check)
{
  return (check ? (1+1) : 0);
}
```

#### Operator overloading

A special word on operator overloading for C++: **Avoid operator overloading.** Overloading operators leads to interesting scenarios such as this one:

**Counterexample**

```
class Vector
{
  inline double operator[](int i) {
    // return something from impl
  };
};

// Don't you even dare think of making Matrix a base class for
// RowMajorMatrix or ColumnMajorMatrix, because the problem below still
// happens every time we abstract either to a Matrix.
//
// Adding a boolean row_major as part of the constructor (and a read-only property)
// is ALSO not acceptable because then every time you read from a matrix, you have to
// check it.
class Matrix
{
  // constructor intentionally omitted
  Vector representation[];
  inline Vector operator[](int i) {
    return representation[i];
  }
};

Vector a(1,2,3);
Vector b(4,5,6);
Vector c(7,8,9);

Matrix m(a, b, c);
// Without looking at the definition of Matrix::Matrix(...),
// this could be EITHER:
// 3 (row major)
// 7 (column major)
double what = m[0][2];

// Here's the better way to do it (although there's still an operator overload, it makes "more sense")
double is3 = m.row(0)[2];
double is7 = m.col(0)[2];
```

In the case where you **absolutely must** overload an operator (such as placement `new()`, incrementing enumerators, or creating a functor) then you are expected to provide ample documentation justifying your folly and make every effort possible to prevent other developers from committing crimes such as the above example.

An additional note: You must define both `operator+``(void)` and `operator``+(int)` when overloading increment (and the equivalent operators when doing decrement) **and the definitions must be identical.**

### C++ rules

These rules are to be applied on top of any C rules described above. If there is a conflict then the rule described in the C++ section takes priority.

#### Filenames

* use .h, .c and .cpp only

#### Classes:

* Members and methods should be order by public, protected and then private

* All members and methods should be within a access level block

* Private members should be in a access level specifier (IE: don't rely on the default class access level)

* Access identifiers within a class should be aligned with the "class" in the declaration. IE:

    ```
    class MyClass
    {
    public:
      int x;

    private:
      int y;
    }
    ```

* Permissions should be strict by default and opened up as needed

* Inline methods should be defined in a implementation file and not in the header or class declaration.

* Keep implementation outside of class declaration. The class declaration should be seen as a interface that you can read over quickly in order to understand how to use it.

* If class is meant to be derived from, make sure to include a virtual destructor (a destructor defined for this purpose does not fill the need for the "rule of three")

* Respect the rule of three ("always override operator=, destructor, and copy constructor if you override any").

* Comment if a method is static in method comment within the implementation file
    \*Remember that virtual methods have time and cost (IE: just think when using them)

#### General C++

* **Multiple inheritance should be avoided in most cases.** Inheritance of a single normal class and multiple interfaces (pure virtual class) is allowed. Keep in mind that when using multiple inheritance you are going to draw strong questions and concerns regarding the design - be prepared with very good answers.

* "new" should be used over malloc when possible

* Shouldn't really need to be called out, but NEVER mix malloc/delete and new/free

* Be const correct within reason. It can be a huge pain in the ass but it's less painful in the long run.

    * Try to avoid const\_cast<>()

* Use function overloading rather than name variants if possible (IE: add() with overloaded versions rather than addInt, addFloat, etc)

* Remember that STL can be expensive. Dont use a sledgehammer to drive a nail into the wall

### Other rules

#### C99

You are expected to use a C99-compliant compiler for all C and C++ code.

#### C++11

Although you may use a (partially) C+11-compliant compiler, **do not** use C+11 features in any code.

#### BOOST

BOOST is illegal. If you make a commit which uses BOOST (and is not a 3rd party library that depends on BOOST, and even then...) you are fired.

#### Nonstandard extensions

Nonstandard extensions such as blocks or GCC-specific macros/definitions/keywords should not be used unless you are writing code which is intended to be used with compilers supporting these features **only** and do not intend to port the source to, or use on, other platforms.

If you must use these features, place them within the appropriate preprocessor conditional blocks.

#### C++ FQA familiarity

When writing C++, you may want to maintain a level of familiarity with the [FQA (Frequently Questioned Answers)](http://yosefk.com/c++fqa/) to avoid grammar ambiguities and recognize inappropriate usage of features. This is **especially true** when using the [FAQ Lite](http://www.parashift.com/c++-faq-lite/) as a reference.

#### Code clarity

Writing professional, enterprise-level code is not an obfuscation contest. Do not use aggressive, weird tricks for optimization or other confusing-looking code without first:

* Considering all other possible options

* Documenting it

Use your best judgement as to what constitutes "clear code" and expect a general consensus over what constitutes that particular style as the source base evolves.
