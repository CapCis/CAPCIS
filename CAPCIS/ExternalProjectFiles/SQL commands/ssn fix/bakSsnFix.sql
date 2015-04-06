
UPDATE capcis.bakclientinformation
SET ClientSSN = SUBSTRING(ClientSSN, 8, LENGTH(ClientSSN)) ;