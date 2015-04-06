update capcis.bakpojurisdiction
set JurisdictionFax = 
replace(replace(replace(replace(JurisdictionFax,' ', ''),'(', ''),')', ''),'-', '')