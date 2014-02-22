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

module.exports = mongoose.model('Hashtag', HashtagSchema);