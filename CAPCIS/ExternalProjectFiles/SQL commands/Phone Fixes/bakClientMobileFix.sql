update capcis.bakclientcontact 
set ClientAdditionalPhone = 
replace(replace(replace(replace(ClientAdditionalPhone,' ', ''),'(', ''),')', ''),'-', '')