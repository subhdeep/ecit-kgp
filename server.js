var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Student = require('./models/student');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var router = express.Router();
mongoose.connect('mongodb://localhost/admission');

router.use(function(req,res,next) {
  console.log("Something is Happening");
  next();
});

router.get('/home', function(req, res) {
  res.json({message : 'routing is working'});
});


router.route('/newstud')
  .post(function(req,res) {
    console.log(req.body.first_name);
    var student = new Student();
    student.first_name = req.body.first_name;

    student.save(function(err) {
      if(err) {
        res.send(err);
      } else {
        res.json({message : 'Student created'});
      }
    });
  });

app.use('/api', router);
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log("Server is running on port 3000!");
});
