'use strict'

module.exports = parseTweets;

function parseTweets(apiResponseStr){
    return JSON
        .parse(apiResponseStr)
        .statuses
        .map(function(st){
            return {
                id: st.id_str,
                text: st.text
            };
        });
}
