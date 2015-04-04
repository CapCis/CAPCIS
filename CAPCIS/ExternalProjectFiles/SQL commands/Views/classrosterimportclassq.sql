CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `teamcapcis2`@`%` 
    SQL SECURITY DEFINER
VIEW `classrosterimportclassq` AS
    SELECT 
        `itempriceconnector`.`ItemPriceConnectorID` AS `ItemsPriceConnectorID`,
        `itempriceconnector`.`PC_PriceCategoryID` AS `PC_PriceCategoryID`,
        `itempricelist`.`ItemPriceListID` AS `ClassIPLID`,
        `itempricelist`.`ItemPriceListID` AS `ClassItem`,
        `itempricelist`.`ItemPrice` AS `ClassItemPrice`,
        `itempricelist`.`ItemDescription` AS `ClassItemDesc`,
        `itempricelist`.`IsClass` AS `ClassIsClass`
    FROM
        (`itempriceconnector`
        LEFT JOIN `itempricelist` ON ((`itempriceconnector`.`IPL_ItemPriceListID` = `itempricelist`.`ItemPriceListID`)))
    WHERE
        (`itempricelist`.`Item` LIKE '%Class - Reg%')