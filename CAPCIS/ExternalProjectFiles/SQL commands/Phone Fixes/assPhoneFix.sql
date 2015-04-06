update capcis.assessorinformation 
set AssessorPhone = 
replace(replace(replace(replace(AssessorPhone,' ', ''),'(', ''),')', ''),'-', '')

