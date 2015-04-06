CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `activeschedulemuclassesq` AS
    SELECT 
        `scheduledmuclasses`.`ScheduledMUClassesID` AS `ScheduledMUClassesID`,
        `scheduledmuclasses`.`CreatedDateTime` AS `CreatedDateTIme`,
        `scheduledmuclasses`.`UA_UserAccountsID` AS `UA_UserAccountsID`,
        `scheduledmuclasses`.`CR_ClientRequirementsID` AS `CR_ClientRequirementsID`,
        `scheduledmuclasses`.`ClientInformation_CIID` AS `ClientInformation_CIID`,
        `scheduledmuclasses`.`ClientIDEntry` AS `ClientIDEntry`,
        `scheduledmuclasses`.`MUDate` AS `MUDate`,
        `scheduledmuclasses`.`MUClass` AS `MUClass`,
        `scheduledmuclasses`.`RecurringMU` AS `RecurringMU`,
        `scheduledmuclasses`.`VoidedMUClass` AS `VoidedMUClass`
    FROM
        `scheduledmuclasses`
    WHERE
        (`scheduledmuclasses`.`VoidedMUClass` <> 1)