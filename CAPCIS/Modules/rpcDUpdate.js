/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcDUpdate' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcDUpdate.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/

exports.setUpdate = function setUpdate(myObject)
{
	try
	{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var dBUpdateBuilder = require('dUpdateQuery');
	var tokenArray = {token:myObject.token,major:0,minor:1};
	var selectStatement = dBQueryBuilder.buildQuery(tokenArray);
	var connection = serverUtil.getDBConnection();
	var result = connection.execute(selectStatement);
	var myResults = result.getAllRows();
	//connection.close;
	if(myResults.length > 0)
	{
		var updateStatement = dBUpdateBuilder.buildQuery(myObject);
		//var connection = serverUtil.getDBConnection();
		connection.execute(updateStatement);
		myResults = ["suc"];
		return myResults;
	}
	else
	{
		connection.close;
		myResults = ["err", "Invalid Token"];
	}	
	}
	catch(err)
	{
		connection.close;
		return err;
	}
	
};

exports.setUpdateWReturn = function setUpdate(myObject)
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
		var returnedID = connection.execute(updateStatement);
		//myObject.returnedID = returnedID;
		myObject.major = myObject.major2;
		myObject.minor = myObject.minor2;
		var updateStatement2 = dBUpdateBuilder.buildQuery(myObject);
		var myResults = connection.execute(updateStatement2);
		connection.close;
		myResults = ["suc"];
	}
	else
	{
		myResults = ["err", "Invalid Token"];
	}
	
	return myResults;
	
};