/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('dViewQuery').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
exports.buildQuery = function buildQuery(myObject)
{
	var answer; 
	switch(myObject.major){
		case 0: //utilities
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
		case 1:		//weekly monitoring	
			break;
		case 2: //classes
			switch(myObject.minor){
				case 0: answer = 'create or replace view capcis.CounterAttendedClassesQ(CR_ClientRequirementsID, ClientInformation_CIID, AttendedCounter) as \
								SELECT ALL capcis.clientmonitoringdata.CR_ClientRequirementsID, capcis.clientmonitoringdata.ClientInformation_CIID, count(AttendedClass) as AttendedCounter \
								FROM capcis.clientmonitoringdata \
								GROUP BY clientmonitoringdata.CR_ClientRequirementsID, clientmonitoringdata.ClientInformation_CIID, clientmonitoringdata.AttendedClass, clientmonitoringdata.VoidEntry \
								HAVING AttendedClass = 1 and VoidEntry = 0';
						break;
				case 1:answer = 'create or replace view capcis.CounterFinancialQ(ClientInformation_CIID, CR_ClientRequirementsID, AmtChrgd, AmtPd, Currbal) as \
								SELECT ALL ClientInformation_CIID, CR_ClientRequirementsID, sum(amountcharged) as AmtChrgd, sum(amountpaid) as AmtPd, sum((amountcharged - amountpaid)) as CurrBal \
								FROM capcis.clientmonitoringdata \
								GROUP BY ClientInformation_CIID, CR_ClientRequirementsID, VoidEntry \
								HAVING VoidEntry = 0';
						break;
				case 2: answer = 'create or replace view capcis.ClassRosterImportClassQ(ItemsPriceConnectorID, PC_PriceCategoryID, ClassIPLID, ClassItem, ClassItemPrice, ClassItemDesc, ClassIsClass) as \
								SELECT ALL ItemPriceConnectorID, PC_PriceCategoryID,ItemPriceListID as ClassIPLID, ItemPriceListID as ClassItem, ItemPrice as ClassItemPrice, ItemDescription as ClassItemDesc, IsClass as ClassIsClass \
								FROM capcis.itempriceconnector LEFT JOIN capcis.itempricelist on IPL_ItemPriceListID = ItemPriceListID \
								WHERE Item LIKE "%Class - Reg%"';
				case 3: answer = 'create or replace view capcis.TestingFlagActiveQ(TestingFlagID, CR_ClientRequirementsID, Flag_TT_TestingTypeID, Flag, Alert, Item, ItemPrice, ItemPriceListID, \
								PC_PriceCategoryID, ItemDescription, IsClass, FlagTestType, TestingFlagRandID, FlagCreatedDateTime, UA_UserAccountsID) as \
								SELECT ALL TestingFlagID, CR_ClientRequirementsID, Flag_TT_TestingTypeID, Flag , Alert , Item, ItemPrice, ItemPriceListID, PC_PriceCategoryID, \
								ItemDescription, IsClass, FlagTestType, TestingFlagRandID, FlagCreatedDateTime, UA_UserAccountsID \
								FROM capcis.testingflag LEFT JOIN capcis.itempricelist on Flag_TT_TestingTypeID = TT_TestingTypeID INNER JOIN itempriceconnector ON ItemPriceListID = IPL_ItemPriceListID \
								WHERE (Flag = 1 AND Alert = 0 AND ItemDiscontinued = 0) OR (Flag = 1 AND Alert IS NULL AND ItemDiscontinued = 0)';
				case 4: answer = 'create or replace view ActiveClientRequirementsQ(ClientRequirementsID, ClientInformation_CIID, ClientIDEntry, ClientStatus, Class, Program, ReportingStatus, \
								EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsAttended,TwelveStepMeetingsCredited, \
								MasterCRID, CCI_ClientCourtInformationID, ClientRequirementNotes, FK_MonitoringCategoryID, FK_PriceCategoryID, InputBy, EnrollledBy, CheckedBy) as \
								SELECT ALL ClientRequirementsID, ClientInformation_CIID, ClientIDEntry, clientrequirements.ClientStatus, Class, Program, clientrequirements.ReportingStatus, \
								EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsAttended,TwelveStepMeetingsCredited, \
								MasterCRID, CCI_ClientCourtInformationID, ClientRequirementNotes, FK_MonitoringCategoryID, FK_PriceCategoryID, InputBy, clientrequirements.EnrollledBy, CheckedBy \
								FROM capcis.clientrequirements \
								WHERE clientrequirements.ClientStatus = "ACTIVE"';
				case 5: answer = 'create or replace view ClassRosterImportClassMUQ(ItemPriceConnectorID, PC_PriceCategoryID, ClassIPLID, ClassItem,ClassItemPrice, ClassItemDesc, ClassIsClass) as \
								SELECT ALL ItemPriceConnectorID, PC_PriceCategoryID, ItemPriceListID as ClassIPLID, Item as ClassItem, ItemPrice as ClassItemPrice, ItemDescription as ClassItemDesc, IsClass as ClassIsClass \
								FROM capcis.itempriceconnector LEFT JOIN capcis.itempricelist on IPL_ItemPriceListID = ItemPriceListID \
								WHERE Item LIKE "%Class - MU%"';
				default:
					answer = null;
			}
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