update capcis.clientinformation 
set ClientFullName=concat( ClientFirstName," " ,ClientMiddleName, " " ,ClientLastName) 
where ClientMiddleName != "" and ClientNameSuffix = "";