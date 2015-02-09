/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcDUpdate' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcDUpdate.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/

exports.setUpdate = function setUpdate(myObject)
{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var dBUpdateBuilder = require('dUpdateQuery');
	var tokenArray = {token:myObject.token,major:0,minor:1};
	var selectStatement = dBQueryBuilder.buildQuery(tokenArray);
	var connection = serverUtil.getDBConnection();
	var result = connection.execute(selectStatement);
	var myResults = result.getAllRows();
	connection.close;
	if(myResults.length > 0)
	{
		var updateStatement = dBUpdateBuilder.buildQuery(myObject);
		var connection = serverUtil.getDBConnection();
		connection.execute(updateStatement);
		myResults = ["suc"];
	}
	else
	{
		myResults = ["err", "Invalid Token"];
	}
	
	return myResults;
	
};
