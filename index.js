var express = require('express');
var app = express();

(function() {
  var five = require("johnny-five");
  five.Board().on("ready", function() {
    var theLED = new five.Led.RGB([ 9, 10, 11 ]);
    this.repl.inject({
      theLED: theLED
    });
  });
})();

var updateColor = function(hex) {
  theLED.color(hex);
};

app.get('/', function(req, res) {
  var body = 'Give me a hex value!';
  res.end(body);
});

app.get('/:hex', function(req, res) {
  var hex = req.params.hex;
  updateColor(hex);
  res.end(hex);
});

app.listen(1337);
console.log('Listening on port 1337');
