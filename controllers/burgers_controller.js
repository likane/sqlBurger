// var express = require("express");

// var router = express.Router();
// var burger = require("../models/burger.js")

// router.get('/', function(request, result){
// 	//result.redirect("/burgers");
// 	result.sendFile(path.join(__dirname + '../views/index.handlebars'));
// });

// router.get('/burgers', function(request, result){
// 	burger.selectAll(function(data){
// 		var allObject = {
// 			burger: data
// 		};

// 		//console.log('LINE 23;;;;CONTROLLER:' + allObject);
// 		result.render('index', allObject);
// 	});
// });

// router.post('/burgers/create', function(request, result){
// 	burger.insertOne([
// 			 'burger_name', 'devoured'
// 		], [
// 			request.body.burger_name, request.body.devoured
// 		], function() {
// 			result.redirect('/burgers'); 
// 		});
// });

// router.put('/burgers/update/:id', function(request, result){

// 	var condition = "id = " + request.params.id;
// 	//console.log(condition);

// 	burger.updateOne({
// 		devoured: request.body.devoured
// 	}, condition, function(){
// 		result.redirect('/burgers');
// 	});
// });


// module.exports = router;


// //get
// //post requests from burger.js and push to view

// //2 -- connect GUI with model/db with get/post requests