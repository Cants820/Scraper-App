

// Bring in the Scrape function from our scripts directoy
var scrape = require("../scripts/scrape");

// Bring headlines and notes from the controller
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");


module.exports = function(router) {

  router.get("/", function(req,res){
    res.render("home");
  });

  router.get("/saved", function(req,res){
    res.render("saved");
  });

  router.get("/api/fetch", function(req,res){
    
    headlinesController.fetch(function(req,res){
      if(!docs || doc.insertedCount === 0) {
        res.json({
          message: "No new articles today. Check back tomorrow!"
        });
      } else {
        res.json({
          message: "Added" + docs.insetedCount + " new articles!"
        });
      }
    })
  })

  router.get("api/headlines", function(req,res) {
    var query = {};
    if(req.query.saved) {
      query = req.query;
    }
  })

  headlineController.get(query, function(req,res){
    res.json(data)
  });

}

router.delete("/api/headlines/:id", function(req,res){
  var query = {};
  query._id = req.params.id;
  headlinesController.delete(query, function(err,data){
    res.json(data);
  })
})
//update our headlines
router.patch("/api/headlines", function(req,res){
  headlinesController.update(req.body, function(err,data){
    res.json(data);
  })
})
//display specific route to the user
router.get("/api/notes/:headline_id?", function(req,res){
  var query = {};
  if (req.params.headline_id) {
    query._id = req.params.headline_id;
  }
  notesController.get(query, function(err,data){
    res.json(data);
  });
});

router.delete("/api/notes/:id", function(req,res){
  var query = {};
  query._id = req.params.id;
  notesController.delete(query, function(err,data){
    res.json(data);
  });
});

router.post("api/notes", function(req,res){
  notesController.save(req.body, function(data){
    res.json(data);
  });
});