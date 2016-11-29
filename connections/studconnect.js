var mongoose = require('mongoose');
var mongoURL = 'mongodb://localhost/admission'

module.exports = newstud = mongoose.createConnection(mongoURL);

newstud.on('connected', function() {
  console.log('admission connection is on');
});

