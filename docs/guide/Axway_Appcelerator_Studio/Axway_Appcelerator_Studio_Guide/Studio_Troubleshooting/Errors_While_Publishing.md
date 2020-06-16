---
title: Passwords Not Saved for FTP Connections
weight: '90'
---

# Passwords Not Saved for FTP Connections

If you run into an issue where the FTP connection continues to prompt for password even after you checked "Save Password" option, try the following:

1. Open **Window > Preferences > General > Security > Secure Storage** preference page.

2. Click on **Contents** tab and select **\[Default Secure Storage\]** node.

3. Click **Delete**.

4. Studio will ask to restart; after restart, browse into the FTP connection again to trigger the login dialog.

5. Check "Save Password" option and click **OK**.

6. A message about password recovery for a new master password will appear, and you could choose to set up questions and answers for future password recovery.

Now the FTP connection should no longer prompt for password after restarting Studio.
