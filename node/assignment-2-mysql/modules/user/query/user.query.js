const conn = require('./../models/user.model');


function remove(id) {
    conn.query(`DELETE FROM user WHERE id = ${id}`, function (err, result) {
        if (err) console.log(err);
        return result;
    });
}

function insert(data){
    conn.query(`INSERT INTO user(name, address, contact, email, password) 
        VALUES('${data.name}', '${data.address}', '${data.contact}', '${data.email}', '${data.password}')`, function (err, result) {
        if (err) console.log(err);
        return result;
    });
}

function find(condition){
    // console.log(condition);
    var condition = condition ? "id = "+condition : 1;
    return new Promise ((resolve,reject)=>{
        conn.query(`SELECT * FROM user WHERE ${condition}`, function (err, result, fields) {
        if (err) return reject(err);
        // console.log(result);
        return resolve(result);
    });})
}

function update(id, data){
    return ("In progress");
}

module.exports = {
    find,
    insert,
    remove,
    update
};