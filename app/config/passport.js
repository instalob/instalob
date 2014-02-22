var InstagramStrategy   = require('passport-instagram').Strategy;
var instaApp            = require('./config').instagram;
var User                = require('../models/user.js');
var env                 = require('./env.js');


module.exports = function(passport){

  passport.serializeUser(function(user, done){
    done(null, user);
  });

  passport.deserializeUser(function(obj, done){
    User.findById(obj._id, function(err, user){
      done(err, user);
    });
  });

  passport.use(new InstagramStrategy({
    clientID: instaApp.clientid,
    clientSecret: instaApp.clientSecret,
    callbackURL: env.url +'/auth/instagram/callback'
  },
  function(accessToken, refreshtoken, profile, done){
    process.nextTick(function(){
      var json = {
        accessToken: accessToken,
        profile: profile
      };
      User.findOneOrCreateOne(json)
      .then(function(user){
        return done(null, user);
      });
    });
  }));

};