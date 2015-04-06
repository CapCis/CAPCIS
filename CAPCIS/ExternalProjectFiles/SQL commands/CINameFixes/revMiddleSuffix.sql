update capcis.clientinformation 
set ClientFullNameReverse=concat(ClientLastName, ", ", ClientFirstName," " ,ClientMiddleName, " ", ClientNameSuffix)
where ClientMiddleName != "" and ClientNameSuffix != "";