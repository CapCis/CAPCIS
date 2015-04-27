delete from clienttestmonitoring where (TestingStatus is null or TestingStatus = "")
and (TestingResults is null or TestingResults = "") and
(TestingTypePerformed is null or TestingTypePerformed = "") and
(TestingResultsNotes is null or TestingResultsNotes ="") 