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


app.use('/message/send', function (req, res, next) {
    io.emit('broadcast');
    next();
});

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
const server = app.listen(PORT || 3000, function () {
    console.log("Server listening at port ", PORT || 3000);
});


const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', (socket) => {
    console.log('Client connected to socket: ' + socket.id);
})
// io.sockets.on('newMessage' ,socket => {
//     io.emit('broadcast');
//     console.log("New Message!");
// })


// io.sockets.on('newMessage', socket => {
//     io.sockets.emit('newMessage');
// })