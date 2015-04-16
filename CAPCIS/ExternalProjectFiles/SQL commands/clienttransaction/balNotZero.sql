select a.ClientInformation_CIID,a.IDEntryAmountPaid, a.IDEntryAmountCharged
, (IDEntryAmountPaid - IDEntryAmountCharged) as total
from clientrequirements as a right join(
			select ClientInformation_CIID
            from clientrequirements
            group by ClientInformation_CIID
			having count(*) > 1
		) as b
        on a.ClientInformation_CIID = b.ClientInformation_CIID
where (IDEntryAmountCharged - IDEntryAmountPaid) != 0
	and InactiveClientRequirements = false

