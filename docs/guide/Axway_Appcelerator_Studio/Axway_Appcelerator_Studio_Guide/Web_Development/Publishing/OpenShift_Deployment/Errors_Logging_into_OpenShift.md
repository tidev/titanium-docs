---
title: Trouble Logging in
weight: '10'
---

# Trouble Logging in

If you experience error logging into your OpenShift account when using the wizard to create a new OpenShift project, you could try the following to correct the error:

1. Remove the content in /etc/libra/libra.conf if it exists.

2. Remove the content in ~/.openshift/express.conf.

3. The Libra key in ~/.ssh/ could be outdated. You could remove the keys (libra\_id\_rsa and libra\_id\_rsa.pub) and let the wizard re-generate them for you.
