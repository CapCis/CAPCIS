update capcis.assessorinformation 
set AssessorFax = 
replace(replace(replace(replace(AssessorFax,' ', ''),'(', ''),')', ''),'-', '')