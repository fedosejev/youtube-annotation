var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var swig = require('swig');
var app = express();

app.set('port', process.env.PORT || 80);
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//
// http://stackoverflow.com/a/19965089
//
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  res.render('index');
});

var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('[App] ' + app.get('port'));
});
