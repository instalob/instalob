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
    instagram.media.info({
      media_id: media_id,
      complete: function(data){
        console.log('data', data);
        User.processImage(data);
    }});
    res.send(200);
  }
};
            
var compareImageTagsWithUserTags = function(imgTags, subscriberTags) {
  imgTags.forEach(function(imgTag) {
    subscriberTags.forEach(function(subscribedTag) {
      if (imgTag === subscribedTag) {
        // process image for delivery to subscribers
      }
    });
  });
};

var processImage = function (data) {
  var id = data.user.id;
  var imgTags = data.tags;


  // findUsersHashtags
  User.findUsersHashtags(data);

  // compare users hashtags, returns array of matched hashtags from image
  
  // for each matched tag, get recipients for that tag, return recipients array

    // get pdf

  // for each recipient, order a card w/ Message & PDF






 User.findUsersHashtags(data.user.id)
  .then(function(hashtagArray) {
    compareImageTagsWithUserTags(data.tags, hashtagArray);
  });

  // 







};
