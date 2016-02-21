'use strict'

module.exports = apiSearch;

var parseTweets = require('../services/parse-tweets.js');
var buildTwitterClient = require('../services/build-twitter-client.js');
var buildTwitterRequest = require('../services/build-twitter-request.js');

function apiSearch(req, res){
    buildTwitterClient().getSearch(
        buildTwitterRequest(req),
        function (err, response, body) {
            console.log('ERROR [%s]', err);
            res.status(500);
            res.send("api error");
        },
        function (data) {
            var tweetsData = parseTweets(data);
            res.send(tweetsData);
        }
    );
};
