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
				case 3: answer =  'UPDATE capcis.assessorinformation SET AssessorName = "'+myObject.data1+'", AssessorPhone = "'+myObject.data2+'", \
				 		AssessorEmail="'+myObject.data3+'", AssessorFax = "'+myObject.data4+'", AssessorAddress ="'+myObject.data5+'", AssessorCity = "'+myObject.data6+'", \
 						AssessorState = "'+myObject.data7+'", AssessorZipCode = "'+myObject.data8+'", AssessorPhoneExt= "'+myObject.data9+'", \
 						AssessorMobilePhone = "'+myObject.data10+'", AssessorNotes = "'+myObject.data11+'", AssessorFullNameDisplay = "'+myObject.data12+'",\
 						AssPreferredReportingMethod = "'+myObject.data13+'", InactiveAssessorInfo = '+myObject.data15+', PublicDefender = '+myObject.data16+', AttorneyStaffInfo = "'+myObject.data17+'" \
						WHERE AssessorInformationID="'+myObject.data14+'";';
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