update capcis.clientinformation 
set ClientFullName=concat( ClientFirstName," " ,ClientMiddleName, " " ,ClientLastName, ", ", ClientNameSuffix) 
where ClientMiddleName != "" and ClientNameSuffix != "";