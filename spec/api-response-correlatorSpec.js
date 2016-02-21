var apiResponseCorrelator = require("../services/api-response-correlator.js");

describe("api-response-correlator", function(){
    it ("merges the two results", function(){
        var tweets = [
            {id: "1", text: "text1"},
            {id: "2", text: "text2"},
            {id: "3", text: "text3"}
        ];

        var classifications = [
            {classification: "a", probability: 1},
            {classification: "b", probability: 2},
            {classification: "c", probability: 3},
        ];

        var result = apiResponseCorrelator(tweets, classifications);

        var expectedResult = [
            {id: "1", text: "text1", classification: "a", probability: 1},
            {id: "2", text: "text2", classification: "b", probability: 2},
            {id: "3", text: "text3", classification: "c", probability: 3}
        ];
        expect(result).toEqual(expectedResult);
    });
});