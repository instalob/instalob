var User        = require('../models/user.js'),
    Recipient   = require('../models/recipient.js'),
    Hash        = require('../models/hashtag.js'),
    request     = require('request');

module.exports = {
  newTag: function(req, res){
    // make hashtag for owner
    var obj = {
      userid   : req.user._id,
      tagName  : req.params('tagName')
    };
    Hash.createNew(obj)
    .then(res.send(obj));
  },
  addRecipient: function(req, res){
    // add recipient to hashtag from the form


  },
    // removes: {recipient: {}, remove: true}
  removeRecipient: function(req, res){
    // remove recipient from hashtag list


  },
  returnRecipients: function(req, res){
    // look up user's hashtags, 
    var user = req.user._id;
    
    // return all recipients in an array
    // 
    var hashtag = req.body;

  }
};

