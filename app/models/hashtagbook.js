var mongoose = require('mongoose');
var Schema = mongoose.Schema;

models = {};

var HashtagbookSchema = new Schema({
  id: Number,
  name: String,
  privateKey: String,
  publicKey: String
});

HashtagbookSchema.set('toObject', { getters: true });

models.Hashtagbook = mongoose.model('Hashtagbook', HashtagbookSchema);

module.exports = models;