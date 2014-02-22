var userController    = require('../controllers/userController.js');



module.exports = function(app, passport){

  // instagram log in route
  app.get('/auth/instagram', passport.authenticate('instagram'), function(req, res){

    res.send(200);
  });

  // instagram ouath callback url
  app.get('/auth/instagram/callback', passport.authenticate('instagram'), function(req, res){
    console.log('here');
    res.redirect('/');
  });

  app.delete('/', userController.delete);

  app.get('/subscribe', userController.subscribe);
  app.post('/subscribe', userController.update);
};