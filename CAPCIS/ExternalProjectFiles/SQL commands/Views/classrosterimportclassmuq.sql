CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `classrosterimportclassmuq` AS
    SELECT 
        `itempriceconnector`.`ItemPriceConnectorID` AS `ItemPriceConnectorID`,
        `itempriceconnector`.`PC_PriceCategoryID` AS `PC_PriceCategoryID`,
        `itempricelist`.`ItemPriceListID` AS `ClassIPLID`,
        `itempricelist`.`Item` AS `ClassItem`,
        `itempricelist`.`ItemPrice` AS `ClassItemPrice`,
        `itempricelist`.`ItemDescription` AS `ClassItemDesc`,
        `itempricelist`.`IsClass` AS `ClassIsClass`
    FROM
        (`itempriceconnector`
        LEFT JOIN `itempricelist` ON ((`itempriceconnector`.`IPL_ItemPriceListID` = `itempricelist`.`ItemPriceListID`)))
    WHERE
        (`itempricelist`.`Item` LIKE '%Class - MU%')