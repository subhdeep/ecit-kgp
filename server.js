var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var myDoc = require('pdfkit');
var fs = require('fs');
var Student = require('./models/student');
var Course = require('./models/course');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

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
      var pdf = new myDoc({
        size: 'A4',
        layout: 'portrait'
      });
      pdf.pipe(fs.createWriteStream('example.pdf'));
      pdf.image("./images/ecit_logo.jpg",250,25,  {
        fit: [100, 33]
      });

      pdf.font("Times-Roman", 26);
      pdf.text("Electronics Corporation of India Limited", {
        align: 'center'
      });
      pdf.font("Times-Roman", 18);
      pdf.text("A Govt.Of India (Dept of Atomic Energy) Enterprise", {
        align: 'center'
      });
      pdf.font("Times-Roman", 18);
      pdf.text("Head Office: HYDERABAD", {
        align: 'center'
      });

      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("First Name:     " + req.body.first_name + "          " + "Last Name:     " + req.body.last_name);

      pdf.moveDown()
      pdf.text("Student Code:     " + req.body.stud_code + "          " + "Telephone:     " + req.body.telephone);

      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("Father's/Guardian's Name:     " + req.body.father_name);

      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("Address:     " + req.body.address + "          ");

      pdf.moveDown()
      pdf.text("Postal Code:     " + req.body.postal_code);

      pdf.moveDown()
      pdf.font("Times-Roman", 20);
      pdf.text("Educational Qualification");
      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("Year                    Name of Institution        Degree           Marks");
      pdf.font("Times-Roman", 12);
      pdf.text(req.body.passyear + "                               " + req.body.institution + "                                     " + req.body.degree + "                                " + req.body.marks);

      pdf.moveDown()
      pdf.font("Times-Roman", 20);
      pdf.text("Technical Qualification");
      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("Year                    Name of Institution        Course           Marks");
      pdf.font("Times-Roman", 12);
      pdf.text(req.body.passyear1 + "                                    " + req.body.institution1 + "                                       " + req.body.course + "                   " + req.body.marks1);

      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("Course Code:     " + req.body.course_code + "          " + "Course Name:     " + req.body.course_name);

      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("Course Duration:     " + req.body.course_duration);

      pdf.moveDown()
      pdf.moveDown()
      pdf.moveDown()
      pdf.moveDown()
      pdf.moveDown()
      pdf.font("Times-Roman", 16);
      pdf.text("______________________________");
      pdf.text("Student's Signature");

      pdf.end();

      res.redirect('/completion');
    }
  });
});

app.get('/generate', function(req, res) {
  fs.readFile('./example.pdf', function(err,data) {
    if(err) {
      res.send("Error Occured");
    } else {
      res.contentType("application/pdf");
      res.append('Content-Disposition','attactment; filename="form.pdf"');
      res.send(data);
    }
  });
});

app.get('/list', function(req, res) {
  Student.find({}, function(err, data) {
    if(err) {
      res.status(501).send('Error Occured');
    } else {
      res.json(data);
    }
  });
});

app.post('/newcourse', function(req, res) {
  console.log("New course added");
  console.log(req.body);
  var course = new Course(req.body);
  course.save(function(err) {
    if(err) {
      res.send(err);
    } else {
      res.redirect('/addcourse');
    }
  });
});
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log("Server is running on port 80!");
});
