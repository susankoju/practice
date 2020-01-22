const query = require('./user.query');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../configs/index').jwtSecret;

module.exports = {
    signup : (req, res, next) => {
        bcrypt.hash(req.body.password, 10)
        .then( (hash) => {
            const data = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                contact: req.body.contact,
                email: req.body.email,
                password: hash,
                image: req.body.image,
                role: 'member'
            }
            query.insert(data)
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    next({
                        err: err
                    })
                })
        })
        .catch( (err) => {
             next({ err: err})
        })        
    },

    signin : (req, res, next) => {
        query.selectByEmail(req.body.email)
        .then(result=>{
            
            bcrypt.compare(req.body.password, result[0].password, (err, match) => {
 
                if(err) res.send(err);
                else if (match) {
                    res.json({
                        'token': jwt.sign({ 'email': req.body.email }, jwtSecret),
                        'id': result[0].id,
                        'firstName': result[0].firstName,
                        'lastName': result[0].lastName,
                    });
                }
                else {
                    next({
                        err: "Wrong Username or Password!"
                    });
                }
            })            
        })
        .catch((err)=>{
            next({
                err: err
            });
        })

    }
    
}