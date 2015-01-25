/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('serverUtilities').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
exports.getDBConnection = function getDBConnection(x){
	var dbConnect = require('waf-sql');
	var param ={
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'capcis',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
	};
	var connection = dbConnect.connect(param);
	return connection;
}

exports.getDBConnectionCapcisClientPicture = function getDBConnection(x){
	var dbConnect = require('waf-sql');
	var param ={
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'capcisclientpicture',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
	};
	var connection = dbConnect.connect(param);
	return connection;
}