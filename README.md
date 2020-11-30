# Stan Cloud Engineering Challenge

## Overview

The purpose of this challenge is to assess your skills and approach to automated provisioning, deployment and configuration management.

Please complete the basic goals below and deliver the outputs as requested. You don't need to spend more than a couple of hours on the challenge.

Additional challenges are available if you have time and want to show us what you can do.

Completing the basic goals in an automated, reliable, reproducible way is preferable to completing any of the additional challenges.

## Basic Goals

* Automate the deployment of secure, publicly available, load-balanced web servers that return the instance ID of the host that served the request.
* Ensure that the web servers are available in two AWS availability zones and will automatically rebalance themselves if there is no healthy web server instance in either availability zone.
* Redirect any HTTP requests to HTTPS. Self-signed certificates are acceptable.
* Write one or two paragraphs about how you might further improve the automation and management of the infrastructure if you were to take it into production.

*Note:* All of the services required are eligible for the [AWS Free Tier](https://aws.amazon.com/free/).

## Additional Challenges

* Provide basic automated tests to cover included scripts, templates, manifests, recipes, code, etc.
* Return a custom static page for 4XX/5XX errors.
* Add a database to the infrastructure and have your application serve something from the database in addition to the instance ID.
* Write one or two paragraphs about why you solved the basic goals and additional challenges the way you did.

## Output

Please include in your e-mail:

1. a public URL to access your deployment
1. your written answers
1. any scripts, config files, manifests, recipes, or source code you used to achieve the goals, in the form of
    * a public source repository URL,
    * a zipped file,
    * or a zipped file via download link

We'll complete our review of the live environment within 2 business days so that you can tear it down promptly.
