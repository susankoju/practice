const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeDb"
});

conn.connect(function(err){
    if(err) console.log(err);
    else console.log("Database Connected");
});

var insert = function (req, res) {
    conn.query(`INSERT INTO user(name, address, contact, email, password) 
        VALUES('${req.body.name}', '${req.body.address}', '${req.body.contact}', '${req.body.email}', '${req.body.password}')`, function (err, result) {
        if (err) console.log(err);
        res.send(result);
    });
}

var remove = function (req, res) {
    conn.query(`DELETE FROM user WHERE id = ${req.params.id}`, function (err, result) {
        if (err) console.log(err);
        res.send(result);
    });
}

var fetch = function (req, res) {
    conn.query('SELECT * FROM user', function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
}


module.exports = {
    conn,
    fetch,
    insert,
    remove
};