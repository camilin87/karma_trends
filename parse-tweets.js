'use strict'

module.exports = parseTweets

function parseTweets(apiResponseStr, onComplete){
    var parsed_data = JSON.parse(apiResponseStr);
    // console.log(parsed_data.statuses[0]);
    // return parsed_data.statuses[0].text;
    onComplete(parsed_data.statuses[0].text);
}
