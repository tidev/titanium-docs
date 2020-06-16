---
title: Creating a new sample
weight: '10'
---

# Creating a new sample

## Overview

Users can create new samples that appear in the Samples view, where they could be imported into projects.

::: tip 💡 Hint
We assume you've [created a new Ruble](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Creating_a_new_Ruble/) as a placeholder for the following content.
:::

## Creating a new sample

The project samples appear in the Samples view:

![samples_view](./samples_view.png)

You can create samples that reference a local .zip file or retrieve content from the web.

### Sample categories

Here are the current possible values for the "category" element:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>Sample Category</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Category Id</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Web</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.aptana.projects.samples.web.category</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium Mobile</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.appcelerator.titanium.mobile.samples.category</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium Desktop</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.appcelerator.titanium.desktop.samples.category</p></td></tr></tbody></table>

### Project natures

Project natures can be added to samples by the specification of the "natures" element:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>Project Type</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Nature Id</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Web</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.aptana.projects.webnature</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Ruby</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.aptana.ruby.core.rubynature</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>PHP</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.aptana.editor.php.phpNature</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Python</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>org.python.pydev.pythonNature</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.appcelerator.titanium.alloy.core.nature</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium Mobile</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.appcelerator.titanium.mobile.nature</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium Desktop</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>com.appcelerator.titanium.desktop.nature</p></td></tr></tbody></table>

### Local content

If your content is hosted locally, you can simply reference a .zip file containing the files in question.

1. Create a sample directory in the bundle and add a project\_samples.rb file in the samples directory.

2. Add the following content to the project\_samples.rb file:

    ```
    require 'ruble'

    project_sample "Local Project Sample Example" do |s|
      s.id = "sample.local"
      s.category = "com.appcelerator.titanium.mobile.samples.category"
      s.location = "samples/local_sample.zip"
      s.description = "A local sample example"
      s.natures = ["com.appcelerator.titanium.mobile.nature", "com.aptana.projects.webnature"]
      s.icon = ["samples/local_sample.png"]
    end
    ```

3. Replace the sample name, id, category, location, description, nature, and icon values with values appropriate to your sample. The description, natures, and icon are optional.

4. Drop the file local\_sample.zip in the samples folder.

5. Drop the icon in the samples folder if s.icon is defined.

6. Save and close project\_samples.rb.

Open the Samples view (**Window** > **Show View** > **Samples** if it is not opened), and you should see your new sample appear under the appropriate category. Right-click on it and select \***Import sample as project...**\* to import the sample into the workspace as a project.

### Remote content

If you instead have a project sample hosted on a Git repo, you can reference that as well:

1. Create a sample directory in the bundle and add a project\_samples.rb file in the samples directory.

2. Add the following content to the project\_samples.rb file:

    ```
    require 'ruble'

    project_sample "Remote Project Sample Example" do |s|
      s.id = "sample.remote"
      s.category = "com.appcelerator.titanium.mobile.samples.category"
      s.location = "git://github.com/repo.git"
      s.description = "Remote sample. Requires network access."
      s.natures = ["com.appcelerator.titanium.mobile.nature", "com.aptana.projects.webnature"]
      s.icon = ["http://sample_icon.png"]
    end
    ```

3. Replace the sample name, id, category, location, description, nature, and icon values with values appropriate to your sample.

4. Save and close project\_samples.rb.

Open the Samples view (**Window** > **Show View** > **Samples** if it is not opened), and you should see your new sample appear under the appropriate category. Right-click on it and select \***Import sample as project...**\* to import the sample into the workspace as a project.

The [Ruble Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/) gives a complete discussion on the new Ruble scripting system in Studio.
