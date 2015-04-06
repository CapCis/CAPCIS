update capcis.prosecutors
set ProsecutorOfficePhone = 
replace(replace(replace(replace(ProsecutorOfficePhone,' ', ''),'(', ''),')', ''),'-', '')