const authenticate = require('./../middlewares/authenticate');
const userRoute = require('./../modules/user/routes/user.route');
const router = require('express').Router();




router.use('/user',authenticate , userRoute);
router.use('/auth', require('./../controllers/auth.route'));


module.exports = router;