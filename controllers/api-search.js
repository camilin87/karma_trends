'use strict'

module.exports = apiSearch;

var parseTweets = require('../services/parse-tweets.js');
var buildTwitterClient = require('../services/build-twitter-client.js');
var buildTwitterRequest = require('../services/build-twitter-request.js');
var searchMonkeyLearn = require('../services/search-monkey-learn.js');
var apiResponseCorrelator = require("../services/api-response-correlator.js");

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

            var textsLists = tweetsData.map(function(t){
                return t.text;
            });

            searchMonkeyLearn(textsLists, function(classificationsData){
                var apiResult = apiResponseCorrelator(tweetsData, classificationsData);
                res.send(apiResult);
            });
        }
    );
};
