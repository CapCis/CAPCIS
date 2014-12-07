/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcDSelects' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcDSelects.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.helloWorld = function helloWorld () {
	return ('Hello world');
	
};

exports.getSelect = function getSelect(array)
{
	var selectStatement = dSelectQuery.buildQuery(array);
	/*
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
	*/
	var connection = serverUtilities.getDBConnection();
	var result = connection.execute(selectStatement);
	myResults = results.getAllRows();
	connection.close;
	return myResults;
	
};
