var port = process.env.PORT || 5000;
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var join = require('path').join;
var i18n = require('i18n');
i18n.configure({
    locales:['en', 'ru'],
    directory: __dirname + '/lang',
    register: global
});
server.listen(port);
app.set('views', join(__dirname, '/template'));
app.set('view engine', 'ejs');
app.use(i18n.init);
app.use('/www', express.static(__dirname + '/www'));
app.get('/', function(req, res) {
    res.render('index.ejs', {lang:'ru'});
});
app.get('/en', function(req, res) {
    setLocale(req, 'en');
    res.render('index.ejs', {lang:'en'});
});
app.get('/ru', function(req, res) {
    setLocale(req, 'ru');
    res.render('index.ejs', {lang:'ru'});
});