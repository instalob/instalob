var instagram = require('instagram-node-lib');
var config    = require('./config');
var env       = require('./env.js');



instagram.set('client_id', config.instagram.clientid);
instagram.set('client_secret', config.instagram.clientSecret);
instagram.set('callback_url', process.env.URL + '/instagram/subscribe');
instagram.set('redirect_uri', process.env.URL);

instagram.users.subscribe({
  object: 'user',
  aspect: 'media',
  type: 'subscription',
  id: '1',
});

module.exports = instagram;