exports.buildQuery = function buildQuery(myObject) {
	var answer;
	switch(myObject.major){
		case 0: //utility
			switch(myObject.minor){
				case 0: answer = '';
						break;
				default: answer = null;
			}
			break;
		case 3: //refferals
			switch(myObject.minor){
				case 0: answer =  'UPDATE capcis.assessorinformation SET AssessorName = "'+myObject.data1+'", AssessorPhone = "'+myObject.data2+'", \
				 		AssessorEmail="'+myObject.data3+'", AssessorFax = "'+myObject.data4+'", AssessorAddress ="'+myObject.data5+'", AssessorCity = "'+myObject.data6+'", \
 						AssessorState = "'+myObject.data7+'", AssessorZipCode = "'+myObject.data8+'", AssessorPhoneExt= "'+myObject.data9+'", \
 						AssessorMobilePhone = "'+myObject.data10+'", AssessorNotes = "'+myObject.data11+'", AssessorFullNameDisplay = "'+myObject.data12+'",\
 						AssPreferredReportingMethod = "'+myObject.data13+'", InactiveAssessorInfo = '+myObject.data15+' \
						WHERE AssessorInformationID="'+myObject.data14+'";';
						break;
				case 1: answer = 'UPDATE capcis.assessorcorrespondence SET VoidedAssessorCorrespondence = '+myObject.data2+' WHERE AssessorCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 2: answer = 'UPDATE capcis.attorneycorrespondence SET VoidedAttorneyCorrespondence = '+myObject.data2+' WHERE AttorneyCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 3: answer =  'UPDATE capcis.attorneyinformation SET AttorneyName = "'+myObject.data1+'", AttorneyPhone = "'+myObject.data2+'", \
				 		AttorneyEmail="'+myObject.data3+'", AttorneyFax = "'+myObject.data4+'", AttorneyAddress ="'+myObject.data5+'", AttorneyCity = "'+myObject.data6+'", \
 						AttorneyState = "'+myObject.data7+'", AttorneyZipCode = "'+myObject.data8+'", AttorneyPhoneExt= "'+myObject.data9+'", \
 						AttorneyAdditionalPhone = "'+myObject.data10+'", AttorneyNotes = "'+myObject.data11+'", AttorneyFullNameDisplay = "'+myObject.data12+'",\
 						AttPreferredReportingMethod = "'+myObject.data13+'", InactiveAttorneyInfo = '+myObject.data15+', PublicDefender = '+myObject.data16+', AttorneyStaffInfo = "'+myObject.data17+'" \
						WHERE AttorneyInformationID="'+myObject.data14+'";';
						break;
				case 4: answer =  'UPDATE capcis.courtjurisdiction SET CourtJurisdiction = "'+myObject.data1+'", CourtJurisdictionPhone = "'+myObject.data2+'", \
				 		CourtJurisdictionEmail="'+myObject.data3+'", CourtJurisdictionFax = "'+myObject.data4+'", CourtJurisdictionAddress ="'+myObject.data5+'", CourtJurisdictionCity = "'+myObject.data6+'", \
 						CourtJurisdictionState = "'+myObject.data7+'", CourtJurisdictionZipCode = "'+myObject.data8+'", CourtJurisdictionPhoneExt= "'+myObject.data9+'", \
 						CourtJurisdictionAlternatePhone = "'+myObject.data10+'", CourtJurisdictionNotes = "'+myObject.data11+'", SearchDatabase = "'+myObject.data12+'",\
 						CourtJurisdictionPreferredReportingMethod = "'+myObject.data13+'", InactiveCourtJurisdictionInfo = '+myObject.data15+', SearchFormat = "'+myObject.data16+'" \
						WHERE CourtJurisdictionID="'+myObject.data14+'";';
						break;
				case 5: answer = 'UPDATE capcis.courtjurisdictioncorrespondence SET VoidedCourtJurisdictionCorrespondence = '+myObject.data2+' WHERE CourtJurisdictionCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 6: answer = 'UPDATE capcis.dhscorrespondence SET VoidedDhsCorrespondence = '+myObject.data2+' WHERE DhsCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 7: answer =  'UPDATE capcis.dhsinformation SET DhsName = "'+myObject.data1+'", DhsPhone = "'+myObject.data2+'", \
				 		DhsEmail="'+myObject.data3+'", DhsFax = "'+myObject.data4+'", DhsAddress ="'+myObject.data5+'", DhsCity = "'+myObject.data6+'", \
 						DhsState = "'+myObject.data7+'", DhsZipCode = "'+myObject.data8+'", DhsPhoneExt= "'+myObject.data9+'", \
 						DhsAlternatPhone = "'+myObject.data10+'", DhsNotes = "'+myObject.data11+'", DhsFullNameDisplay = "'+myObject.data12+'",\
 						DhsPreferredReportingMethod = "'+myObject.data13+'", InactiveDhsInfo = '+myObject.data15+' \
						WHERE DhsInformationID="'+myObject.data14+'";';
						break;
				case 8: answer = 'UPDATE capcis.judgecorrespondence SET VoidedJudgeCorrespondence = '+myObject.data2+' WHERE JudgeCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 9: answer =  'UPDATE capcis.judges SET Judge = "'+myObject.data1+'", JudgeOfficePhone = "'+myObject.data2+'", \
				 		JudgeEmail="'+myObject.data3+'", JudgeFax = "'+myObject.data4+'", JudgeAddress ="'+myObject.data5+'", JudgeCity = "'+myObject.data6+'", \
 						JudgeState = "'+myObject.data7+'", JudgeZipCode = "'+myObject.data8+'", JudgeOfficePhoneExt= "'+myObject.data9+'", JudgeJurisdiction= "'+myObject.data16+'", \
 						JudgeMobilePhone = "'+myObject.data10+'", JudgeNotes = "'+myObject.data11+'", JudgeFullNameDisplay = "'+myObject.data12+'",\
 						JPreferredReportingMethod = "'+myObject.data13+'", InactiveJudge = '+myObject.data15+' \
						WHERE JudgesID="'+myObject.data14+'";';
						break;
				case 10: answer = 'UPDATE capcis.othermonitorscorrespondence SET VoidedOtherMonitorsCorrespondence = '+myObject.data2+' WHERE OtherMonitorsCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 11: answer =  'UPDATE capcis.othermonitors SET OtherMonitors = "'+myObject.data1+'", OtherMonitorsOfficePhone = "'+myObject.data2+'", \
				 		OtherMonitorsEmail="'+myObject.data3+'", OtherMonitorsFax = "'+myObject.data4+'", OtherMonitorsAddress ="'+myObject.data5+'", OtherMonitorsCity = "'+myObject.data6+'", \
 						OtherMonitorsState = "'+myObject.data7+'", OtherMonitorsZipCode = "'+myObject.data8+'", OtherMonitorsOfficePhoneExt= "'+myObject.data9+'",  \
 						OtherMonitorsMobilePhone = "'+myObject.data10+'", OtherMonitorsNotes = "'+myObject.data11+'", OtherMonitorsFullNameDisplay = "'+myObject.data12+'",\
 						OMPreferredReportingMethod = "'+myObject.data13+'", InactiveOtherMonitors = '+myObject.data15+' \
						WHERE OtherMonitorsID="'+myObject.data14+'";';
						break;
				case 12: answer = 'UPDATE capcis.pojurisdictioncorrespondance SET VoidedPOJurisdictionCorrespondence = '+myObject.data2+' WHERE POJurisdictionCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 13: answer =  'UPDATE capcis.pojurisdiction SET JurisdictionName = "'+myObject.data1+'", JurisdictionPhone = "'+myObject.data2+'", \
				 		JurisdictionFax = "'+myObject.data4+'", JurisdictionAddress ="'+myObject.data5+'", JurisdictionCity = "'+myObject.data6+'", \
 						JurisdictionState = "'+myObject.data7+'", JurisdictionZipCode = "'+myObject.data8+'", \
 						JurisdictionNotes = "'+myObject.data11+'",\
 						InactivePOJurisdiction = '+myObject.data15+' \
						WHERE POJurisdictionID="'+myObject.data14+'";';
						break;
				case 14: answer = 'UPDATE capcis.pocorrespondance SET VoidedPOCorrespondence = '+myObject.data2+' WHERE POCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 15: answer =  'UPDATE capcis.poinformation SET POName = "'+myObject.data1+'", POPhone = "'+myObject.data2+'", \
				 		POEmail="'+myObject.data3+'", POFax = "'+myObject.data4+'", POPhoneExtension= "'+myObject.data9+'", FK_pojurisdiction_POJurisdictionID= "'+myObject.data8+'", \
 						POMobilePhone = "'+myObject.data10+'", PONotes = "'+myObject.data11+'", POFullNameDisplay = "'+myObject.data12+'",\
 						POPreferredReportingMethod = "'+myObject.data13+'", InactivePO = '+myObject.data15+' \
						WHERE POInformationID="'+myObject.data14+'";';
						break;
				case 16: answer = 'UPDATE capcis.prosecutorcorrespondance SET VoidedProsecutorCorrespondence = '+myObject.data2+' WHERE ProsecutorCorrespondenceID = "'+myObject.data3+'"';
						break;
				case 17: answer =  'UPDATE capcis.prosecutors SET Prosecutor = "'+myObject.data1+'", ProsecutorOfficePhone = "'+myObject.data2+'", \
				 		ProsecutorEmail="'+myObject.data3+'", ProsecutorFax = "'+myObject.data4+'", ProsecutorAddress ="'+myObject.data5+'", ProsecutorCity = "'+myObject.data6+'", \
 						ProsecutorState = "'+myObject.data7+'", ProsecutorZipCode = "'+myObject.data8+'", ProsecutorOfficePhoneExt= "'+myObject.data9+'", ProsecutorJurisdiction= "'+myObject.data16+'", \
 						ProsecutorMobilePhone = "'+myObject.data10+'", ProsecutorNotes = "'+myObject.data11+'", ProsecutorFullNameDisplay = "'+myObject.data12+'",\
 						ProsPreferredReportingMethod = "'+myObject.data13+'", InactiveProsecutor = '+myObject.data15+' \
						WHERE ProsecutorsID="'+myObject.data14+'";';
						break;
				default: answer = null;	
						break;
			}
			break;
			
		case 5: //Admin Pages
			switch(myObject.minor){
				case 0: answer = 'UPDATE capcis.employeeinformation SET EmployeeInitials = "'+myObject.initials+'", EmployeeFirstName = "'+myObject.firstName+'", \
						EmployeeMiddleName = "'+myObject.middleName+'", \
						EmployeeLastName = "'+myObject.lastName+'", EmployeeSSN = "'+myObject.ssn+'", EmployeeBirthdate = '+myObject.birthday+', \
						EmployeeHomePhone = "'+myObject.homePhone+'", \
						EmployeeAdditionalPhone = "'+myObject.additionalPhone+'", \
						EmployeeEmail = "'+myObject.email+'", EmployeeAddress = "'+myObject.address+'", EmployeeCity = "'+myObject.city+'", \
						EmployeeState = "'+myObject.state+'", \
						EmployeeZipCode = "'+myObject.zip+'", \
						EmployeeEmergContName = "'+myObject.emergencyContactName+'", EmployeeEmergContRelation = "'+myObject.emergencyContactRelation+'", \
						EmployeeEmergContPhone = "'+myObject.emergencyContactPhone+'", HireDate = '+myObject.hireDate+', \
						TerminationDate = '+myObject.terminationDate+', EmployeeNotes = "'+myObject.clientNotes+'", EmployeeFullNameDisplay = "'+myObject.displayName+'", \
						EmployeeEmergContNotes = "'+myObject.emergencyContactNotes+'" WHERE EmployeeInformationID = "'+myObject.employeeInfoId+'"';
						return answer;
				
				default: answer = null;	
						break;
			break;	
			}
	default: answer = null;
	break;
		
	
}
	return answer;
};