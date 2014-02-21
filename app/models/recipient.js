var mongoose = require('mongoose');
var Schema = mongoose.Schema;

models = {};

var RecipientSchema = new Schema({
  id: Number,
  name: String,
  privateKey: String,
  publicKey: String
});

RecipientSchema.set('toObject', { getters: true });

models.Recipient = mongoose.model('Recipient', RecipientSchema);

module.exports = models;