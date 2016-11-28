var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Student = require('./models/student');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/admission');

app.get('/home', function(req, res) {
  res.json({message : 'routing is working'});
});

app.post('/newstud', function(req, res) {
  console.log("Request processed");
  console.log(req.body);
  var student = new Student(req.body);
  student.save(function(err) {
    if(err) {
      res.send(err);
    } else {
      res.redirect('/admission');
    }
  });
});

app.post('/newcourse', function(req, res) {
  console.log("New course added");
  console.log(req.body);
});
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log("Server is running on port 3000!");
});
