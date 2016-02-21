'use strict'

module.exports = apiSearch;

var Twitter = require('twitter-node-client').Twitter;
var parseTweets = require('../services/parse-tweets.js');

function apiSearch(req, res){
    console.log("q:", req.body.q, "geocode:", req.body.geocode);

    var config = require("../secrets/twitter.json");
    var twitter = new Twitter(config);

    var apiQuery = {
        'q':req.body.q,
        'geocode': req.body.geocode,
        'lang': 'en',
        'count': 1000
    };
    twitter.getSearch(
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
