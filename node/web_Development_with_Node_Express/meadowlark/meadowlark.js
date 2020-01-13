var fortune = require('./lib/fortune.js');
var express = require('express');


var app = express();

var handlebars = require('express3-handlebars')
    .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    
    res.render('about', { fortune: fortune.getFortune() });
});

app.get('/about/me', function (req, res) {
    res.type('text/plain');
    res.send('About Me');
});

//custom 404 page (middleware)
app.use(function(req, res){
    res.status(404);
    res.render('400');
});

//custo 500 page (middleware)
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost: ' + app.get('port') + '; press Ctrl-C to terminate.')
});