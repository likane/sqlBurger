var connection = require('../config/connection.js');
var mysql = require('mysql');

//helper func for sql syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i<num; i++){
		arr.push("?");
	}

	return arr.toString();
}

//helper func for sql syntax
function objToSql(ob){
	var arr = [];

	for(var key in ob){
		if(Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
}


// object for all sql statement functions
var orm = {

	selectAll: function(tableInput, cd){
		var queryString = "SELECT * FROM " + tableInput + ";";

		connection.query(queryString, function(err, result){
			if (err){
				throw err;
				console.log("err at 38");
			}

			cd(result);
		});
	},

	insertOne: function(table, cols, vals, cd){
		var queryString = "INSERT INTO " + table;

			queryString += " (";
			queryString += cols.toString();
			queryString += ") ";
			queryString += "VALUES (";
			queryString += printQuestionMarks(vals.length);
			queryString += ") ";

		connection.query(queryString, vals, function(err, result){
			if(err){
				throw err;
				console.log("err at 56");
			}
			cd(result);
		});
	},

	updateOne: function(table, objColVals, condition, cd){
		var queryString = "UPDATE " + table;
		//var condition = parseInt(condition);

			queryString += " SET ";
			queryString += objToSql(objColVals);
			queryString += " WHERE ";
			queryString += condition;
			//queryString += condition;


			//console.log("QUERYSTRING: " + queryString);

		connection.query(queryString, function(err, result){
			if (err){
				throw err;
				console.log("err at 73");
			}

			cd(result);
		})

	}

	//databaseName: 
};


module.exports = orm;

//.75 -- export to connection and 