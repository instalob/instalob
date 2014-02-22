var User      = require('../models/user.js');
var instagram = require('../config/instagram.js');

module.exports = {
  delete: function(req, res){
    User.findOneAndRemove({'_id': req._id}, function(err, user){
      if(err) throw new Error(err);
      res.send(204);
    });
  },

  subscribe: function(req, res){

  },

  update: function(req, res){
    console.log(req.body);
    res.send(200);
  }
};
