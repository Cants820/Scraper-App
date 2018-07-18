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
         var sum = $(this).children(".summary").text().trim();

         if(head && sum) {
          // This section uses regular expressions and the trim function to tidy our headlines and summaries
          // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
          
            var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

             // Initialize an object we will push to the articles array

            var dataToAdd = {
              headline: headNeat,
              summary: sumNeat,
              url: url
            };
              articles.push(dataToAdd);
            }
         


      });

    return articles;

  });

};

module.exports = scrape;