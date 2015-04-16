update capcis.clientrequirements
		join 
		( 	select clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join capcis.clientattendancemonitoring
			on ClientMonitoringDataID = FK_clientmonitoring_ClientMonitoringDataID
			where clientattendancemonitoring.AttendedClass = true
			and VoidEntry = false
			and clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set AttendedClass = totalCount
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
        
        
        update capcis.clientrequirements 
		set ClassesCompleted = ClassesCredited + AttendedClass
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
        
        update capcis.clientrequirements 
		set ClassesRemaining = remainingClasses(ClassesRequired, ClassesCompleted)
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
	
		update capcis.clientrequirements
		set ConsecUnexcusedAbsences = consective_unexcused(ClientRequirementsID)
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
		
		
        update capcis.clientrequirements
		join 
		( 	select clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join capcis.clientattendancemonitoring
			on ClientMonitoringDataID = FK_clientmonitoring_ClientMonitoringDataID
			where clientattendancemonitoring.Absence = "Fin Suspen"
			and VoidEntry = false
			and clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set FinancialSuspensions = totalCount
		where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
		
		
    
		update capcis.clientrequirements
		join 
		( 	select clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join capcis.clientattendancemonitoring
			on ClientMonitoringDataID = FK_clientmonitoring_ClientMonitoringDataID
			where clientattendancemonitoring.Absence = "Unexcused"
			and VoidEntry = false
			and clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on clientrequirements.ClientRequirementsID = mon.FK_clientrequirements_ClientRequirementsID
		set clientrequirements.TotalUnexcusedAbsences = mon.totalCount
        where clientrequirements.ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
    
		update capcis.clientrequirements
		join 
		( 	select clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join capcis.clientattendancemonitoring
			on ClientMonitoringDataID = FK_clientmonitoring_ClientMonitoringDataID
			where clientattendancemonitoring.Absence = "Excused"
			and VoidEntry = false
			and clientattendancemonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set ExcusedAbsences = totalCount
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
    