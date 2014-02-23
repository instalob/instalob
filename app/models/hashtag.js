var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Q      = require('q');

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
  var Hashtag = mongoose.model('Hashtag');
  var newhash = new Hashtag({'Hashtag': obj.tagName});
  newhash.save();
  User.findOne({'instagram.id': obj.userid})
  .populate('Hashtags', 'Hashtag')
  .exec( function(err, User){
    if (err) defer.reject(err);
    if (User) {
      User.Hashtags.addToSet(newhash);
      User.save(); // TODO: this is ugly... should be fixed, i think.
      defer.resolve(User.Hashtags);
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
