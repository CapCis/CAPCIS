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
	
	var serverUtil = require('serverUtilities');
	var mytestfile = File("c:/Temp/test.jpg");
	myBufferTestFile = mytestfile.toBuffer();
	myBufferTestFile = myBufferTestFile.toString('hex');
	
	var pictureConnection = serverUtil.getDBConnectionCapcisClientPicture();
	//var dbquery = 'INSERT INTO clientpictures (ClientPicture,FK_ClientInformation_CIID,FK_UserAccountsID,InvalidClientPicture,PrimaryPicturePictureFileName) VALUES (x\''+myBufferTestFile+'\,' + CIID + ',' + userAccountID + ',0,' + primaryPicture + ',\'' + pictureFileName +'\)'; 	// Send the String to MySQL
	var dbquery = 'INSERT INTO clientpictures (PictureFileName,FK_ClientInformation_CIID,FK_UserAccountsID,InvalidClientPicture,PrimaryPicture,ClientPicture) VALUES (\'' + pictureFileName +'\','+ CIID +','+ userAccountID +',0,'+ primaryPicture +',x\''+myBufferTestFile+'\')'; 	// Send the String to MySQL
	
	//var myQueryLog = new TextStream("c:/Temp/querylog.txt","write",-2);
	//myQueryLog.write(dbquery);	
    //myQueryLog.close();
	//var dbquery = 'INSERT INTO clientpictures (ClientPicture) VALUES (x\''+myBufferTestFile+'\')'; 	// Send the String to MySQL
	
	var res = pictureConnection.execute(dbquery);
	pictureConnection.close();
	
	var dsreturn = ds.Clientpictures.getclientpictures(userToken,userAccountID,CIID,randIdentifier);   	//Run the method contained in the Wakanda Datastore
	
	return res;
	
	
	
};
