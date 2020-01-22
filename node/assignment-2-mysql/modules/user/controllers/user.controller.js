const UserQuery = require("./../query/user.query")

function insert(req, res, next){
    res.send(UserQuery.insert(req.body));
}

function findAll(req, res, next){

    
        UserQuery.find()
        .then(
        (value) => {
            // console.log(data);
            // console.log(value);
            res.send(value);
        })
        .catch((err)=>{next(err)});
}

function findById(req, res, next) {
    res.send(UserQuery.find(req.params.id));
}

function remove(req, res, next) {
    res.send(UserQuery.remove(req.params.id || req.body.id));
}

function update(req, res, next){
    res.send(UserQuery.update(req.body.id, req.body));
}

module.exports = {
    insert,
    findAll,
    findById,
    update,
    remove
}