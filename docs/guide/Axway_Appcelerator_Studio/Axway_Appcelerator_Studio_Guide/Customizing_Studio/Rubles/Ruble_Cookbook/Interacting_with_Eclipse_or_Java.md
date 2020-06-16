---
title: Interacting with Eclipse or Java
weight: '70'
---

# Interacting with Eclipse or Java

## Overview

In this recipe, we show how a Ruble command can interact with Eclipse or Java code. For specific questions, see the [Calling Java from JRuby](https://github.com/jruby/jruby/wiki/CallingJavaFromJRuby) document.

## Interacting with an Editor: Folding code in the editor

Here, we interact with the current editor to collapse all folding markers.

```
require 'ruble'
require 'java'

command 'Fold All Code' do |cmd|
  cmd.scope = 'source'
  cmd.invoke do |context|
      # Toggle all levels. context.editor.editor_part is the current IEditorPart
      context.editor.editor_part.source_viewer.doOperation(org.eclipse.jface.text.source.projection.ProjectionViewer::COLLAPSE_ALL)
  end
end
```

## Interacting with an Editor: increasing the editor's font size

Here, we up the current font size in all editors by 2.

```
require 'ruble'
require 'java'

command 'Increase Font Size' do |cmd|
  cmd.scope = 'source'
  cmd.invoke do |context|
      step = 2;
      font_name = org.eclipse.jface.resource.JFaceResources::TEXT_FONT
      font_registry = org.eclipse.ui.PlatformUI.workbench.theme_manager.current_theme.font_registry
      data = font_registry.get_font_data(font_name)
      new_data = data.map {|d| org.eclipse.swt.graphics.FontData.new(d.getName(), d.height + step, d.style) }
      font_registry.put(font_name, new_data.to_java(:"org.eclipse.swt.graphics.FontData"))
  end
end
```

## GUI: A simple input dialog

We create a simple dialog to prompt the user for input. Note we have one file for the dialog class, and another file for calling the class in a command.

**in /lib/multi\_input\_dialog.rb:**

```
require 'java'

class MultiInputDialog < org.eclipse.jface.dialogs.InputDialog

  def getInputTextStyle
    org.eclipse.swt.SWT::MULTI | org.eclipse.swt.SWT::BORDER | org.eclipse.swt.SWT::V_SCROLL
  end

  def createDialogArea(parent)
    control = super(parent)
    getText.getLayoutData.heightHint = 100;
    control
  end
end
```

**in /commands/commands.rb:**

```
require 'ruble'
require 'java'

command 'Multi-Input Dialog' do |cmd|
  cmd.scope = 'source'
  cmd.invoke do |context|
    require 'multi_input_dialog'
    dialog =  MultiInputDialog.new(nil, "Title", "Description", "initial_value", nil)
    status = dialog.open

    # Check the status once the dialog has closed
    if status != 0
      Ruble::Logger.log_error "Status '#{status}'"
      return
    end

    Ruble::Logger.log_error "Status '#{status}', Value: '#{dialog.getValue}'"
  end
end
```

## Code Equivalents

Some examples of calling code in Ruby and Java.

| Description | Ruby | Java |
| --- | --- | --- |
| Grabbing an IFile from the current editor. | ```<br />context.editor.editor_input.file<br />``` | ```<br />IFile editorInput = editor.getEditorInput().getFile();<br />``` |
