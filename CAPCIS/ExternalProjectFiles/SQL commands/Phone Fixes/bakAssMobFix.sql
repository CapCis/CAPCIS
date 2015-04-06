update capcis.bakassessorinformation 
set AssessorMobilePhone = 
replace(replace(replace(replace(AssessorMobilePhone,' ', ''),'(', ''),')', ''),'-', '')

