//Bring in our scrape script and makeDate scripts
var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

var HeadLine = require("../models/Headline");

//Bring in the Headline and Note Mongoose models

module.exports = {
  fetch: function(cb) {
    scrape(function(data){
      var articles = data;
      for(var i = 0; i < articles.length;i++){
        articles[i].date = makeDate();
        articles[i].saved =false;
      }

      Headline.collection.insertMany(articles, {ordered: false}, function(err,docs){
        cb(err,docs);
      })
    })
    
  },
  delete: function(query,cb){
    HeadLine.remove(query,cb);
  },
  get: function(query,cb) {
    HeadLine.find(query){
        sort({
          _id: -1
        }).exec(function(err,doc){
          cb(doc);
        })
    }
  },
  update: function(query) {
    HeadLine.update({_id: query._id}, {
      $set:query, {}, cb);
    })
  }
}
