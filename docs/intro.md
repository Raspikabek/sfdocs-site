---
sidebar_position: 1
---

# Intro

Let's discover **SFDocs in less than 5 minutes**

## Why SF Docs?

The plugin borns from the necessity of having documentation of your objects, classes, profiles, etc. at hand outside of Salesforce, without having to review the repository source code and asking Developers or Architects to maintain documentation manually in order to audit the actual configuration of the Organization.

## How does it work?

Simply install the plugin and run the command `sfdx sfdocs:generate` in your sfdx project

_run `sfdx sfdocs:generate --help` for additional options and configurations_

## When should you run it?

You will be able to run the commands at any moment, but we recommend to automate this execution in your CI/CD pipeline on `main` / `master` / `production` deployments.

Ultimately you will be able to integrate the generation of documentation with your site, whether you create a static site with the content, send the information to your Confluence page or your documentation space of choice. 