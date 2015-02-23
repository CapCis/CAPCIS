﻿exports.buildQuery = function buildQuery(myObject) {
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
				default: answer = null;	
						break;
			}
			break;
		default: answer = null;
			break;
		
	
}
		return answer;
};