# anz-take-home-test
##Getting started
I used Node js to implement the required api in test 1 as suggested even though it's not my strongest language.

run 'npm start' to start the application.

###Risk found for the api
 1. no authentication.
 2. sha needs to be retrieved from Git, which is dependent on the connection to Git.

###Versioning approach
Version number of this project consist of 3 digits divided by 2 dots.
The first one is the major number and should be incremented for each incompatible release.
The second number is the minor number and is for each compatible release.
While the last number is patch number which indicate the sequence of patches.

As for the test 2 my knowledge of Kubernetes is limited so I used a template pod from Internet.

Sorry for unable to deliver a script for deployment. The template should be like this:

kubectl create deployment <deployment name> --image <image to use>

Thanks for reviewing
