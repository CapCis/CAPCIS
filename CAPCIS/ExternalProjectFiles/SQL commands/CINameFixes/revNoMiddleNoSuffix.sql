update capcis.clientinformation 
set ClientFullNameReverse=concat(ClientLastName, ", ", ClientFirstName)
where ClientMiddleName = "" and ClientNameSuffix = "";