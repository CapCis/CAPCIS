

model.Clientpictures.methods.getclientpictures = function() {
	var serverUtil = require('serverUtilities');
	var connection = serverUtil.getDBConnection();
	
	var deleteOld = ds.Clientpictures.query("ClientPictureID < :1",10);
	deleteOld.remove();
	
	var dbQuery = 'SELECT ClientPictureID,ClientPicture FROM clientpicture WHERE ClientPictureID < 10';
	var result = connection.execute(dbQuery);	
	while (result.hasNext())
	{
		var thisRow = result.getNextRow();
		var clientPic = ds.Clientpictures.createEntity();
		clientPic.ClientPictureID = thisRow.ClientPictureID;
		clientPic.ClientPicture = thisRow.ClientPicture;
		clientPic.save();
		
	}
	connection.close();
};
model.Clientpictures.methods.getclientpictures.scope = 'public';