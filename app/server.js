var express     = require('express');
var mongoose    = require('mongoose');
var passport    = require('passport');

require('./config/passport.js')(passport);

var app         = express();

mongoose.connect('mongodb://localhost/instalob');

app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.session({secret: 'instalob'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

require('./routes/appRoutes.js')(app);
require('./routes/userRoutes.js')(app, passport);

module.exports = app;