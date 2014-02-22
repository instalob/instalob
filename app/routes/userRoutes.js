var userController    = require('../controllers/userController.js');



module.exports = function(app, passport){
  app.get('/auth/instagram', passport.authenticate('instagram'), function(req, res){

    res.send(200);
  });
  app.get('/auth/instagram/callback', passport.authenticate('instagram'), function(req, res){
    console.log('here');
    res.redirect('/');
  });
};