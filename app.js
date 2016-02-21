var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Karma trends listening on port ' + app.get('port'));
});

app.get('/', function(req, res){
    res.sendFile('/public/twitter-api.html', { root: __dirname });
});
app.post('/api/search', require('./controllers/api-search.js'));
