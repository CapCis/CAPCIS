update capcis.clientrequirements
		join 
		( 	select clienttestmonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join clienttestmonitoring
			on ClientMonitoringDataID = FK_clientmonitoringdata_ClientMonitoringDataID
			where clienttestmonitoring.TestingStatus = "Alert"
			and VoidEntry = false
			and (clienttestmonitoring.TestingResults is null 
			or clienttestmonitoring.TestingResults = "")
			and clienttestmonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set PendingTests = totalCount
		where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
    
		update capcis.clientrequirements
		join 
		( 	select clienttestmonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join clienttestmonitoring
			on ClientMonitoringDataID = FK_clientmonitoringdata_ClientMonitoringDataID
			where clienttestmonitoring.TestingResults  like "%Pos%"
			and VoidEntry = false
			and clienttestmonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set PositiveTests = totalCount
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
    
		update capcis.clientrequirements
		join 
		( 	select clienttestmonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join clienttestmonitoring
			on ClientMonitoringDataID = FK_clientmonitoringdata_ClientMonitoringDataID
			where clienttestmonitoring.TestingResults = "Negative"
			and VoidEntry = false
			and clienttestmonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		)as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set NegativeTests = totalCount
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
		
        update capcis.clientrequirements
		join 
		( 	select clienttestmonitoring.FK_clientrequirements_ClientRequirementsID,
			count(*) as totalCount
			from capcis.clientmonitoringdata
			join clienttestmonitoring
			on ClientMonitoringDataID = FK_clientmonitoringdata_ClientMonitoringDataID
			where clienttestmonitoring.TestingStatus = "Alert"
			and VoidEntry = false
			and clienttestmonitoring.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set SubmittedTests = totalCount
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
        
		