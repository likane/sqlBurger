var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'55capone',
	database:'burgers_db'
});

connection.connect(function(err){
	if (err){
		console.error("error connecting: " + err.stack);
		console.log(":-{(");
		return;
	}

	console.log('connected as ' + connection.threadId);

});

module.exports = connection;

//connection confirmed.

