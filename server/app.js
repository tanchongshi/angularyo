var express = require('express');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var routes = require('./routes/routes');

var app = express();

app.set('port', 8080);
var rootPath = path.join(__dirname, '../');
app.set('views' , rootPath);
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.bodyParser());
// app.use(app.router);
app.use(express.static(rootPath));
routes(app);
http.createServer(app).listen(app.get('port'), function() {
    console.log('服务器启动端口号为'+ app.get('port'));
})