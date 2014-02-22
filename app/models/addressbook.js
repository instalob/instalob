var mongoose = require('mongoose');
var Schema = mongoose.Schema;

models = {};

var AddressbookSchema = new Schema({
  id: Number,
  name: String,
  privateKey: String,
  publicKey: String
});

AddressbookSchema.set('toObject', { getters: true });

models.Addressbook = mongoose.model('Addressbook', AddressbookSchema);

module.exports = models;