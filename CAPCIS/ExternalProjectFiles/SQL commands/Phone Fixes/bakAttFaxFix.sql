update capcis.bakattorneyinformation 
set AttorneyFax = 
replace(replace(replace(replace(AttorneyFax,' ', ''),'(', ''),')', ''),'-', '')
