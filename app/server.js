var express     = require('express');
var mongoose    = require('mongoose');
var app         = express();

mongoose.connect('mongodb://localhost/instalob');

app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(app.router);

require('./routes/appRoutes.js')(app);

module.exports = app;