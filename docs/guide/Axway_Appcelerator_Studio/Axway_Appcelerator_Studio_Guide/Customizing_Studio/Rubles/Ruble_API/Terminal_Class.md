---
title: Terminal Class
weight: '90'
---

# Terminal Class

The Terminal class contains methods and properties for interacting with the Terminal window inside Studio.

## Usage

Examples of how you might interact with methods of the Terminal class.

### Static:

```
require 'ruble/terminal'
Ruble::Terminal.open("cap -v #{target}", ENV['TM_PROJECT_DIRECTORY'])
```

## Terminal Methods

Terminal objects have the following static method:

| Property | Description |
| --- | --- |
| `open(command, working directory)` | The command to execute, and the working directory in which the execute it. The working directory is optional. |
