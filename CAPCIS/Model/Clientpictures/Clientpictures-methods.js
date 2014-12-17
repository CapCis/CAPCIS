

model.Clientpictures.methods.getclientpictures = function(methodResponse) {
	try
	{
		var serverUtil = require('serverUtilities');
		var connection = serverUtil.getDBConnection();
	}
	catch(err)
	{
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
	
	//try
	//{
		var dbQuery = 'SELECT ClientPictureID,ClientPicture FROM clientpicture WHERE ClientPictureID < 10';
		var result = connection.execute(dbQuery);	
		while (result.hasaNext())
		{
			var thisRow = result.getNextRow();
			var clientPic = ds.Clientpictures.createEntity();
			clientPic.ClientPictureID = thisRow.ClientPictureID;
			clientPic.ClientPicture = thisRow.ClientPicture;
			clientPic.save();		
		}
		connection.close();
		methodResponse = "success";
		return(methodResponse);
	//}
	//catch(err)
	//{
		var parsedErr = err.message.toString();
		return("error code 9002, picture error");
	//}
};
model.Clientpictures.methods.getclientpictures.scope = 'public';