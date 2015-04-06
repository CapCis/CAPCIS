update capcis.clientinformation 
set ClientFullName=concat( ClientFirstName, " " ,ClientLastName, ", ", ClientNameSuffix) 
where ClientMiddleName = "" and ClientNameSuffix != "";