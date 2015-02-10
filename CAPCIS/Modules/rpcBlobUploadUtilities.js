/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcBlobUploadUtilities' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcBlobUploadUtilities.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.clientPictureUpload = function clientPictureUpload (userToken,userAccountID,CIID,primaryPicture,pictureFileName,randIdentifier) {
	
	//OLD WAY
	//var mypicfile = BinaryStream('c:/Temp/test.jpg','Read');				// Create a Binary Stream from file on Disk
	//var mybinstreamsize = mypicfile.getSize(); 								// Get the size of the file in bytes
	//var bintobuffer = mypicfile.getBuffer(mybinstreamsize); 				// Convert the Binary Stream to a Buffer for processing
	//var buffertoutf8 = bintobuffer.toString('hex'); 						// Put the new Binary Buffer into a String
	
	
	var mytestfile = File("c:/Temp/test.jpg");
	myBufferTestFile = mytestfile.toBuffer();
	myBufferTestFile = myBufferTestFile.toString('hex');
	
	var pictureConnect = require('waf-sql');
	var param ={
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'capcisclientpictures',
		port: 3306,
		ssl: false,
		dbType: 'mysql'	
	};
	
	var pictureConnection = pictureConnect.connect(param);
	
	var dbquery = 'INSERT INTO clientpictures (ClientPicture) VALUES (x\''+myBufferTestFile+'\')'; 	// Send the String to MySQL
	//var dbquery = 'INSERT INTO clientpictures (ClientPicture) VALUES (x\''+buffertoutf8+'\')'; 	// Send the String to MySQL
	
	var res = pictureConnection.execute(dbquery);             	
	pictureConnection.close();
	
	var dsreturn = ds.Clientpictures.getclientpictures();   	//Run the method contained in the Wakanda Datastore
	
	return res;
	
	
	
};
