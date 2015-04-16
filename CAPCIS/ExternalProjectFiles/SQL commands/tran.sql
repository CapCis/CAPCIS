update capcis.clientrequirements 
		join 
		( 	select clienttransaction.FK_clientrequirements_ClientRequirementsID,
			sum(clienttransaction.AmountPaid) as totalCount
			from capcis.clientmonitoringdata
			join capcis.clienttransaction
			on ClientMonitoringDataID = FK_clientmonitoring_ClientMonitoringDataID
			where VoidEntry = false
			and clienttransaction.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		) as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set IDEntryAmountPaid = totalCount
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
    
		update capcis.clientrequirements
		join 
		( 	select clienttransaction.FK_clientrequirements_ClientRequirementsID,
			sum(clienttransaction.AmountCharged) as totalCount
			from capcis.clientmonitoringdata
			join capcis.clienttransaction
			on ClientMonitoringDataID = FK_clientmonitoring_ClientMonitoringDataID
			where VoidEntry = false
			and clienttransaction.FK_clientrequirements_ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		)as mon
		on ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID
		set IDEntryAmountCharged = totalCount
        where ClientRequirementsID = new.FK_clientrequirements_ClientRequirementsID;
        