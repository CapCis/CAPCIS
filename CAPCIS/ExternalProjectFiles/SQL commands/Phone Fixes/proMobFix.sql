update capcis.prosecutors
set ProsecutorMobilePhone = 
replace(replace(replace(replace(ProsecutorMobilePhone,' ', ''),'(', ''),')', ''),'-', '')