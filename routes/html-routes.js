var path = require("path"); //dependencie

//ROUTES ===================================
module.exports = function(app) {

	//index route loads main.handlebars

	app.get("/", function(request, result){
		result.sendFile(path.join(__dirname + "/../views/layouts/main.handlebars"));
	});
};