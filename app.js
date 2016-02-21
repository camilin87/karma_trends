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

var apiSearch = require('./controllers/api-search.js');
app.post('/api/search', apiSearch);
// var Twitter = require('twitter-node-client').Twitter;
// var parseTweets = require('./services/parse-tweets.js');
// app.post('/api/search', function(req, res){
//     console.log("q:", req.body.q, "geocode:", req.body.geocode);

//     var config = require("./secrets/twitter.json");
//     var twitter = new Twitter(config);

//     var apiQuery = {
//         'q':req.body.q,
//         'geocode': req.body.geocode,
//         'lang': 'en',
//         'count': 1000
//     };
//     twitter.getSearch(
//         apiQuery,
//         function (err, response, body) {
//             console.log('ERROR [%s]', err);
//             res.status(500);
//             res.send("api error");
//         },
//         function (data) {
//             var tweetsData = parseTweets(data);
//             res.send(tweetsData);
//         }
//     );
// });
