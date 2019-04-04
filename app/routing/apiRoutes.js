// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold the array of potential bachelorettes.
// ===============================================================================



var bachelorettes = require('../data/bachelorettes.js');

// Routing the apiRoutes with the app.get and app.post functions
module.exports = function (app) {
    // API GET Requests
    // Handles when user 'visits' a page
    app.get('/api/bachelorettes', function (req, res) {
        res.json(bachelorettes);
    });
    // Handles when a user submits a form and thus submits data to the surver
    app.post('/api/bachelorettes', function (req, res) {
        // To take the result of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;
        console.log('userInput = ' + JSON.stringify(userData.scores));
        // loop through all of the possible options
        var matchName = '';
        var matchPhoto = '';
        var totalDifference = 1000;

        //loop through the bachelorettes data array of objects to get each bachelorettes scores
        for (var i = 0; i < bachelorettes.length - 1; i++) {
            console.log("Bachelorette: " + JSON.stringify(bachelorettes[i].name));
            var difference = 0;
            //loop through that bachelorettes score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                // We calculate the difference between the scores and sum them into the totalDifference
                difference += Math.abs(parseInt(userScores[j]) - parseInt(bachelorettes[i].scores[j]));
                // If the sum of differences is less then the differences of the current "best match"
                if (difference <= totalDifference) {
                    console.log('Closest match found = ' + difference);
                    console.log('Friend name = ' + bachelorettes[i].name);
                    console.log('Friend image = ' + bachelorettes[i].photo);

                    // Reset the bestMatch to be the new friend.
                    totalDifference = difference;
                    matchName = bachelorettes[i].name;
                    matchPhoto= bachelorettes[i].photo;
                }
            }
        }

        // The push method use to save user's data to the database
        bachelorettes.push(userData);

        //The res.json method will return a JSON data with the user's match which was looped through frieds data array. 
        res.json({ status: 'OK', matchName: matchName, matchPhoto: matchPhoto });
    });
};