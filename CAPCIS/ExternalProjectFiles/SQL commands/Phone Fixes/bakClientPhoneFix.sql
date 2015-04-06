update capcis.bakclientcontact 
set ClientPrimaryPhone = 
replace(replace(replace(replace(ClientPrimaryPhone,' ', ''),'(', ''),')', ''),'-', '')