update capcis.clientinformation 
set ClientFullNameReverse=concat(ClientLastName, ", ", ClientFirstName," " ,ClientMiddleName)
where ClientMiddleName != "" and ClientNameSuffix = "";