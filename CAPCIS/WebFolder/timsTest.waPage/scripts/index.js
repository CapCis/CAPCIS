
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;
		var myResponse = ds.Clientpictures.getclientpictures(
			{
				onSuccess: handleOnReturnSuccess,
				onError: handleOnReturnError
			});
		
		function handleOnReturnSuccess(event)
			{
				if (event.result == "success") 
				{
					source.clientpictures.orderBy("ClientPicturesID desc");
				}
				else
				{
					alert(event.result);	
				}
				
			}
		function handleOnReturnError(event)
			{
				var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);			
			};
		//sources.clientpictures.all();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
