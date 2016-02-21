'use strict'

module.exports = buildTwitterClient;

var Twitter = require('twitter-node-client').Twitter;
var twitterConfig = require("../secrets/twitter.json");

function buildTwitterClient(){
    return new Twitter(twitterConfig);
}
