/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcDInsert' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcDInsert.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.setInsert = function setInsert(myObject)
{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var dBInsertBuilder = require('dInsertQuery');
	var tokenArray = {token:myObject.token,major:0,minor:1};
	var selectStatement = dBQueryBuilder.buildQuery(tokenArray);
	var connection = serverUtil.getDBConnection();
	var result = connection.execute(selectStatement);
	var myResults = result.getAllRows();
	connection.close;
	if(myResults.length > 0)
	{
		var insertStatement = dBInsertBuilder.buildQuery(myObject);
		var connection = serverUtil.getDBConnection();
		connection.execute(insertStatement);
		var myResults = ["suc"];
		connection.close;
	}
	else
	{
		var myResults = ["err", "Invalid Token"];
	}
	
	return myResults;
	
};



exports.setInsertRegistrationEmployeeInfo = function setInsert(myObject)
{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var dBInsertBuilder = require('dInsertQuery');
	var tokenArray = {token:myObject.token,major:0,minor:1};
	var selectStatement = dBQueryBuilder.buildQuery(tokenArray);
	var connection = serverUtil.getDBConnection();
	var result = connection.execute(selectStatement);
	var myResults = result.getAllRows();
	connection.close;
	if(myResults.length > 0)
	{
		var insertStatement = dBInsertBuilder.buildQuery(myObject);
		var connection = serverUtil.getDBConnection();
		var returnedID = connection.execute(insertStatement);
		
		var myResults = ["suc"];
		connection.close;
	}
	else
	{
		var myResults = ["err", "Invalid Token"];
	}
	
	return myResults;
}