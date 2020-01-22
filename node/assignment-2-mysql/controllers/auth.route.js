const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('./../configs');

function generateToken(data){
    let token = jwt.sign({id: data.id, password: data.password}, config.jwtSecret);
    return token;
}

router.get('/', function(req, res, next){
    res.json({
        msg: "Empty form",
    });
});

router.post('/login', function(req, res, next){
    let token = generateToken({id: 2 , name: 'asdasd'});
    res.json({
        user: req.body,
        token: token
    });
})

module.exports = router;