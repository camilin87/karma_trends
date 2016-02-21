module.exports = apiResponseCorrelator;

function apiResponseCorrelator(tweets, classifications){
    return tweets.map(function(t, idx){
        var c = classifications[idx];
        return {
            id: t.id,
            text: t.text,
            classification: c.classification,
            probability: c.probability
        };
    });
}
