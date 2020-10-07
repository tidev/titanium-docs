---
title: CVS
weight: '10'
---

# CVS

## CVS Support

The Studio uses the [Eclipse CVS](http://www.eclipse.org/eclipse/platform-cvs/) to provide CVS support.

When updating or adding Eclipse plugins or software, the software repository varies with the version of Studio:

| Appcelerator Studio Version | Eclipse Repository Name | Eclipse Version |
| --- | --- | --- |
| 2.1.x | Helios | 3.6 |
| 3.0.x - 3.1.3 | Indigo | 3.7 |
| 3.1.4 - 3.4.x | Kepler | 4.3 |
| 4.0.0 - 5.x | Luna | 4.4 |
| 6.x - latest | 2019-09 | 4.13 |

## Installation

In case you installed the Studio as a plugin to eclipse distribution, CVS is already bundled and ready to be used. In any other case, follow these instructions to install the CVS support.

* Open the Studio's preferences and locate the 'Available Software Sites' page.

* Make sure that the main Eclipse update site is checked 'on'. In this example, the update site is the Eclipse 'Helios' site. Click 'OK' to commit any changes made to this page and exit.

    <table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083196/update_sites.jpg" alt="images/download/attachments/30083196/update_sites.jpg" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

* Click **Help** -> **Install New Software**and select the Eclipse update site. It may take a couple of minutes to populate the plugin options.

    <table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083196/cvs_install.jpg" alt="images/download/attachments/30083196/cvs_install.jpg" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

* Select the CVS plugin and follow the wizard's 'Next' or 'Finish' to complete the installation.

### Eclipse CVS Functionality

* Browser remote repository

* Share project to the repository and checkout projects from the repository

* Synchronize project to see incoming and outgoing changes

* Commit, update and reverse changes

* See resource change history

* Merge changes

## Import or Checkout an CVS Respository

1. Go to **File**\->**Import**

2. Expand **CVS**

3. Select Checkout Projects from CVS.

4. Complete Wizard with your CVS repository details.

### Utilize the CVS Perspective

1. Go to **Window** -> **Open Perspective...** -> **Other**.

2. Select **CVS Respository Exploring**

### Additional CVS Questions

For advanced questions, we recommend checking out the [CVS FAQ](http://wiki.eclipse.org/index.php/CVS_FAQ)
