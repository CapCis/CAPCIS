update capcis.clientinformation  as req
join 
	( 	select clienttransaction.ClientInformation_CIID,
		sum(clienttransaction.AmountCharged) as totalCount
		from capcis.clientmonitoringdata as temp
        join capcis.clienttransaction
		on ClientMonitoringDataID = FK_clientmonitoring_ClientMonitoringDataID
        where temp.VoidEntry = false
        group by clienttransaction.ClientInformation_CIID
	) as mon
on req.ClientInformation_CIID  = mon.ClientInformation_CIID
set req.TotalCharged = mon.totalCount