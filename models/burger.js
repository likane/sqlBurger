var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var orm = require('../config/orm.js');
console.log(orm);
var burg = {
	selectAll: function(cd) {
		orm.selectAll('burgers', function(result){
			cd(result);
		});
	},

	insertOne: function(cols, vals, cd) {
		orm.insertOne('burgers', cols, vals, function(result){
			cd(result);
		});
	},

	updateOne: function(objColVals, condition, cd) {
		//var condition = 'id=' +id;
		orm.updateOne('burgers', objColVals, condition, function(result){
			cd(result);
		}); 
	}
};

module.exports = burg;

//create the code that will call the ORM functions using burger 
//specific input for the ORM.

//main logic goes here


