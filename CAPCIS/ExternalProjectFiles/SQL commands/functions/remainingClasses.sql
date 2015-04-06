CREATE DEFINER=`teamcapcis2`@`%` FUNCTION `remainingClasses`(req integer, com integer) RETURNS int(11)
BEGIN

	declare anwser integer;
    set anwser = req - com;
    if anwser < 0 then
		set anwser = 0;
    end if;

RETURN anwser;
END