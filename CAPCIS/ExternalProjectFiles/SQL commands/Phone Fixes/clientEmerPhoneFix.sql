update capcis.clientemergencycontact 
set EmergencyContactPhone = 
replace(replace(replace(replace(EmergencyContactPhone,' ', ''),'(', ''),')', ''),'-', '')