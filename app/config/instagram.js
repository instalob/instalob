var instagram = require('instagram-node-lib');
var config    = require('./config');
var env       = require('./env.js');


instagram.set('client_id', config.instagram.clientid);
instagram.set('client_secret', config.instagram.clientSecret);
instagram.set('callbak_url', env.url + '/instagram/callback');
instagram.set('redirect_uri', env.url);

module.exports = instagram;