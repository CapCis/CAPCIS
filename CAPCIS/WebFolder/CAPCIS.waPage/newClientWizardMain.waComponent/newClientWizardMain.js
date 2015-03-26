
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
		//var myTime = document.getElementById($comp.id + "_jQDateTime1");
		var myTime = $$(getHtmlId("jQDateTime1"));
		var myDate = myTime.getDate();
		alert(myTime.getValue());
		alert(myDate.getHours());
		alert(myDate.getMinutes());
		alert(myDate.getDay());
		
		var mySSN = $$(getHtmlId("textField14"));
		
		
		
		
		
		
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:2,datePicked:myDate,ssn:mySSN};	
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
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
