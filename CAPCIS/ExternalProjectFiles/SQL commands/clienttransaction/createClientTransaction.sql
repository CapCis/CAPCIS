update capcis.clienttransaction as a
join (select FK_receiptnumbers_ReceiptNumbersID,
	AmountCharged, AmountPaid
	from capcis.clientmonitoringdata
    where FK_receiptnumbers_ReceiptNumbersID is not null)as b
on  a.FK_receiptnumbers_ReceiptNumbersID = b.FK_receiptnumbers_ReceiptNumbersID
set a.AmountCharged = b.AmountCharged;

update capcis.clienttransaction as a
join (select FK_receiptnumbers_ReceiptNumbersID,
	AmountCharged, AmountPaid
	from capcis.clientmonitoringdata
    where FK_receiptnumbers_ReceiptNumbersID is not null)as b
on  a.FK_receiptnumbers_ReceiptNumbersID = b.FK_receiptnumbers_ReceiptNumbersID
set a.AmountPaid = b.AmountPaid;

update capcis.clienttransaction as a
join (select *
	from capcis.clientmonitoringdata
    where FK_receiptnumbers_ReceiptNumbersID is not null)as b
on  a.FK_receiptnumbers_ReceiptNumbersID = b.FK_receiptnumbers_ReceiptNumbersID
set a.ClientInformation_CIID = b.ClientInformation_CIID;

update capcis.clienttransaction as a
join (select *
	from capcis.clientmonitoringdata
    where FK_receiptnumbers_ReceiptNumbersID is not null)as b
on  a.FK_receiptnumbers_ReceiptNumbersID = b.FK_receiptnumbers_ReceiptNumbersID
set a.FK_clientrequirements_ClientRequirementsID = b.FK_clientrequirements_ClientRequirementsID;

update capcis.clienttransaction as a
join (select *
	from capcis.clientmonitoringdata
    where FK_receiptnumbers_ReceiptNumbersID is not null)as b
on  a.FK_receiptnumbers_ReceiptNumbersID = b.FK_receiptnumbers_ReceiptNumbersID
set a.FK_clientmonitoring_ClientMonitoringDataID = b.ClientMonitoringDataID;