---
title: Converting a Textmate Bundle
weight: '30'
---

# Converting a Textmate Bundle

## Overview

Studio allows the user to convert an existing Textmate bundle into a Ruble. The process converts a significant percentage of the original content but may require substantial additional work to finish the conversion.

## Performing the conversion

1. Download a copy of the \*.tmbundle file to your computer.

2. Open Studio and select **Commands > Bundle Development > Convert Textmate Bundle.**

3. Navigate to the bundle you downloaded above. Click "Open".
    _The bundle is converted to a ruble project and opened in your workspace._

This creates a default Ruble structure, moving some core elements into a bundle.rb file (including the menu definitions), and snippets and commands into their folders.

### Not currently supported or converted

* Drag Commands

* Language definitions

* Macros

* Preferences

* Templates

## Debugging

You will want to check your Scripting Console output for any compilation errors. It should work without issue, though it's possible the original bundle had some errors. We also suggest turning up the level of errors to **Warning** using the [Troubleshooting](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Debugging_Studio/) control panel. Errors with snippets will then appear in your log file.

## Converting commands

Snippets are converted from the individual .tmSnippet file into a file under the commands folder automatically. For example:

**Open Remote Site Root.tmCommand**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>beforeRunningCommand</key>
  <string>nop</string>
  <key>command</key>
  <string>osascript -e "tell application \"Transmit\" to open POSIX file \"$TM_PROJECT_DIRECTORY\""</string>
  <key>input</key>
  <string>none</string>
  <key>keyEquivalent</key>
  <string>^O</string>
  <key>name</key>
  <string>Open Remote Site Root (Transmit)</string>
  <key>output</key>
  <string>discard</string>
  <key>scope</key>
  <string>text.html.txp</string>
  <key>uuid</key>
  <string>396C9943-77EA-44E7-A1B6-DB291760256F</string>
</dict>
</plist>
```

**commands/open\_remote\_site\_root.rb**

```
require 'ruble'

command 'Open Remote Site Root' do |cmd|
  cmd.key_binding = 'M4+M2+O'
  cmd.scope = 'text.html.txp'
  cmd.output = :discard
  cmd.input = :none
  cmd.invoke =<<-EOF
osascript -e "tell application \"Transmit\" to open POSIX file \"$TM_PROJECT_DIRECTORY\""
EOF
end
```

In general, most commands are converted over without issue, though they may depend on platform-specific functionality, in particular shell scripts. If you like, those can be rewritten in Ruby to make them cross-platform.

## Converting file associations

The converter will create a default set of scope to file extension mappings, based on the bundle definition, for example:

```
bundle.file_types['text.html.txp'] = '*.txpml', '*.txfml', '*.txaml'
```

This results in a Studio content type association whereby a file named test.txpml will be opened in the "Studio Text Editor". If you wish to map the files to be opened by a different editor, such as the HTML editor, see below.

## Converting snippets

Snippets are converted from the individual .tmSnippet file into a block in snippets/snippets.rb automatically.

**Tag Attribute Return.tmSnippet**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>content</key>
  <string>$1="${2:a}" </string>
  <key>keyEquivalent</key>
  <string></string>
  <key>name</key>
  <string>Tag Attribute Return</string>
  <key>scope</key>
  <string>text.html.txp meta.tag -string.quoted.double</string>
  <key>uuid</key>
  <string>05577AB6-68A5-4CF6-A2FF-2C2E846F0621</string>
</dict>
</plist>
```

**snippet.rb**

```
snippet 'Tag Attribute Return' do |s|
  # FIXME No tab trigger, probably needs to become command
  s.key_binding = ''
  s.scope = 'text.html.txp meta.tag -string.quoted.double'
  s.expansion = '$1="${2:a}" '
end
```

Some Textmate snippet features are not supported, in particular, nested tab stops, and search/replace regular expressions. Many of these expressions can be simplified, but exact functionality is not always available. For example:

```
${1:<txp:}${2:permlink}${3:/>}$4${3/\/|(.+)/(?1:<\/txp\:permlink> )/}
```

The second `${3/\/|(.+)/(?1:<\/txp\:permlink> )/`} where it does a transformation on the mirrored value of $3 is not possible. It may be easier to introduce an extra tab stop for situations like this.

## Converting templates

A template will be converted into two pieces, a .txaml and a .plist piece

**id.title.txaml**

```xml
<txp:anc_hide>${TM_NEW_FILE_BASENAME}.txaml</txp:anc_hide>

<txp:anc_hide>Created by ${TM_USERNAME} on ${TM_DATE}.Copyright (c) ${TM_YEAR} ${TM_ORGANIZATION_NAME}. All rights  reserved.</txp:anc_hide>
```

**info.plist**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>command</key>
  <string>if [[ ! -f "$TM_NEW_FILE" ]]; then
   TM_YEAR=`date +%Y` \
   TM_DATE=`date +%Y-%m-%d` \
   TM_USERNAME=`niutil -readprop / /users/\$USER realname` \
   perl -pe 's/\$\{([^}]*)\}/$ENV{$1}/g' \
      &lt; id.title.txaml &gt; "$TM_NEW_FILE"
fi</string>
  <key>extension</key>
  <string>txaml</string>
  <key>keyEquivalent</key>
  <string>@n</string>
  <key>name</key>
  <string>Article Body</string>
  <key>scope</key>
  <string>text.html.txp</string>
  <key>uuid</key>
  <string>B4FF0F58-74BD-437B-9104-D0558C69ADA6</string>
</dict>
</plist>
```

See [here](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Templates/Creating_a_new_template/) on how to set up a proper project structure for templates. In short, the process is:

1. Create a new "templates" subfolder.

2. Create a new file to hold the template content (say id.title.txaml).

3. paste in the following content to id.title.txaml:

    ```xml
    <txp:anc_hide>${TM_NEW_FILE_BASENAME}.txaml</txp:anc_hide>

    <txp:anc_hide>Created by ${USER} on ${TM_DATE}.Copyright (c) ${TM_YEAR} ${TM_ORGANIZATION_NAME}. All rights  reserved.</txp:anc_hide>
    ```

4. Add the following to the bottom of your bundle.rb file, before the last "end":

    ```
    template "ID.Title Template" do |t|
      t.filetype = "*.txaml"
      t.invoke do |context|
        ENV['TM_YEAR'] = Time.now.strftime("%Y")
        ENV['TM_DATE'] = Time.now.strftime("%Y-%m-%d")
        raw_contents = IO.read("#{File.dirname(ENV['TM_BUNDLE_SUPPORT'])}/templates/id.title.txaml")
        raw_contents.gsub(/\$\{([^}]*)\}/) {|match| ENV[match[2..-2]] }
      end
    end
    ```

5. Save bundle.rb.

If you now choose File > New From Template > Bundle Name > ID.Title Template, it will allow you to create a new template of the type specified above.

::: warning ⚠️ Warning
We had to switch TM\_USER to USER as "TM\_USER" is not a supported variable
:::

## Associating new file extensions with an existing editor

As an example, say we convert the Textpattern bundle and wish to use it to edit \*.txpml files containing a mix of HTML and Textpattern syntax. We want to use the HTML editor. Follow the instructions \[here|Changing your file association preferences} for further information.
