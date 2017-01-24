var db = require("../models");

//ROUTES ===================================

module.exports = function(app) {

	//GET route for getting all burgers
	app.get('/api/burgers', function(request, result){

		db.burgers.findAll({}).then(function(dbBurgers){
			result.json(dbBurgers);
		});
	});

	// POST route for saving a new burger
	app.post('/api/burgers', function(request, result){

		db.burgers.create({
			burger_name: request.body.burger_name,
			devoured: request.body.devoured
		}).then(function(dbBurgers){
			result.json(dbBurgers);
		});
	});

	//PUT route for updating burgers
	app.put('/api/burgers', function(request, result){

		db.burgers.update({
			burger_name: request.body.burger_name,
			devoured: request.body.devoured
		}, {
			where: {
				id:request.body.id
			}
		}).then(function(dbBurgers){
			result.json(dbBurgers);
		});
	});
};