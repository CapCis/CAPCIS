/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dSelectsQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/


exports.buildQuery = function buildQuery(myObject)
{
	var answer; 
	switch(myObject.major){
		case 0:
			switch(myObject.minor){
				case 0: answer = 'SELECT UserName, UserAccountsID FROM useraccounts WHERE UserPassword = "' + myObject.data1 + '" AND UserName = "' + myObject.user +'"';
						break;
				case 1: answer = 'SELECT * FROM authenticationtokens WHERE Tokens = "' + myObject.token + '"';
						break;
				default:
						answer = null;			
			}
			break;
		case 1:
			switch(myObject.minor){
				case 0: answer = "SELECT \
								(( attendedcounter + classescredited - WeeksClass)/13) as phasenumber, \
								attendedcounter, weeksclass, clientrequirementsID, clientIDentry, CIID, clientFirstName,ClientMiddleName, \
								ClientLastName,ClientNameSuffix, \
								concat(ClientLastName , ', ' , ClientFirstName , ', ' , coalesce(ClientMiddleName, ', ') , ' ' , coalesce(ClientNameSuffix, ', ')) as CoalescedName, \
								program, reportingstatus,clientStatus, classescredited, \
								((attendedCounter + classesCredited -WeeksClass)) as PhaseUpYes, \
								mod((attendedCounter+ classescredited - weeksclass),13) as phaseCount,\
								(attendedCounter - weeksClass) as NoPhase,\
								 MC_MonitoringCategoryID\
								 FROM \
								 capcis.weeklyphaseprelistq" + myObject.user +" left join capcis.ClientRequirements on CR_ClientRequirementsID = ClientRequirementsID \
								 left join capcis.ClientInformation on capcis.clientrequirements.ClientInformation_CIID = CIID \
								 left join capcis.WeeklyPhaseAttendedCounterDateQ"+ myObject.user+" on ClientRequirementsID = capcis.weeklyphaseattendedcounterdateq.CR_ClientRequirementsID \
								 WHERE \
								 mod((attendedCounter + classesCredited - WeeksClass),13)=0 and (attendedCounter-WeeksClass)>0 and program is not null and program != 'CBI'\
								 GROUP BY \
								 attendedCounter, WeeksClass, ClientRequirementsID, ClientIdEntry,CIID, ClientFirstName, ClientMiddleName, ClientLastName, \
								 ClientNameSuffix, Program, ReportingStatus, ClientStatus, ClassesCredited, MC_MonitoringCategoryID \
								 HAVING \
								 MC_MonitoringCategoryID = 1 \
								 ORDER BY 1 asc, 11 asc ";
						break;
				case 1: answer	="";
						break;
				default:
						answer = null;		
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
