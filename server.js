// Runs a simple web server

var express = require('express');
var app = express();
var hostname = 'localhost';
var port = '8090';

app.get('/', function(req, res) {
  res.send('Big Hello to the whole World!');
})

app.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
})
