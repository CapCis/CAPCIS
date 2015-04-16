SELECT ALL clientinformation.ClientFullNameReverse, ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix, ClientRequirementsID, clientrequirements.ClientStatus, Class, clientrequirements.Program, 
clientrequirements.ReportingStatus, EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, 
clientrequirements.ClientInformation_CIID, counterfinancialq.AmtPd, coalesce(AmtPd, 0) as TotalAmountPaid, counterfinancialq.AmtChrgd, coalesce(AmtChrgd, 0) as TotalAmountCharged, 
counterfinancialq.Currbal, coalesce(Currbal, 0)as CurrentBalence, counterattendedclassesq.AttendedCounter, concat(ClientLastName, ',', ClientFirstName, ' ', coalesce(ClientMiddleName, ','),' ', coalesce(ClientNameSuffix, ',')) as CoalescedName, 
concat(ClassesRequired, '|', (ClassesCredited + coalesce(AttendedCounter, 0))) as ClassesTotalView, 
concat(TwelveStepMeetingsRequired, '|',(TwelveStepMeetingsCredited + TwelveStepMeetingsAttended)) as TwelveStepMeetingView, testingflagactiveq.Flag, testingflagactiveq.Alert, 
testingflagactiveq.PC_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, 
testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassq.ClassItemPrice, classrosterimportclassq.ClassItemDesc, classrosterimportclassq.ClassIsClass, 
classrosterimportclassq.ClassItem, classrosterimportclassq.ClassIPLID,testingflagactiveq.FlagTestType, clientrequirements.FK_MonitoringCategoryID, if(StartDate <= now(), '', 'Pending') as PendingClient 
FROM capcis.clientrequirements INNER JOIN capcis.clientinformation ON clientrequirements.ClientInformation_CIID = CIID LEFT JOIN counterattendedclassesq ON 
ClientRequirementsID = counterattendedclassesq.CR_ClientRequirementsID LEFT JOIN counterfinancialq ON ClientRequirementsID = counterfinancialq.CR_ClientRequirementsID 
LEFT JOIN testingflagactiveq ON ClientRequirementsID = testingflagactiveq.CR_ClientRequirementsID AND  clientrequirements.FK_PriceCategoryID = testingflagactiveq.PC_PriceCategoryID 
LEFT JOIN classrosterimportclassq ON FK_PriceCategoryID = classrosterimportclassq.PC_PriceCategoryID 
GROUP BY ClientFullNameReverse, ClientLastName, ClientFirstName, ClientMiddleName, ClientNameSuffix, ClientRequirementsID, clientrequirements.ClientStatus, Class, clientrequirements.Program, clientrequirements.ReportingStatus, 
EnrollmentDate, StartDate, ReviewDate, DischargedDate, ClassesRequired, ClassesCredited, TwelveStepMeetingsRequired, TwelveStepMeetingsCredited, TwelveStepMeetingsAttended, 
clientrequirements.ClientInformation_CIID, counterfinancialq.AmtPd, counterfinancialq.AmtChrgd, counterfinancialq.Currbal, counterattendedclassesq.AttendedCounter, testingflagactiveq.Flag, testingflagactiveq.Alert, 
testingflagactiveq.PC_PriceCategoryID, testingflagactiveq.ItemPriceListID, testingflagactiveq.Flag_TT_TestingTypeID, testingflagactiveq.TestingFlagID,testingflagactiveq.ItemPrice, 
testingflagactiveq.Item, testingflagactiveq.IsClass, testingflagactiveq.ItemDescription, classrosterimportclassq.ClassItemPrice, classrosterimportclassq.ClassItemDesc, classrosterimportclassq.ClassIsClass, 
classrosterimportclassq.ClassItem, classrosterimportclassq.ClassIPLID,testingflagactiveq.FlagTestType, clientrequirements.FK_MonitoringCategoryID 
HAVING clientrequirements.ClientStatus = 'Active' AND Class = '"+myObject.data1+"' AND clientrequirements.FK_MonitoringCategoryID = 1 
ORDER BY ClientFullNameReverse ASC