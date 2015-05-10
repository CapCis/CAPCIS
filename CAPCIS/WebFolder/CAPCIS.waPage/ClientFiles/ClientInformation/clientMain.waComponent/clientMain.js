
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'clientMain';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	//$$('combobox1').setErrorMessage({message:"Use combo box to select search properties.",tooltip:true})
	// @region namespaceDeclaration// @startlock
	var clientInfoSearchButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	clientInfoSearchButton.click = function clientInfoSearchButton_click (event)// @startlock
	{// @endlock
		debugger;
		var mySearchStr = $$($comp.id + "_clientInfoSearchTextBox").getValue();
		n = mySearchStr.search(" ");
		if (n != -1)
		{
			var mySplitStr = mySearchStr.split(" ");
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:0,data1:mySplitStr[0],data2:mySplitStr[1]};	
			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						
					},
					'params': [myObject]
			});
		}
		else
		{
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:1,data1:mySearchStr};	
			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						debugger;
						document.getElementById($comp.id + "_textField10").dataset.binding = "clientInfoMain1.ClientFirstName";
						document.getElementById($comp.id + "_dataGrid3").dataset.binding = clientInfoMain1;
						clientInfoMain1 = result;
						sources.clientInfoMain1.sync();
						
					},
					'onError': function(error){
						
					},
					'params': [myObject]
			});
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_clientInfoSearchButton", "click", clientInfoSearchButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
