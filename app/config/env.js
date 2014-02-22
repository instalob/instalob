

var url = process.env.URL || 'http://127.0.0.1:3000';
module.exports = {
  url: url,
  errorCatcher: function(err, req, res, next){
    if(!err) return next();
    console.error(err.stack);
    res.send(500);
  }
};