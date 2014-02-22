var User        = require('../models/user.js'),
    Recipient   = require('../models/recipient.js'),
    lob         = require('../config/lob.js'),
    request     = require('request');

module.exports = {
  verifyAddress: function(req, res){
    //TODO: verify address during recipient signup
    var address = req.body;
    console.log(req.body);
    res.send();
  },

  orderPostcard: function(order){
    
  }
};
