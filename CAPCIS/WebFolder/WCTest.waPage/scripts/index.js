
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock
testGlobal = "init";
// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'testComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/clientMain.waComponent', 				//designate the webcomponent to load
		userData: 	{myTestData: 'I made it'}							//data that you want to send to the webcomponent
		});
	
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
