CREATE DEFINER=`teamcapcis2`@`%` FUNCTION `consective_unexcused`(id int(11)) RETURNS int(11)
begin
	declare noAtt tinyint(1);
    declare my_AttendedClass tinyint(1);
    declare my_Absence varchar(255);
    declare tempTotal int(11);
    
	declare theTable cursor for select Absence, AttendedClass from capcis.clientmonitoringdata where FK_clientrequirements_ClientRequirementsID = id and VoidEntry = false order by EntryDate DESC;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET noAtt = 0;
    open theTable;
    
    set noAtt = 1;
    set tempTotal = 0;
    
    while noAtt = 1 do
		fetch theTable into my_Absence, my_AttendedClass;
        if my_Absence = "Unexcused"  then
			if my_AttendedClass = 0 then
				set tempTotal = tempTotal + 1;
			end if;
		end if;
		if my_AttendedClass = 1 then
			set noAtt = 0;
        end if;
        
    end while;
    
    
    close theTable;
    
    return tempTotal;
    
end