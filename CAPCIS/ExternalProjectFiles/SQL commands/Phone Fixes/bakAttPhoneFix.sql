update capcis.bakattorneyinformation 
set AttorneyPhone = 
replace(replace(replace(replace(AttorneyPhone,' ', ''),'(', ''),')', ''),'-', '')

