var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send("Site under Construction");
});

// app.use('/', express.static(__dirname + '/public'));

app.listen(3030, function() {
  console.log("Server is running on port 80!");
});
