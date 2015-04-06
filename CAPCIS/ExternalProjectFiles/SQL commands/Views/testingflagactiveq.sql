CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `testingflagactiveq` AS
    SELECT 
        `testingflag`.`TestingFlagID` AS `TestingFlagID`,
        `testingflag`.`CR_ClientRequirementsID` AS `CR_ClientRequirementsID`,
        `testingflag`.`Flag_TT_TestingTypeID` AS `Flag_TT_TestingTypeID`,
        `testingflag`.`Flag` AS `Flag`,
        `testingflag`.`Alert` AS `Alert`,
        `itempricelist`.`Item` AS `Item`,
        `itempricelist`.`ItemPrice` AS `ItemPrice`,
        `itempricelist`.`ItemPriceListID` AS `ItemPriceListID`,
        `itempriceconnector`.`PC_PriceCategoryID` AS `PC_PriceCategoryID`,
        `itempricelist`.`ItemDescription` AS `ItemDescription`,
        `itempricelist`.`IsClass` AS `IsClass`,
        `testingflag`.`FlagTestType` AS `FlagTestType`,
        `testingflag`.`TestingFlagRandID` AS `TestingFlagRandID`,
        `testingflag`.`FlagCreatedDateTime` AS `FlagCreatedDateTime`,
        `testingflag`.`UA_UserAccountsID` AS `UA_UserAccountsID`
    FROM
        ((`testingflag`
        LEFT JOIN `itempricelist` ON ((`testingflag`.`Flag_TT_TestingTypeID` = `itempricelist`.`TT_TestingTypeID`)))
        JOIN `itempriceconnector` ON ((`itempricelist`.`ItemPriceListID` = `itempriceconnector`.`IPL_ItemPriceListID`)))
    WHERE
        (((`testingflag`.`Flag` = 1)
            AND (`testingflag`.`Alert` = 0)
            AND (`itempricelist`.`ItemDiscontinued` = 0))
            OR ((`testingflag`.`Flag` = 1)
            AND ISNULL(`testingflag`.`Alert`)
            AND (`itempricelist`.`ItemDiscontinued` = 0)))