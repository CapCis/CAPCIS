/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dInsertQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
exports.buildQuery = function buildQuery(array) {
	var answer;
	switch(array[1]){
		case 0:
			switch(array[2]){
				case 0: answer = 'INSERT INTO logintracking (UsernameAttempted,FK_useraccounts_UserAccountsID,LoginAuthenticated) VALUES("'+ array[3] +'","'+ array[4] +'","'+ array[5] +'")';
						break;
				default: answer = null;
				
			}
			break;
		default: answer = null;
		
	
}
		return answer;
};
