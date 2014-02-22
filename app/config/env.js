

var url = 'http://ec2-54-201-82-157.us-west-2.compute.amazonaws.com' || 'http://127.0.0.1:3000';
module.exports = {
  url: url,
  errorCatcher: function(err, req, res, next){
    if(!err) return next();
    console.error(err.stack);
    res.send(500);
  }
};