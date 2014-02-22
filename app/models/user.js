var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Q      = require('q');

var UserSchema = new Schema({
  instagram: {
    accessToken: String,
    refreshToken: String,
    id: String,
    user_name: String
  },
  FirstName: String,
  LastName: String,
  Email: {
    type:String,
    unique: true,
    index: true
  },
  Home: {
    address_line1: String,
    address_line2: String,
    address_city: String,
    address_state: String,
    address_zip: String,
    address_country: String
  },
  Billing: {
    address_line1: String,
    address_line2: String,
    address_city: String,
    address_state: String,
    address_zip: String,
    address_country: String
  },
  Addressbook: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Recipient'
  }],
  Hashtags: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Hashtag'
  }],
  OrderHistory: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Order'
  }]

});

UserSchema.set('toObject', { getters: true });


// will find a user by instagram id, if not one,
// make a new one with the token,id,and username
UserSchema.statics.findOneOrCreateOne = function(json){
  console.log('json', json);
  var defer = Q.defer();
  var profile = json.profile;
  var accessToken = json.accessToken;
  var refreshToken = json.refreshToken;
  var User = mongoose.model('User');
  User.findOne({'instagram.id': profile.id}, function(err, user){
    if(err) defer.reject(err);
    if(user) defer.resolve(user);
    if(!user){
      console.log('no user here');
      var newUser = new User({
        'instagram.id': profile.id,
        'instagram.accessToken': accessToken,
        'instagram.user_name': profile.username
      });

      newUser.save(function(err, person){
        if(err) defer.reject(err);
        console.log("saved user ", person);
        if(person) defer.resolve(person);
      });
    }
  });
  return defer.promise;
};

module.exports = mongoose.model('User', UserSchema);