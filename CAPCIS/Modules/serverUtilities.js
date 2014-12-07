/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('serverUtilities').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
exports.helloWorld = function helloWorld () {
	return ('Hello world');
};

getDBConnection()
{
	var dbConnect = require('waf-sql');
	var param ={
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'capcis',
		port: '3306',
		ssl: false,
		dbtype: 'mysql'
	}
	var connection = dbconnect.connect(param);
	return connection;
}