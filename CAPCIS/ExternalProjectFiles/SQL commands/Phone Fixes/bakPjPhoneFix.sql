update capcis.bakpojurisdiction
set JurisdictionPhone = 
replace(replace(replace(replace(JurisdictionPhone,' ', ''),'(', ''),')', ''),'-', '')