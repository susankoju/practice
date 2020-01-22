const router = require('express').Router();


const conn = require('../models/database');

router.route('/')
    .get(function (req, res) {
        conn.fetch(req, res);
    })

router.route('/register')
    .post(function (req, res) {
        conn.insert(req, res);
    })
router.route('/remove/:id')
    .post(function (req, res) {
        conn.remove(req, res);
    })


module.exports = router;