var port = process.env.PORT || 5000;
var express = require('express');
var http = require('http');
var i18n = require('i18n');
var cookieParser = require('cookie-parser');
var app = express();
var server = http.createServer(app);
i18n.configure({
    locales:['en', 'ru'],
    directory: __dirname + '/lang',
    defaultLocale: 'en',
    cookie: 'theherolang',
    register: global
});
server.listen(port);
app.set('views', __dirname+'/template');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(i18n.init);
app.use('/www', express.static(__dirname + '/www'));
app.get('/', function(req, res) {
    res.render('index.ejs', {lang:getLocale()});
});
app.get('/en', function(req, res) {
    res.cookie('theherolang', 'en', { maxAge:90000, httpOnly:true });
    setLocale(req, 'en');
    res.render('index.ejs', {lang:'en'});
});
app.get('/ru', function(req, res) {
    res.cookie('theherolang', 'ru', { maxAge: 900000, httpOnly: true });
    setLocale(req, 'ru');
    res.render('index.ejs', {lang:'ru'});
});