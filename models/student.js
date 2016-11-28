var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studSchema = new Schema({
  first_name: String,
  last_name: String,
  address: String,
  father_name: String,
  male: String,
  female: String,
  telephone: String,
  birthday: Date,
  postal_code: String,
  passyear: String,
  institution: String,
  degree: String,
  marks: String,
  passyear1: String,
  institution1: String,
  course: String,
  marks1: String
});

var Student = mongoose.model('Student', studSchema);

module.exports = Student;
