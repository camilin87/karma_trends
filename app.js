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

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/api/search', function(req, res){
    console.log("q: ", req.body.q);
    result = {
        q: req.body.q
    };
    res.send(result);
});
