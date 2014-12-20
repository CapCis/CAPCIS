/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcDSelects' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcDSelects.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
//include("./Modules/rpcDSelects.js");
//include("./Modules/serverUtilities.js");

exports.getSelect = function getSelect(array)
{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var selectStatement = dBQueryBuilder.buildQuery(array);
	
	var connection = serverUtil.getDBConnection();
	var result = connection.execute(selectStatement);
	myResults = result.getAllRows();
	connection.close;
	return myResults;
	
};
