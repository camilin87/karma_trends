module.exports = buildTwitterRequest;

function buildTwitterRequest(httpRequest){
    console.log("q:", httpRequest.body.q, "geocode:", httpRequest.body.geocode);

    return {
        'q':httpRequest.body.q,
        'geocode': httpRequest.body.geocode,
        'lang': 'en',
        'count': 1000
    };
}
