module.exports = searchMonkeyLearn;

var MonkeyLearn = require('monkeylearn');
var monkeylearnConfig = require("../secrets/monkey_learn.json");

function searchMonkeyLearn(textList, onComplete){
    new MonkeyLearn(monkeylearnConfig.apiKey)
    .classifiers
    .classify('cl_qkjxv9Ly', textList)
    .then(function(response){
        var sanitizedResponse = response.result.map(function(classification){
            return { 
                classification: classification[0].label,
                probability: classification[0].probability
            };
        });

        onComplete(sanitizedResponse);
    });
}
