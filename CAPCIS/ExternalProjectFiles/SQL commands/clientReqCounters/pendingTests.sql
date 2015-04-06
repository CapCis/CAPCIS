update capcis.clientrequirements as req
join 
	( 	select FK_clientrequirements_ClientRequirementsID,
		count(*) as totalCount
		from capcis.clientmonitoringdata as temp
        where temp.TestingStatus = "Alert"
		and temp.VoidEntry = false
        and (temp.TestingResults is null 
        or temp.TestingResults = "")
        group by FK_clientrequirements_ClientRequirementsID
	) as mon
on ClientRequirementsID = FK_clientrequirements_ClientRequirementsID
set req.PendingTests = mon.totalCount