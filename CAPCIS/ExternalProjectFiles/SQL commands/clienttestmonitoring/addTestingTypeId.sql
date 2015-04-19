update clienttestmonitoring
join testingtype 
on testingtype.TestingType = clienttestmonitoring.TestingTypePerformed
set FK_testingttype_TestingTypeID = TestingTypeID
        