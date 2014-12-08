
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
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
        var passHash = CryptoJS.SHA3($$("tfPassword").getValue());   //Hash password on client
		var myToken = rpcDSelects.getSelect(myArray = [passHash,0,0,$$("tfUserName").getValue()]);
		
		if (myToken === 
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock
	//$$(getHtmlId('textField2')).setValue(data.myData);
	//var myT = data.myData;
	



	};// @lock


}// @startlock
return constructor;
})();// @endlock
