/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'dDeleteQuery' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(dDeleteQuery.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.buildQuery = function buildQuery(myObject)
{
	var answer; 
	switch(myObject.major)
	{
		case 0: 
			return answer;
		case 1:
			return answer;
		case 2:
			return answer;
		case 3:
			return answer;
		case 4:
			return answer;
		case 5: //admin
			switch(myObject.minor)
			{
				case 0: answer = 'DELETE FROM capcis.fxuserdivisionlinkage WHERE FXUserDivisionLinkage_ID = "'+myObject.divID+'"';
					return answer;	
				
				case 1: answer = 'DELETE FROM capcis.fxuserpageaccess WHERE FK_UserAccountsID = "'+myObject.userAccountsID+'" AND FK_FxMainSelectWebComponentNamesID = "'+myObject.ComponentNamesID+'"';
					return answer;
			}
			//return answer;
	}
};