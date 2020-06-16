---
title: Ruble environment variables
weight: '120'
---

# Ruble environment variables

## Overview

Rubles can reference environment variables during execution, and developers can contribute new environment variables as well.

## Referencing an environment variable

Environment variables are available through a hash. There are two methods of accessing them, depending on how they are used in the Ruby code:

* In statements: `filepath.sub(ENV['TM_PROJECT_DIRECTORY'], '') : File.basename(filepath)`

* Inside strings: `rspec_merb_gem = (Dir["#{ENV['TM_PROJECT_DIRECTORY']}/gems/gems/rspec*"].first || ''))`

Note the usage of `#ENV['keyname']` inside strings.

## Setting an environment variable

You can also set variables into the same hash:

* In Ruby code: `ENV['TM_DATE'] = Time.now.strftime("%Y-%m-%d")`

* Example:

    ```
    template "XXX Template" do |t|
      t.filetype = "*.xxx"
      t.invoke do |context|
        ENV['TM_DATE'] = Time.now.strftime("%Y-%m-%d")
        raw_contents = IO.read("#{File.dirname(ENV['TM_BUNDLE_SUPPORT'])}/templates/yyy.xxx")
        raw_contents.gsub(/\$\{([Creating a new template^}]*)\}/) {|match| ENV[match[2..-2]] }
      end
    end
    ```

## TextMate Environment Variables

### Current Editor

| Variable | Description |
| --- | --- |
| TM\_BUNDLE\_PATH | Absolute path to the root of the ruble directory. |
| TM\_BUNDLE\_SUPPORT | Absolute path to the lib sub-dir of the ruble. |
| TM\_CARET\_LINE\_NUMBER | The line number where the caret is in the active editor (1-based). |
| TM\_CARET\_LINE\_TEXT | Text of the line where the caret is in the active editor. |
| TM\_CARET\_OFFSET | Offset of the caret in the active editor from the beginning of the file (0-based). |
| TM\_COLUMN\_NUMBER | caret\_column + 1 |
| TM\_COMMENT\_END | end characters used when wrapping comment, for example, '\*/' - may not exist for pair because there's only start characters (for example, // or #). |
| TM\_COMMENT\_START | start characters used when wrapping comment, i.e. '// ', '# ', '/\*'. |
| TM\_CURRENT\_LINE | Text of the current line in the active editor. |
| TM\_DIRECTORY | The absolute path of the parent directory of the file in the active editor. |
| TM\_EMAIL | The email address of the current user. |
| TM\_FILENAME | Just the filename (basename) of the file in the active editor. |
| TM\_FILEPATH | The absolute path of the file in the active editor. |
| TM\_FULLNAME | Full name of the current user. |
| TM\_INPUT\_START\_COLUMN | Offset inside the line, from the beginning of a line (1-based). |
| TM\_INPUT\_START\_LINE | TM\_SELECTION\_START\_LINE\_NUMBER |
| TM\_INPUT\_START\_LINE\_INDEX | Offset inside the line, from the beginning of of a line (0-based). |
| TM\_LINE\_INDEX | Offset inside the line, from the beginning of a line (0-based). |
| TM\_LINE\_NUMBER | The line number where the selection begins in the active editor (lines are 1-based). |
| TM\_NEW\_FILE | Absolute path to the new file. |
| TM\_NEW\_FILE\_BASENAME | The basename of the new file. |
| TM\_NEW\_FILE\_DIRECTORY | The directory containing the new file. |
| TM\_RUBY | Override pointer to ruby executable to use. |
| TM\_SELECTED\_FILE | The absolute path of the file in the active editor. |
| TM\_SELECTED\_TEXT | actual text selected in the active editor. |
| TM\_SELECTION\_END\_LINE\_NUMBER | The line number where selection ends in the active editor (lines are 1-based). |
| TM\_SELECTION\_LENGTH | Length of selected text in the active editor. |
| TM\_SELECTION\_OFFSET | Offset of the beginning of the selection inside the active editor (from the beginning of the file, 0-based). |
| TM\_SELECTION\_START\_LINE\_NUMBER | The line number where the selection begins in the active editor (lines are 1-based). |
| TM\_SOFT\_TABS | "YES" = use spaces for tabs, "NO" = use tab character |
| TM\_TAB\_SIZE | number of spaces to represent a tab/indent level, typically 4, 2 for ruby code. |
| USER | The short name for the current user, for example, 'cwilliams'. |
