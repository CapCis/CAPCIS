update capcis.clientcontact 
set ClientAdditionalPhone = 
replace(replace(replace(replace(ClientAdditionalPhone,' ', ''),'(', ''),')', ''),'-', '')