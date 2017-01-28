var dbBurgers = require("../models/burger.js");

//ROUTES ===================================

module.exports = function(app) {

	//GET route for getting all burgers
	app.get('/api/', function(request, result){

		dbBurgers.findAll({}).then(function(res){
			result.json(res);
		});
	});

	// POST route for saving a new burger
	app.post('/api/burgers', function(request, result){

		dbBurgers.create({
			burger_name: request.body.burger_name,
			devoured: request.body.devoured
		}).then(function(res){
			result.end();
		});
	});

	//PUT route for updating burgers
	app.put('/api/burgers/update', function(request, result){

		dbBurgers.update({
			burger_name: request.body.burger_name,
			devoured: request.body.devoured
		}, {
			where: {
				id:request.body.id
			}
		}).then(function(res){
			result.json(results);
		});
	});
};