---
title: PyDev Features
weight: '30'
---

# PyDev Features

The feature matrix can be seen below. You can check details for each feature by following the corresponding link.

| Feature List | Keybinding | Link |
| --- | --- | --- |
| General |  |  |
| Python integration |  |  |
| Jython integration |  |  |
| IronPython integration |  |  |
| Syntax highlighting |  |  |
| Wizards (new project, src folder, module, package) | Ctrl+N |  |
| Script PyDev with Jython |  | [article](#undefined) |
| Unittest integration |  | [Link](#undefined) |
| Google App Engine |  | [Video](http://pydev.blogspot.com/2009/05/pydev-146-released-google-app-engine-on.html) / [Link](http://pydev.blogspot.com/2009/05/testing-on-pydev-146-google-app-engine.html) |
| Wizard for new Project |  |  |
| Launching |  |  |
| Uploading and doing other actions |  |  |
| Django |  | [Link](#undefined) |
| Wizard for new Project |  |  |
| Launching |  |  |
| Interactive shell |  |  |
| manage.py commands with context menu |  |  |
| custom manage.py commands | ctrl+2+dj+optional\_command |  |
| Launching |  | [Link](#undefined) |
| Regular | F9 |  |
| Unittest | Ctrl+F9 |  |
| Relaunch last in Regular | Ctrl+F11 |  |
| Relaunch last in Debug | F11 |  |
| Interactive Console |  | [Link](#undefined) |
| Interactive console shortcuts | Ctrl+Alt+Enter | [Link](#undefined) |
| Code completion |  |  |
| Auto-import |  |  |
| Editor |  | [Link](#undefined) |
| Matching brackets highlighted |  |  |
| Selection for tabs or spaces (or adapt to file) |  |  |
| Block indent (and dedent) | Tab / Shift-Tab |  |
| Smart indent (and dedent) | Enter / Backspace |  |
| Code folding |  |  |
| Code folding: collapse all 1 level | Ctrl+9 |  |
| Code folding: expand all 1 level | Ctrl+0 |  |
| Code folding: collapse current | Ctrl+- |  |
| Code folding: expand current | Ctrl++ |  |
| 'Quick' code-formatter | Ctrl+Shift+F |  |
| Sort selection or imports if 'no selection' | Ctrl+Shift+O |  |
| Comment and uncomment selection | Ctrl+3 / Ctrl+Shift+3 |  |
| Comment blocks in 2 styles | Ctrl+4 / Ctrl+Shift+4 |  |
| Auto-edit: close parenthesis |  |  |
| Auto-edit: add 'self' in class methods |  |  |
| Auto-edit: add 'import' in import lines |  |  |
| Search |  |  |
| Find References | Ctrl+Shift+G |  |
| Refactoring |  | [Link](#undefined) |
| Rename | Shift+Alt+R |  |
| Extract method | Shift+Alt+M |  |
| Extract local variable | Shift+Alt+L |  |
| Inline local variable | Shift+Alt+I |  |
| Editor Content Assistants |  | [Link](#undefined) |
| Assign result to attribute or local | Ctrl+1 |  |
| Assign parameters to attributes | Ctrl+1 |  |
| Surround code with try..catch / finally | Ctrl+1 |  |
| Create docstring | Ctrl+1 |  |
| Move import to global scope | Ctrl+1 |  |
| Auto-Import 'quick-fix' for undefined variables | Ctrl+1 |  |
| Ignore error 'quick-fix' | Ctrl+1 |  |
| Ignore file in code-analysis | Ctrl+1 |  |
| Mark Occurrences |  | [Link](#undefined) |
| Rename Occurrences | Ctrl+2+R | [Link](#undefined) |
| Reporting |  |  |
| Syntax errors reported |  |  |
| Hovering shows error description |  |  |
| Code coverage |  | [Link](#undefined) |
| TODO Tasks |  | [Link](#undefined) |
| Code-analysis (real-time or on save) |  | [Link](#undefined) |
| PyLint (only on save) |  | [Link](#undefined) |
| Navigation |  |  |
| Hyperlink stack-traces in the console |  |  |
| Outline view |  |  |
| Quick Outline | Ctrl+O | [Link](#undefined) |
| Quick Open Definition Outline | Ctrl+Shift+T | [Link](#undefined) |
| Hierarchy View | F4 | [Link](#undefined) |
| Go to definition | F3 | [Link](#undefined) |
| Code completion |  |  |
| Templates Code completion | Ctrl+Space | [Link](#undefined) |
| Context-sensitive Code Completion | Ctrl+Space | [Link](#undefined) |
| Context-insensitive Code Completion with auto-import | Ctrl+Space | [Link](#undefined) |
| Auto-suggest keywords and other customizable tokens |  | [Link](#undefined) |
| Debugger |  | [Link](#undefined) |
| Python and Jython support |  |  |
| Expression Watch |  |  |
| Add Breakpoints |  |  |
| Conditional Breakpoints |  |  |
| Step in/out/over/resume |  |  |
| Multiple threads |  |  |
| Variable display |  |  |
| Debug 'server' for remote debugging |  | [Link](#undefined) |
| Debug console |  | [Link](#undefined) |

**Notes:**

* **PyLint**: PyLint is provided by logilab, and does code-analysis in python programs. It is called when a file is saved. It is written in python itself and called as an external program.

Many other features provided by Eclipse itself are not added to the list but are available either in the Eclipse platform or in other third-party plugins. Below is a 'quick-list' of 'recommendations' that may be worth mentioning...

| Plug-in features / recommendations | Plug-in |
| --- | --- |
| Text code-completion (also known as emacs-style completion) | Alt+/ in Eclipse |
| Rectangular editing | Ctrl+Shift+A in Eclipse 3.5 |
| Open selected folder with an explorer from within Eclipse | [Easy Explore](http://easystruts.sourceforge.net/) |
| CVS, subversion and many other 'repository systems' are available | Search the net for what you want |
