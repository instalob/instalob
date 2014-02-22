var appController = require('../controllers/appController.js');

// only route in here prob is going to be this index becasuse of angular
module.exports = function(app){
  app.get('/', appController.index);
};