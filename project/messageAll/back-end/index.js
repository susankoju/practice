const express = require('express');

const app = express();
const cors= require('cors');

const PORT = require('./configs/index').port;
const API_ROUTE = require('./routes/api.route.js');

app.use(cors()); //allow everything
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use( API_ROUTE);


app.use( function(req, res, next){

    next({
        status: 404,
        msg: '404 Not Found'
    });
});
app.use(function (err, req, res, next) {
    res.status(err.status || 400).json({
        msg: err.msg || "Error",
        err: err
    })
});
app.listen(PORT || 3000, function () {
    console.log("Server listening at port ", PORT || 3000);
});