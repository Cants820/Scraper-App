//Scrape Script
// =============


// Require request and cheerio, making our scrapes possible
var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {


  //request takes two articles 
  request("http://www.nytimes.com", function(err,res,body){

      var $ = cheerio.load(body);

      $(".theme-summary").each(function(i, element){

         var head = $(this).children(".story-heading").text().trim();
         var sum = $(this).children()

      })



  })

}