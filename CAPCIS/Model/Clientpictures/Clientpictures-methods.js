

model.Clientpictures.methods.getclientpictures = function(methodResponse) {
	try
	{
		var serverUtil = require('serverUtilities'); 																//get connection to db			
		var connection = serverUtil.getDBConnection(); 																//open connection to db
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
		var dbQuery = 'SELECT ClientPictureID,ClientPicture FROM clientpicture WHERE ClientPictureID < 10'; 		//build query for client pictures
		var result = connection.execute(dbQuery);	
		while (result.hasNext()) 																					//loop threw all records(entities)
		{
			var thisRow = result.getNextRow(); 																		//get next record
			var clientPic = ds.Clientpictures.createEntity(); 														//create the new record in clientPic
			clientPic.ClientPictureID = thisRow.ClientPictureID; 													
			clientPic.ClientPicture = thisRow.ClientPicture;
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