var mongoose = require('mongoose');
var mongoURL = 'mongodb://localhost/newcourse'

module.exports = newcourse = mongoose.createConnection(mongoURL);

newcourse.on('connected', function() {
  console.log('course addition connection on');
});
