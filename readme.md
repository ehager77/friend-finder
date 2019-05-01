# Bachelorette Finder

## Description
Bachelorette Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

Demo
Friend Finder is deployed to Heroku. Please check it out here.

Installation
To install the application follow the instructions below:

`git clone git@github.com:angrbrd/friend-finder.git
cd friend-finder
npm install
node server.js`

The application will now be running locally on PORT, in this case that is port 8080. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:8080.
