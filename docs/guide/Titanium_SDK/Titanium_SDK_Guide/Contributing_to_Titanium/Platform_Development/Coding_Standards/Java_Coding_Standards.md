---
title: Java Coding Standards
weight: '20'
---

# Java Coding Standards

The purpose of this document is to lay out the expected coding style for Java source code used by Appcelerator. The rules laid out in this document apply to all Java source code written internally or accepted from community contributions. The coding standards laid out in this document are a modified version of the official Oracle coding standards for Java. This document only lists differences from the base standard, and certain aspects that should be highlighted. Furthermore, this document and the base standard cover not just syntax style, but some general "best practice" techniques that should also be adhered to.

**Failure on any of the points outlined in the base standard or this document are grounds for refusing a PR until updates are made.**

Baseline standard we are working from (READ THE COMPLETE BASELINE STANDARD BEFORE CONTINUING):

[http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html](http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html)

Appcelerator specific points:

1) Tabs are to be used for indentation rather than spaces.

2) In the event that a translation from tabs to spaces is required (beyond personal taste in how an editor displays source), there should 4 spaces per tab.

3) Do not use multiple declarations per line.

4) Always use a single space rather than tab in between the type and variable name in declarations.

5) Compound statements should always use parentheses. For example:

```
return (myVar ? myVar : defaultVar);
int x = (a ? (y = 2) : z);
```

6) **_if_**, **_while_** and **_for_** control structures must ALWAYS have braces around their contents

7) There should usually be a empty line before the opening line of a **_if_**, **_else if_** or **_else_** check for readability. The exception to this rule is a value assignment that is core to the control statement. For example:

```
a = true; // boolean previously set to false somewhere else
if (a) {
     // do neat things here
}
```

8) Empty **_for_** and **_while_** loops should have empty braces instead of the braces being purely omitted.

9) **_do while_** loops should have a empty line between the last statement the "} while (condition)" line.

10) **_switch_** statements should have a empty line between each **_case_** statement. For example:

```
switch (condition) {
case ABC:
    statements;
    /* falls through */

case DEF:
    statements;
    break;

case XYZ:
    statements;
    break;

default:
    statements;
    break;
}
```

11) Acronyms should NOT be capitalized inside method or variable names. For example:

```
int HTTPGETFired = 0; // this is bad

int httpGetFired = 0; // this is good
```

12) Use meaningful class, method and variable names. The goal here is for the role of a method or variable to be clear when reading the name (not after reading to source to see what a method does or how a variable is used). For example:

**Bad Variable Names**

```
int myVar; // glad you have a var, why does it exist?

int done; // unless the positioning of this variable makes it overwhelmingly clear as to what "done" means then this is bad. even if positioned within a small block, a better name can likely be identified

int shouldFire; // fire what? unless this is in the "MyCannon" class, be more specific

Class Container (Handler, Processor also work); // failboat

etc. etc. etc.
```

13) Regarding variable placement - read section 6.3 of the base standard. Once finished read it a second time for reinforcement. ;)

14) Regarding parentheses - read section 10.5.1 of the base standard. Same as #13.

15) Documentation. Monsters eat a puppy every time you fail to document properly. **BE NICE TO PUPPIES AND DOCUMENT THE CODE**.
Keep in mind that when writing comments, the entire goal is to quickly provide the needed information for a Class, variable or method to someone who might be unfamiliar with:

* The overall purpose of the code in question.

* Any relevant architecture that ties into understanding the purpose of the code.

* The original mindset and justification that went into creating the code.

* Any "gotchas" that need to be kept in mind.

If a developer should need to talk to the original developer who wrote the code in order to quickly understand the overall code structure and purpose, then the clarity of the code and level of documentation should be re-evaluated.
In General, the baseline standard outlines the documentation structure for a class and when documentation is needed but it will be elaborated on here:

* Every java source file without exception should have a file level comment at the top (baseline standard 3.1.1).

* Every class without exception should have a class documentation block (baseline standard 3.1.3).

* If the class has enough complexity to warrant having a implementation block, then the failure to include one should NOT be seen as optional (baseline standard 3.1.3).

* A method documentation block should only be omitted when the purpose of the method is overwhelmingly clear to anyone who looks at it.

* A variable comment should be used if there is some larger scope to the variable that may not be clear. For example, if the variable is used locally but changing it can also drive changes in other classes or areas of the code base.

While documenting, the choice between standard comments and Javadoc needs to be made on a case by case basis. In general, if the comment is for something that is not private then Javadoc should be used so that the comments are available as eclipse comment popups when looking at public or protected methods and variables.

NOTE: The guidelines in this document may change in the future if deemed appropriate.
