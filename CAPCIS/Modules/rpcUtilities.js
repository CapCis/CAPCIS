/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcUtilities' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcUtilities.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/

//include("./CAPCIS Solution/Directory.waDirectory");
exports.helloWorld = function helloWorld () {
	return ('Hello world');
	
};

exports.getHash = function getHash(user, pass)
{
	var test = user;
      var HA1 = directory.computeHA1(user, pass);
      return HA1;
};

exports.timMatrixData = function helloWorld () {
	
	var dbConnect = require('waf-sql');
	var param ={
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'capcis',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
	};
	var connection = dbConnect.connect(param);
	var result = connection.execute("SELECT WebComponentName,PrimaryHeaderOption FROM fxmainselectwebcomponentnames WHERE FxMainSelectWebComponentNamesID > 0");
	result = result.getAllRows();
	return (result);
	
};

