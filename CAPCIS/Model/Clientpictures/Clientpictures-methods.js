

model.Clientpictures.methods.getclientpictures = function(userToken,userAccountID,CIID,randomID) {                        //methodResponse
	try
	{
		var serverUtil = require('serverUtilities'); 																//get connection to db			
		var connection = serverUtil.getDBConnectionCapcisClientPicture(); 																//open connection to db
	}
	catch(err)
	{
		connection.close();
		return("error code 9000, could not connect to database");
	}
	
	try
	{
		var deleteOld = ds.Clientpictures.query("ClientPictureID < :1",10); 										//get all records (entities) into deleteOld
		deleteOld.remove(); 																						//delete all records (entities) deleteOld represents
	}
	catch(err)
	{
		return("error code 9001, data error")
	}
	
	try
	{
		var dbQuery = 'SELECT ClientPicturesID,ClientPicture,FK_ClientInformation_CIID,FK_UserAccountsID,InvalidClientPicture,PrimaryPicture,PictureFileName FROM clientpictures WHERE FK_ClientInformation_CIID = '+ CIID; 		//build query for client pictures
		var result = connection.execute(dbQuery);	
		while (result.hasNext()) 																					//loop threw all records(entities)
		{
			var thisRow = result.getNextRow(); 																		//get next record
			var clientPic = ds.Clientpictures.createEntity(); 														//create the new record in clientPic
			clientPic.ClientPicturesID = thisRow.ClientPicturesID; 													
			clientPic.ClientPicture = thisRow.ClientPicture;
			clientPic.FK_ClientInformation_CIID = thisRow.FK_ClientInformation_CIID;
			clientPic.FK_UserAccountsID = thisRow.FK_UserAccountsID;
			clientPic.InvalidClientPicture = thisRow.InvalidClientPicture;
			clientPic.PrimaryPicture = thisRow.PrimaryPicture;
			clientPic.PictureFileName = thisRow.PictureFileName;
			clientPic.RandomID = randomID;
			clientPic.save();																						//save the reocrd to actual disk
		}
		connection.close();
		return("success");
	}
	catch(err)
	{
		var parsedErr = err.message.toString();
		return("error code 9002, picture error");
	}
};
model.Clientpictures.methods.getclientpictures.scope = 'public';

model.Clientpictures.methods.sendFIleAsHttpRequest = function() {
	var serverUtil = require('serverUtilities'); 																//get connection to db			
	var connection = serverUtil.getDBConnectionCapcisClientPicture(); 
	var dbQuery = 'SELECT ClientPicturesID,ClientPicture,FK_ClientInformation_CIID,FK_UserAccountsID,InvalidClientPicture,PrimaryPicture,PictureFileName FROM clientpictures WHERE FK_ClientInformation_CIID = '+ CIID; 		//build query for client pictures
	var result = connection.execute(dbQuery);
	var thisRow = result.getNextRow();
	
	
		
		
};
model.Clientpictures.methods.sendFIleAsHttpRequest.scope = 'public';