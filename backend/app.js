
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController');

mongoose.connect('');


var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/frontend'));

app.set('view engine', 'html');

var promise = mongoose.connect(config.getDbConnectionString());
apiController(app);

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port);
