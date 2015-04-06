CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `activeclientrequirementsq` AS
    SELECT 
        `clientrequirements`.`ClientRequirementsID` AS `ClientRequirementsID`,
        `clientrequirements`.`ClientInformation_CIID` AS `ClientInformation_CIID`,
        `clientrequirements`.`ClientIDEntry` AS `ClientIDEntry`,
        `clientrequirements`.`ClientStatus` AS `ClientStatus`,
        `clientrequirements`.`Class` AS `Class`,
        `clientrequirements`.`Program` AS `Program`,
        `clientrequirements`.`ReportingStatus` AS `ReportingStatus`,
        `clientrequirements`.`EnrollmentDate` AS `EnrollmentDate`,
        `clientrequirements`.`StartDate` AS `StartDate`,
        `clientrequirements`.`ReviewDate` AS `ReviewDate`,
        `clientrequirements`.`DischargedDate` AS `DischargedDate`,
        `clientrequirements`.`ClassesRequired` AS `ClassesRequired`,
        `clientrequirements`.`ClassesCredited` AS `ClassesCredited`,
        `clientrequirements`.`TwelveStepMeetingsRequired` AS `TwelveStepMeetingsRequired`,
        `clientrequirements`.`TwelveStepMeetingsAttended` AS `TwelveStepMeetingsAttended`,
        `clientrequirements`.`TwelveStepMeetingsCredited` AS `TwelveStepMeetingsCredited`,
        `clientrequirements`.`MasterCRID` AS `MasterCRID`,
        `clientrequirements`.`CCI_ClientCourtInformationID` AS `CCI_ClientCourtInformationID`,
        `clientrequirements`.`FK_MonitoringCategoryID` AS `FK_MonitoringCategoryID`,
        `clientrequirements`.`FK_PriceCategoryID` AS `FK_PriceCategoryID`,
        `clientrequirements`.`InputBy` AS `InputBy`,
        `clientrequirements`.`EnrollledBy` AS `EnrollledBy`,
        `clientrequirements`.`CheckedBy` AS `CheckedBy`
    FROM
        `clientrequirements`
    WHERE
        (`clientrequirements`.`ClientStatus` = 'ACTIVE')