delimiter //
create procedure consective_unexcused(in id int(11), out total int(11))
begin
	declare noAtt tinyint(1);
    declare currentAttended tinyint(1);
    declare tempTotal int(11);
    
	declare theTable cursor for select AttendedClass from capcis.clientmonitoringdata as temp where temp.FK_clientrequirements_ClientRequirementsID = 1 and temp.VoidEntry = false order by EntryDate;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET noAtt = 0;
    open theTable;
    
    set noAtt = 1;
    set tempTotal = 0;
    
    while noAtt = 1 do
		fetch theTable into currentAttended;
        if currentAttended = 1 then
			set noAtt = 0;
		else
			set tempTotal = tempTotal + 1;
        end if;
    end while;
    
    close theTable;
    set total = tempTotal;
    
end //