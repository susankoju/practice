const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeDb"
});

conn.connect(function (err) {
    if (err) console.log(err);
    else console.log("Database Connected");
});


module.exports = conn;