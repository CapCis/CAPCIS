
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var test = $$("clone-button3-0-0");
		var test = this.id;
		//var test = $$("matrix1").getDisplayedRow();
		var z = $$("matrix1").getCurrentPage();
		alert($$("richText1"));
		x = $$("richText1").getValue();
		alert(myrecord = getMatrixRecord(test));
		
		
		function getMatrixRecord(clickedRecord)
		{
			var x = 0;
			var y = 0;
			var r = "";
			clickedRecord = clickedRecord.replace("clone-","");
			while (x < clickedRecord.length){
				if (clickedRecord[x] === "-")
				{
					clickedRecord = clickedRecord.slice(x + 1);
					while (clickedRecord[y] !== "-")
					{						
						r = r + clickedRecord[y];
						y += 1 	
					}
					return(r)					
				}
				x += 1;
			}
			
		}
		//alert($$("richtext1").getValue);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		matrixarray = rpcUtilities.timMatrixData();
		source.matrixarray.sync();		
	};// @lock

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
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
