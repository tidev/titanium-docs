---
title: Ruble Specification
weight: '130'
---

# Ruble Specification

## Overview

Ruble (short for RUby BundLE) is a runtime environment that allows for the extensibility of IDEs and text editors using Ruby. The first implementation of Rubles will be in Studio 3, but we're making the specification available now because we want to get feedback from the community and because we want to encourage the developers of other development tools to adopt the specification as well. To further that end, we are making the specification available in an open manner, with no limits on the use or distribution of this specification.

Also, we are making the source available for several working Ruble bundles, some of which are conversions of existing open-sourced TextMate bundles, and others are home-grown versions:

* [bundle-dev.ruble](https://github.com/aptana/bundle-dev.ruble)

* [capistrano.ruble](https://github.com/aptana/capistrano.ruble)

* [css.ruble](https://github.com/aptana/css.ruble)

* [cucumber.ruble](https://github.com/aptana/cucumber.ruble)

* [engineyard.ruble](https://github.com/aptana/engineyard.ruble)

* [github.ruble](https://github.com/aptana/github.ruble)

* [haml.ruble](https://github.com/aptana/haml.ruble)

* [heroku.ruble](https://github.com/aptana/heroku.ruble)

* [html.ruble](https://github.com/aptana/html.ruble)

* [javascript-jquery.ruble](https://github.com/aptana/javascript-jquery.ruble)

* [js.ruble](https://github.com/aptana/js.ruble)

* [json.ruble](https://github.com/aptana/json.ruble)

* [math.ruble](https://github.com/aptana/math.ruble)

* [mercurial.ruble](https://github.com/aptana/mercurial.ruble)

* [php.ruble](https://github.com/aptana/php.ruble)

* [rails.ruble](https://github.com/aptana/rails.ruble)

* [rspec.ruble](https://github.com/aptana/rspec.ruble)

* [ruby.ruble](https://github.com/aptana/ruby.ruble)

* [sass.ruble](https://github.com/aptana/sass.ruble)

* [shell-script.ruble](https://github.com/aptana/shell-script.ruble)

* [source.ruble](https://github.com/aptana/source.ruble)

* [text.ruble](https://github.com/aptana/text.ruble)

* [WebFont.ruble](https://github.com/aptana/WebFont.ruble)

* [wordpress.ruble](https://github.com/aptana/wordpress.ruble)

* [xml.ruble](https://github.com/aptana/xml.ruble)

* [yaml.ruble](https://github.com/aptana/yaml.ruble)

* [zen-coding.ruble](https://github.com/aptana/zen-coding.ruble)

Please keep in mind that the specification and the bundles themselves are in active development and are very likely to change.

Design-level compatibility with TextMate bundles was a priority in the design - we wanted to make it reasonably straightforward to convert an existing TextMate bundle into a Ruble bundle, while still allowing commands and snippets to be more concise and more powerful. At the same time, we wanted Ruble bundles to run on Linux and Windows as well as the Mac, so we had to make some changes to deal with issues like key bindings and OS-specific assumptions.

The Ruble runtime includes a `ruble.rb` file that defines a DSL that can be used to create bundles, commands, and menus. `ruble.rb` must be included via a `require` in each file within the Bundle that defines bundles, commands, or snippets.

## Bundles

Bundles are the top-level distribution format for Ruble extensions. A bundle directory must contain a `bundle.rb` at the top level. The `bundle.rb` file defines the metadata for the bundle and its menu(s). By convention, the name of a bundle directory ends with `.ruble` suffix, but this is not required.

In addition to the `bundle.rb` file, there are four top-level directories within a bundle that are treated specially:

| File/Dir | Description |
| --- | --- |
| `commands/` | Contains the commands that make up the `bundle.rb` files within this directory will be loaded at startup, so you should keep it as minimal as possible to keep things fast. |
| `lib/` | It contains Ruby code that is on the load path when executing commands within your bundle. Put code here you wish to invoke from within your commands, but which you do not necessarily want to be loaded at startup. |
| `snippets/` | Contains the snippets that make up the `bundle.rb` files within this directory will be loaded at startup, so you should keep it as minimal as possible to keep things fast. |
| `templates/` | It contains project templates used by the "New Project Wizard" when creating a new project in Studio. |

By convention, there are several other files and directories found in most bundles:

| File/Dir | Description |
| --- | --- |
| `README` | Your usual README file (these also work: `README.md`, `README.markdown`, `README.textile`, and `README.txt`). |
| `Rakefile` | Your Rakefile, typically used for testing, packaging, and so forth. |
| `assets/` | Images, icons, and other files used by your bundle. |
| `test/` | Test code. |

### Bundle loading

In Studio 3, Ruble bundles are loaded from the file system in a hierarchical order. The order, from highest to lowest priority, is:

* Any top-level "bundles" directory in all active projects within the current workspace.

* The `$USER_DOCUMENT_DIRECTORY/Aptana Rubles/`, where `$USER_DOCUMENT_DIRECTORY` is platform dependent.

* The bundle's directory within the Aptana Studio installation.

When a bundle is defined in multiple places, only the bundle code defined in the highest priority location is used. In this way, you can easily do a `git clone` (or the equivalent) on a bundle from within your `$USER_DOCUMENT_DIRECTORY/Aptana Rubles` and it will override the ones built into Studio itself.

Other implementations are free to keep bundles in whatever locations on disk they desire, but if an implementation does support multiple locations for bundles, it should also use the priority system for determining which bundles are active.

### Redefining, overriding, and extending bundles

It is possible for a bundle directory and its members to redefine, to override or to extend another bundle directory's functionality. This is quite handy when you want to add a command or two to the menu of the existing bundle without having to maintain your clone of a bundle repository.

Before we can discuss these mechanisms, we need to get some terminology out of the way. Below is a list of terms you may encounter when talking about bundles and how they are defined.

| Term | Description |
| --- | --- |
| Bundle Directory | A directory containing a top-level `bundle.rb` file and optionally other `.rb` files defining commands, menus, and snippets as discussed in the _Bundles_ section. |
| Bundle Name | The name of a bundle derived from its bundle directory name. If the directory name ends with .ruble, the bundle name is the directory name with that suffix removed; otherwise, the bundle name is simply the directory name itself. |
| Bundle Reference | When defining a bundle in a `bundle.rb` file, it is possible to include a name. This name refers to an existing bundle and is used as a mechanism to extend and override a bundle of equal or lower precedence. |
| Bundle Elements | A generic term for any item contained by a bundle: for example, commands, snippets, and menus. |
| Bundle Definition | A bundle instance created by the bundle method. This is a general term used when discussing bundle instances. |
| Active Bundle | This is the resulting bundle after all precedence and reference rules have been applied. |

#### A minimal bundle

In it's simplest form, a bundle can be defined as follows:

```
# $APPLICATION_DIRECTORY/bundles/FunBundle.ruble/bundle.rb
require 'ruble'
bundle
```

Of course, this bundle is not of much use, but it is important to understand what this minimal example does. We see that the bundle directory is contained within the application bundles directory; therefore, this bundle has the lowest precedence as defined in _Bundle Loading_. Interpreting this will become clearer shortly. We also know that since the name of the bundle is derived from its bundle directory, the bundle's name is "FunBundle".

#### Redefining a bundle

In this next example, we flesh out our bundle with a little skeleton content as well as define a like-named bundle directory at higher precedence.

```
# $APPLICATION_DIRECTORY/bundles/FunBundle.ruble/bundle.rb
require 'ruble'
bundle do |b|
  command "A" { |cmd| ... }
end

# $USER_DOCUMENT_DIRECTORY/bundles/FunBundle.ruble/bundle.rb
require 'ruble'
bundle do |b|
  command "B" { |cmd| ... }
end
```

We've added an "A" command to our application bundle. We've also defined a bundle with the same name, but this time within the user bundles directory. The user bundles directory has higher precedence than the application bundles directory. This means that our active FunBundle bundle will contain the "B" command only.

When two bundle directories have the same name, the bundle directory with higher precedence completely obscures the content of the lower precedence bundle directory. This can come in handy, for example, if you need to alter an application bundle. You can git clone the bundle into your user bundles directory and make your changes there. Since each bundle directory will have the same name, your user version will hide the default bundle implementation.

#### Extending a bundle

In another scenario, you may be perfectly happy with the content of the application bundle, but you need to add another command to it.

```
# $APPLICATION_DIRECTORY/bundles/FunBundle.ruble/bundle.rb
require 'ruble'
bundle do |b|
  command "A" { |cmd| ... }
end

# $USER_DOCUMENT_DIRECTORY/bundles/FunBundleExtension.ruble/bundle.rb
require 'ruble'
bundle "FunBundle" do |b|
  command "B" { |cmd| ... }
end
```

This looks almost identical to the previous example; however, it has two very important differences. The first difference you may notice is that the bundle method now takes a string. This string changes this user bundle instance into a bundle reference.

A bundle reference applies its content to a bundle definition of equal or lower precedence and the bundle it modifies is located by the bundle method's string argument, or said another way, the bundle it modifies is located by name. Applying these rules, our active "FunBundle" bundle now contains the two commands "A" and "B". Note that additional bundle references may also augment the "FunBundle" bundle. You are not limited to a single bundle reference.

The second difference is that we've changed the bundle directory name to "FunBundleExtension". The importance of this is a bit tricky to explain. As mentioned earlier, when we use the bundle method without a string argument, the bundle instance's name is derived from the bundle directory name. Bundles that have names that match their bundle directory's name have special functionality. As seen earlier, that functionality is to completely obscure like-named bundles of lower precedence. If we had not renamed our user bundle's directory, the bundle string argument would have matched the default name of "FunBundle". That would have made this example behave the same as our _Redefining a Bundle_ example. You should \***not**\* use bundle references explicitly when defining a bundle from scratch, only when referring to other bundles within your bundle.

#### Overriding a bundle element

In our last scenario, perhaps you find that you are happy with the content of the application "FunBundle" bundle, but you want to change the behavior of one command. The following shows how you would go about that.

```
# $APPLICATION_DIRECTORY/bundles/FunBundle.ruble/bundle.rb
require 'ruble'
bundle do |b|
  command "A" { |cmd| ... }
end

# $USER_DOCUMENT_DIRECTORY/bundles/MyFunBundleExtension.ruble/bundle.rb
require 'ruble'
bundle "FunBundle" do |b|
  command "A" { |cmd| ... }
end
```

As you can see, we use the same mechanism we used to extend a bundle; however, this time since we are using the same name of a command that was defined in our target bundle, our active bundle only contains an "A" command, and that is the command that is defined in the user bundles directory.

## Bundle properties

Bundles have the following properties, all of which are optional:

| Element | Description |
| --- | --- |
| `display_name` | A human-readable name for the command. |
| `description` | A longer textual description of the bundle, in Markdown syntax |
| `scope` | The default scope for commands and snippets defined within the bundle. See 'Scopes' below. |
| `author` | One or more author names |
| `copyright` | Self-explanatory. |
| `license` | Self-explanatory. |
| `repository` | A URL to the repository or a webpage explaining how to get access. |

### Associating a bundle with a file-type

A bundle can be associated with one or more file types. This makes it possible for a bundle to be created that defines a set of commands and snippets for a file type that doesn't have a built-in editor and parser. A future version of this API will also allow the definition of syntax coloring elements, auto-indent rules, and perhaps even the ability to create full-fledged language parsers.

| Method | Description |
| --- | --- |
| `register_file_type(file_type,scope)` | This is a convenience method that first calls `associate_file_type` and then registers that `file_type` to a particular scope by calling `associate_scope.` |
| `associate_file_type(file_type)` | Given a filename pattern, we register files that match to our generic text editor (uses our theme and scripting). `file_type` must be either an exact filename to match or a `*.ext` extension to which to associate. |
| `associate_scope(file_type,scope)` | Registers a top-level scope to report back for any file whose name matches the passed in the pattern. Understands \* wildcard. Typical values for the first arg: `.yml`**,** `_spec.rb`, `Rakefile`. `scope` is a string or a symbol. Underscores are converted to spaces (so `'source.yaml'` and `:source_yaml` are equivalent). |

## Scopes

A scope specifies a context within the IDE. For example, when editing a document, the current cursor position within that document has a context associated with it. These scopes are supplied by the IDE and may be queried using the Shift-Control-P key command.

Our bundle runtime contains an implementation of scopes that is intended to be [compatible with TextMate's](http://manual.macromates.com/en/scope_selectors).

### Scope selectors

A scope selector describes a pattern of scopes and is composed of dotted names, descendant operators, basic set operation operators, and a grouping operator. In its simplest form, a scope selector consists of a single name.

#### Example - simple name selector

```
text
```

A scope selector needs only to match the prefix of a name to be considered a match. In the above example, the selector will match "text", "text.html", "text.html.ruby"; however, it will not match "texts.physics". A prefix match must end at a dot within the scope or at the end of the scope itself.

#### Example - dotted name selector

```
text.html
```

A scope selector name may be extended to create a hierarchy. Each name is delimited by a period without spaces between the names and the periods. The same prefix rule, as described in "Simple Name Pattern", applies. For example, in the above snippet, the selector will match "text.html" and "text.html.ruby".

#### Example - descendant selector

```
text.html source.ruby
```

A scope may be defined as a hierarchy of scopes. In this sense, scope selectors match against that hierarchy, much like CSS matches against the HTML DOM. In the above example, the selector will match when the editor's cursor is within Ruby code which is within HTML. The same matching rules described in the simple name pattern apply to each dotted name. For instance, the last example will match "text.html.ruby source.ruby.embedded.html" since "text.html" is a prefix of "text.html.ruby" and likewise "source.ruby" is a prefix of "source.ruby.embedded.html".

It is important to note that a descendant match can occur anywhere within scope, but the order of the selectors must be matched. For example, if we had a pattern like "a b c", this would match "a b c", "x a b c", "a b c y", "x a b c y", but not "a b x c".

#### Example - union selector

```
text.html.ruby, text.html source.ruby
```

In this example, our selector defines a list of selectors to be used for matching. The comma serves as an OR operator. Specifically, this selector is saying match "text.html.ruby" OR "text.html source.ruby". All matching rules described previously apply; however, if an alternation fails, matching will restart using the next alternation. Matching ends when either an alternation returns success or once all alternations have been exhausted.

#### Example - union selector 2

```
text.html.ruby | text.html source.ruby
```

The pipe operator behaves the same as the comma operator. The only difference between the two is in their precedence levels, with the pipe operator having lower precedence than the comma operator. This allows alternations to be expressed more naturally for those of you that are comfortable with C-like expressions.

#### Example - intersection selector

```
text & source
```

The ampersand or intersection operator matches only when the expressions on both sides of the operator are true. For example, the above "text & source" selector will match the "text.html source.ruby" since "text" and "ruby" both match according to the name selector rules.

#### Example - grouping

```
source & (js | ruby)
```

Parentheses can be used to clarify the argument of a selector or to group and override operator precedence levels. For example, in the above selector, the parentheses are used to group "js" and "ruby" as part of the intersection with "source". If the parentheses were removed, the effective precedence would be equivalent to (source & js) | (ruby).

#### Example - negative lookahead

```
text.html - source.ruby
```

Sometimes you want to match a scope unless it is being used within a child's scope. For instance, in the above selector, the negative lookahead operator, '-', is being used to select all "text.html" scopes that do not have a matching scope of "source.ruby" anywhere after it. If we had selector "a b - c", this would match "a b", "a b y", "x a b", "x a b y", but not "a b c", "x a b c", "x a b c y", nor "a b x y c". Notice in the last example that the lookahead extends to the end of the scope that is being matched and not just the next segment as with the descendant selector.

#### Precedence levels

The following table lists all of the selector operators, by precedence level, highest precedence first. The higher the precedence, the more tightly the operator binds its operands.

| Operator | Name(s) |
| --- | --- |
| () | Parentheses, Group |
| & | Ampersand, Intersection |
| <space> | Descendant |
| \- | Negative Lookahead, Asymmetric Difference |
| , | Comma, Or, Union |
| | | Pipe, Or, Union |

## Commands

Commands are the fundamental building blocks of Bundles. A command has the following properties:

| Element | Required? | Description |
| --- | --- | --- |
| `name` | Yes | A human-readable name for the command. Must be unique within the bundle. |
| `invoke` | Yes | The code to be executed. If specified as a string, it is executed as a shell script. If passed a block, it is invoked as a block when the command is executed. |
| `scope` |  | The scope in which the command can be executed. If no scope is specified, the command is assumed to be active in all scopes. |
| `input` |  | The input to the command. See the _Input Definition_ section below. |
| `output` |  | The output of the command. See the _Output Definition_ section below. |
| `working_directory` |  | The working directory to use when invoking the command as a shell script. See the _Working Directory Definition_ section below. |
| `key_binding` |  | The keyboard binding for the command. It is also possible to define platform-specific key bindings, as described in the _Key Bindings_ section below. |
| `trigger` |  | A tab trigger that will invoke the command if typed into an editor window and then the <TAB> key is pressed. It is possible to define both a trigger and a key\_binding for a single command. |

Example command:

```
command "Documentation for Word" do |cmd|
  cmd.scope = "source.ruby.rails, text.html.ruby, text.haml"

  cmd.key_binding = "Control+H"
  cmd.key_binding.mac = "Command+H"

  cmd.input = [ :selection, :word ]
  cmd.output = :show_as_html

  cmd.invoke do |context|
    url = "http://apidock.com/rails/search/quick?query=" + CGI.escape(context.input)
    context.browser.open url, :new_window => true
  end
end
```

## Snippets

Snippets are a specialized form of commands designed to make it easier to specify the behavior of tab triggers. Snippets have a name, a scope, a trigger, and an expansion. You can think of these two declarations as being equivalent:

```
snippet "My Snippet" do |snip|
  snip.trigger = "foo"
  snip.expansion = "my_super_snippet"
end

command "My Snippet" do |cmd|
  cmd.trigger = "foo"
  cmd.expansion = "my_super_snippet"

  cmd.input = :none
  cmd.output = :insert_as_snippet

  cmd.invoke do |context|
    context.output = cmd.expansion
  end
end
```

Here are the properties specific to snippets. Note that the `trigger` is required, unlike the case for commands.

| Element | Required? | Description |
| --- | --- | --- |
| `name` | Yes | A human-readable name for the command. Must be unique within the bundle. |
| `scope` |  | The scope in which the command can be executed. If no scope is specified, the command is assumed to be active in all scopes. |
| `trigger` | Yes | A tab trigger that will invoke the command if typed into an editor window and then the <TAB> key is pressed. It is possible to define both a trigger and a key\_binding for a single command. |
| `expansion` | Yes | The snippet text that will be substituted for the command trigger. |

FORTHCOMING: the syntax for the expansion string (which roughly follows TextMate, but doesn't support nesting at present)

## Conventions and definitions

Several properties defined in this document can have a variety of different values, and these types of values are defined by names in ALL\_CAPS. Specifiers that are used in multiple places within this document are defined in this section.

### PATH\_SPECIFIER

Paths can be specified in many places in the API. Whenever you see the term PATH\_SPECIFIER, the path can be specified as one of the following:

* A string specifying either a full path or a relative path. If only a relative path is provided, it will be interpreted relative to the bundle directory if it is evaluated at _command definition_ time, and relative to the command's working directory if it is evaluated at _command invocation_ time (the latter is more common).

* An object that will return a path string as defined directly above when its `to_s` method is called (for example, `File`).

* A Ruby `symbol` with special meaning. For example, `:current_project` might refer to the currently loaded project (NOT YET IMPLEMENTED).

### INPUT\_SPECIFIER

The possible input specifiers are:

| Specifier | Description |
| --- | --- |
| `:selection` | Selected text in the editor. |
| `:left_character` | The character to the immediate left of the caret. |
| `:right_character` | The character to the immediate right of the caret. |
| `:word` | Word surrounding the current caret. |
| `:line` | The line containing the caret. |
| `:document` | The entire current document. |
| `:clipboard` | The contents of the clipboard. |
| `:scope` | (NOT YET IMPLEMENTED) As in TextMate: search backward and forwards for the first character, which is not matched by the scope selector of the command and use those as boundaries for the input. |
| `:input_from_console` | Take input from a shell window? How do we specify which console? |
| `:none` | No input is needed by this command. When encountered in the **multiple symbol specifier** case, this symbol always terminates fallback evaluation. |
| `:selected_lines` | I'm not sure what this does or how it differs from :selection. |

### OUTPUT\_SPECIFIER

The possible output specifiers are:

| Specifier | Description |
| --- | --- |
| `:insert_as_text` | Insert text at the caret position. If there is a selection, the text is inserted immediately following the selection, and the selection is lost. |
| `:insert_as_snippet` | As with `:insert_as_text`, but the output is interpreted as snippet expansion text. |
| `:replace_selection` | Replace the currently selected text with the output. If no text is selected, this is equivalent to the `:insert_as_text` specifier. |
| `:replace_document` | Replace the entire document with the output. |
| `:copy_to_clipboard` | Replace the contents of the clipboard with the output. |
| `:show_as_html` | Open an HTML browser window and interpret the output as HTML. |
| `:show_as_tooltip` | Show a tooltip containing the output. |
| `:create_new_document` | Create a new editor document containing the output. |
| `:output_to_console` | Display the output in a console. |
| `:discard` | Throw any output away. |
| `:replace_selected_lines` | What does this do? |
| `:replace_line` | Replace the line around the caret. |
| `:replace_word` | Replace the word around the caret. |

### WORKING\_DIRECTORY

The possible working directory specifiers are:

| Specifier | Description |
| --- | --- |
| `'any string'` | The string is interpreted as an absolute path. |
| `:current_file` | Use the command's parent dir as the working dir. This is the default behavior. |
| `:current_project` | Use the active project in the App Explorer as the working directory. |
| `:current_bundle` | Use the command's owning bundle's directory as the working directory. Typically this is the parent dir of what you'd get with `:current_file` |

### PLATFORM\_SPECIFIER

Supported platform identifiers are `all`, `mac`, `windows`, `linux`, and `unix`. The `unix` identifier will match Linux, BSD, Solaris, and most other unix-like OSes (but not Mac OS X). The `all` specifier is the same as not providing a platform specifier at all.

## Bundle.rb

As discussed in the _Runtime Architecture_ section above, the `bundle.rb` file defines the metadata and menus for the bundle. This section specifies these items in more detail.

### Metadata

Bundles have metadata associated with them. The following properties are pre-defined:

| Property | Description |
| --- | --- |
| `name` | The user-visible name of the bundle. For example, "Ruby on Rails". This name will be shown in menus, error messages, and so forth. |
| `description` | A longer, textual description of the bundle and its purpose. |
| `author` | The author(s) of the bundle. |
| `copyright` | Any copyright message associated with the bundle. |
| `license` | The name or URL of the license associated with the bundle. For example, "MIT License" or[http://www.gnu.org/licenses/gpl-3.0.txt](http://www.gnu.org/licenses/gpl-3.0.txt) |
| `website` | The website where more information about the bundle can be found. |
| `repository` | The public repository url where the canonical version of this bundle lives. For example, git://github.com/aptana/rails.ruble.git |

Additional properties can be accessed, though, simply by referring to them as though they already exist, for example:

```
bundle.foo = "bar"
```

### Menus

A bundle may define one or more menus to expose its commands and snippets to the user. Most bundles will only define a single menu. RadRails shows these menus in several places. First and foremost, it shows up in the main menu underneath the 'Commands' menu. It also shows up in the right-click context menu of editor windows.

A menu is a container for commands, sub-menus, and separators. Commands are specified by their names, with all other information coming from the command itself (for example, its `key_binding` or `trigger`). As discussed earlier, these names are scoped to the current bundle.

Menus also have a scope, which defines the contexts in which the entire menu is applicable. We interpret the scopes for menus more loosely than we do for commands, erring to show the menu more often than not. And the Commands menu will still show your menu in the "Other" submenu of the Commands menu even if your scope operator doesn't match. Note that while you can define a scope for a sub-menu, but it is currently ignored.

### Sample bundle.rb file

The following is a real but extremely minimal bundle.rb file, which defines a 'Rails' menu, which in turn contains only a single 'Go To' submenu.

```
require 'ruble'

bundle do |bundle|
  bundle.name = "Ruby on Rails"
  bundle.author = "Many"
  bundle.repository = "git://github.com/aptana/rails.ruble.git"

  bundle.menu "Rails" do |rails_menu|
    # this menu should be shown when any of the following scopes is active:
    rails_menu.scope = [ "source.ruby", "project.rails" ]

    rails_menu.menu "Go To" do |goto_menu|
      goto_menu.command "Go to File on Current Line"
      goto_menu.separator
      goto_menu.command "Go to Model"
      goto_menu.command "Inline Command" do |cmd|
        cmd.invoke do |ctx|
          CONSOLE.puts "Hello!"
        end
      end
      # etc....
    end
end
```

## Commands and snippets

As discussed in the _Runtime Architecture_ section above, commands and snippets are the backbone of the bundled runtime. This section lays out the definition and invocation of commands and snippets in more detail.

### Key bindings

A command can optionally have one or more key bindings associated with it. These key bindings are specified using one of the following forms:

If there is only one key binding associated with the command:

```
command.key_binding = KEY_SEQUENCE
```

Examples:

```
command.key_binding = "CONTROL+T" # Single key stroke key binding
command.key_binding = "M1+M3+Q C" # Multiple key stroke key binding
```

If there are more than one key bindings associated with the command, an array of key binding sequences can be specified.

```
command.key_binding = [ KEY_SEQUENCE, KEY_SEQUENCE, etc. ]
```

Example:

```
command.key_binding = [ "M1+W", "M1+F4" ] # Multiple keybindings for same command
```

The KEY\_SEQUENCE syntax follows the Eclipse conventions since those are more portable than the ones used in TextMate. A KEY\_SEQUENCE should consist of one or more keystrokes. Keystrokes are separated by spaces. A keystroke consists of one or more keys held down at the same time. This should be zero or more modifier keys and one other key. The keys are separated by the + character. The recognized modifiers keys are ALT or OPTION, COMMAND, CTRL, and SHIFT. Also, M1, M2, M3, M4 modifier keys are recognized. The "M" modifier keys are a platform-independent way of representing keys, and these are generally preferred. M1 is the COMMAND key on MacOS X and the CTRL key on most other platforms. M2 is the SHIFT key. M3 is the Option key on MacOS X, and the ALT key on most other platforms. M4 is the CTRL key on MacOS X and is undefined on other platforms. Since M2+M3+<Letter> (Alt+Shift+<Letter>) is reserved on MacOS X for writing special characters.

| Shortcut | Platform | Key |
| --- | --- | --- |
| M1 | OS X | COMMAND |
| M1 | Other Platforms | CONTROL (CTRL) |
| M2 | All Platforms | SHIFT |
| M3 | OS X | OPTION |
| M3 | Other Platforms | ALT |
| M4 | OS X | CONTROL (CTRL) |

The actual key is generally specified simply as the ASCII character in uppercase. So, for example, F or X, are examples of such keys. However, there are some special keys; keys that have no printable ASCII representation. The following is a list of the current special keys:

| Key | ... | ... |
| --- | --- | --- |
| ARROW\_DOWN | F1 | NUMPAD\_0 |
| ARROW\_LEFT | F2 | NUMPAD\_1 |
| ARROW\_RIGHT | F3 | NUMPAD\_2 |
| ARROW\_UP | F4 | NUMPAD\_3 |
| BREAK | F5 | NUMPAD\_4 |
| BS | F6 | NUMPAD\_5 |
| CAPS\_LOCK | F7 | NUMPAD\_6 |
| CR | F8 | NUMPAD\_7 |
| DEL | F9 | NUMPAD\_8 |
| END | F10 | NUMPAD\_9 |
| ESC | F11 | NUMPAD\_ADD |
| HOME | F12 | NUMPAD\_DECIMAL |
| INSERT | F13 | NUMPAD\_DIVIDE |
| LF | F14 | NUMPAD\_ENTER |
| FF | F15 | NUMPAD\_EQUAL |
| NULL | PRINT\_SCREEN | NUMPAD\_MULTIPLY |
| PAGE\_UP | PAUSE | NUMPAD\_SUBTRACT |
| PAGE\_DOWN | SCROLL\_LOCK | NUM\_LOCK |
| SPACE | TAB | VT |

Alternate names for some common special keys are also allowed. For example, ESC/ESCAPE, and CR/ENTER/RETURN are synonyms.

We strongly recommend against the use of SHIFT or M2 without including another CONTROL\_KEY\_SPECIFIER, as the results can be unpredictable.

It is possible for commands to define specific key bindings for specific platforms. To enable this, the `key_binding` can be made platform-specific. Platform-specific bindings always take
precedence over the generic binding regardless of the declaration order. See the example below:

```
command.key_binding = "CONTROL+V"
command.key_binding.mac = "COMMAND+V"
```

The allowed specifications are defined in the PLATFORM\_SPECIFIER section.

### Input definition

Commands can take their input from a variety of different sources, or a combination of those sources. This makes it very easy to create commands that can process input from editors without writing a bunch of if/then statements within your command.

Inputs can be specified using the **single input specifier** form:

```
command.input = INPUT_SPECIFIER
```

or the **multiple input specifier** form:

```
command.input = [ INPUT_SPECIFIER, INPUT_SPECIFIER, etc. ]
```

or the **path specifier** form:

```
command.input = PATH_SPECIFIER
```

In the **multiple input specifier** form, each `INPUT_SPECIFIER` is processed in order until a valid `INPUT_SPECIFIER` was found. So if, for example, the command specified:

```
cmd.input = [ :selection, :word ]
```

Then the `:selection` specifier would be checked to see if it evaluated to a non-empty value. If it did not have such a value, the `:word` specifier would be checked. If the caret was not within a valid word, then the command would be invoked with a nil input.

### Output definition

As with input, commands may wish to generate output in several different ways. In Ruble, the output can be specified using the **single output specifier** form:

```
command.output = OUTPUT_SPECIFIER
```

or the **path specifier** form:

```
command.output = PATH_SPECIFIER
```

As with the input specifier, the **path specifier** form allows you to define a filename or other stream specifier to which to write the output.

### Invocation and context

As described above, ever command must define an `invoke` property that specifies the actions to perform when the command is run. The action can either be a string, which is run in the user's default shell, or a ruby block, which is executed inline.

Also, you can specify platform-specific invoke properties by specifying the platform definitions:

```
# general form, used if no platform specific form is provided
command.invoke = "ls"
command.invoke.windows = "dir /s"
command.invoke.linux do |context|
# some ruby stuff
end
```

The allowed platforms are defined in the PLATFORM\_SPECIFIER section of this document.

#### Context during command invocation

When a command's `invoke` property is set a ruby block, that block is passed a `context` object as an argument. The context object has the following properties:

| Property | Description |
| --- | --- |
| `input` | The input to the command as a string. See the _Input During Command Invocation_ section below. |
| `invoked_via` | How the command was invoked. Can be `:key_binding`, `:menu`, `:unknown`, `:command`, or `:trigger`. |
| `command` | The Command object being executed. |
| `bundle` | The Bundle in which the command is defined. |
| `scope` | The Scope in which the command was executed. |
| `project` | The Project that owns the file currently being edited, or nil. See _Project API_ for more information. |
| `editor` | The currently active Aptana file editor. See _Editor API_ for more information. |

Also, the context has a few handy-dandy functions for use by commands, as described below:

| Method | Description |
| --- | --- |
| `exit_with_message(message, OUTPUT_SPECIFIER)` | Short-circuit the execution of the command, using the specified OUTPUT\_SPECIFIER |
| `invoke(name, INVOKE_OPTIONS)` | (NOT YET IMPLEMENTED) Invoke another command or snippet by name and return its context object so that its output and other properties can be extracted. |

##### INVOKE\_OPTIONS

You can supply additional options to the `invoke` method via its INVOKE\_OPTIONS hash. These options effect the state of the context object passed to the command when it is invoked:

| Key | Description |
| --- | --- |
| `:input` | If specified, the context's `input` property will be set to this value. This is useful when you want your command to process user input and then have another command process that input. If it is not defined, the INPUT\_SPECIFIER in the command's definition will be used as normal. |
| `:output` | If specified, this OUTPUT\_SPECIFIER overrides the one defined by the command. |
| `:scope` | The scope specifier to be passed to the command |
| `:bundle` | If specified, look for the command to invoke in the named bundle instead of the current bundle. |

#### Input during Command invocation

If a command is defined to invoke a shell script, the command supplies the input text on `STDIN` and as [environment variables](http://manual.macromates.com/en/environment_variables.html), for compatibility with TextMate.

If a command is defined to invoke an inline Ruby block, the input is passed to the block via `STDIN`. Alternately, the context's `input` property can be used to access the input a simple string. Note that all environment variables that are defined for shell script commands are also available to command blocks via the ENV hash.

#### Output during command invocation

By default, any output to `STDOUT` during command invocation is treated as the output of the command. If the command is defined to invoke a ruby inline-block, the return value may be used to define the command result. The return value will be converted to a string via to\_s. In the event, the output is written to `STDOUT,` and a non-nil value is returned from the block, the return value will take precedence. Or said another way, if you want to make sure your output to STDOUT serves as your command's result, then be sure to return `nil` as your command's result.

Output written to `STDERR` during command execution will be displayed in the Console.
