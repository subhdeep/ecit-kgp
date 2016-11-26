var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studSchema = new Schema({
  first_name: String,
  last_name: String
});

var Student = mongoose.model('Student', studSchema);

module.exports = Student;
