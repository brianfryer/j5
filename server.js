var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

(function() {
  var five = require("johnny-five");
  five.Board().on("ready", function() {
    var theLED = new five.Led.RGB([ 9, 10, 11 ]);
    this.repl.inject({
      theLED: theLED
    });
  });
})();

app.get('/', function(req, res) {
  theLED.off();
  res.render('index');
});

app.get('/:hex', function(req, res) {
  theLED.color(req.params.hex);
  res.end('yay!');
});

app.listen(1337);
console.log('Listening on port 1337');
