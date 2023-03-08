---
title: Debugging Overview
weight: '10'
---

# Debugging Overview

## Objective

In this section, we will define a common base of concepts that you'll need in the subsequent sections in this chapter.

## Contents

Debugging is a broad topic, and full coverage is beyond the scope of these guides. We'll take a very brief look at the following in this section:

* Essential elements of debugging

* Techniques

* Debugging vs. testing

We'll cover the tools and specific procedures you'll follow in the subsequent sections.

### Essential elements of debugging

You investigate problems in very similar ways whether you're debugging a computer program, troubleshooting a network connectivity issue, or figuring out why your dishwasher is spilling dirty water all over the floor. The essential elements include:

* Gather information – You'll need a clear, succinct, and accurate description of the problem to work from. Users sometimes provide good info. But more often, you'll need to investigate and document the issues yourself.

* Reproduce the problem – You'll also need similarly clear, succinct, and accurate steps to reproduce the problem.

* Deduce – Don't just guess at a solution. Examine the steps to reproduce the problem, do they point to a particular subcomponent of your app? Can you eliminate some aspect, say database interactions, based on the symptoms? Logical deduction will help you zero in on possible fixes.

* Experiment iteratively – Try a fix. If it doesn't solve the problem, undo your changes and try something else. Keep track of every change you attempt so you don't repeat yourself.

* Be tenacious – Bugs can be tough to find and fix. Stick with it. But be methodical. Haste makes waste (and further bugs) when it comes to troubleshooting.

* Track your work – Keep track of the bugs you've found and fixed (as well as those you haven't fixed). Whether you publish this information to your users or not, a database of issues will help you find and fix future bugs. Document the solution as well as key non-fixes (so perhaps you won't get lost on similar dead-ends in future similar situations).

### Debugging techniques

Debugging and testing books would fill a large shelf at a bookstore. We'll focus on just a few techniques, which include:

* print tracing (log statements)

* crash log evaluation

* interactive debugging

Print tracing involves adding `Ti.API.info()` type statements to your app so that you can watch the app as it executes. You can catch many common bugs using this technique. Such logging doesn't add significant overhead to an app's execution. Still, you should remove such statements from your production app. Incidentally, log output on the device is available to knowledgable users. Take special care to remove logging statements if you use them to output sensitive information, such as user credentials, during testing.

Crash log evaluation includes looking at the build and runtime logs associated with the Titanium build scripts, native compilation steps, and runtime crash logging performed by the simulator/emulator or device. Error messages in those logs can help you track down the source of bugs.

Interactive debugging involves using a dedicated debugging tool or feature of your IDE to set breakpoints, then evaluate the state and values of variables during the execution of your program.

### Debugging vs. software testing

Debugging is a fundamentally different activity than testing. Testing comes before software is released to users. It involves confirming that features and functions work the way you say they're supposed to. Debugging comes later, after users have run your program and discovered a flaw. In a perfect world, testing would find bugs before you release the software. In reality, schedules, budgets, and other limitations prevent you from testing every possible permutation and use-case and some bugs will slip through. This guide doesn't cover testing.

### References

* [Learn the essentials of debugging](http://www.ibm.com/developerworks/web/library/wa-debug/index.html) (IBM)

* [Debugging principles](http://en.wikibooks.org/wiki/Computer_Programming_Principles/Maintaining/Debugging) (WikiBooks)

## Summary

In this section, you learned basic debugging concepts that you'll need in the subsequent sections in this chapter.
