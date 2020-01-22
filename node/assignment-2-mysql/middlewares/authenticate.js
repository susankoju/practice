const jwt = require('jsonwebtoken');
const config = require('./../configs/index');

module.exports = function(req, res, next) {
    let token;
    // console.log(req.headers['token']);

    if (req.headers['x-access-token']) {
        token = req.headers['x-access-token'];
    }
    if (req.headers['authorization']) {
        token = req.headers['authorization'];
    }
    if (req.headers['token']) {
        token = req.headers['token'];
    }
    if (req.query['x-access-token']) {
        token = req.query['x-access-token'];
    }
    if(token) {
        jwt.verify(token, config.jwtSecret, function(err, decoded){
            if(err){
                return next(err);
            }
            console.log('Decoded value >>> ',decoded);
            return next();
        })
    } else {
        next({
            msg: "Token not provided"
        });
    }
}