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
