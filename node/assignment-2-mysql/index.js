var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

const app = express();
const router = express.Router();
const upload = multer();

const authRoute = require('./controllers/auth.route');
const userRoute = require('./controllers/user.route');

const Port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(upload.array());
// app.use('/auth', authRoute);


app.use('/user', userRoute);

app.use('/', function (req, res) {
    res.send('Welcome To The Page');
});


app.use(function(err, req, res, next){
    res.send("err");
});

app.get( function(req, res){
    res.statusCode(404);
    res.send("404 Not Found!");
});

app.listen(Port, function() {
    console.log(`Server listening at port ${Port}`);
});