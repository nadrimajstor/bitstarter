var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var fs_buffer_index = fs.readFileSync("index.html");
// fs.readFileSync(filename, [options])
// Synchronous version of fs.readFile. Returns the contents of the filename.
// If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

var index = fs_buffer_index.toString();

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
