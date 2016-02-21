'use strict'

module.exports = errorResponse;

function errorResponse(httpResponse, err){
    console.log('ERROR [%s]', err);
    httpResponse.status(500);
    httpResponse.send("api error");
}
