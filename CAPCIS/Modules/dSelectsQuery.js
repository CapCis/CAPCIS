/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dSelectsQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/


exports.buildQuery = function buildQuery(myObject)
{
	var answer; 
	switch(myObject.major){
		case 0:  //utilities
			switch(myObject.minor){
				case 0: answer = 'SELECT FullName, FxUserAccountsID FROM fxuseraccounts WHERE UserPassword = "' + myObject.data1 + '" AND UserName = "' + myObject.user +'"';
						break;
				case 1: answer = 'SELECT * FROM fxauthenticationtokens WHERE Token = "' + myObject.token + '"';
						break;
				case 2: answer = "SELECT FxMainSelectWebComponentNamesID, PrimaryHeaderOption, SubHeaderOption,WebComponentSort FROM fxuserpageaccess LEFT JOIN fxmainselectwebcomponentnames on FxMainSelectWebComponentNamesID = FK_FxMainSelectWebComponentNamesID WHERE FK_UserAccountsID = '" + myObject.id + "' ORDER BY 4 asc";
						break;
				case 3: answer = "SELECT WebComponentName FROM fxmainselectwebcomponentnames WHERE FxMainSelectWebComponentNamesID = " + myObject.data1;
						break;
				case 4: answer = 'SELECT FK_DivisionInformationID FROM fxuserdivisionlinkage WHERE FK_FxuserAccountsID = ' + myObject.id + ' ORDER BY 1 asc';
						break;
				default:
						answer = null;			
			}
			break;
		case 1:
			switch(myObject.minor){//weekly monitoring
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
				
				default:
						answer = null;
					}		
			break;
		case 2://classes
			switch(myObject.minor){
				case 0: answer = 'SELECT ClassType, WeekDayNumber, Class, ClassTime,ClassDay,TimeNumber,ClassRoom FROM capcis.capclasses where ClassStatus = "OPEN" order by 1,2,6,7';
						break;
				case 1: answer = 'SELECT Program, ProgramsID FROM capcis.programs  where InactivePrograms = 0 ORDER BY 2';
						break;
				case 2: answer = 'SELECT  WeekDayNumber, Class, TimeNumber,ClassRoom FROM capcis.capclasses where ClassStatus = "OPEN" and ClassDay = "' + myObject.data1 +'" and Program = "'+myObject.data2+'" order by 1,2,3,4';
						break;
				case 3: answer = 'SELECT WeekDayNumber, Class, TimeNumber,ClassRoom FROM capcis.capclasses where ClassStatus = "OPEN" and Program = "'+ myObject.data1 + '"order by 1,3,4';
						break;
				case 4: answer = 'SELECT WeekDayNumber, Class, TimeNumber,ClassRoom FROM capcis.capclasses where ClassStatus = "OPEN" and ClassDay = "'+ myObject.data1 + '"order by 1,3,2';
						break;
				case 5: answer = "SELECT ALL ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix, ClientRequirementsID, clientrequirements.ClientStatus, Class, clientrequirements.Program, \
								clientrequirements.ReportingStatus, EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, \
								clientrequirements.ClientInformation_CIID, counterfinancialq.AmtPd, coalesce(AmtPd, 0) as TotalAmountPaid, counterfinancialq.AmtChrgd, coalesce(AmtChrgd, 0) as TotalAmountCharged, \
								counterfinancialq.Currbal, coalesce(Currbal, 0)as CurrentBalence, counterattendedclassesq.AttendedCounter, concat(ClientLastName, ',', ClientFirstName, ' ', coalesce(ClientMiddleName, ','),' ', coalesce(ClientNameSuffix, ',')) as CoalescedName, \
								concat(ClassesRequired, '|', (ClassesCredited + coalesce(AttendedCounter, 0))) as ClassesTotalView, \
								concat(TwelveStepMeetingsRequired, '|',(TwelveStepMeetingsCredited + TwelveStepMeetingsAttended)) as TwelveStepMeetingView, testingflagactiveq.Flag, testingflagactiveq.Alert, \
								testingflagactiveq.PC_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, \
								testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassq.ClassItemPrice, classrosterimportclassq.ClassItemDesc, classrosterimportclassq.ClassIsClass, \
								classrosterimportclassq.ClassItem, classrosterimportclassq.ClassIPLID,testingflagactiveq.FlagTestType, clientrequirements.FK_MonitoringCategoryID, if(StartDate <= now(), '', 'Pending') as PendingClient \
								FROM capcis.clientrequirements INNER JOIN capcis.clientinformation ON clientrequirements.ClientInformation_CIID = CIID LEFT JOIN counterattendedclassesq ON \
								ClientRequirementsID = counterattendedclassesq.CR_ClientRequirementsID LEFT JOIN counterfinancialq ON ClientRequirementsID = counterfinancialq.CR_ClientRequirementsID \
								LEFT JOIN testingflagactiveq ON ClientRequirementsID = testingflagactiveq.CR_ClientRequirementsID AND  clientrequirements.FK_PriceCategoryID = testingflagactiveq.PC_PriceCategoryID \
								LEFT JOIN classrosterimportclassq ON FK_PriceCategoryID = classrosterimportclassq.PC_PriceCategoryID \
								GROUP BY ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix, ClientRequirementsID, clientrequirements.ClientStatus, Class, clientrequirements.Program, clientrequirements.ReportingStatus, \
								EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, \
								clientrequirements.ClientInformation_CIID, counterfinancialq.AmtPd, counterfinancialq.AmtChrgd, counterfinancialq.Currbal, counterattendedclassesq.AttendedCounter, testingflagactiveq.Flag, testingflagactiveq.Alert, \
								testingflagactiveq.PC_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, \
								testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassq.ClassItemPrice, classrosterimportclassq.ClassItemDesc, classrosterimportclassq.ClassIsClass, \
								classrosterimportclassq.ClassItem, classrosterimportclassq.ClassIPLID,testingflagactiveq.FlagTestType, clientrequirements.FK_MonitoringCategoryID \
								HAVING clientrequirements.ClientStatus = 'Active' AND Class = '"+myObject.data1+"' AND clientrequirements.FK_MonitoringCategoryID = 1 \
								ORDER BY ClientLastName ASC, ClientFirstName ASC, ClientMiddleName ASC";
						break;
				case 6: answer = 'SELECT ALL  clientinformation.ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix,ClientRequirementsID, activeclientrequirementsq.ClientStatus, Class, activeclientrequirementsq.Program, \
								activeclientrequirementsq.ReportingStatus, EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, \
								activeclientrequirementsq.ClientInformation_CIID, counterfinancialq.AmtPd, coalesce(AmtPd, 0) as TotalAmountPaid, counterfinancialq.AmtChrgd, coalesce(AmtChrgd, 0) as TotalAmountCharged, \
								counterfinancialq.Currbal, coalesce(Currbal, 0)as CurrentBalence, counterattendedclassesq.AttendedCounter, concat(ClientLastName, ",", ClientFirstName, " ", coalesce(ClientMiddleName, ",")," ", coalesce(ClientNameSuffix, ",")) as CoalescedName, \
								concat(ClassesRequired, "|", (ClassesCredited + coalesce(AttendedCounter, 0))) as ClassesTotalView,\
								concat(TwelveStepMeetingsRequired, "|",(TwelveStepMeetingsCredited + TwelveStepMeetingsAttended)) as TwelveStepMeetingView, \
								activeschedulemuclassesq.MUClass ,activeschedulemuclassesq.MUDate,activeschedulemuclassesq.RecurringMU,testingflagactiveq.Flag, testingflagactiveq.Alert, \
								activeclientrequirementsq.FK_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, \
								testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassmuq.ClassItemPrice, classrosterimportclassmuq.ClassItemDesc, classrosterimportclassmuq.ClassIsClass, \
								classrosterimportclassmuq.ClassItem, classrosterimportclassmuq.ClassIPLID,testingflagactiveq.FlagTestType, activeclientrequirementsq.FK_MonitoringCategoryID \
								FROM activeclientrequirementsq LEFT JOIN counterattendedclassesq ON ClientRequirementsID = counterattendedclassesq.CR_ClientRequirementsID \
								LEFT JOIN counterfinancialq ON activeclientrequirementsq.ClientRequirementsID = counterfinancialq.CR_ClientRequirementsID \
								LEFT JOIN classrosterimportclassmuq on activeclientrequirementsq.FK_PriceCategoryID = classrosterimportclassmuq.PC_PriceCategoryID \
								LEFT JOIN clientinformation on activeclientrequirementsq.ClientInformation_CIID = clientinformation.CIID \
								LEFT JOIN testingflagactiveq on activeclientrequirementsq.ClientRequirementsID = testingflagactiveq.CR_ClientRequirementsID AND activeclientrequirementsq.FK_PriceCategoryID = testingflagactiveq.PC_PriceCategoryID \
								INNER JOIN activeschedulemuclassesq on activeclientrequirementsq.ClientRequirementsID = activeschedulemuclassesq.CR_ClientRequirementsID \
								GROUP BY clientinformation.ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix,ClientRequirementsID, activeclientrequirementsq.ClientStatus, Class, activeclientrequirementsq.Program, \
								activeclientrequirementsq.ReportingStatus, EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, \
								activeclientrequirementsq.ClientInformation_CIID, counterfinancialq.AmtPd, TotalAmountPaid, counterfinancialq.AmtChrgd,  TotalAmountCharged,\
								counterfinancialq.Currbal, CurrentBalence,counterattendedclassesq.AttendedCounter,CoalescedName, ClassesTotalView, TwelveStepMeetingView,activeschedulemuclassesq.MUClass , \
								activeschedulemuclassesq.MUDate,activeschedulemuclassesq.RecurringMU,testingflagactiveq.Flag, testingflagactiveq.Alert, \
								activeclientrequirementsq.FK_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, \
								testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassmuq.ClassItemPrice, classrosterimportclassmuq.ClassItemDesc, classrosterimportclassmuq.ClassIsClass, \
								classrosterimportclassmuq.ClassItem, classrosterimportclassmuq.ClassIPLID,testingflagactiveq.FlagTestType, activeclientrequirementsq.FK_MonitoringCategoryID \
								HAVING (MUClass = "'+myObject.data1 +'" AND (activeschedulemuclassesq.MUDate between "'+myObject.weekStartDate+'" and "'+myObject.weekEndDate+'") AND RecurringMU != 1 AND activeclientrequirementsq.FK_MonitoringCategoryID =1) OR \
								(MUClass = "'+myObject.data1 +'" AND RecurringMU =1 AND activeclientrequirementsq.FK_MonitoringCategoryID=1) \
								ORDER BY ClientLastName ASC, ClientFirstName ASC, ClientMiddleName ASC';
						break;		
				default:
						answer = null;
					}
			break	
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
