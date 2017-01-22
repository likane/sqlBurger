var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//import localhost connections
var connection = require('./config/connection.js');

//import routes and provide host connection
var routes = require('./controllers/burgers_controller.js');
var PORT = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

var exphbs = require('express-handlebars');

//set hanldebars as the default templating engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);//attaches express to controller methods file
app.use('/update', routes);
app.use('/create', routes);
app.listen(PORT);

//0 - establish route and server connection