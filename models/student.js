var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connectionOne = require('../connections/studconnect');

var studSchema = new Schema({
  first_name: String,
  last_name: String,
  address: String,
  stud_code: String,
  father_name: String,
  relation: String,
  gphone_no: String,
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
  marks1: String,
  course_code: String,
  course_name: String,
  course_duration: String
});

//var Student = mongoose.model('Student', studSchema);

module.exports = connectionOne.model('students', studSchema);
