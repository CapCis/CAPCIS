update capcis.judges
set JudgeOfficePhone = 
replace(replace(replace(replace(JudgeOfficePhone,' ', ''),'(', ''),')', ''),'-', '')
