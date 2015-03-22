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



exports.setInsertWReturn = function setInsert(myObject)
{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var dBInsertBuilder = require('dInsertQuery');
	var tokenArray = {token:myObject.token,major:0,minor:1};
	var selectStatement = dBQueryBuilder.buildQuery(tokenArray);
	var connection = serverUtil.getDBConnection();
	var result = connection.execute(selectStatement);
	var myResults = result.getAllRows();
	//connection.close;
	if(myResults.length > 0)
	{
		var insertStatement = dBInsertBuilder.buildQuery(myObject);
		//var connection = serverUtil.getDBConnection();
		connection.execute(insertStatement);
		//myObject.returnedID = returnedID;
		
		myObject.major = myObject.major2;
		myObject.minor = myObject.minor2;
		var selectStatement2 = dBQueryBuilder.buildQuery(myObject);
		var myResults2 = connection.execute(selectStatement2);
		myResults2.returnedID = myResults2[0];
		myObject.major = myObject.major3;
		myObject.minor = myObject.minor3;
		var insertStatement2 = dBInsertBuilder.buildQuery(myObject);
		connection.execute(insertStatement2);
		myResults = ["suc"];
		connection.close;
	}
	else
	{
		var myResults = ["err", "Invalid Token"];
	}
	
	return myResults;
}