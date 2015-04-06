update capcis.attorneyinformation 
set AttorneyPhone = 
replace(replace(replace(replace(AttorneyPhone,' ', ''),'(', ''),')', ''),'-', '')
