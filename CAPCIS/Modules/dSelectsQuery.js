/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dSelectsQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/


exports.buildQuery = function buildQuery(array)
{
	var answer; 
	switch(array[1]){
		case 0:
			switch(array[2]){
				case 0: answer = 'SELECT UserName, UserAccountsID FROM useraccounts WHERE UserPassword = "' + array[0] + '" AND UserName = "' + array[3] +'"';
						break;
				case 1: answer = 'SELECT * FROM authenticationtokens WHERE Tokens = "' + array[0] + '"';
						break;
				default:
						answer = null;			
			}
			break;
		case 1:			
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		case 8:
			break;
		case 9:
			break;
		case 10:
			break;
		default:
			answer = null;
		
	}
	
	return answer;
	
};
