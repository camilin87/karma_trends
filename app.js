var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function () {
  console.log('Karma trends listening on port ' + app.get('port'));
});
