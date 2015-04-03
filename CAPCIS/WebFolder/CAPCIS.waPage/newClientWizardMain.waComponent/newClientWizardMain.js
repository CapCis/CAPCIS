
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'newClientWizardMain';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button1 = {};	// @button
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
		var myTime = $$(getHtmlId("jQDateTime1")).setValue("");
		var mySSN = $$(getHtmlId("textField14")).setValue("");
		var myFirstName = $$(getHtmlId("textField15")).setValue("");
		var myMiddleName = $$(getHtmlId("textField16")).setValue("");
		var myLastName = $$(getHtmlId("textField17")).setValue("");
		var mySuffix = $$(getHtmlId("combobox1")).setValue("None"); //dont forget to add combobox grid widget to make this work		
		var myGeneral = $$(getHtmlId("textField18")).setValue("");
		var myAlias = $$(getHtmlId("textField19")).setValue("");
		var myNotes = $$(getHtmlId("textField3")).setValue("");
		cwmClientInfo = [];
		sources.cwmClientInfo.sync();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		var myTime = $$(getHtmlId("jQDateTime1"));
		var mySSN = $$(getHtmlId("textField14")).getValue();
		var myFirstName = $$(getHtmlId("textField15")).getValue();
		var myMiddleName = $$(getHtmlId("textField16")).getValue();
		var myLastName = $$(getHtmlId("textField17")).getValue();
		var mySuffix = $$(getHtmlId("combobox1")).getValue(); //dont forget to add combobox grid widget to make this work		
		var myGeneral = $$(getHtmlId("textField18")).getValue();
		var myAlias = $$(getHtmlId("textField19")).getValue();
		var myNotes = $$(getHtmlId("textField3")).getValue();
		var myDateFormated = "";
		if (myTime.getValue() != "" && myTime.getValue != "undefined")
		{
			var myDate = myTime.getDate();
			var myMonth = (myDate.getMonth() + 1).toString();
			//var myMonth = myDate.getMonth().toString();
			var myDay = myDate.getDate().toString();
			if (myDay.length == 1){myDay = "0" + myDay}
			if (myMonth.length == 1){myMonth = "0" + myMonth}
			myDateFormated = (myDate.getFullYear() + "-" + myMonth + "-" + myDay);
		}
		
		if (mySSN == "" || mySSN.length < 4)
		{
			alert("No Valid Social Security Number Detected");
			return;
		}
		if (myFirstName == "")
		{
			alert("Invalid First Name");
			return;
		}
		if (myLastName == "")
		{
			alert("Invalid Last Name");
			return;	
		}
		if (myDateFormated == "")
		{
			alert("Invalid Birthday");
			return;
		}
		if (mySuffix == "None")
		{
			mySuffix = "";	
		}
		
		var myObject = {token:userConfigObj.secToken,id:userConfigObj.userID,major:4,minor:0,postDate:myDateFormated,postSSN:mySSN,
						postFirstName:myFirstName,postMiddleName:myMiddleName,postLastName:myLastName,postSuffix:mySuffix,
						postAlias:myAlias,postNotes:myNotes};
		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
		 				
		 				// Open Client Information Page
					},
					'onError': function(error){
						debugger;
						console.log(error);
					},
					'params': [myObject]
		});
	};// @lock
		

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		var mySubmitButton = $$(getHtmlId("button1"));
		var myTime = $$(getHtmlId("jQDateTime1"));
		var mySSN = $$(getHtmlId("textField14")).getValue();
		var myFirstName = $$(getHtmlId("textField15")).getValue();
		var myMiddleName = $$(getHtmlId("textField16")).getValue();
		var myLastName = $$(getHtmlId("textField17")).getValue();
		var mySuffix = $$(getHtmlId("combobox1")).getValue(); //dont forget to add combobox grid widget to make this work		
		var myGeneral = $$(getHtmlId("textField18")).getValue();
		var myAlias = $$(getHtmlId("textField19")).getValue();
		var myDateFormated = "";
		
		mySubmitButton.domNode.style.display = "block";
		if (myTime.getValue() != "")
		{
			var myDate = myTime.getDate();
			var myMonth = (myDate.getMonth() + 1).toString();
			//var myMonth = myDate.getMonth().toString();
			var myDay = myDate.getDate().toString();
			if (myDay.length == 1){myDay = "0" + myDay}
			if (myMonth.length == 1){myMonth = "0" + myMonth}
			myDateFormated = (myDate.getFullYear() + "-" + myMonth + "-" + myDay);
		}
		
		var myObject = {token:userConfigObj.secToken,id:userConfigObj.userID,major:4,minor:0,postDate:myDateFormated,postSSN:mySSN,
						postFirstName:myFirstName,postMiddleName:myMiddleName,postLastName:myLastName,postSuffix:mySuffix,
						postGeneral:myGeneral,postAlias:myAlias};	
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
		 				cwmClientInfo = result;
		 				sources.cwmClientInfo.sync();
					},
					'onError': function(error){
						debugger;
						console.log(error);
					},
					'params': [myObject]
		});
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
