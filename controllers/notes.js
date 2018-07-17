var Note = require("../models/Note");
var makeDate = require("../scrupts/date");

module.exports = {
  get: function(data,cb){
    //uses the mongodb method find
    Note.find({
      _headlineId: data._id
    }),
    //uses the mongodb method create
    save: function(data, cb) {
      var newNote = {
        _headlineId: data._id,
        date: makeDate(),
        noteText:data.noteText
      };
      Note.create(newNote, function(err, doc){
        if(err) {
          console.log(err);
        } else {
          console.log(doc);
          cb(doc) //why
          console.log(cb(doc));
        }
      });
    },
    delete: function(data,cb) {
      Note.remove({
          _id: data._id       
      }, cb);
    }
  }
}