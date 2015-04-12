CREATE TABLE clienttransaction LIKE capcis.clientmonitoringdata; 
INSERT clienttransaction SELECT * FROM capcis.clientmonitoringdata;