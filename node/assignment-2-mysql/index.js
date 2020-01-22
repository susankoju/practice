var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

const API_ROUTE = require('./routes/api.routes');

const app = express();
const router = express.Router();
const upload = multer();


const Port = require('./configs/index').port;

// inbuild middleware for farsing incoming data
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(upload.array());
// app.use('/auth', authRoute);

//routing party middleware here
app.use('/api', API_ROUTE);

app.use(function(req, res, next){
    next({
        status: 404,
        msg: 'Not Found'
    });
})

app.use(function (err, req, res, next) {
    console.log("Error handler");
    res.status(400).json({
        msg: 'Error handling middleware',
        err: err
    });
});


app.listen(Port, function() {
    console.log(`Server listening at port ${Port}`);
});