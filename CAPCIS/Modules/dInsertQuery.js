﻿/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dInsertQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
exports.buildQuery = function buildQuery(myObject) {
	var answer;
	switch(myObject.major){
		case 0:
			switch(myObject.minor){
				case 0: answer = 'INSERT INTO fxlogintracking (UsernameAttempted,FK_useraccounts_UserAccountsID,LoginAuthenticated) VALUES("'+ myObject.data1 +'","'+ myObject.id +'","'+ myObject.data2 +'")';
						break;
				case 1: answer = 'INSERT INTO fxauthenticationtokens (FK_useraccounts_UserAccountsID,Token) VALUES("'+myObject.id+'","'+myObject.token+'")';
						break;
				case 2: answer = 'INSERT INTO fxlogintracking (UsernameAttempted,LoginAuthenticated) VALUES("'+ myObject.data1 +'","'+ myObject.data2 +'")';
						break;
				default: answer = null;
				
			}
			break;
		default: answer = null;
		
	
}
		return answer;
};
