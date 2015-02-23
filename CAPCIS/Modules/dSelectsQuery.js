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
				case 3: answer = "SELECT WebComponentName, PrimaryHeaderOption FROM fxmainselectwebcomponentnames WHERE FxMainSelectWebComponentNamesID = " + myObject.data1;
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
				case 5: answer = "SELECT ALL clientinformation.ClientFullNameReverse, ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix, ClientRequirementsID, clientrequirements.ClientStatus, Class, clientrequirements.Program, \
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
								GROUP BY ClientFullNameReverse, ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix, ClientRequirementsID, clientrequirements.ClientStatus, Class, clientrequirements.Program, clientrequirements.ReportingStatus, \
								EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, \
								clientrequirements.ClientInformation_CIID, counterfinancialq.AmtPd, counterfinancialq.AmtChrgd, counterfinancialq.Currbal, counterattendedclassesq.AttendedCounter, testingflagactiveq.Flag, testingflagactiveq.Alert, \
								testingflagactiveq.PC_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, \
								testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassq.ClassItemPrice, classrosterimportclassq.ClassItemDesc, classrosterimportclassq.ClassIsClass, \
								classrosterimportclassq.ClassItem, classrosterimportclassq.ClassIPLID,testingflagactiveq.FlagTestType, clientrequirements.FK_MonitoringCategoryID \
								HAVING clientrequirements.ClientStatus = 'Active' AND Class = '"+myObject.data1+"' AND clientrequirements.FK_MonitoringCategoryID = 1 \
								ORDER BY ClientFullNameReverse ASC";
						break;
				case 6: answer = 'SELECT ALL  clientinformation.ClientFullNameReverse, ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix,ClientRequirementsID, activeclientrequirementsq.ClientStatus, Class, activeclientrequirementsq.Program, \
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
								GROUP BY ClientFullNameReverse,clientinformation.ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix,ClientRequirementsID, activeclientrequirementsq.ClientStatus, Class, activeclientrequirementsq.Program, \
								activeclientrequirementsq.ReportingStatus, EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, \
								activeclientrequirementsq.ClientInformation_CIID, counterfinancialq.AmtPd, TotalAmountPaid, counterfinancialq.AmtChrgd,  TotalAmountCharged,\
								counterfinancialq.Currbal, CurrentBalence,counterattendedclassesq.AttendedCounter,CoalescedName, ClassesTotalView, TwelveStepMeetingView,activeschedulemuclassesq.MUClass , \
								activeschedulemuclassesq.MUDate,activeschedulemuclassesq.RecurringMU,testingflagactiveq.Flag, testingflagactiveq.Alert, \
								activeclientrequirementsq.FK_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, \
								testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassmuq.ClassItemPrice, classrosterimportclassmuq.ClassItemDesc, classrosterimportclassmuq.ClassIsClass, \
								classrosterimportclassmuq.ClassItem, classrosterimportclassmuq.ClassIPLID,testingflagactiveq.FlagTestType, activeclientrequirementsq.FK_MonitoringCategoryID \
								HAVING (MUClass = "'+myObject.data1 +'" AND (activeschedulemuclassesq.MUDate between "'+myObject.weekStartDate+'" and "'+myObject.weekEndDate+'") AND RecurringMU != 1 AND activeclientrequirementsq.FK_MonitoringCategoryID =1) OR \
								(MUClass = "'+myObject.data1 +'" AND RecurringMU =1 AND activeclientrequirementsq.FK_MonitoringCategoryID=1) \
								ORDER BY ClientFullNameReverse ASC';
						break;		
				default:
						answer = null;
					}
			break	
		case 3: //referalls
			switch(myObject.minor){
				case 0: answer = 'SELECT * FROM capcis.assessorinformation where InactiveAssessorInfo = '+myObject.data1;
				break;
				case 1: answer = 'SELECT * FROM capcis.assessorinformation where AssessorName = "'+myObject.data1+'"';
				break;
				case 2: answer = 'SELECT assessorcorrespondence.CreatedDateTime, assessorcorrespondence.AssessorCorrespondence, \
								fxuseraccounts.FullName, assessorcorrespondence.VoidedAssessorCorrespondence, assessorcorrespondence.AssessorCorrespondenceID \
								FROM capcis.assessorcorrespondence \
								LEFT JOIN capcis.assessorinformation on assessorcorrespondence.FK_AssessorInformationID = AssessorInformationID \
								LEFT JOIN capcis.fxuseraccounts on assessorcorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE assessorinformation.AssessorName = "'+myObject.data1+'" AND assessorcorrespondence.VoidedAssessorCorrespondence = '+myObject.data2+' \
								ORDER BY 1 DESC';
				break;
				case 3: answer = 'SELECT CityListing FROM capcis.citylistings';
				break;
				case 4: answer = 'SELECT ReportingMethod FROM capcis.reportingmethods';
				break;
				case 5: answer = 'SELECT fxuseraccounts.FullName, bakassessorinformation.CreatedDateTime, bakassessorinformation.AssessorName FROM capcis.bakassessorinformation \
								LEFT JOIN capcis.fxuseraccounts on bakassessorinformation.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_assessorinformation_AssessorInformationID = "'+myObject.data1+'" \
								ORDER BY 2 DESC';
				break;
				case 6: answer = 'SELECT fxuseraccounts.FullName, bakassessorinformation.CreatedDateTime, bakassessorinformation.AssessorName, bakassessorinformation.AssessorFullNameDisplay \
								, bakassessorinformation.AssessorPhone, bakassessorinformation.AssessorPhoneExt, bakassessorinformation.AssessorMobilePhone, bakassessorinformation.AssessorFax, \
								bakassessorinformation.AssessorAddress, bakassessorinformation.AssessorCity, bakassessorinformation.AssessorState, bakassessorinformation.AssessorZipCode, \
								bakassessorinformation.AssessorEmail, bakassessorinformation.AssessorNotes, bakassessorinformation.AssPreferredReportingMethod, bakassessorinformation.InactiveAssessorInfo \
								FROM capcis.bakassessorinformation  \
								LEFT JOIN capcis.fxuseraccounts on bakassessorinformation.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE AssessorName = "'+myObject.data1+'" and bakassessorinformation.CreatedDateTime = "'+myObject.data2+'" and FullName = "'+myObject.data3+'"';
				break;
				case 7: answer = 'SELECT assessorcorrespondence.CreatedDateTime, assessorcorrespondence.AssessorCorrespondence, \
								fxuseraccounts.FullName, assessorcorrespondence.VoidedAssessorCorrespondence, assessorcorrespondence.AssessorCorrespondenceID  \
								FROM capcis.assessorcorrespondence \
								LEFT JOIN capcis.assessorinformation on assessorcorrespondence.FK_AssessorInformationID = AssessorInformationID \
								LEFT JOIN capcis.fxuseraccounts on assessorcorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE assessorinformation.AssessorName = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
				break;
				case 8: answer = 'SELECT * FROM capcis.assessorinformation';
				break;
				case 9: answer = "SELECT * FROM capcis.assessorinformation where assessorinformation.AssessorName LIKE '%"+myObject.data1+"%' or assessorinformation.AssessorPhone LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorEmail LIKE  '%"+myObject.data1+"%' OR assessorinformation.AssessorFax LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorAddress LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorCity LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorState LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorZipCode LIKE '%"+myObject.data1+"%'  \
								OR assessorinformation.AssessorInformationID LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorPhoneExt LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorMobilePhone LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorNotes LIKE '%"+myObject.data1+"%'\
								OR assessorinformation.AssessorFullNameDisplay LIKE '%"+myObject.data1+"%'";
				break;
				case 10: answer = "SELECT * FROM capcis.assessorinformation where (assessorinformation.AssessorName LIKE '%"+myObject.data1+"%' or assessorinformation.AssessorPhone LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorEmail LIKE  '%"+myObject.data1+"%' OR assessorinformation.AssessorFax LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorAddress LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorCity LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorState LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorZipCode LIKE '%"+myObject.data1+"%'  \
								OR assessorinformation.AssessorInformationID LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorPhoneExt LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorMobilePhone LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorNotes LIKE '%"+myObject.data1+"%'\
								OR assessorinformation.AssessorFullNameDisplay LIKE '%"+myObject.data1+"%') AND InactiveAssessorInfo = "+myObject.data2;   
				break;
				//////////////////////////////////////////////////////////////End Assessors//////////////////////////////////////////////////////////////////
				/////////////////////////////////////////////////////////////Start attorneys/////////////////////////////////////////////////////////////////
				case 11 : answer = 'SELECT * FROM capcis.attorneyinformation where InactiveAttorneyInfo = '+myObject.data1;
				break;
				case 12 : answer = 'SELECT * FROM capcis.attorneyinformation';
				break;
				case 13 : answer = "SELECT * FROM capcis.attorneyinformation where attorneyinformation.AttorneyName LIKE '%"+myObject.data1+"%' or attorneyinformation.AttorneyPhone LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyEmail LIKE  '%"+myObject.data1+"%' OR attorneyinformation.AttorneyFax LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyAddress LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyCity LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyState LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyZipCode LIKE '%"+myObject.data1+"%'  \
								OR attorneyinformation.AttorneyInformationID LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyPhoneExt LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyAdditionalPhone LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyNotes LIKE '%"+myObject.data1+"%'\
								OR attorneyinformation.AttorneyFullNameDisplay LIKE '%"+myObject.data1+"%'";
				break;
				case 14 : answer = "SELECT * FROM capcis.attorneyinformation where (attorneyinformation.AttorneyName LIKE '%"+myObject.data1+"%' or attorneyinformation.AttorneyPhone LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyEmail LIKE  '%"+myObject.data1+"%' OR attorneyinformation.AttorneyFax LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyAddress LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyCity LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyState LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyZipCode LIKE '%"+myObject.data1+"%'  \
								OR attorneyinformation.AttorneyInformationID LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyPhoneExt LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyAdditionalPhone LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyNotes LIKE '%"+myObject.data1+"%'\
								OR attorneyinformation.AttorneyFullNameDisplay LIKE '%"+myObject.data1+"%') AND InactiveAttorneyInfo = "+myObject.data2;
				break;
				case 15 : answer = 'SELECT * FROM capcis.attorneyinformation where AttorneyName = "'+myObject.data1+'"';
				break;
				case 16 : answer = 'SELECT attorneycorrespondence.CreatedDateTime, attorneycorrespondence.AttorneyCorrespondence, \
								fxuseraccounts.FullName, attorneycorrespondence.VoidedAttorneyCorrespondence, attorneycorrespondence.AttorneyCorrespondenceID \
								FROM capcis.attorneycorrespondence \
								LEFT JOIN capcis.attorneyinformation on attorneycorrespondence.FK_AttorneyInformationID = AttorneyInformationID \
								LEFT JOIN capcis.fxuseraccounts on attorneycorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE attorneyinformation.AttorneyName = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
				break;
				case 17 : answer = 'SELECT attorneycorrespondence.CreatedDateTime, attorneycorrespondence.AttorneyCorrespondence, \
								fxuseraccounts.FullName, attorneycorrespondence.VoidedAttorneyCorrespondence, attorneycorrespondence.AttorneyCorrespondenceID \
								FROM capcis.attorneycorrespondence \
								LEFT JOIN capcis.attorneyinformation on attorneycorrespondence.FK_AttorneyInformationID = AttorneyInformationID \
								LEFT JOIN capcis.fxuseraccounts on attorneycorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE attorneyinformation.AttorneyName = "'+myObject.data1+'" AND attorneycorrespondence.VoidedAttorneyCorrespondence = '+myObject.data2+' \
								ORDER BY 1 DESC';
				break;
				case 18: answer = 'SELECT fxuseraccounts.FullName, bakattorneyinformation.CreatedDateTime, bakattorneyinformation.AttorneyName FROM capcis.bakattorneyinformation \
								LEFT JOIN capcis.fxuseraccounts on bakattorneyinformation.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_attorneyinformation_AttorneyInformationID = "'+myObject.data1+'" \
								ORDER BY 2 DESC';
				break;
				case 19: answer = 'SELECT fxuseraccounts.FullName, bakattorneyinformation.CreatedDateTime, bakattorneyinformation.AttorneyName, bakattorneyinformation.AttorneyFullNameDisplay \
								, bakattorneyinformation.AttorneyPhone, bakattorneyinformation.AttorneyPhoneExt, bakattorneyinformation.AttorneyAdditionalPhone, bakattorneyinformation.AttorneyFax, bakattorneyinformation.AttorneyStaffInfo, \
								bakattorneyinformation.AttorneyAddress, bakattorneyinformation.AttorneyCity, bakattorneyinformation.AttorneyState, bakattorneyinformation.AttorneyZipCode, bakattorneyinformation.PublicDefender, \
								bakattorneyinformation.AttorneyEmail, bakattorneyinformation.AttorneyNotes, bakattorneyinformation.AttPreferredReportingMethod, bakattorneyinformation.InactiveAttorneyInfo \
								FROM capcis.bakattorneyinformation  \
								LEFT JOIN capcis.fxuseraccounts on bakattorneyinformation.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE AttorneyName = "'+myObject.data1+'" and bakattorneyinformation.CreatedDateTime = "'+myObject.data2+'" and FullName = "'+myObject.data3+'"';
				break;
				//////////////////////////////////////////////////////////////////////End Attorney/////////////////////////////////////////////////////////////////////////
				////////////////////////////////////////////////////////////////Begin Court Jurisdiction//////////////////////////////////////////////////////////////////
				case 20 : answer = 'SELECT * FROM capcis.courtjurisdiction where InactiveCourtJurisdictionInfo = '+myObject.data1;
				break;
				case 21 : answer = 'SELECT * FROM capcis.courtjurisdiction';
				break;
				case 22 : answer = "SELECT * FROM capcis.courtjurisdiction where courtjurisdiction.CourtJurisdiction LIKE '%"+myObject.data1+"%' or courtjurisdiction.CourtJurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionEmail LIKE  '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionFax LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionAddress LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionCity LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionState LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionZipCode LIKE '%"+myObject.data1+"%'  \
								OR courtjurisdiction.CourtJurisdictionID LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionPhoneExt LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionAlternatePhone LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionNotes LIKE '%"+myObject.data1+"%' OR courtjurisdiction.SearchDatabase LIKE '%"+myObject.data1+"%'\
								OR courtjurisdiction.SearchFormat LIKE '%"+myObject.data1+"%'";
				break;
				case 23 : answer = "SELECT * FROM capcis.courtjurisdiction where (courtjurisdiction.CourtJurisdiction LIKE '%"+myObject.data1+"%' or courtjurisdiction.CourtJurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionEmail LIKE  '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionFax LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionAddress LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionCity LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionState LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionZipCode LIKE '%"+myObject.data1+"%'  \
								OR courtjurisdiction.CourtJurisdictionID LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionPhoneExt LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionAlternatePhone LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionNotes LIKE '%"+myObject.data1+"%' OR courtjurisdiction.SearchDatabase LIKE '%"+myObject.data1+"%'\
								OR courtjurisdiction.SearchFormat LIKE '%"+myObject.data1+"%') AND InactiveCourtJurisdictionInfo = "+myObject.data2;
				break;
				case 24: answer = 'SELECT * FROM capcis.courtjurisdiction where CourtJurisdictionID = '+myObject.data1;
				break;
				case 25 : answer = 'SELECT courtjurisdictioncorrespondence.CreatedDateTime, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondence, \
								fxuseraccounts.FullName, courtjurisdictioncorrespondence.VoidedCourtJurisdictionCorrespondence, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondenceID \
								FROM capcis.courtjurisdictioncorrespondence \
								LEFT JOIN capcis.courtjurisdiction on courtjurisdictioncorrespondence.FK_CourtJurisdictionInformationID = CourtJurisdictionID \
								LEFT JOIN capcis.fxuseraccounts on courtjurisdictioncorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE courtjurisdiction.CourtJurisdiction = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
				break;
				case 26 : answer = 'SELECT courtjurisdictioncorrespondence.CreatedDateTime, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondence, \
								fxuseraccounts.FullName, courtjurisdictioncorrespondence.VoidedCourtJurisdictionCorrespondence, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondenceID \
								FROM capcis.courtjurisdictioncorrespondence \
								LEFT JOIN capcis.courtjurisdiction on courtjurisdictioncorrespondence.FK_CourtJurisdictionInformationID = CourtJurisdictionID \
								LEFT JOIN capcis.fxuseraccounts on courtjurisdictioncorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE courtjurisdiction.CourtJurisdiction = "'+myObject.data1+'" AND courtjurisdictioncorrespondence.VoidedCourtJurisdictionCorrespondence = '+myObject.data2+' \
								ORDER BY 1 DESC'
				break
				default:answer = null;
				break;
			}
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
