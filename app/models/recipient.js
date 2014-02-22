var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var RecipientSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Completed: Boolean,
  Home: {
    address_line1: String,
    address_line2: String,
    address_city: String,
    address_state: String,
    address_zip: String,
    address_country: String
  }, 
  Owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

RecipientSchema.set('toObject', { getters: true });

module.exports = mongoose.model('Recipient', RecipientSchema);