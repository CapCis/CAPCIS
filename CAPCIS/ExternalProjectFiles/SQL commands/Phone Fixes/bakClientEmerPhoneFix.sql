update capcis.bakclientemergencycontact 
set EmergencyContactPhone = 
replace(replace(replace(replace(EmergencyContactPhone,' ', ''),'(', ''),')', ''),'-', '')