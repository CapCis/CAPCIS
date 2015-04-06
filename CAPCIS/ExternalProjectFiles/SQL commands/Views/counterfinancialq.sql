CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `capcis`.`counterfinancialq` AS
    SELECT 
        `capcis`.`clientmonitoringdata`.`ClientInformation_CIID` AS `ClientInformation_CIID`,
        `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID` AS `CR_ClientRequirementsID`,
        SUM(`capcis`.`clientmonitoringdata`.`AmountCharged`) AS `AmtChrgd`,
        SUM(`capcis`.`clientmonitoringdata`.`AmountPaid`) AS `AmtPd`,
        SUM((`capcis`.`clientmonitoringdata`.`AmountCharged` - `capcis`.`clientmonitoringdata`.`AmountPaid`)) AS `Currbal`
    FROM
        `capcis`.`clientmonitoringdata`
    GROUP BY `capcis`.`clientmonitoringdata`.`ClientInformation_CIID` , `capcis`.`clientmonitoringdata`.`CR_ClientRequirementsID` , `capcis`.`clientmonitoringdata`.`VoidEntry`
    HAVING (`capcis`.`clientmonitoringdata`.`VoidEntry` = 0)