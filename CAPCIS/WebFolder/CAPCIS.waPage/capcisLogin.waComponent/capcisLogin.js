﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisLogin';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		 //(data.userData.myTestValue);
	// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		debugger;
		var myVa = testGlobal;
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;
		$$(getHtmlId("rtMessage")).setValue("");
		var myPassword = $$(getHtmlId("tfPassword")).getValue();
        var passHash = CryptoJS.SHA3(myPassword).toString();   //Hash password on client        
		dsLogin = rpcGetToken.getToken(myArray = [passHash,0,0,$$(getHtmlId("tfUserName")).getValue()]);		
		sources.dsLogin.sync();	
		
		
		if (dsLogin.length > 0)
		{
			if(dsLogin[0] == "err")
			{
				$$(getHtmlId("rtMessage")).setValue("Invalid User Name Or Password");
			}
			else 
			{
				//close this popup
				//open main forms
			}
		}
		else
		{
			$$(getHtmlId("rtMessage")).setValue("Invalid User Name Or Password");
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock
	//$$(getHtmlId('textField2')).setValue(data.myData);
	//var myT = data.myData;
	



	};// @lock


}// @startlock
return constructor;
})();// @endlock
