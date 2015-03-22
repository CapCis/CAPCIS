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
				case 5: answer = 'SELECT * FROM fxcapcisregistrations WHERE RegistrationComplete = 0 ORDER BY CreatedDateTime asc';
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
						
				case 7: answer = 'SELECT ReceiptPurpose FROM capcis.receiptpurpose';
						break;
				case 8: answer = "SELECT ReceiptPurpose FROM capcis.receiptpurpose WHERE ReceiptPurpose LIKE '%"+myObject.data1+"%'";
						break;		
				default:
						answer = null;
					}
			break;	
		case 3: //referalls
			switch(myObject.minor){
				case 0: answer = 'SELECT * FROM capcis.assessorinformation where InactiveAssessorInfo = '+myObject.data1;
				break;
				case 2: answer = "SELECT DATE_FORMAT(assessorcorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, assessorcorrespondence.AssessorCorrespondence, \
								fxuseraccounts.FullName, assessorcorrespondence.VoidedAssessorCorrespondence, assessorcorrespondence.AssessorCorrespondenceID \
								FROM capcis.assessorcorrespondence \
								LEFT JOIN capcis.assessorinformation on assessorcorrespondence.FK_AssessorInformationID = AssessorInformationID \
								LEFT JOIN capcis.fxuseraccounts on assessorcorrespondence.FK_fxuseraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE assessorinformation.AssessorName = '"+myObject.data1+"' AND assessorcorrespondence.VoidedAssessorCorrespondence = "+myObject.data2+" \
								ORDER BY 1 DESC";
				break;
				case 3: answer = 'SELECT CityListing FROM capcis.citylistings';
						break;
				case 4: answer = 'SELECT ReportingMethod FROM capcis.reportingmethods';
						break;
				case 5: answer = 'SELECT *, DATE_FORMAT(bakassessorinformation.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakassessorinformation \
								LEFT JOIN capcis.fxuseraccounts on bakassessorinformation.FK_fxuseraccounts_FxUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_assessorinformation_AssessorInformationID = "'+myObject.data1+'" \
								ORDER BY bakassessorinformation.CreatedDateTime DESC';
						break;
				
				case 7: answer = "SELECT DATE_FORMAT(assessorcorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, assessorcorrespondence.AssessorCorrespondence, \
								fxuseraccounts.FullName, assessorcorrespondence.VoidedAssessorCorrespondence, assessorcorrespondence.AssessorCorrespondenceID  \
								FROM capcis.assessorcorrespondence \
								LEFT JOIN capcis.assessorinformation on assessorcorrespondence.FK_AssessorInformationID = AssessorInformationID \
								LEFT JOIN capcis.fxuseraccounts on assessorcorrespondence.FK_fxuseraccounts_FxUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE assessorinformation.AssessorName = '"+myObject.data1+"' \
								ORDER BY 1 DESC";
						break;
				case 8: answer = 'SELECT * FROM capcis.assessorinformation';
						break;
				case 9: answer = "SELECT * FROM capcis.assessorinformation where assessorinformation.AssessorName LIKE '%"+myObject.data1+"%' or assessorinformation.AssessorPhone LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorEmail LIKE  '%"+myObject.data1+"%' OR assessorinformation.AssessorFax LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorInformationID LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorPhoneExt LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorMobilePhone LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorNotes LIKE '%"+myObject.data1+"%'\
								OR assessorinformation.AssessorFullNameDisplay LIKE '%"+myObject.data1+"%'";
						break;
				case 10: answer = "SELECT * FROM capcis.assessorinformation where (assessorinformation.AssessorName LIKE '%"+myObject.data1+"%' or assessorinformation.AssessorPhone LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorEmail LIKE  '%"+myObject.data1+"%' OR assessorinformation.AssessorFax LIKE '%"+myObject.data1+"%' \
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
								OR attorneyinformation.AttorneyEmail LIKE  '%"+myObject.data1+"%' OR attorneyinformation.AttorneyFax LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyInformationID LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyPhoneExt LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyAdditionalPhone LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyNotes LIKE '%"+myObject.data1+"%'\
								OR attorneyinformation.AttorneyFullNameDisplay LIKE '%"+myObject.data1+"%'";
						break;
				case 14 : answer = "SELECT * FROM capcis.attorneyinformation where (attorneyinformation.AttorneyName LIKE '%"+myObject.data1+"%' or attorneyinformation.AttorneyPhone LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyEmail LIKE  '%"+myObject.data1+"%' OR attorneyinformation.AttorneyFax LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyInformationID LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyPhoneExt LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyAdditionalPhone LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyNotes LIKE '%"+myObject.data1+"%'\
								OR attorneyinformation.AttorneyFullNameDisplay LIKE '%"+myObject.data1+"%') AND InactiveAttorneyInfo = "+myObject.data2;
						break;
				
				case 16 : answer = "SELECT DATE_FORMAT(attorneycorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, attorneycorrespondence.AttorneyCorrespondence, \
								fxuseraccounts.FullName, attorneycorrespondence.VoidedAttorneyCorrespondence, attorneycorrespondence.AttorneyCorrespondenceID \
								FROM capcis.attorneycorrespondence \
								LEFT JOIN capcis.attorneyinformation on attorneycorrespondence.FK_AttorneyInformationID = AttorneyInformationID \
								LEFT JOIN capcis.fxuseraccounts on attorneycorrespondence.FK_fxuseraccounts_FXUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE attorneyinformation.AttorneyName = '"+myObject.data1+"' \
								ORDER BY 1 DESC";
						break;
				case 17 : answer = "SELECT DATE_FORMAT(attorneycorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, attorneycorrespondence.AttorneyCorrespondence, \
								fxuseraccounts.FullName, attorneycorrespondence.VoidedAttorneyCorrespondence, attorneycorrespondence.AttorneyCorrespondenceID \
								FROM capcis.attorneycorrespondence \
								LEFT JOIN capcis.attorneyinformation on attorneycorrespondence.FK_AttorneyInformationID = AttorneyInformationID \
								LEFT JOIN capcis.fxuseraccounts on attorneycorrespondence.FK_fxuseraccounts_FXUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE attorneyinformation.AttorneyName = '"+myObject.data1+"' AND attorneycorrespondence.VoidedAttorneyCorrespondence = '"+myObject.data2+"' \
								ORDER BY 1 DESC";
						break;
				case 18: answer = 'SELECT *, DATE_FORMAT(bakattorneyinformation.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakattorneyinformation \
								LEFT JOIN capcis.fxuseraccounts on bakattorneyinformation.FK_fxuseraccounts_FXUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_attorneyinformation_AttorneyInformationID = "'+myObject.data1+'" \
								ORDER BY bakattorneyinformation.CreatedDateTime DESC';
						break;
				
				//////////////////////////////////////////////////////////////////////End Attorney/////////////////////////////////////////////////////////////////////////
				////////////////////////////////////////////////////////////////Begin Court Jurisdiction//////////////////////////////////////////////////////////////////
				case 20 : answer = 'SELECT * FROM capcis.courtjurisdiction where InactiveCourtJurisdictionInfo = '+myObject.data1;
						break;
				case 21 : answer = 'SELECT * FROM capcis.courtjurisdiction';
						break;
				case 22 : answer = "SELECT * FROM capcis.courtjurisdiction where courtjurisdiction.CourtJurisdiction LIKE '%"+myObject.data1+"%' or courtjurisdiction.CourtJurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionEmail LIKE  '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionFax LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionID LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionPhoneExt LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionAlternatePhone LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionNotes LIKE '%"+myObject.data1+"%' OR courtjurisdiction.SearchDatabase LIKE '%"+myObject.data1+"%'\
								OR courtjurisdiction.SearchFormat LIKE '%"+myObject.data1+"%'";
						break;
				case 23 : answer = "SELECT * FROM capcis.courtjurisdiction where (courtjurisdiction.CourtJurisdiction LIKE '%"+myObject.data1+"%' or courtjurisdiction.CourtJurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionEmail LIKE  '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionFax LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionID LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionPhoneExt LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionAlternatePhone LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionNotes LIKE '%"+myObject.data1+"%' OR courtjurisdiction.SearchDatabase LIKE '%"+myObject.data1+"%'\
								OR courtjurisdiction.SearchFormat LIKE '%"+myObject.data1+"%') AND InactiveCourtJurisdictionInfo = "+myObject.data2;
						break;
				
				case 25 : answer = "SELECT DATE_FORMAT(courtjurisdictioncorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondence, \
								fxuseraccounts.FullName, courtjurisdictioncorrespondence.VoidedCourtJurisdictionCorrespondence, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondenceID \
								FROM capcis.courtjurisdictioncorrespondence \
								LEFT JOIN capcis.courtjurisdiction on courtjurisdictioncorrespondence.FK_CourtJurisdictionInformationID = CourtJurisdictionID \
								LEFT JOIN capcis.fxuseraccounts on courtjurisdictioncorrespondence.FK_fxuseraccounts_FxUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE courtjurisdiction.CourtJurisdiction = '"+myObject.data1+"' \
								ORDER BY 1 DESC";
						break;
				case 26 : answer = "SELECT DATE_FORMAT(courtjurisdictioncorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondence, \
								fxuseraccounts.FullName, courtjurisdictioncorrespondence.VoidedCourtJurisdictionCorrespondence, courtjurisdictioncorrespondence.CourtJurisdictionCorrespondenceID \
								FROM capcis.courtjurisdictioncorrespondence \
								LEFT JOIN capcis.courtjurisdiction on courtjurisdictioncorrespondence.FK_CourtJurisdictionInformationID = CourtJurisdictionID \
								LEFT JOIN capcis.fxuseraccounts on courtjurisdictioncorrespondence.FK_fxuseraccounts_FxUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE courtjurisdiction.CourtJurisdiction = '"+myObject.data1+"' AND courtjurisdictioncorrespondence.VoidedCourtJurisdictionCorrespondence = '"+myObject.data2+"' \
								ORDER BY courtjurisdictioncorrespondence.CreatedDateTime DESC"
						break;
				case 27: answer = 'SELECT *, DATE_FORMAT(bakcourtjurisdiction.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakcourtjurisdiction \
								LEFT JOIN capcis.fxuseraccounts on bakcourtjurisdiction.FK_fxuseraccounts_FXUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_courtjurisdiction_CourtJurisdictionID = "'+myObject.data1+'" \
								ORDER BY bakcourtjurisdiction.CreatedDateTime DESC';
						break;
				
				///////////////////////////////////////////////////////////////////////End Court Jurisdiction////////////////////////////////////////////////////////////
				/////////////////////////////////////////////////////////////////////////////Begin DHS/////////////////////////////////////////////////////////////////////////
				case 29 : answer = 'SELECT * FROM capcis.dhsinformation where InactiveDhsInfo = '+myObject.data1;
						break;
				case 30 : answer = 'SELECT * FROM capcis.dhsinformation';
						break;
				case 31 : answer = "SELECT * FROM capcis.dhsinformation where dhsinformation.DhsName LIKE '%"+myObject.data1+"%' or dhsinformation.DhsPhone LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsEmail LIKE  '%"+myObject.data1+"%' OR dhsinformation.DhsFax LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsInformationID LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsPhoneExt LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsAlternatPhone LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsNotes LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR dhsinformation.DhsPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 32 : answer = "SELECT * FROM capcis.dhsinformation where (dhsinformation.DhsName LIKE '%"+myObject.data1+"%' or dhsinformation.DhsPhone LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsEmail LIKE  '%"+myObject.data1+"%' OR dhsinformation.DhsFax LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsInformationID LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsPhoneExt LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsAlternatPhone LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsNotes LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR dhsinformation.DhsPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveDhsInfo = "+myObject.data2;
						break;
				
				case 34 : answer = 'SELECT DATE_FORMAT(dhscorrespondence.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime, dhscorrespondence.DhsCorrespondence, \
								fxuseraccounts.FullName, dhscorrespondence.VoidedDhsCorrespondence, dhscorrespondence.DhsCorrespondenceID \
								FROM capcis.dhscorrespondence \
								LEFT JOIN capcis.dhsinformation on dhscorrespondence.FK_DhsInformationID = DhsInformationID \
								LEFT JOIN capcis.fxuseraccounts on dhscorrespondence.FK_fxuseraccounts_FxUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE dhsinformation.DhsName = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
						break;
				case 35 : answer = "SELECT DATE_FORMAT(dhscorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, dhscorrespondence.DhsCorrespondence, \
								fxuseraccounts.FullName, dhscorrespondence.VoidedDhsCorrespondence, dhscorrespondence.DhsCorrespondenceID \
								FROM capcis.dhscorrespondence \
								LEFT JOIN capcis.dhsinformation on dhscorrespondence.FK_DhsInformationID = DhsInformationID \
								LEFT JOIN capcis.fxuseraccounts on dhscorrespondence.FK_fxuseraccounts_FxUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE dhsinformation.DhsName = '"+myObject.data1+"' AND dhscorrespondence.VoidedDhsCorrespondence = '"+myObject.data2+"' \
								ORDER BY 1 DESC"
						break;
				case 36: answer = 'SELECT *,DATE_FORMAT( bakdhsinformation.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakdhsinformation \
								LEFT JOIN capcis.fxuseraccounts on bakdhsinformation.FK_fxuseraccounts_FXUserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_dhsinformation_DhsInformationID = "'+myObject.data1+'" \
								ORDER BY bakdhsinformation.CreatedDateTime DESC';
						break;
				
						///////////////////////////////////////////////////////////////////////////////////End DHS//////////////////////////////////////////
						///////////////////////////////////////////////////////////////////////////////Start Judges//////////////////////////////////////////
				case 38 : answer = 'SELECT * FROM capcis.judges where InactiveJudge = '+myObject.data1;
						break;
				case 39 : answer = 'SELECT * FROM capcis.judges';
						break;
				case 40 : answer = "SELECT * FROM capcis.judges where judges.Judge LIKE '%"+myObject.data1+"%' or judges.JudgeOfficePhone LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeEmail LIKE  '%"+myObject.data1+"%' OR judges.JudgeFax LIKE '%"+myObject.data1+"%' \
								OR judges.JudgesID LIKE '%"+myObject.data1+"%' OR judges.JudgeOfficePhoneExt LIKE '%"+myObject.data1+"%' OR judges.JudgeJurisdiction LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeMobilePhone LIKE '%"+myObject.data1+"%' OR judges.JudgeNotes LIKE '%"+myObject.data1+"%' OR judges.JudgeFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR judges.JPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 41 : answer = "SELECT * FROM capcis.judges where (judges.Judge LIKE '%"+myObject.data1+"%' or judges.JudgeOfficePhone LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeEmail LIKE  '%"+myObject.data1+"%' OR judges.JudgeFax LIKE '%"+myObject.data1+"%' \
								OR judges.JudgesID LIKE '%"+myObject.data1+"%' OR judges.JudgeOfficePhoneExt LIKE '%"+myObject.data1+"%' OR judges.JudgeJurisdiction LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeMobilePhone LIKE '%"+myObject.data1+"%' OR judges.JudgeNotes LIKE '%"+myObject.data1+"%' OR judges.JudgeFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR judges.JPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveJudge = "+myObject.data2;
						break;
				case 42 : answer = 'SELECT DATE_FORMAT(judgecorrespondence.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime, judgecorrespondence.JudgeCorrespondence, \
								fxuseraccounts.FullName, judgecorrespondence.VoidedJudgeCorrespondence, judgecorrespondence.JudgeCorrespondenceID \
								FROM capcis.judgecorrespondence \
								LEFT JOIN capcis.judges on judgecorrespondence.FK_JudgeInformationID = JudgesID \
								LEFT JOIN capcis.fxuseraccounts on judgecorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE judges.Judge = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
						break;
				case 43 : answer = "SELECT DATE_FORMAT(judgecorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, judgecorrespondence.JudgeCorrespondence, \
								fxuseraccounts.FullName, judgecorrespondence.VoidedJudgeCorrespondence, judgecorrespondence.JudgeCorrespondenceID \
								FROM capcis.judgecorrespondence \
								LEFT JOIN capcis.judges on judgecorrespondence.FK_JudgeInformationID = JudgesID \
								LEFT JOIN capcis.fxuseraccounts on judgecorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE judges.Judge = '"+myObject.data1+"' AND judgecorrespondence.VoidedJudgeCorrespondence = "+myObject.data2+" \
								ORDER BY 1 DESC"
						break;
				
				case 45: answer = 'SELECT *,DATE_FORMAT( bakjudges.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakjudges \
								LEFT JOIN capcis.fxuseraccounts on bakjudges.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_judges_JudgesID = "'+myObject.data1+'" \
								ORDER BY bakjudges.CreatedDateTime DESC';
						break;
				
					//////////////////////////////////////////////////////////////////End Judges//////////////////////////////////////////////
					/////////////////////////////////////////////////////////////////Start Other Monitors/////////////////////////////////////
				case 47 : answer = 'SELECT * FROM capcis.othermonitors where InactiveOtherMonitors = '+myObject.data1;
						break;
				case 48 : answer = 'SELECT * FROM capcis.othermonitors';
						break;
				case 49 : answer = "SELECT * FROM capcis.othermonitors where othermonitors.OtherMonitors LIKE '%"+myObject.data1+"%' or othermonitors.OtherMonitorsOfficePhone LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsEmail LIKE  '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFax LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsID LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsOfficePhoneExt LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsJurisdiction LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsMobilePhone LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsNotes LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR othermonitors.OMPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 50 : answer = "SELECT * FROM capcis.othermonitors where (othermonitors.OtherMonitors LIKE '%"+myObject.data1+"%' or othermonitors.OtherMonitorsOfficePhone LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsEmail LIKE  '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFax LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsID LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsOfficePhoneExt LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsJurisdiction LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsMobilePhone LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsNotes LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR othermonitors.OMPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveOtherMonitors = "+myObject.data2;
						break;	
				case 51 : answer = 'SELECT DATE_FORMAT(othermonitorscorrespondence.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime, othermonitorscorrespondence.OtherMonitorsCorrespondence, \
								fxuseraccounts.FullName, othermonitorscorrespondence.VoidedOtherMonitorsCorrespondence, othermonitorscorrespondence.OtherMonitorsCorrespondenceID \
								FROM capcis.othermonitorscorrespondence \
								LEFT JOIN capcis.othermonitors on othermonitorscorrespondence.FK_OtherMonitorsInformationID = OtherMonitorsID \
								LEFT JOIN capcis.fxuseraccounts on othermonitorscorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE othermonitors.OtherMonitors = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
						break;
				case 52 : answer = "SELECT DATE_FORMAT(othermonitorscorrespondence.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, othermonitorscorrespondence.OtherMonitorsCorrespondence, \
								fxuseraccounts.FullName, othermonitorscorrespondence.VoidedOtherMonitorsCorrespondence, othermonitorscorrespondence.OtherMonitorsCorrespondenceID \
								FROM capcis.othermonitorscorrespondence \
								LEFT JOIN capcis.othermonitors on othermonitorscorrespondence.FK_OtherMonitorsInformationID = OtherMonitorsID \
								LEFT JOIN capcis.fxuseraccounts on othermonitorscorrespondence.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE othermonitors.OtherMonitors = '"+myObject.data1+"' AND othermonitorscorrespondence.VoidedOtherMonitorsCorrespondence = "+myObject.data2+" \
								ORDER BY 1 DESC"
						break;
				
				case 54: answer = 'SELECT *,DATE_FORMAT( bakothermonitors.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakothermonitors \
								LEFT JOIN capcis.fxuseraccounts on bakothermonitors.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_othermonitors_OtherMonitorsID = "'+myObject.data1+'" \
								ORDER BY bakothermonitors.CreatedDateTime DESC';
						break;
				
				//////////////////////////////////////////////////////////////////////////////End Other Monitors///////////////////////////////////////////////////		
				///////////////////////////////////////////////////////////////////////////Start Probation Jurisdiction///////////////////////////////////////////////
				case 56 : answer = 'SELECT * FROM capcis.pojurisdiction where InactivePOJurisdiction = '+myObject.data1;
						break;
				case 57 : answer = 'SELECT * FROM capcis.pojurisdiction';
						break;
				case 58 : answer = "SELECT * FROM capcis.pojurisdiction where pojurisdiction.JurisdictionName LIKE '%"+myObject.data1+"%' or pojurisdiction.JurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionFax LIKE '%"+myObject.data1+"%'  OR pojurisdiction.POJurisdictionID LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionNotes LIKE '%"+myObject.data1+"%'";
						break;
				case 59 : answer = "SELECT * FROM capcis.pojurisdiction where (pojurisdiction.JurisdictionName LIKE '%"+myObject.data1+"%' or pojurisdiction.JurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionFax LIKE '%"+myObject.data1+"%' OR pojurisdiction.POJurisdictionID LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionNotes LIKE '%"+myObject.data1+"%') \
								 AND InactivePOJurisdiction = "+myObject.data2;
						break;	
				case 60 : answer = 'SELECT DATE_FORMAT(pojurisdictioncorrespondance.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime, pojurisdictioncorrespondance.POJurisdictionCorrespondence, \
								fxuseraccounts.FullName, pojurisdictioncorrespondance.VoidedPOJurisdictionCorrespondence, pojurisdictioncorrespondance.POJurisdictionCorrespondenceID \
								FROM capcis.pojurisdictioncorrespondance \
								LEFT JOIN capcis.pojurisdiction on pojurisdictioncorrespondance.FK_POJurisdictionInformationID = POJurisdictionID \
								LEFT JOIN capcis.fxuseraccounts on pojurisdictioncorrespondance.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE pojurisdiction.POJurisdictionID = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
						break;
				case 61 : answer = "SELECT DATE_FORMAT(pojurisdictioncorrespondance.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, pojurisdictioncorrespondance.POJurisdictionCorrespondence, \
								fxuseraccounts.FullName, pojurisdictioncorrespondance.VoidedPOJurisdictionCorrespondence, pojurisdictioncorrespondance.POJurisdictionCorrespondenceID \
								FROM capcis.pojurisdictioncorrespondance \
								LEFT JOIN capcis.pojurisdiction on pojurisdictioncorrespondance.FK_POJurisdictionInformationID = POJurisdictionID \
								LEFT JOIN capcis.fxuseraccounts on pojurisdictioncorrespondance.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE pojurisdiction.POJurisdictionID = '"+myObject.data1+"' AND pojurisdictioncorrespondance.VoidedPOJurisdictionCorrespondence = "+myObject.data2+" \
								ORDER BY 1 DESC";
						break;
				
				case 63: answer = 'SELECT *,DATE_FORMAT( bakpojurisdiction.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakpojurisdiction \
								LEFT JOIN capcis.fxuseraccounts on bakpojurisdiction.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_pojurisdiction_POJurisdictionID = "'+myObject.data1+'" \
								ORDER BY bakpojurisdiction.CreatedDateTime DESC';
						break;
				
					//////////////////////////////////////////////////////////End PO jurisdiction///////////////////////////////////////////////////////////////
					//////////////////////////////////////////////////////////////Start PO//////////////////////////////////////////////////////////////////////
				case 65 : answer = 'SELECT * FROM capcis.poinformation LEFT JOIN pojurisdiction on FK_pojurisdiction_POJurisdictionID = POJurisdictionID where InactivePO = '+myObject.data1;
						break;
				case 66 : answer = 'SELECT * FROM capcis.poinformation LEFT JOIN pojurisdiction on FK_pojurisdiction_POJurisdictionID = POJurisdictionID';
						break;
				case 67 : answer = "SELECT * FROM capcis.poinformation LEFT JOIN pojurisdiction on FK_pojurisdiction_POJurisdictionID = POJurisdictionID where poinformation.POName LIKE '%"+myObject.data1+"%' or poinformation.POPhone LIKE '%"+myObject.data1+"%' \
								OR poinformation.POEmail LIKE  '%"+myObject.data1+"%' OR poinformation.POFax LIKE '%"+myObject.data1+"%' \
								OR poinformation.POInformationID LIKE '%"+myObject.data1+"%' OR poinformation.POPhoneExtension LIKE '%"+myObject.data1+"%'  \
								OR poinformation.POMobilePhone LIKE '%"+myObject.data1+"%' OR poinformation.PONotes LIKE '%"+myObject.data1+"%' OR poinformation.POFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR poinformation.POPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 68 : answer = "SELECT * FROM capcis.poinformation LEFT JOIN pojurisdiction on FK_pojurisdiction_POJurisdictionID = POJurisdictionID where (poinformation.POName LIKE '%"+myObject.data1+"%' or poinformation.POPhone LIKE '%"+myObject.data1+"%' \
								OR poinformation.POEmail LIKE  '%"+myObject.data1+"%' OR poinformation.POFax LIKE '%"+myObject.data1+"%' \
								OR poinformation.POInformationID LIKE '%"+myObject.data1+"%' OR poinformation.POPhoneExtension LIKE '%"+myObject.data1+"%'  \
								OR poinformation.POMobilePhone LIKE '%"+myObject.data1+"%' OR poinformation.PONotes LIKE '%"+myObject.data1+"%' OR poinformation.POFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR poinformation.POPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactivePO = "+myObject.data2;
						break;	
				case 69 : answer = 'SELECT DATE_FORMAT(pocorrespondance.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime, pocorrespondance.POCorrespondence, \
								fxuseraccounts.FullName, pocorrespondance.VoidedPOCorrespondence, pocorrespondance.POCorrespondenceID \
								FROM capcis.pocorrespondance \
								LEFT JOIN capcis.poinformation on pocorrespondance.FK_POInformationID = POInformationID \
								LEFT JOIN capcis.fxuseraccounts on pocorrespondance.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE poinformation.POInformationID = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
						break;
				case 70 : answer = "SELECT DATE_FORMAT(pocorrespondance.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, pocorrespondance.POCorrespondence, \
								fxuseraccounts.FullName, pocorrespondance.VoidedPOCorrespondence, pocorrespondance.POCorrespondenceID \
								FROM capcis.pocorrespondance \
								LEFT JOIN capcis.poinformation on pocorrespondance.FK_POInformationID = POInformationID \
								LEFT JOIN capcis.fxuseraccounts on pocorrespondance.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE poinformation.POInformationID = '"+myObject.data1+"' AND pocorrespondance.VoidedPOCorrespondence = "+myObject.data2+" \
								ORDER BY 1 DESC"
						break;		
				
				case 72: answer = 'SELECT *,DATE_FORMAT( bakpoinformation.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakpoinformation \
								LEFT JOIN capcis.fxuseraccounts on bakpoinformation.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_poinformation_POInformationID = "'+myObject.data1+'" \
								ORDER BY bakpoinformation.CreatedDateTime DESC';
						break;
				
				//////////////////////////////////////////////////////////////End PO///////////////////////////////////////////////////////////////////
				////////////////////////////////////////////////////////////Start Prosecutors//////////////////////////////////////////////////////////
				case 74 : answer = 'SELECT * FROM capcis.prosecutors where InactiveProsecutor = '+myObject.data1;
						break;
				case 75 : answer = 'SELECT * FROM capcis.prosecutors';
						break;
				case 76 : answer = "SELECT * FROM capcis.prosecutors where prosecutors.Prosecutor LIKE '%"+myObject.data1+"%' or prosecutors.ProsecutorOfficePhone LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorEmail LIKE  '%"+myObject.data1+"%' OR prosecutors.ProsecutorFax LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorsID LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorOfficePhoneExt LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorJurisdiction LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorMobilePhone LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorNotes LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR prosecutors.ProsPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 77 : answer = "SELECT * FROM capcis.prosecutors where (prosecutors.Prosecutor LIKE '%"+myObject.data1+"%' or prosecutors.ProsecutorOfficePhone LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorEmail LIKE  '%"+myObject.data1+"%' OR prosecutors.ProsecutorFax LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorsID LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorOfficePhoneExt LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorJurisdiction LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorMobilePhone LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorNotes LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR prosecutors.ProsPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveProsecutor = "+myObject.data2;
						break;	
				case 78 : answer = 'SELECT DATE_FORMAT(prosecutorcorrespondance.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime, prosecutorcorrespondance.ProsecutorCorrespondence, \
								fxuseraccounts.FullName, prosecutorcorrespondance.VoidedProsecutorCorrespondence, prosecutorcorrespondance.ProsecutorCorrespondenceID \
								FROM capcis.prosecutorcorrespondance \
								LEFT JOIN capcis.prosecutors on prosecutorcorrespondance.FK_prosecutors_ProsecutorsID = ProsecutorsID \
								LEFT JOIN capcis.fxuseraccounts on prosecutorcorrespondance.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE prosecutors.ProsecutorsID = "'+myObject.data1+'" \
								ORDER BY 1 DESC';
						break;
				case 79 : answer = "SELECT DATE_FORMAT(prosecutorcorrespondance.CreatedDateTime, '%m/%d/%Y %h:%i:%s:%p') as CreatedDateTime, prosecutorcorrespondance.ProsecutorCorrespondence, \
								fxuseraccounts.FullName, prosecutorcorrespondance.VoidedProsecutorCorrespondence, prosecutorcorrespondance.ProsecutorCorrespondenceID \
								FROM capcis.prosecutorcorrespondance \
								LEFT JOIN capcis.prosecutors on prosecutorcorrespondance.FK_prosecutors_ProsecutorsID = ProsecutorsID \
								LEFT JOIN capcis.fxuseraccounts on prosecutorcorrespondance.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE prosecutors.ProsecutorsID = '"+myObject.data1+"' AND prosecutorcorrespondance.VoidedProsecutorCorrespondence = "+myObject.data2+" \
								ORDER BY 1 DESC"
						break;
				
				case 81: answer = 'SELECT *,DATE_FORMAT( bakprosecutors.CreatedDateTime, "%m/%d/%Y %h:%i:%s:%p") as CreatedDateTime FROM capcis.bakprosecutors \
								LEFT JOIN capcis.fxuseraccounts on bakprosecutors.FK_useraccounts_UserAccountsID = fxuseraccounts.FxUserAccountsID \
								WHERE FK_prosecutors_ProsecutorsID = "'+myObject.data1+'" \
								ORDER BY bakprosecutors.CreatedDateTime DESC';
						break;
				////////////////////////////////////////////////////////////////////////////////////End Prosecutors////////////////////////////////////////////////
				case 83: answer = "SELECT * FROM capcis.citylistings WHERE CityListing = '"+myObject.data1+"'";
						break;
				case 84: answer = "SELECT CourtJurisdiction FROM capcis.courtjurisdiction";
						break;
				case 85: answer = "SELECT * FROM capcis.pojurisdiction";
						break;
				case 86: answer = "SELECT count(*) as total,'assesor' as source FROM capcis.assessorinformation where assessorinformation.AssessorName LIKE '%"+myObject.data1+"%' or assessorinformation.AssessorPhone LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorEmail LIKE  '%"+myObject.data1+"%' OR assessorinformation.AssessorFax LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorInformationID LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorPhoneExt LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorMobilePhone LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorNotes LIKE '%"+myObject.data1+"%'\
								OR assessorinformation.AssessorFullNameDisplay LIKE '%"+myObject.data1+"%'";
						break;
				case 87: answer = "SELECT count(*) as total,'assesor' as source FROM capcis.assessorinformation where (assessorinformation.AssessorName LIKE '%"+myObject.data1+"%' or assessorinformation.AssessorPhone LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorEmail LIKE  '%"+myObject.data1+"%' OR assessorinformation.AssessorFax LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorInformationID LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorPhoneExt LIKE '%"+myObject.data1+"%' \
								OR assessorinformation.AssessorMobilePhone LIKE '%"+myObject.data1+"%' OR assessorinformation.AssessorNotes LIKE '%"+myObject.data1+"%'\
								OR assessorinformation.AssessorFullNameDisplay LIKE '%"+myObject.data1+"%') AND InactiveAssessorInfo = "+myObject.data2;   
						break;
				case 88 : answer = "SELECT count(*) as total,'attorney' as source  FROM capcis.attorneyinformation where attorneyinformation.AttorneyName LIKE '%"+myObject.data1+"%' or attorneyinformation.AttorneyPhone LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyEmail LIKE  '%"+myObject.data1+"%' OR attorneyinformation.AttorneyFax LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyInformationID LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyPhoneExt LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyAdditionalPhone LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyNotes LIKE '%"+myObject.data1+"%'\
								OR attorneyinformation.AttorneyFullNameDisplay LIKE '%"+myObject.data1+"%'";
						break;
				case 89 : answer = "SELECT count(*) as total,'attorney' as source  FROM capcis.attorneyinformation where (attorneyinformation.AttorneyName LIKE '%"+myObject.data1+"%' or attorneyinformation.AttorneyPhone LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyEmail LIKE  '%"+myObject.data1+"%' OR attorneyinformation.AttorneyFax LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyInformationID LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyPhoneExt LIKE '%"+myObject.data1+"%' \
								OR attorneyinformation.AttorneyAdditionalPhone LIKE '%"+myObject.data1+"%' OR attorneyinformation.AttorneyNotes LIKE '%"+myObject.data1+"%'\
								OR attorneyinformation.AttorneyFullNameDisplay LIKE '%"+myObject.data1+"%') AND InactiveAttorneyInfo = "+myObject.data2;
						break;
				case 90 : answer = "SELECT count(*) as total,'court' as source  FROM capcis.courtjurisdiction where courtjurisdiction.CourtJurisdiction LIKE '%"+myObject.data1+"%' or courtjurisdiction.CourtJurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionEmail LIKE  '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionFax LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionID LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionPhoneExt LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionAlternatePhone LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionNotes LIKE '%"+myObject.data1+"%' OR courtjurisdiction.SearchDatabase LIKE '%"+myObject.data1+"%'\
								OR courtjurisdiction.SearchFormat LIKE '%"+myObject.data1+"%'";
						break;
				case 91 : answer = "SELECT count(*) as total,'court' as source  FROM capcis.courtjurisdiction where (courtjurisdiction.CourtJurisdiction LIKE '%"+myObject.data1+"%' or courtjurisdiction.CourtJurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionEmail LIKE  '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionFax LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionID LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionPhoneExt LIKE '%"+myObject.data1+"%' \
								OR courtjurisdiction.CourtJurisdictionAlternatePhone LIKE '%"+myObject.data1+"%' OR courtjurisdiction.CourtJurisdictionNotes LIKE '%"+myObject.data1+"%' OR courtjurisdiction.SearchDatabase LIKE '%"+myObject.data1+"%'\
								OR courtjurisdiction.SearchFormat LIKE '%"+myObject.data1+"%') AND InactiveCourtJurisdictionInfo = "+myObject.data2;
						break;
				case 92 : answer = "SELECT count(*) as total,'dhs' as source  FROM capcis.dhsinformation where dhsinformation.DhsName LIKE '%"+myObject.data1+"%' or dhsinformation.DhsPhone LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsEmail LIKE  '%"+myObject.data1+"%' OR dhsinformation.DhsFax LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsInformationID LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsPhoneExt LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsAlternatPhone LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsNotes LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR dhsinformation.DhsPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 93 : answer = "SELECT count(*) as total,'dhs' as source  FROM capcis.dhsinformation where (dhsinformation.DhsName LIKE '%"+myObject.data1+"%' or dhsinformation.DhsPhone LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsEmail LIKE  '%"+myObject.data1+"%' OR dhsinformation.DhsFax LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsInformationID LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsPhoneExt LIKE '%"+myObject.data1+"%' \
								OR dhsinformation.DhsAlternatPhone LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsNotes LIKE '%"+myObject.data1+"%' OR dhsinformation.DhsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR dhsinformation.DhsPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveDhsInfo = "+myObject.data2;
						break;
				case 94 : answer = "SELECT count(*) as total,'judge' as source FROM capcis.judges where judges.Judge LIKE '%"+myObject.data1+"%' or judges.JudgeOfficePhone LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeEmail LIKE  '%"+myObject.data1+"%' OR judges.JudgeFax LIKE '%"+myObject.data1+"%' \
								OR judges.JudgesID LIKE '%"+myObject.data1+"%' OR judges.JudgeOfficePhoneExt LIKE '%"+myObject.data1+"%' OR judges.JudgeJurisdiction LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeMobilePhone LIKE '%"+myObject.data1+"%' OR judges.JudgeNotes LIKE '%"+myObject.data1+"%' OR judges.JudgeFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR judges.JPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 95 : answer = "SELECT count(*) as total,'judge' as source FROM capcis.judges where (judges.Judge LIKE '%"+myObject.data1+"%' or judges.JudgeOfficePhone LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeEmail LIKE  '%"+myObject.data1+"%' OR judges.JudgeFax LIKE '%"+myObject.data1+"%' \
								OR judges.JudgesID LIKE '%"+myObject.data1+"%' OR judges.JudgeOfficePhoneExt LIKE '%"+myObject.data1+"%' OR judges.JudgeJurisdiction LIKE '%"+myObject.data1+"%' \
								OR judges.JudgeMobilePhone LIKE '%"+myObject.data1+"%' OR judges.JudgeNotes LIKE '%"+myObject.data1+"%' OR judges.JudgeFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR judges.JPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveJudge = "+myObject.data2;
						break;
				case 96 : answer = "SELECT count(*) as total,'other' as source FROM capcis.othermonitors where othermonitors.OtherMonitors LIKE '%"+myObject.data1+"%' or othermonitors.OtherMonitorsOfficePhone LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsEmail LIKE  '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFax LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsID LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsOfficePhoneExt LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsJurisdiction LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsMobilePhone LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsNotes LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR othermonitors.OMPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 97 : answer = "SELECT count(*) as total,'other' as source FROM capcis.othermonitors where (othermonitors.OtherMonitors LIKE '%"+myObject.data1+"%' or othermonitors.OtherMonitorsOfficePhone LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsEmail LIKE  '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFax LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsID LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsOfficePhoneExt LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsJurisdiction LIKE '%"+myObject.data1+"%' \
								OR othermonitors.OtherMonitorsMobilePhone LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsNotes LIKE '%"+myObject.data1+"%' OR othermonitors.OtherMonitorsFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR othermonitors.OMPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveOtherMonitors = "+myObject.data2;
						break;
				case 98 : answer = "SELECT count(*) as total,'pojurisdiction' as source FROM capcis.pojurisdiction where pojurisdiction.JurisdictionName LIKE '%"+myObject.data1+"%' or pojurisdiction.JurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionFax LIKE '%"+myObject.data1+"%'  OR pojurisdiction.POJurisdictionID LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionNotes LIKE '%"+myObject.data1+"%'";
						break;
				case 99 : answer = "SELECT count(*) as total,'pojurisdiction' as source FROM capcis.pojurisdiction where (pojurisdiction.JurisdictionName LIKE '%"+myObject.data1+"%' or pojurisdiction.JurisdictionPhone LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionFax LIKE '%"+myObject.data1+"%' OR pojurisdiction.POJurisdictionID LIKE '%"+myObject.data1+"%' \
								OR pojurisdiction.JurisdictionNotes LIKE '%"+myObject.data1+"%') \
								 AND InactivePOJurisdiction = "+myObject.data2;
						break;
				case 100 : answer = "SELECT count(*) as total,'po' as source FROM capcis.poinformation LEFT JOIN pojurisdiction on FK_pojurisdiction_POJurisdictionID = POJurisdictionID where poinformation.POName LIKE '%"+myObject.data1+"%' or poinformation.POPhone LIKE '%"+myObject.data1+"%' \
								OR poinformation.POEmail LIKE  '%"+myObject.data1+"%' OR poinformation.POFax LIKE '%"+myObject.data1+"%' \
								OR poinformation.POInformationID LIKE '%"+myObject.data1+"%' OR poinformation.POPhoneExtension LIKE '%"+myObject.data1+"%'  \
								OR poinformation.POMobilePhone LIKE '%"+myObject.data1+"%' OR poinformation.PONotes LIKE '%"+myObject.data1+"%' OR poinformation.POFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR poinformation.POPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 101 : answer = "SELECT count(*) as total,'po' as source FROM capcis.poinformation LEFT JOIN pojurisdiction on FK_pojurisdiction_POJurisdictionID = POJurisdictionID where (poinformation.POName LIKE '%"+myObject.data1+"%' or poinformation.POPhone LIKE '%"+myObject.data1+"%' \
								OR poinformation.POEmail LIKE  '%"+myObject.data1+"%' OR poinformation.POFax LIKE '%"+myObject.data1+"%' \
								OR poinformation.POInformationID LIKE '%"+myObject.data1+"%' OR poinformation.POPhoneExtension LIKE '%"+myObject.data1+"%'  \
								OR poinformation.POMobilePhone LIKE '%"+myObject.data1+"%' OR poinformation.PONotes LIKE '%"+myObject.data1+"%' OR poinformation.POFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR poinformation.POPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactivePO = "+myObject.data2;
						break;
				case 102 : answer = "SELECT count(*) as total,'prosecutor' as source FROM capcis.prosecutors where prosecutors.Prosecutor LIKE '%"+myObject.data1+"%' or prosecutors.ProsecutorOfficePhone LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorEmail LIKE  '%"+myObject.data1+"%' OR prosecutors.ProsecutorFax LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorsID LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorOfficePhoneExt LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorJurisdiction LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorMobilePhone LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorNotes LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR prosecutors.ProsPreferredReportingMethod LIKE '%"+myObject.data1+"%'";
						break;
				case 103 : answer = "SELECT count(*) as total,'prosecutor' as source FROM capcis.prosecutors where (prosecutors.Prosecutor LIKE '%"+myObject.data1+"%' or prosecutors.ProsecutorOfficePhone LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorEmail LIKE  '%"+myObject.data1+"%' OR prosecutors.ProsecutorFax LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorsID LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorOfficePhoneExt LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorJurisdiction LIKE '%"+myObject.data1+"%' \
								OR prosecutors.ProsecutorMobilePhone LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorNotes LIKE '%"+myObject.data1+"%' OR prosecutors.ProsecutorFullNameDisplay LIKE '%"+myObject.data1+"%'\
								OR prosecutors.ProsPreferredReportingMethod LIKE '%"+myObject.data1+"%') AND InactiveProsecutor = "+myObject.data2;
						break;
				case 104 : answer = "SELECT AssessorInformationID from capcis.assessorinformation where randID = '"+myObject.randID+"'";
						break;				
				
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