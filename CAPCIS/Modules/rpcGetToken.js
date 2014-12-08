/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcGetToken' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcGetToken.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/

exports.getToken = function getSelect(array)
{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var selectStatement = dBQueryBuilder.buildQuery(array);
	
	var connection = serverUtil.getDBConnection();
	var result = connection.execute(selectStatement);
	myResults = result.getAllRows();
	connection.close;
	if(myResults.length > 0)
	{
		var myToken = Math.floor((Math.random() *1000000000) +1);
		
		return myToken;
	}
	//return myResults;
	
};