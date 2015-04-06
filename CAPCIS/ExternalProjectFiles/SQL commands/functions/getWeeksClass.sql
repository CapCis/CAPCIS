CREATE DEFINER=`teamcapcis2`@`%` FUNCTION `getWeeksClass`(sDate date, lDate date, ID integer) RETURNS int(11)
BEGIN
	declare weeksClass integer;
	select count(attendedclass) into weeksClass
    from capcis.ClientMonitoringData
    where CR_ClientRequirementsID = ID and attendedclass =1 and entrydate between sDate and lDate and voidEntry = 0;
    

RETURN weeksClass;
END