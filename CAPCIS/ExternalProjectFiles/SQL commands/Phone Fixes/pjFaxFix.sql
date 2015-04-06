update capcis.pojurisdiction
set JurisdictionFax = 
replace(replace(replace(replace(JurisdictionFax,' ', ''),'(', ''),')', ''),'-', '')