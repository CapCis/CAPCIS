update capcis.clientinformation 
set ClientFullNameReverse=concat(ClientLastName, ", ", ClientFirstName, "  ", ClientNameSuffix)
where ClientMiddleName = "" and ClientNameSuffix != "";