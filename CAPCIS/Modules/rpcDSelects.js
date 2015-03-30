/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcDSelects' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcDSelects.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
//include("./Modules/rpcDSelects.js");
//include("./Modules/serverUtilities.js");

exports.getSelect = function getSelect(myObject)
{
	
	try
	{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var token = {token:myObject.token,major:0,minor:1};
	var checkToken = dBQueryBuilder.buildQuery(token);
	var connection = serverUtil.getDBConnection();
	var tokenAnswer = connection.execute(checkToken);
	var myResults = tokenAnswer.getAllRows();
	connection.close;
	if (myResults.length > 0) 
	{
		var selectStatement = dBQueryBuilder.buildQuery(myObject);	
		var connection = serverUtil.getDBConnection();
		var result = connection.execute(selectStatement);
		var myResults = result.getAllRows();
		connection.close;
		return myResults;
	}
	else 
	{		
		return myResults = ["err","Invalid Token"];
	}	
	}
	catch(err)
	{
		return err.message;
	}
};

exports.getReferralCount = function getSelect(myObject)
{
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	var token = {token:myObject.token,major:0,minor:1};
	var checkToken = dBQueryBuilder.buildQuery(token);
	var connection = serverUtil.getDBConnection();
	var tokenAnswer = connection.execute(checkToken);
	var myResults = tokenAnswer.getAllRows();	
	if (myResults.length > 0) 
	{
		var myResults2 = [];
		var myResults3 = [];
		for (var x = 0; x < 9; x++)
		{
			var selectStatement = dBQueryBuilder.buildQuery(myObject);
			var result = connection.execute(selectStatement);
			myResults2[x] = result.getAllRows();
			
			myResults3[x]=myResults2[x][0];
			myObject.minor += 2;
		}
		connection.close;
		return myResults3;
	}
	else 
	{	
		connection.close;	
		return myResults = ["err","Invalid Token"];
	}	
};