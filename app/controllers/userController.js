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
    instagram.subscriptions.handshake(req, res);
  },

  update: function(req, res){
    var media_id = req.body[0].data.media_id;
    console.log('media_id', media_id);
    instagram.media.info({media_id: media_id,
      complete: function(data){
        console.log('data', data);
      }});
    res.send(200);
  }
};
