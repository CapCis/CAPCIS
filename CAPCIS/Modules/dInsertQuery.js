/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dInsertQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
exports.buildQuery = function buildQuery(myObject) 
{
	var answer;
	switch(myObject.major)
	{
		case 0:
			switch(myObject.minor)
			{
				case 0: answer = 'INSERT INTO fxlogintracking (UsernameAttempted,FK_useraccounts_UserAccountsID,LoginAuthenticated) VALUES("'+ myObject.data1 +'","'+ myObject.id +'","'+ myObject.data2 +'")';
						break;
				case 1: answer = 'INSERT INTO fxauthenticationtokens (FK_useraccounts_UserAccountsID,Token) VALUES("'+myObject.id+'","'+myObject.token+'")';
						break;
				case 2: answer = 'INSERT INTO fxlogintracking (UsernameAttempted,LoginAuthenticated) VALUES("'+ myObject.data1 +'","'+ myObject.data2 +'")';
						break;
				default: answer = null;				
			}
			break;
		case 3:
			switch(myObject.minor)
			{
				case 0: answer ='INSERT INTO capcis.bakassessorinformation (AssessorName,AssessorPhone,AssessorEmail,AssessorFax,AssessorAddress, \
						AssessorCity,AssessorState,AssessorZipCode,FK_assessorinformation_AssessorInformationID,AssessorPhoneExt,AssessorMobilePhone \
						,AssessorNotes,AssessorFullNameDisplay,AssPreferredReportingMethod,InactiveAssessorInfo,FK_useraccounts_UserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data14+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'",'+myObject.data15+', "'+myObject.id+'")';
						break;
				case 1: answer = 'INSERT into capcis.assessorcorrespondence(AssessorCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_AssessorInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				case 2: answer = 'INSERT into capcis.attorneycorrespondence(AttorneyCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_AttorneyInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				case 3: answer ='INSERT INTO capcis.bakattorneyinformation (AttorneyName,AttorneyPhone,AttorneyEmail,AttorneyFax,AttorneyAddress, \
						AttorneyCity,AttorneyState,AttorneyZipCode,FK_attorneyinformation_AttorneyInformationID,AttorneyPhoneExt,AttorneyAdditionalPhone \
						,AttorneyNotes,AttorneyFullNameDisplay,AttPreferredReportingMethod,InactiveAttorneyInfo,FK_useraccounts_UserAccountsID,PublicDefender,AttorneyStaffInfo) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data14+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'",'+myObject.data15+', "'+myObject.id+'",'+myObject.data16+',"'+myObject.data17+'")';
						break;
				default: answer = null;
			}
			break;
	}
		return answer;
};
