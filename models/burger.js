// var express = require('express');
// var mysql = require('mysql');
// var exphbs = require('express-handlebars');
// var methodOverride = require('method-override');
// var bodyParser = require('body-parser');

// var orm = require('../config/orm.js');
// console.log(orm);
// var burg = {
// 	selectAll: function(cd) {
// 		orm.selectAll('burgers', function(result){
// 			cd(result);
// 		});
// 	},

// 	insertOne: function(cols, vals, cd) {
// 		orm.insertOne('burgers', cols, vals, function(result){
// 			cd(result);
// 		});
// 	},

// 	updateOne: function(objColVals, condition, cd) {
// 		//var condition = 'id=' +id;
// 		orm.updateOne('burgers', objColVals, condition, function(result){
// 			cd(result);
// 		}); 
// 	}
// };

// module.exports = burg;

// module.exports = function(sequelize, DataTypes){
// 	var dbBurgers = sequelize.define("newBurger", {
// 		burger_name: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			validate: {
// 				len: [1, 40]
// 			}
// 		},


// 		DEVOURED: {
// 			type: DataTypes.BOOLEAN,
// 			defaultValue: false,
// 		}
// 	});
// 	return dbBurgers;
// }

// var Sequelize = require("sequelize");

// var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {

	var burgers = sequelize.define("burgers", {

	// burger_name: {
	// 	type: DataTypes.STRING,
	// 	allowNull: false,
	// 	validate: {
	// 		len: [1]
	// 	}
	// },
	// devoured: {
	// 	type: DataTypes.BOOLEAN,
	// 	defaultValue: false
	// },
	// created_at: {
	// 	type: DataTypes.DATE 
	// }

		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN
	});
	return burgers;
};



//module.exports = Burgers;



