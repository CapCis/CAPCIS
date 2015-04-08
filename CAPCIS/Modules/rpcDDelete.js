/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcDDelete' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcDDelete.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.setDelete = function setDelete (myObject) 
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
		if(myResults.length > 0)
		{
			var insertStatement = dBInsertBuilder.buildQuery(myObject);
			connection.execute(insertStatement);
			console.log(myReturnedID);		
			var myResults = ["suc"];
			connection.close;
			return myResults;
		}
		else
		{
			var myResults = ["err", "Invalid Token"];
			connection.close;
			return myResults;
		}
	}
	catch(err)
	{
		connection.close;
		return err;
	}
	
};
