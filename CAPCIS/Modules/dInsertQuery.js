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
				case 0: answer = 'INSERT INTO fxlogintracking (UsernameAttempted,FK_useraccounts_UserAccountsID,LoginAuthenticated) VALUES("'+myObject.data1 +'","'+myObject.id+'","'+myObject.data2+'")';
						break;
				case 1: answer = 'INSERT INTO fxauthenticationtokens (FK_useraccounts_UserAccountsID,Token) VALUES("'+myObject.id+'","'+myObject.token+'")';
						break;
				case 2: answer = 'INSERT INTO fxlogintracking (UsernameAttempted,LoginAuthenticated) VALUES("'+myObject.data1+'","'+myObject.data2+'")';
						break;
				case 3: answer = 'INSERT INTO fxcapcisregistrations (FirstName,MiddleName,LastName,Email,Phone,Organiztion,FullDisplayName,Password) VALUES("'+myObject.firstName+'","'+myObject.middleName+'", \
									"'+myObject.MiddleName+'","'+myObject.lastName+'","'+myObject.email+'","'+myObject.phone+'","'+myObject.organization+'","'+myObject.fullDisplayName+'","'+myObject.password+'")';
						break;
				case 4: answer = 'INSERT INTO fxuseraccounts (UserName,UserPassword,FullName) VALUES("'+myObject.email+'","'+myObject.password+'","'+myObject.fullDisplayName+'") RETURNING FxUserAccountsID';
						break;
				case 5: answer = 'INSERT INTO employeeinformation (EmployeeFirstName,EmployeeMiddleName,EmployeeLastName,EmployeeEmail,EmployeeHomePhone,DI_DivisionInformationID,EmployeeFullNameDisplay) VALUES("'+myObject.firstName+'", \
									"'+myObject.middleName+'","'+myObject.lastName+'","'+myObject.email+'","'+myObject.phone+'","'+myObject.organization+'","'+myObject.fullDisplayName+'")';
						break;
				default: answer = null;				
			}
			break;
		case 3:
			switch(myObject.minor)
			{
				
				case 1: answer = 'INSERT into capcis.assessorcorrespondence(AssessorCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_AssessorInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				case 2: answer = 'INSERT into capcis.attorneycorrespondence(AttorneyCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_AttorneyInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				
				
				case 5: answer = 'INSERT into capcis.courtjurisdictioncorrespondence(CourtJurisdictionCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_CourtJurisdictionInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				case 6: answer = 'INSERT into capcis.dhscorrespondence(DhsCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_DhsInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				
				case 8: answer = 'INSERT into capcis.judgecorrespondence(JudgeCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_JudgeInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				
				case 10: answer = 'INSERT into capcis.othermonitorscorrespondence(OtherMonitorsCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_OtherMonitorsInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				
				case 12: answer = 'INSERT into capcis.pojurisdictioncorrespondance(POJurisdictionCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_POJurisdictionInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				
				case 14: answer = 'INSERT into capcis.pocorrespondance(POCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_POInformationID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				
				case 16: answer = 'INSERT into capcis.prosecutorcorrespondance(ProsecutorCorrespondence, FK_useraccounts_UserAccountsID, \
				 				FK_prosecutors_ProsecutorsID) VALUES ("'+myObject.data1+'",'+myObject.id+','+myObject.data2+')';
						break;
				
				case 18: answer = 'INSERT into capcis.citylistings(CityListing) VALUES ("'+myObject.data1+'")';
						break;
				case 19: answer ='INSERT INTO capcis.assessorinformation (AssessorName,AssessorPhone,AssessorEmail,AssessorFax,AssessorAddress, \
						AssessorCity,AssessorState,AssessorZipCode,AssessorPhoneExt,AssessorMobilePhone \
						,AssessorNotes,AssessorFullNameDisplay,AssPreferredReportingMethod,InactiveAssessorInfo,FK_fxuseraccounts_FxUserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'",'+myObject.data15+','+myObject.id+') ';
						break;
				
				case 20: answer ='INSERT INTO capcis.attorneyinformation (AttorneyName,AttorneyPhone,AttorneyEmail,AttorneyFax,AttorneyAddress, \
						AttorneyCity,AttorneyState,AttorneyZipCode,AttorneyPhoneExt,AttorneyAdditionalPhone \
						,AttorneyNotes,AttorneyFullNameDisplay,AttPreferredReportingMethod,InactiveAttorneyInfo,FK_fxuseraccounts_FxUserAccountsID,PublicDefender,AttorneyStaffInfo) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'",'+myObject.data15+', "'+myObject.id+'",'+myObject.data16+',"'+myObject.data17+'")';
						break;
				case 21: answer ='INSERT INTO capcis.courtjurisdiction (CourtJurisdiction,CourtJurisdictionPhone,CourtJurisdictionEmail,CourtJurisdictionFax,CourtJurisdictionAddress, \
						CourtJurisdictionCity,CourtJurisdictionState,CourtJurisdictionZipCode,CourtJurisdictionPhoneExt,CourtJurisdictionAlternatePhone \
						,CourtJurisdictionNotes,CourtJurisdictionPreferredReportingMethod,InactiveCourtJurisdictionInfo,FK_fxuseraccounts_FxUserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data13+'",'+myObject.data15+', "'+myObject.id+'")';
						break;
				case 22: answer ='INSERT INTO capcis.dhsinformation (DhsName,DhsPhone,DhsEmail,DhsFax,DhsAddress, \
						DhsCity,DhsState,DhsZipCode,DhsPhoneExt,DhsAlternatPhone \
						,DhsNotes,DhsFullNameDisplay,DhsPreferredReportingMethod,InactiveDhsInfo,FK_fxuseraccounts_FXUserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'",'+myObject.data15+', "'+myObject.id+'")';
						break;
				case 23: answer ='INSERT INTO capcis.judges (Judge,JudgeOfficePhone,JudgeEmail,JudgeFax,JudgeAddress, \
						JudgeCity,JudgeState,JudgeZipCode,JudgeOfficePhoneExt,JudgeMobilePhone \
						,JudgeFullNameDisplay,JPreferredReportingMethod,JudgeJurisdiction,InactiveJudge,FK_fxuseraccounts_FXUserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data12+'","'+myObject.data13+'","'+myObject.data16+'",'+myObject.data15+', "'+myObject.id+'")';
						break;
				case 24: answer ='INSERT INTO capcis.othermonitors (OtherMonitors,OtherMonitorsOfficePhone,OtherMonitorsEmail,OtherMonitorsFax,OtherMonitorsAddress, \
						OtherMonitorsCity,OtherMonitorsState,OtherMonitorsZipCode,OtherMonitorsOfficePhoneExt,OtherMonitorsMobilePhone \
						,OtherMonitorsNotes,OtherMonitorsFullNameDisplay,OMPreferredReportingMethod,InactiveOtherMonitors,FK_fxuseraccounts_FXUserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'",'+myObject.data15+', "'+myObject.id+'")';
						break;
				case 25: answer ='INSERT INTO capcis.pojurisdiction (JurisdictionName,JurisdictionPhone,JurisdictionFax,JurisdictionAddress, \
						JurisdictionCity,JurisdictionState,JurisdictionZipCode, \
						,JurisdictionNotes,InactivePOJurisdiction,FK_useraccounts_UserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'", \
						"'+myObject.data11+'",'+myObject.data15+', "'+myObject.id+'")';
						break;
				case 26: answer ='INSERT INTO capcis.poinformation (POName,POPhone,POEmail,POFax, \
						POPhoneExtension,POMobilePhone \
						,PONotes,POFullNameDisplay,POPreferredReportingMethod,InactivePO,FK_useraccounts_UserAccountsID,FK_pojurisdiction_POJurisdictionID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'",'+myObject.data15+', "'+myObject.id+'",'+myObject.data8+')';
						break;
				case 27: answer ='INSERT INTO capcis.prosecutors (Prosecutor,ProsecutorOfficePhone,ProsecutorEmail,ProsecutorFax,ProsecutorAddress, \
						ProsecutorCity,ProsecutorState,ProsecutorZipCode,ProsecutorOfficePhoneExt,ProsecutorMobilePhone \
						,ProsecutorNotes,ProsecutorFullNameDisplay,ProsPreferredReportingMethod,ProsecutorJurisdiction,InactiveProsecutor,FK_useraccounts_UserAccountsID) \
						VALUES ("'+myObject.data1+'","'+myObject.data2+'","'+myObject.data3+'","'+myObject.data4+'","'+myObject.data5+'", \
						"'+myObject.data6+'","'+myObject.data7+'","'+myObject.data8+'","'+myObject.data14+'","'+myObject.data9+'", \
						"'+myObject.data10+'","'+myObject.data11+'","'+myObject.data12+'","'+myObject.data13+'","'+myObject.data16+'",'+myObject.data15+', "'+myObject.id+'")';
						break;
				default: answer = null;
			}
			break;
	}
		return answer;
};
