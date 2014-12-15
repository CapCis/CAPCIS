

model.ClientPicture.methods.getMySQLPictures = function() {
	var serverUtil = require('serverUtilities');
	var connection = serverUtil.getDBConnection();
	
	var dbQuery = 'SELECT ClientPictureID,ClientPicture FROM clientpicture WHERE ClientPictureID < 10'
	var result = connection.execute(dbQuery);
	
	while (result.hasNext())
	{
		var thisRow = result.getNextRow();
		var clientPic = ds.ClientPicture.createEntity();
		clientPic.ClientPictureID = row.ClientPictureID;
		clientPic.ClientPicture = row.ClientPicture;
		clientPic.save();
		
	}
	
};
model.Clientpicture.methods.getMySQLPictures.scope = 'public';