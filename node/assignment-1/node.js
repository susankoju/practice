const fs = require('fs');
const http = require('http');
const port = 3000;

var server = http.createServer((req, res) => {
    console.log(`Client connected!`);
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    let pathArr = req.url.split('/');
    let operation = pathArr[1];
    let target = pathArr[2] || 'target.js';
    
    switch(operation){
        case 'write':
            let text = pathArr[3] || "Hello file";
            fs.writeFile(target , text, function(err, done){
                if(err){
                    console.log(`Error writing in file ${target}! ${err}`)
                    res.end(`Error writing in file ${target}! ${err}`)
                } 
                console.log(`Written in  ${target}`);
                res.end(`Written in  ${target}`);
            });
            break;
        case 'read':
            fs.readFile(target, 'UTF-8' ,function(err, done){
                if(err){
                    console.log(`Error reading in file ${target}! ${err}`)
                    res.end(`Error reading in file ${target}! ${err}`)
                }
                console.log(`>>  ${done}`);
                res.end(`>>  ${JSON.stringify(done)}`);
            })
            break;
        case 'rename':
            let newName = pathArr[3] || 'target.js';
            fs.rename(target, newName, function(err, done){
                if(err){
                    console.log(`Error reading in file ${target}! ${err}`)
                    res.end(`Error reading in file ${target}! ${err}`)
                }
                console.log(`${target} >>  ${newName}`);
                res.end(`New name >>  ${JSON.stringify(newName)}`);
            })
    }
    
}).listen(port, function (err, done) {
    if(err) {
        console.log(err);
        end(err);
    }
    console.log(`Server started at port ${port} | Waiting for client to connect...`);

})
