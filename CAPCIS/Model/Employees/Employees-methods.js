

model.Employees.methods.getEmployees = function(fristName) {
	var dbConnect = require('waf-sql');
	var param ={
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'test',
		port: 3306,
		SSL: false,
		dbType: 'mysql'
	};
	var connection = dbConnect.connect(param);
	var result = connection.execute('SELECT * FROM Employees');
	
	var myResult = result.getAllRows();
	return myResult;
	
};

model.Employees.methods.getEmployees.scope = 'public';

