update capcis.judges
set JudgeFax = 
replace(replace(replace(replace(JudgeFax,' ', ''),'(', ''),')', ''),'-', '')