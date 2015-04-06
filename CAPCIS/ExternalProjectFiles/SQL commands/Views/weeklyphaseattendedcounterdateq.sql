CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `capcis`.`weeklyphaseattendedcounterdateq` AS
    SELECT 
        `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID` AS `CR_ClientRequirementsID`,
        COUNT(`capcis`.`clientmonitoringdata`.`AttendedClass`) AS `AttendedCounter`
    FROM
        `capcis`.`clientmonitoringdata`
    WHERE
        ((`capcis`.`clientmonitoringdata`.`VoidEntry` = 0)
            AND (`capcis`.`clientmonitoringdata`.`EntryDate` <= '2014/01/13'))
    GROUP BY `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID` , `capcis`.`clientmonitoringdata`.`ClientInformation_CIID` , `capcis`.`clientmonitoringdata`.`AttendedClass`
    HAVING (`capcis`.`clientmonitoringdata`.`AttendedClass` = 1)