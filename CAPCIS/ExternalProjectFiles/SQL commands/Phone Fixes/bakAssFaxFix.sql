update capcis.bakassessorinformation 
set AssessorFax = 
replace(replace(replace(replace(AssessorFax,' ', ''),'(', ''),')', ''),'-', '')

