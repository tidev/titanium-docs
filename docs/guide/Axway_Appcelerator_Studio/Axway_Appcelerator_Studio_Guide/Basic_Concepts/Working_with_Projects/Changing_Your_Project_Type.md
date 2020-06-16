---
title: Changing Your Project Type
weight: '80'
---

# Changing Your Project Type

If you change the type or nature of your project (in other words, you decided to start using PHP in your Web project), you will want to change how Studio processes the files in your project.

## Introduction

Project natures help identify the type of files that live inside. It affects a variety of items, but most notably content assist. It comes down to how the projects are indexed. Some project "types" are a combination of several others.

A ![check](./check.png) means the file type is indexed. You may put files of any type in any project, but they only have certain meanings in certain projects.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">File Types</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>CSS</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>HTML</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>JavaScript</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Python</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Django</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Ruby</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>ERB</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>PHP</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Web Project</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Python Project</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Ruby Project</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Rails Project</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">PHP Project</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Titanium Desktop</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p><strong class=" ">Titanium Mobile</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083315/check0.png" alt="images/download/attachments/30083315/check0.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>&nbsp;</p></td></tr></tbody></table>

## Changing Project Natures

To change the natures associated with a project:

1. Right-click on the project in question in the Project Explorer View.

2. Choose **Properties > Project Natures**.

3. Select the natures most appropriate to your project.

4. Click **OK**. It will ask to close and reopen your project.

## Associated Natures

Below are the natures to associate with a project of a particular type:

### Web

* Web

### PHP

* Web

* PHP

### Rails

* Web

* Rails

### Titanium Mobile

* Web

* Titanium Mobile

### Titanium Desktop

* Web

* Titanium Desktop
