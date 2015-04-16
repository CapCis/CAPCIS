update capcis.bakprosecutors
set ProsecutorOfficePhone = 
replace(replace(replace(replace(ProsecutorOfficePhone,' ', ''),'(', ''),')', ''),'-', '')