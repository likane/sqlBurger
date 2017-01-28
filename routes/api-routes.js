var db = require("../models");

//ROUTES ===================================

module.exports = function(app) {

	//GET route for getting all burgers
	app.get('/', function(request, result){

		db.burgers.findAll({}).then(function(res){
			 var burgerObject = {
				
				burgers: res

			 };
			//result.json(res);
			//console.log(res);
			result.render("index", burgerObject);

		});
	});

	// POST route for saving a new burger
	app.post('/burgers/create', function(request, result){

		db.burgers.create({
			burger_name: request.body.burger_name,
			devoured: request.body.devoured
		}).then(function(res){
			result.redirect("/");
		});
	});

	//PUT route for updating burgers
	app.put('/burgers/update/:id', function(request, result){

		db.burgers.update({
			burger_name: request.body.burger_name,
			devoured: request.body.devoured
		}, {
			where: {
				id:request.params.id
			}
		}).then(function(res){
			result.redirect("/");
		});
	});
};