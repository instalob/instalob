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

// HashtagSchema.method.findByOwnerId = function(ownerId) {
//   // return Owner's Hashtags 
// }

HashtagSchema.statics.createNew = function(obj){
  var defer = Q.defer();
  var User = mongoose.model('User');
  var newhash = new Hash(obj.tagName);
  User.findOne({'instagram.id': obj.id})
  .populate('Hashtags', 'Hashtag')
  .exec( function(err, Hashbook){
    if (err) defer.reject(err);
    console.log('hashbook found ', Hashbook);
    if (Hashbook) {
      Hashbook.addToSet(newHash);
      console.log('hashbook added ', Hashbook);
      defer.resolve(Hashbook);
    }
  });
  return defer.promise;
};

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
HashtagSchema.method.recipientArray = function(){
};



module.exports = mongoose.model('Hashtag', HashtagSchema);
