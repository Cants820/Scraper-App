// Require our dependencies

var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


//Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

var app = express();

//Set up an Express Router
var router = express.Router();

require("./config/routes")(router);


//if deployed, use the deployed database. Otherwise use the local mongo data 
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.use(express.static(__dirname + "/public"));


//Connect to Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");

//Use bodyParser in our App
app.use(bodyParser.urlencoded({
  extended:false
}))

//Have every request go through our router middleware
app.use(router);

//Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
})

