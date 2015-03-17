
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button7 = {};	// @button
	var button6 = {};	// @button
	var button5 = {};	// @button
	var frame1 = {};	// @frame
	var button4 = {};	// @button
	var button12 = {};	// @button
	var fileUpload2 = {};	// @fileUpload
	var changeme = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		debugger;
		
		var myIFrame = document.getElementById("frame1");
		myIFrame.addChild($$('button5'));
		
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		debugger;
		//window.open("http://localhost:8082/getPicture");
		$$('image3').value = ("http://localhost:8082/getPicture"); //must change this to xhr request with body, see below functions
		
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		debugger;
		//$$('frame1').print();
		var myFrame = document.getElementById("frame1");
		//console.dir(myFrame);
		//myFrame = window.frames['frame1'].print();
		myFrame.focus();
		print();
		
		
		
		
		
		
	};// @lock

	frame1.onLoad = function frame1_onLoad (event)// @startlock
	{// @endlock
		    debugger;
			print();
		
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		debugger;
		//var myResponse = rpcGetReports.getReport();
		//var myAwsomeURL = URL.createObjectURL(myResponse);
		//URL.createObjectURL(myResponse);
		$$('frame1').setValue("http://localhost:8082/makeMyReportBitch");		
		//window.open("http://localhost:8082/makeMyReportBitch");
		
		//-----------------------------how to send a xmlhttprequest with body string !!!!!
		//xhr = new XMLHttpRequest();
		//URLText = "http://localhost:8082/makeMyReportBitch?myquery";
		//xhr.open("POST",URLText,true);		
		//xhr.setRequestHeader("Content-type","text/plain");
		//xhr.send("my test data");
	};// @lock

	button12.click = function button12_click (event)// @startlock
	{// @endlock
		myNewImage = rpcBlobUploadUtilities.sendFIleAsHttpRequest();		
	};// @lock

	fileUpload2.filesUploaded = function fileUpload2_filesUploaded (event)// @startlock
	{// @endlock
		debugger;
		rpcBlobUploadUtilities.clientPictureUpload(1,1,50,1,"test.jpg",334);
		
	};// @lock

	changeme.click = function changeme_click (event)// @startlock
	{// @endlock
		debugger;
		var mybutton = document.getElementById("changeme");
		mybutton.style.webkitBoxReflect = "below 20px";
		mybutton.style.webkitBoxShadow = "10px 10px 5px #888888";
		mybutton.style.width = "300px"
	};// @lock

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
				debugger;
				if (event.result == "success") 
				{
					source.clientpictures.orderBy("ClientPicturesID desc");
				}
				else
				{
					alert(event.result);	
				}
				
			};
		function handleOnReturnError(event)
			{
				debugger;
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
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("frame1", "onLoad", frame1.onLoad, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button12", "click", button12.click, "WAF");
	WAF.addListener("fileUpload2", "filesUploaded", fileUpload2.filesUploaded, "WAF");
	WAF.addListener("changeme", "click", changeme.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
