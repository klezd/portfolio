require('dotenv').config();
var express = require('express');

var app = express();
var PORT = process.env.PORT || 5000;
app.set('port', PORT);
// Map public files folder
app.use(express.static(__dirname + '/public'));
// All view template files goes here.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Root page will be the index page (views/pages/index)
app.get('/', function(request, response) {
    response.render('pages/index', {title: "Quynh Dao - Portfolio", page: "home"});
});

app.get('/profile', function(request, response) {
    response.render('pages/profile', {title: "Quynh Dao - Profile", page: "profile"});
});

app.listen(app.get('port'), function() {
    console.log('Up and running in a port:', PORT);
});

var https = require('https')
setInterval(function() {
    https.get("https://sienna-portfolio-197.herokuapp.com");
}, 1000000);
