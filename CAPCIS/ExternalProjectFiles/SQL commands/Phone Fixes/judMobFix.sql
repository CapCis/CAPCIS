update capcis.judges
set JudgeMobilePhone = 
replace(replace(replace(replace(JudgeMobilePhone,' ', ''),'(', ''),')', ''),'-', '')