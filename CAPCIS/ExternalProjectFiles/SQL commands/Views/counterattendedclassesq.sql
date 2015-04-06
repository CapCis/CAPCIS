CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `capcis`.`counterattendedclassesq` AS
    SELECT 
        `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID` AS `CR_ClientRequirementsID`,
        `capcis`.`clientmonitoringdata`.`ClientInformation_CIID` AS `ClientInformation_CIID`,
        COUNT(`capcis`.`clientmonitoringdata`.`AttendedClass`) AS `AttendedCounter`
    FROM
        `capcis`.`clientmonitoringdata`
    GROUP BY `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID` , `capcis`.`clientmonitoringdata`.`ClientInformation_CIID` , `capcis`.`clientmonitoringdata`.`AttendedClass` , `capcis`.`clientmonitoringdata`.`VoidEntry`
    HAVING ((`capcis`.`clientmonitoringdata`.`AttendedClass` = 1)
        AND (`capcis`.`clientmonitoringdata`.`VoidEntry` = 0))