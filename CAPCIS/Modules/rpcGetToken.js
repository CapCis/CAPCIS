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
	try 
	{
		var selectStatement = dBQueryBuilder1.buildQuery(array);	 		//call the buildQuery function in dSelectsQuery Module
		var connection = serverUtil.getDBConnection(); 					//get a connection from serverUtil
		var result = connection.execute(selectStatement); 				//execute the query returned from the buildQuery function
		var myResults = result.getAllRows(); 								//get all of the rows into myResults
		connection.close; 												//close the Connection to the Database
		if(myResults.length > 0) 										//check to see if any record was returned for an authenticated user
		{
			var insertStatement = dBQueryBuilder2.buildQuery(loginAttempt = {major:0,minor:0,data1:array.user,data2:1,id:myResults[0].FxUserAccountsID}); 		//If authenticated insert the login attempt with login data
			var connection2 = serverUtil.getDBConnection();
			var result2 = connection.execute(insertStatement);
			
			selectStatement = dBQueryBuilder1.buildQuery(getDivisions = {major:0, minor:4,id:myResults[0].FxUserAccountsID});
			var result3 = connection.execute(selectStatement);
			var myDivisionResults = result3.getAllRows();			
			
			
			var myTokenRan = Math.floor((Math.random() *9000000000000000) +1);
			var returnData = [{myToken: myTokenRan, FxUserAccountsID: myResults[0].FxUserAccountsID,FullName:myResults[0].FullName,myDivisionResults:myDivisionResults,verified:true}];
			
			insertStatement = dBQueryBuilder2.buildQuery(insertToken = {major:0, minor:1,id:myResults[0].FxUserAccountsID,token:myTokenRan});
			var result4 = connection2.execute(insertStatement);
			connection2.close;
			
			return returnData;
		}
		else
		{
			var insertStatement = dBQueryBuilder2.buildQuery(loginAttempt = {major:0,minor:2,data1:array.user,data2:0}); 		//If not authenticated insert the login attempted username only
			var connection2 = serverUtil.getDBConnection(); 											
			var result2 = connection2.execute(insertStatement);
			connection2.close;
			var returnData = [{myToken:"err", UserAccpuntsID:"Invalid Attempt",verified:false}];
			return returnData;
		}
	}
	catch(err)
	{
		var returnData = [{myToken:"err", UserAccpuntsID:"Invalid Attempt",verified:false}]; //["err", "Invalid Attempt"];
		return returnData;
	}
};