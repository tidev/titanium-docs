---
title: Adding new Deployment Providers
weight: '30'
---

# Adding new Deployment Providers

There are two relevant extension points that related to deployment, both living on the com.aptana.deploy namespace (though one resides in that plugin and the other in the com.aptana.deploy.epl fragment due to licensing issues).

## Deploy Wizard

The _com.aptana.deploy.deployWizards_ extension point allows plugins to register a deployment wizard which will step a user through configuring a project to be deployed using the chosen method. If this uses a 3rd-party service like Heroku or Engine Yard this involves stepping the user through registering an account, installing necessary gems, logging into the account (and saving their credentials in secure storage) and then finally running any initial setup for the project and storing this deployment method as the chosen one for this project (by setting a persistent property on the project pointing at the relevant **IDeployProvider**'s id). There are numerous examples available for capistrano, FTP, engine yard, heroku. This extension point is meant to be very similar to registering a _newWizard_, _importWizard_ or _exportWizard_. Please keep in mind that this is for deploying an existing project, not for generating a new project at the same time, ala Red Hat. To do that, you should provide a _newWizard_ extension.

## Deploy Provider

The _com.aptana.deploy.deployProviders_ extension point allows plugins to register an implementation of an **IDeploymentProvider**. The two methods we're concerned about are **deploy** and **handles**. The **deploy** method is the meat of the provider. It gets passed an IProject that we're deploying and an IProgressMonitor to report progress. This method is typically going to be called wrapped in a Job. This method simply takes a project that has been configured for this deployment type and runs the repeated deployment actions (for example, for Heroku it will run 'git push heroku master', for FTP it will run a sync operation).

The **handles** method is actually used as a fallback mechanism for choosing a deploy provider to implicitly use when no explicit provider was set up via a _deployWizard_. This can happen for projects that may have been configured to use a provider outside the IDE, or prior to being imported. Typically we'd check for some files or git state to determine For Heroku, we check that the project has a git repo and has a remote named 'heroku' or has a remote with a heroku.com URI. For Capistrano we check for a config/deploy.rb file. For EngineYard we check for an ey.yml file. For FTP we check if there's already a single remote connection set up for this project.
