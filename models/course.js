var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connectionTwo = require('../connections/courseconnect');

var courseSchema = new Schema({
  course_name: String,
  abbre_course: String,
  cor_code: String,
  course_description: String,
  content1: String,
  content2: String,
  content3: String,
  content4: String,
});

//var Course = mongoose.model('course', courseSchema);

module.exports = connectionTwo.model('courses', courseSchema);
