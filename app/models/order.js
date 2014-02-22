var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  Owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  Hashtag: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hashtag'
  },
  Recipients: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  Cost: Number, 
  CreatedOn: {type: Date, default: Date.now},
  CompletedOn: {type: Date, default: Date.now},
  FrontUrl: String,
  BackUrl: String  
});

OrderSchema.set('toObject', { getters: true });

module.exports = mongoose.model('Order', OrderSchema);