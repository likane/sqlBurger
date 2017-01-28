var express = require('express');
var bodyParser = require('body-parser');

//UNNEEDED DEPENDENCIES =============================
//var mysql = require('mysql');
//var exphbs = require('express-handlebars');
//var methodOverride = require('method-override');

//SET UP EXPRESS APP ================================
var app = express();
var PORT = process.env.PORT || 3000;

//REQUIRE MODELS.JS FOR SYNCING =====================
//var db = require('./models/burger.js');


//SET UP EXPRESS APP TO HAND DATA PARSING ===========
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//STATIC DIRECTORY
app.use(express.static("./views/layouts/main.handlebars"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);



app.listen(PORT, function() {
	//assert(PORT == 3000, "Connection is on port 3000");
	console.log("app listening on port " + PORT);
});
// db.sequelize.sync().then(function(){
// 	app.listen(PORT, function(){
// 		console.log("app listening on PORT" + PORT);
// 	})
// })

//UNNEEDED ===========================================
// //import routes and provide host connection
// var routes = require('./controllers/burgers_controller.js');


// //import localhost connections
// var connection = require('./config/connection.js');


// var exphbs = require('express-handlebars');

// //set hanldebars as the default templating engine
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');


// app.use(express.static("./public"));


// app.use('/', routes);//attaches express to controller methods file
// app.use('/update', routes);
// app.use('/create', routes);
// //app.listen(PORT);




// //0 - establish route and server connection