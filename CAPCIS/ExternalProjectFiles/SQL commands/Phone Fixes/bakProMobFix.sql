update capcis.bakprosecutors
set ProsecutorMobilePhone = 
replace(replace(replace(replace(ProsecutorMobilePhone,' ', ''),'(', ''),')', ''),'-', '')