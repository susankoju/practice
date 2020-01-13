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
            fs.writeFile(target , decodeURI(text), function(err, done){
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
            break;
        case 'append':
            let appendTxt = pathArr[3] ? ' '+ pathArr[3] : '';
            fs.appendFile(target, decodeURI(appendTxt), function(err, done){
                if(err){
                    console.log(`Error appending in file ${target}! ${err}`)
                    res.end(`Error appending in file ${target}! ${err}`)
                }
                console.log(`${decodeURI(appendTxt)} appended in ${target}`);
                res.end(`${decodeURI(appendTxt)} appended in ${target}`);
            });
            break;
        case 'remove':
            target = pathArr[2];
            if (target){
                fs.unlink(target, function(err, data){
                    if(err){
                        console.log(`Error deleting file ${target}! ${err}`)
                        res.end(`Error deleting file ${target}! ${err}`)
                    }
                    console.log(`${target} >>  Deleted`);
                    res.end(`Deleted >>  ${target}`);
                });
            } else {
                console.log(`File not specified to delete`);
                res.end(`File not specified to delete`);
            }
            break;
        default:
            console.log("Connected client with no action");
            res.end("Hello from server! No task to perform... Command by appending URL [/operation/target(optional)/value(optional)]");
    }
    
}).listen(port, function (err, done) {
    if(err) {
        console.log(err);
        end(err);
    }
    console.log(`Server started at port ${port} | Waiting for client to connect...`);

})
