update capcis.bakassessorinformation 
set AssessorPhone = 
replace(replace(replace(replace(AssessorPhone,' ', ''),'(', ''),')', ''),'-', '')

