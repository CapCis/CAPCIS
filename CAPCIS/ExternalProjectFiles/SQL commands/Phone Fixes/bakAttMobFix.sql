update capcis.bakattorneyinformation 
set AttorneyAdditionalPhone = 
replace(replace(replace(replace(AttorneyAdditionalPhone,' ', ''),'(', ''),')', ''),'-', '')
