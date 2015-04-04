UPDATE capcis.clientinformation
SET ClientSSN = SUBSTRING(ClientSSN, 8, LENGTH(ClientSSN)) ;