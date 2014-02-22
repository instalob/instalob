var lobController = require('../controllers/lobController.js');

// only route in here prob is going to be this index becasuse of angular
module.exports = function(app){
  app.get('/lob/order', lobController.orderPostcard); // for ordering a card
  app.post('/lob/verify', lobController.verifyAddress); // for verifying recipient address
  // app.get('/lob/batch', lobController.verifyAddress);
};