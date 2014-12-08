/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcGetToken' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcGetToken.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/

exports.getToken = function getToken(array)
{
	var serverUtil = require('serverUtilities'); 					//include serverUtilities Module
	var dBQueryBuilder1 = require('dSelectsQuery'); 					//include dSelectsQuery Module
	var dBQueryBuilder2 = require('dInsertQuery');
	
	var selectStatement = dBQueryBuilder1.buildQuery(array);	 		//call the buildQuery function in dSelectsQuery Module
	var connection = serverUtil.getDBConnection(); 					//get a connection from serverUtil
	var result = connection.execute(selectStatement); 				//execute the query returned from the buildQuery function
	myResults = result.getAllRows(); 								//get all of the rows into myResults
	connection.close; 												//close the Connection to the Database
	if(myResults.length > 0) 										//check to see if any record was returned for an authenticated user
	{
		var insertStatement = dBQueryBuilder2.buildQuery(LoginAttempt = [0,0,0,array[3],myResults[0].UserAccountsID,1]); 		//If authenticated insert the login attempt with login data
		var connection2 = serverUtil.getDBConnection();
		var result2 = connection.execute(insertStatement);
		connection2.close;
		var myToken = Math.floor((Math.random() *1000000000) +1);
		var finalData = [myToken, myResults[0].UserAccountsID];
		return finalData;
	}
	else
	{
		var insertStatement = dBQueryBuilder2.buildQuery(LoginAttempt[array[3],0,0]); 		//If not authenticated insert the login attempt username only
		var connection2 = serverUtil.getDBConnection(); 											
		var result2 = connection.execute(insertStatement);
		connection2.close;
		return myResults = ["err", "Invalid Attempt"];
	}
};