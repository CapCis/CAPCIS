
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'newClientWizardMain';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock
		

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		debugger;
		
		var myTime = $$(getHtmlId("jQDateTime1"));
		
		var mySSN = $$(getHtmlId("textField14")).getValue();
		var myFirstName = $$(getHtmlId("textField15")).getValue();
		var myMiddleName = $$(getHtmlId("textField16")).getValue();
		var myLastName = $$(getHtmlId("textField17")).getValue();
		var mySuffix = ""; //dont forget to add combobox grid widget to make this work		
		var myGeneral = $$(getHtmlId("textField18")).getValue();
		var myAlias = $$(getHtmlId("textField19")).getValue();
		var myDateFormated = "";
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
		/*		
		if (mySSN == "")
		{
			mySSN = "l33t"	//set the ssn to a value that will never be entered into the table
		}
		if (myFirstName == "")
		{
			myFirstName = "l33t";
		}
		if (myMiddleName == "")
		{
			myMiddleName = "l33t";
		}
		if (myLastName == "")
		{
			myLastName = "l33t";
		}
		if (mySuffix == "")
		{
			mySuffix = "l33t";
		}
		if (myGeneral == "")
		{
			myGeneral = "l33t";
		}
		if (myAlias == "")
		{
			myAlias = "l33t";
		}
		*/		
		var myObject = {token:userConfigObj.secToken,id:userConfigObj.userID,major:4,minor:0,postDate:myDateFormated,postSSN:mySSN,
						postFirstName:myFirstName,postMiddleName:myMiddleName,postLastName:myLastName,postSuffix:mySuffix,
						postGeneral:myGeneral,postAlias:myAlias};	
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						//sync data
						//load page
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
		});

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
