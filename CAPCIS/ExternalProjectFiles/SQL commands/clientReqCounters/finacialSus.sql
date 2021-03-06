update capcis.clientrequirements as req
join 
	( 	select FK_clientrequirements_ClientRequirementsID,
		count(*) as totalCount
		from capcis.clientmonitoringdata as temp
        where temp.Absence = "Fin Suspen"
		and temp.VoidEntry = false
        group by FK_clientrequirements_ClientRequirementsID
	) as mon
on ClientRequirementsID = FK_clientrequirements_ClientRequirementsID
set req.FinancialSuspensions = mon.totalCount