delete from clientattendancemonitoring where (Absence is null or Absence = "")
and (ExcusedAbsenceReason is null or ExcusedAbsenceReason = "") and
(AbsenceNotes is null or AbsenceNotes = "") 
 