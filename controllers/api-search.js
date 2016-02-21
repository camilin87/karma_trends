'use strict'

module.exports = apiSearch;

var Twitter = require('twitter-node-client').Twitter;
var twitterConfig = require("../secrets/twitter.json");
var parseTweets = require('../services/parse-tweets.js');
var buildHttpRequest = require('../services/build-twitter-request.js');

function apiSearch(req, res){
    new Twitter(twitterConfig).getSearch(
        buildHttpRequest(req),
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
