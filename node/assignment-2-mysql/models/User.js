
class User{
    constructor(id, name, address, contact, email, password){
        this.id = id || undefined;
        this.name = name || '';
        this.address = address || '';
        this.contact = contact || '';
        this.email = email || '';
        this.password = password || '';
        // console.log(this);
    }

    insert(conn){
        console.log(conn);
        conn.query(`INSERT INTO user(name, address, contact, email, password) VALUES('${this.name}', '${this.address}', '${this.contact}', '${this.email}', '${this.password}')`, function(err, result){
            if(err) console.log(err);
        });
    }

    fetch(conn, res){        
        conn.query('SELECT * FROM user', function(err, result, fields){
            if (err) throw err;
            res.send(result);
        });
    }
}

module.exports = User;