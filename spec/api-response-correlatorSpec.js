var apiResponseCorrelator = require("../services/api-response-correlator.js");

describe("api-response-correlator", function(){
    it ("knows how to sum", function () {
        expect(1).toBe(1);
    });

    it("returns 2", function(){
        expect(apiResponseCorrelator()).toBe(2);
    });
});