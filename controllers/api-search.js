'use strict'

module.exports = apiSearch;

var Twitter = require('twitter-node-client').Twitter;
var twitterConfig = require("../secrets/twitter.json");
var parseTweets = require('../services/parse-tweets.js');

function apiSearch(req, res){
    console.log("q:", req.body.q, "geocode:", req.body.geocode);

    var apiQuery = {
        'q':req.body.q,
        'geocode': req.body.geocode,
        'lang': 'en',
        'count': 1000
    };

    new Twitter(twitterConfig).getSearch(
        apiQuery,
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
