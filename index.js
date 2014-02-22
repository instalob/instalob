var app = require('./app/server.js');
var PORT = process.env.NODE_PORT || 3000;
app.listen(PORT);

console.log('serving on port: ', PORT);