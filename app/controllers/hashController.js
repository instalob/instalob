var User        = require('../models/user.js'),
    Recipient   = require('../models/recipient.js'),
    Hash        = require('../models/hashtag.js'),
    request     = require('request'),
    path        = require('path'),
    Q      = require('q');



module.exports = {
  newTag: function(req, res){
    if (process.env.NODE_ENV === 'local') req._id = 1101984940; // for testing
    // make hashtag for owner
    var obj = {
      userid   : req._id,
      tagName  : req.params.tagName
    };
    console.log(obj);
    Hash.createNew(obj)
    .then(function(result){
      res.send(result);
    });
  },
  addRecipient: function(req, res){
    // add recipient to hashtag from the form
    res.send('hi')

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

