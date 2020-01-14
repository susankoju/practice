const router = require('express').Router();

const mysql = require('mysql')
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeDb',
    insecureAuth: true
});
conn.connect( function(err){
    // if(err) throw err;
    if(err) console.log(err);
    else
    console.log('MySql Connected');
});

var User = require('../models/User.js');

router.route('/')
    .get(function (req, res) {
        // res.write("User data");
        var user = new User();
        var data = user.fetch(conn, res);
        // user.fetch(conn);
        // console.log(data);
        // res.send(data);
    })

router.route('/register')
    .post(function( req, res){
        // if(err) res.end(err);
        var user = new User(undefined, req.body.name, req.body.address, req.body.contact, req.body.email, req.body.password);
        // console.log(req.body.address);
        user.insert(conn);
        res.send(req.body);
    })


module.exports = router;