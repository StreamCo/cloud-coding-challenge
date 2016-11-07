StreamCo DevOps Lab
==========

Technical assessment for DevOps candidates.


Overview
==========

The purpose of this lab is to assess your skills and approach to automated provisioning, deployment and configuration management.

We ask you to complete the Basic Goals below and deliver the outputs requested.

Additional Challenges are highly recommended if you have time and want to show us what you can do.

Completing the basic goals in an automated, working, reliable, reproducible way is preferable to completing any of the additional challenges.  Be sure to give thought in explaining what further improvements you would make given more time.


Basic Goals
==========

* Using AWS Cloudformation, automate the deployment of secure, publicly available HA Load-Balanced Web Servers that return the instance id of the host that served the request.
* Ensure that the web servers are available in two AWS availability zones and will automatically rebalance themselves if there is no healthy web server instance in either availability zone.
* Redirect any HTTP requests to HTTPS. Self-signed certificates are acceptable.
* Answer the question: "How would you further automate the management of the infrastructure if given unlimited time and resource?"

Additional Challenges:
==========

* Drive the deployment with Puppet.
* Provide basic automated tests to cover included scripts, templates, manifests, recipes, code etc.
* Redirect any 404 errors to a custom static page.
* Add a Database to your automation and have your application serve the data stored in addition to the instance ID.

Output
==========

Please provide us with:

1. a public URL for hitting the web server deployment.
2. a set of read-only AWS access credentials (Access Key and Secret Key) allowing us to see the AWS resources used in the deployment.
3. SSH key pairs for logging onto the web instances used in the deployment.
4. any scripts, config files, manifests, recipes, or source code you used to achieve the goal above.
5. any detailed notes, written explanations, diagrams, screen shots to help demonstrate your work.
6. written answers to the question: "How would you further automate the management of the infrastructure?"

You can send these as:

* A public GitHub/Bitbucket repository URL.
* A zipped file via e-mail.
* A zipped file via URL download link.

You may tear down the environment once we have confirmed the completion of our review.

Notes:
==========

* AWS services are eligible for the free tier: https://aws.amazon.com/free/
