var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Instagram: {
    accesstoken: String, 
    tokenSecret: String,
    id: String 
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

module.exports = mongoose.model('User', UserSchema);