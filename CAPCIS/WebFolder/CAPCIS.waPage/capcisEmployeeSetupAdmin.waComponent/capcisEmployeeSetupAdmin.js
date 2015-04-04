
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisEmployeeSetupAdmin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
	};// @lock


	var myComboObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:6};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				adminDivCombo = result;
		 				sources.adminDivCombo.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myComboObject]
	});	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
