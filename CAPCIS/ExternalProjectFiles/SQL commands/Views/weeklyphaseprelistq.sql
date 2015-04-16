CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `capcis`.`weeklyphaseprelistq` AS
    SELECT 
        `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID` AS `CR_ClientRequirementsID`,
        COUNT(`capcis`.`clientmonitoringdata`.`AttendedClass`) AS `WeeksClass`
    FROM
        `capcis`.`clientmonitoringdata`
    WHERE
        ((`capcis`.`clientmonitoringdata`.`AttendedClass` = 1)
            AND (`capcis`.`clientmonitoringdata`.`EntryDate` BETWEEN '2014/01/06' AND '2014/01/13')
            AND (`capcis`.`clientmonitoringdata`.`VoidEntry` = 0))
    GROUP BY `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID`