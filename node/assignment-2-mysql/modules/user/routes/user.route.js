const UserCtrl = require('./../controllers/user.controller');

const router = require('express').Router();


router.route('/')
    .get(UserCtrl.findAll)
    .post(UserCtrl.findAll)
router.route('/:id')
    .get(UserCtrl.findById)
    .put(UserCtrl.update)
    .delete(UserCtrl.remove)

router.route('/register')
    .post(UserCtrl.insert)
router.route('/remove/:id')
    .post(UserCtrl.remove)


module.exports = router;