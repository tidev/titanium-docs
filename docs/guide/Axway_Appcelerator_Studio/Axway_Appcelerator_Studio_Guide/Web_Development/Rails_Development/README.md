---
title: Rails Development
weight: '40'
---

# Rails Development

## Rails Support

Studio is shipped with built-in support for Rails editing. This is additional support beyond that described in [Ruby Development](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/), [HTML Development](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/HTML_Development/), [CSS Development](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/CSS_Development/), and [JavaScript Development](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/).

It should be noted that Studio relies on developers to be familiar with the standard Rails command-line tools, generators, and tasks. RadRails used to provide UI view front-ends to the generators, servers, and so forth. In Studio, we embed a Terminal view and expect users to be familiar with Rails enough to be able to generate models, controllers, and so forth and run servers from the command line.

If you're unfamiliar with Rails development, a good starting place is [http://guides.rubyonrails.org/](http://guides.rubyonrails.org/).

### Getting Started

We expect that users already have their ruby, rails and gems installed to use our tooling. Ruby is pre-installed on Mac OS X, but it is recommended you upgrade the pre-installed Rails to the latest version.

#### Windows

We highly recommend that users install Rails via [Rails Installer](http://railsinstaller.org/en). It will properly install a compatible PortableGit that works with our git support, as well as Ruby, Rails, and DevKit, so that native gem installation works properly.

### Creating/Importing a Rails Project

#### Creating a project using the new-project wizard

The Rails project wizard can be accessed through multiple locations in the workspace.
A project can be created through the File->New->Rails Project, or by right-clicking the 'Project Explorer' or the 'App Explorer' and select New->Rails Project.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083026/rails_project_wizard.png" alt="images/download/attachments/30083026/rails_project_wizard.png" class="confluence-embedded-image image-center"></p></td></tr></tbody></table>

#### Importing a Rails Project

To import a rails project (whether created inside the IDE previously or outside the IDE on the command line), you can use the Rails Project Wizard as outlined above - but point it at the existing rails project root. It will detect that files exist and will not run the rails generator over top of the existing files. You can also explicitly state that the generator not be run in case that detection fails.

### Editing

In addition to our HTML/CSS/JS/Ruby support, we also support editing HTML.ERB/RHTML, HAML, SASS and YAML files.

### Deprecated Views - Servers, Plugins, Gems, Generators

RadRails 2.x used to provide UI front-ends to the generator, server, plugin, and gems for your project. Often this UI was difficult to keep working across multiple rails versions and tended to offer little advantage to just using the command line to achieve your goal.

If you strongly miss one of these views, please voice your request to bring it back in our bug tracker.

For Servers, you can launch a server via the command line or the gear menu of the App Explorer. To kill/stop the server, give the Terminal running the server process/command focus and then hit Ctrl+C.

## Related Topics

* [RHTML Editor](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Rails_Development/RHTML_Editor/)
