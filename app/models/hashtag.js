var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HashtagSchema = new Schema({
  Hashtag: String, 
  Owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }, 
  Recipients: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Recipient'
  }]
});

HashtagSchema.set('toObject', { getters: true });

HashtagSchema.method.addRecipient = function(owner, recipientObject){
  var defer   = Q.defer();  
  var Hashtag = mongoose.model('Hashtag');
  var Owner   = mongoose.model('Owner').findOne({'Owner': Owner });
  Hashtag.findOne({'Owner': Owner })
    .exec(function(err, hash){
    if (err) defer.reject(err);
    if (recipients) hash.Recipients.push(recipientObject);
  });
  console.log('HashtagSchema test log:' ,this);
  return defer.promise;
};

// will search a User's hashtags 
HashtagSchema.method.recipientArray = function(){
  var defer = Q.defer();  
  var Hashtag = mongoose.model('Hashtag');
  Hashtag.findOne({'Hashtag': this.Hashtag })
    .populate('Recipients')
    .exec(function(err, recipients){
      if (err) defer.reject(err);
      if (recipients) defer.resolve(recipients);
    });
  console.log('HashtagSchema test log:' ,this);
  return defer.promise;
};




module.exports = mongoose.model('Hashtag', HashtagSchema);
