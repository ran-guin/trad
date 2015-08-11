var jwt = require('machinepack-jwt');
var jwtAuth = require('machinepack-jwtauth');

var tokenSecret = process.env.TOKEN_SECRET || 'defaultSecret';

module.exports.issueToken = function(payload, callback) {
    console.log("issue token for: " + JSON.stringify(payload));

    var token = jwt.encode({
        secret: tokenSecret,
        payload: payload, 
        algorithm: 'HS256',
        expires: 43200,
    }).exec({
        error: function(err) {
            callback("error encoding...");
        },
        success: function(result) {
            console.log('Result: ' + result);
            callback(null, result);
        },
    });
}

module.exports.verifyToken = function(token, callback) {
    jwtAuth.verifyFromHeader({
        header: 'Authorization',
        secret: tokenSecret,
        schema: '*',
        headerPrefix: 'Bearer ',
        algorith: 'HS256',
    }).exec({
        error: function(err) {
            console.log("jwt error" + err);
            return callback("jwt error: " + err);
        },
        nullHeader: function() {
            console.log("no token in header");
            return callback("no token: " + err);
        },
        success: function() {
           return callback(null, jwt.decode(token, tokenSecret));  
        },
    });

    function callback(err, result) {
        if (err) { return console.log("Callback error: " + err) }
        else { return result }
    }
}
