update capcis.clientcontact 
set ClientPrimaryPhone = 
replace(replace(replace(replace(ClientPrimaryPhone,' ', ''),'(', ''),')', ''),'-', '')