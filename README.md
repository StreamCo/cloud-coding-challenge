StreamCo DevOps Lab
==========

Technical assessment for DevOps candidates.


# Overview
==============================

The purpose of this lab is to assess your skills and approach to automated provisioning, deployment and configuration management.

We ask you to complete the Basic Goals below and deliver the outputs requested.

Additional Challenges are suggested if you have time and want to show us what you can do.

Completing the basic goal in an automated, working, reliable, reproducible way is preferable to completing any of the additional challenges.  Be sure to give thought in explaining what further improvements you would make given more time.


# Basic Goals
==============================

* Using AWS, automate the deployment of secure, publicly available HA Load-Balanced Web Servers that return a ‘Hello World’ page.
* Answer the question: "How would you further automate the management of the infrastructure?"


# Output
==============================

Please provide us with:

1. a public URL for hitting the web server deployment.
2. a set of read-only AWS access credentials allowing us to see the AWS resources used in the deployment.
3. SSH key pairs for logging onto the web instances used in the deployment.
4. any scripts, config files, manifests, recipes, or source code you used to achieve the goal above.
5. any detailed notes, written explanations, diagrams, screen shots to help demonstrate your work.
6. written answers to the question: "How would you further automate the management of the infrastructure?"

You can send these as:

* *a public GitHub repo URL.*
* *a zipped file via email.*
* *a zipped file via URL download link.*

*You may tear down the environment once we have confirmed the completion of our review.*


# Additional Challenges:
==============================

* Ensure that the web servers are available in two AWS availability zones and will automatically rebalance themselves if there is no healthy web server instance in either availability zone.
* Drive the deployment with a continuous integration tool.
* Provide basic automated tests to cover included scripts, templates, manifests, recipes, code etc.
* Redirect any 404 errors to a custom static page.
* Redirect any HTTP requests to HTTPS.
* Send a notification to an SNS topic for each 404 error. Notification message should include: `<Time of 404>, <URL Attempt>, <IP Address of request>`
* Redirect all http requests to https and enable SSL on the web server (use a self signed certificate)
* Generate the "Hello World" page with a simple web app, fronted by a web server.
    * You may use the hello_app Node.js code in the [StreamCo/devops-lab](https://github.com/StreamCo/devops-lab) GitHub repo or write your own app in any language.
    * (*Note that the Node.js code in this repo is intentionally broken and needs to be fixed before using.*)


# Notes:
==============================

* Again, completing the basic goal in an automated, working, reliable, reproducible way is preferable to completing any of the additional challenges.
* Note that the hello_app Node.js code in this repo is intentionally broken and needs to be fixed before using.
* Self signed SSL certificates are OK.


