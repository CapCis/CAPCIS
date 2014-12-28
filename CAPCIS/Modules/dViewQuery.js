/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dViewQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
exports.buildQuery = function buildQuery(myObject)
{
	var answer; 
	switch(myObject.major){
		case 0:
			switch(myObject.minor){
				case 0: answer = "create  or replace view capcis.WeeklyPhasePreListQ" + myObject.user +"(CR_ClientRequirementsID, WeeksClass) as \
				 				SELECT CR_ClientRequirementsID, Count(AttendedClass) as  WeeksClass \
				 				FROM capcis.clientmonitoringdata LEFT JOIN capcis.clientrequirements on clientmonitoringdata.ClientInformation_CIID = clientrequirements.ClientInformation_CIID \
				 				WHERE AttendedClass = 1 and entrydate between '" + myObject.data1 +"' and '" + myObject.data2 + "' and voidentry = 0 \
				 				and program != 'CBI' and program is not null \
				 				GROUP BY CR_ClientRequirementsID";
						break;
				case 1: answer = "create or replace view capcis.WeeklyPhaseAttendedCounterDateQ"+ myObject.user +"(CR_ClientRequirementsID, AttendedCounter) as \
								select CR_ClientRequirementsID, Count(AttendedClass) as AttendedCounter \
								from capcis.clientmonitoringdata \
								where voidentry = 0 and entrydate <= '"+ myObject.data1 + "' \
								group by CR_ClientRequirementsID, ClientInformation_CIID, AttendedClass \
								having AttendedClass = 1";
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