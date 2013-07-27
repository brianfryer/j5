var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var body = 'Give me a hex value!';
  res.end(body);
});

app.get('/:hex', function(req, res) {
  var hex = req.params.hex;
  var five = require("johnny-five");

  five.Board().on("ready", function() {
    var a = new five.Led.RGB([ 9, 10, 11 ]);
    this.repl.inject({
      a: a
    });
    a.color(hex);
  });
  res.end(hex);
});

app.listen(1337);
console.log('Listening on port 1337');