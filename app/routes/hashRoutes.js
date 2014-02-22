var hashController = require('../controllers/hashController.js');

// only route in here prob is going to be this index becasuse of angular
module.exports = function(app){
  app.post('/hash/new/:tagName', hashController.newTag); // make hashtag for owner
  app.post('/hash/add', hashController.addRecipient); // add/remove recipient to hashtag
  app.post('/hash/remove', hashController.removeRecipient); // add/remove recipient to hashtag
  app.get('/hash/list', hashController.returnRecipients); // get all recipients
};