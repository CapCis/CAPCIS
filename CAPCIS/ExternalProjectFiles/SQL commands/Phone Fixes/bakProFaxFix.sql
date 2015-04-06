update capcis.bakprosecutors
set ProsecutorFax = 
replace(replace(replace(replace(ProsecutorFax,' ', ''),'(', ''),')', ''),'-', '')