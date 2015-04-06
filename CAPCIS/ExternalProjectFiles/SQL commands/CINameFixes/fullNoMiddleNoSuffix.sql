update capcis.clientinformation 
set ClientFullName=concat( ClientFirstName, " " ,ClientLastName) 
where ClientMiddleName = "" and ClientNameSuffix = "";