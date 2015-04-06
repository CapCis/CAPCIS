update capcis.prosecutors
set ProsecutorFax = 
replace(replace(replace(replace(ProsecutorFax,' ', ''),'(', ''),')', ''),'-', '')