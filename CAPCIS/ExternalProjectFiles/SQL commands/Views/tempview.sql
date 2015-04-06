CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `tempview` AS
    SELECT 
        `clientcourtinformation`.`MasterCCIID` AS `CCIDMain`,
        `clientcourtinformation`.`ClientCourtInformationID` AS `CCIDSub`,
        `clientcourtinformation`.`ClientInformation_CIID` AS `FK_ClientInformationID`
    FROM
        `clientcourtinformation`
    WHERE
        ((`clientcourtinformation`.`MasterCCIID` IS NOT NULL)
            AND (`clientcourtinformation`.`MasterCCIID` <> `clientcourtinformation`.`ClientCourtInformationID`))