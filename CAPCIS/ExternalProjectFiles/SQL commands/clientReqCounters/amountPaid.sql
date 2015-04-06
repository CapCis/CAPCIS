update capcis.clientrequirements as req
join 
	( 	select FK_clientrequirements_ClientRequirementsID,
		sum(AmountPaid) as totalCount
		from capcis.clientmonitoringdata as temp
        where temp.VoidEntry = false
        group by FK_clientrequirements_ClientRequirementsID
	) as mon
on ClientRequirementsID = FK_clientrequirements_ClientRequirementsID
set req.IDEntryAmountPaid = mon.totalCount