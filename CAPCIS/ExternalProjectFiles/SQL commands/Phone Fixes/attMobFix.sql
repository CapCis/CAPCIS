update capcis.attorneyinformation 
set AttorneyAdditionalPhone = 
replace(replace(replace(replace(AttorneyAdditionalPhone,' ', ''),'(', ''),')', ''),'-', '')
