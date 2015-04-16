update capcis.assessorinformation 
set AssessorMobilePhone = 
replace(replace(replace(replace(AssessorMobilePhone,' ', ''),'(', ''),')', ''),'-', '')