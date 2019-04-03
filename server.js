// npm packages
var express = require('express');

// creates the express app
var app = express();

// create the PORT to listen!
// process.env.PORT
var PORT = process.env.PORT || 8080;

// now begin actually using that app!
// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// this allows access to all things in public
app.use(express.static('app/public'));

// create a map of how to handle the different routes!
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// finally access the port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

})
