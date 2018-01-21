var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, "./client/static")));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');



routes_setter(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})