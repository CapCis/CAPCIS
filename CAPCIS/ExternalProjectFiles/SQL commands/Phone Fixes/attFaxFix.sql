update capcis.attorneyinformation 
set AttorneyFax = 
replace(replace(replace(replace(AttorneyFax,' ', ''),'(', ''),')', ''),'-', '')
