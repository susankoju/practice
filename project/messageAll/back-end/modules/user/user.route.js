const router = require('express').Router();
const userController = require('./user.controller');

router.route('/signup')
    .post(userController.signup)
router.route('/signin')
    .post(userController.signin)

module.exports = router;